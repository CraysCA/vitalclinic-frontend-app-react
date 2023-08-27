export const postCreateUser = async (credentials, user, authToken) => {
	const { id: userId } = user
	try {
		const url = `https://vitalclinic-backend-81os-dev.fl0.io/users/`
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'X-User-Id': userId,
				auth_token: authToken,
			},
			body: JSON.stringify(credentials),
			cache: 'no-store',
		})
		const data = await response.json()

		return data.success
	} catch (error) {
		console.log(error)
	}
}
