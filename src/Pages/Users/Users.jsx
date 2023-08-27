import ListOfUsers from './components/ListOfUsers'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../auth/AuthProvider'
import Sidebar from '../../components/Sidebar'

export default function Users() {
	const auth = useAuth()
	const user = auth.getUser()

	return user.type != 1 ? (
		<Navigate to="/dashboard" />
	) : (
		<section className="bg-white ">
			<div>
				<Sidebar>
					<ListOfUsers />
				</Sidebar>
			</div>
		</section>
	)
}
