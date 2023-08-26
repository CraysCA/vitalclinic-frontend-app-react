import ListOfUsers from './components/ListOfUsers'
import { redirect } from 'react-router-dom'
import { useAuth } from '../../auth/AuthProvider'
import Sidebar from '../../components/Sidebar'

export default function Users() {
	const auth = useAuth()
	const user = auth.getUser()

	console.log(user.type)

	//if (user.type == 1) return redirect('/dashboard')

	return (
		<section className="bg-white ">
			<div className=" flex flex-row gap-5 ">
				<Sidebar />
				<ListOfUsers />
			</div>
		</section>
	)
}
