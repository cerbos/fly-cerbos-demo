import {HTTP as Cerbos} from '@cerbos/http';

const cerbos = new Cerbos(process.env.CERBOS_PDP_URL);

const isAuthorized = async (principal, resource, action) => {
	try {
		const check = await cerbos.checkResource({
			principal: {
				id: `${principal?.id}`,
				roles: principal?.roles,
			},
			resource: {
				kind: 'course',
				id: resource.id,
				attr: JSON.parse(JSON.stringify(resource)),
			},
			actions: [action],
		});
		return check.isAllowed(action);
	} catch (error) {
		console.error(
			`Error checking ${action} authorization for resource:`,
			error
		);
		throw new Error(`Authorization check failed for ${action} on resource`);
	}
};

export const cerbosService = {
	isAuthorized,
};
