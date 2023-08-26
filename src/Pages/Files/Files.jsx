import ListOfFiles from './components/ListOfFiles'
import UploadFile from './components/UploadFile'

import { useAuth } from '../../auth/AuthProvider'
import Sidebar from '../../components/Sidebar'

export default function Files() {
	const auth = useAuth()
	const user = auth.getUser()
	const authToken = auth.getAuthToken()
	const userData = { user, authToken }

	return (
		<section className="flex flex-row gap-5">
			<Sidebar />
			<div>
				<UploadFile userData={userData} />
				<ListOfFiles userData={userData} />
			</div>
		</section>
	)
}
