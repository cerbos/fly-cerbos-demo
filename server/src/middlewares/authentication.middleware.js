import jwt from "jsonwebtoken";
import { Users } from "../db/data.js";

const authentication = (req, res, next) => {
  const token =
    req.cookies?.accessToken || req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).send("Access Denied. No token provided.");
  }

  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = Users.find((user) => user.id === decodedToken?.id);

    if (!user) {
      return res.status(401).send("Access Denied. User not found.");
    }

    const { password, ...userData } = user;
    req.user = userData;

    next();
  } catch (error) {
    return res.status(401).send(error?.message || "Invalid access token");
  }
};

export { authentication };
