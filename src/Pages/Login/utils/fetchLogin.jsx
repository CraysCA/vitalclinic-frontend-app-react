import { Buffer } from 'buffer'
export const fetchLogin = async credentials => {
	try {
		const { email, password } = credentials
		const url = 'https://vitalclinic-backend-81os-dev.fl0.io/auth/login'
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'Basic ' + Buffer.from(email + ':' + password).toString('base64'),
			},
			cache: 'no-store',
		})
		const data = await response.json()

		return data.success ? data.data : ''
	} catch (error) {
		console.log(error)
	}
}
