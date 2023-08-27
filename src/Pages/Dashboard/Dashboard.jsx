import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/AuthProvider'
import Sidebar from '../../components/Sidebar'
import GetInventory from './components/GetInventory'

export default function Dashboard() {
	const auth = useAuth()
	const user = auth.getUser()
	const authToken = auth.getAuthToken()
	const userData = { user, authToken }
	return (
		<section>
			<Sidebar>
				<GetInventory userData={userData} />
			</Sidebar>
		</section>
	)
}
