import jwt from 'jsonwebtoken';

import {Users} from '../db/data.js';

const registerUser = (req, res) => {
	const {name, email, password, roles} = req.body;

	const user = Users.find(user => user.email === email);
	if (user) {
		return res.status(409).json({message: 'User with email already exists'});
	}

	const newUser = {
		id: Users.length + 1,
		name,
		email,
		password,
		roles: roles || ['User'],
	};
	Users.push(newUser);

	const accessToken = jwt.sign(
		{id: newUser.id},
		process.env.ACCESS_TOKEN_SECRET
	);

	const options = {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
	};

	return res.status(201).cookie('accessToken', accessToken, options).json({
		user: newUser,
		accessToken,
		message: 'User registered successfully',
	});
};

const authenticateUser = (req, res) => {
	const {email, password} = req.body;

	const user = Users.find(
		user => user.email === email && user.password === password
	);
	if (!user) {
		return res.status(401).json({message: 'Invalid credentials'});
	}

	const accessToken = jwt.sign({id: user.id}, process.env.ACCESS_TOKEN_SECRET);

	const options = {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
	};

	return res.status(200).cookie('accessToken', accessToken, options).json({
		user,
		accessToken,
		message: 'User signed in successfully',
	});
};

export {registerUser, authenticateUser};
