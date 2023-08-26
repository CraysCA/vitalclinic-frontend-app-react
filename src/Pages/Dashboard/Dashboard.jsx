import ListOfFiles from './utils/ListOfFiles'
import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/AuthProvider'
import Sidebar from '../../components/Sidebar'

export default function Dashboard() {
	const auth = useAuth()
	const user = auth.getUser()
	return (
		<section className="bg-white px-6 py-24 sm:py-32 lg:px-8 h-screen lg:pl-72">
			<Sidebar />
			<h1>esto es el Dashboard</h1>
			<ListOfFiles user={user} />
		</section>
	)
}
