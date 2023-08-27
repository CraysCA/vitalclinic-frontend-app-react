export const postUploadFile = async (e, user, authToken) => {
	const userId = user.id
	try {
		const body = new FormData()
		body.append('files', e.target.files[0])
		if (user.type == 1 || user.type == 2) {
			body.append('folder', 'inventory')
			body.append('isClient', false)
		} else {
			body.append('folder', `${userId}/inventory`)
			body.append('isClient', true)
		}

		const response = await fetch(
			`${import.meta.env.VITE_BACKEND_API}/files/upload`,
			{
				method: 'POST',
				headers: {
					'X-User-Id': userId,
					auth_token: authToken,
				},
				body: body,
			},
		)
		const data = await response.json()
		return data.success
	} catch (error) {
		console.log(error)
	}
}
