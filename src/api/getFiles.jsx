export const getFiles = async ({ params }) => {
	try {
		const url = `https://vitalclinic-backend-81os-dev.fl0.io/files/?userId=${
			params?.userId || ''
		}`
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'X-User-Id': 1,
				auth_token:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJjcmlzdCB0ZXN0IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjkyMzIzMTg2LCJleHAiOjE2OTI0MDk1ODZ9.amAazhjiZySm4SBDRpXvJftxXYmamTGkdtb-PxMziq0',
			},
			next: {
				revalidate: 60,
			},
		})
		const data = await response.json()

		return data.success && data.data ? data.data : []
	} catch (error) {
		console.log(error)
	}
}
