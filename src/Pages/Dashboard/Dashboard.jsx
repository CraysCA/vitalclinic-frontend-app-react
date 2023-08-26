import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/AuthProvider'
import Sidebar from '../../components/Sidebar'

export default function Dashboard() {
	const auth = useAuth()
	const user = auth.getUser()
	return (
		<section className="flex flex-row gap-5 ">
			<Sidebar isFocus={true} />
			<h1>esto es el Dashboard</h1>
		</section>
	)
}
