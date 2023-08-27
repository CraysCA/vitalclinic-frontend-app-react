import ListOfFiles from './components/ListOfFiles'

import { useAuth } from '../../auth/AuthProvider'

import Layout from '../../components/layaout'

export default function Files() {
	const auth = useAuth()
	const user = auth.getUser()
	const authToken = auth.getAuthToken()
	const userData = { user, authToken }

	return (
		<section>
			<Layout>
				<ListOfFiles userData={userData} />
			</Layout>
		</section>
	)
}
