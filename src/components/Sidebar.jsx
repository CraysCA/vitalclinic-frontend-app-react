import { useState } from 'react'

import { useAuth } from '../auth/AuthProvider'

import { Link, useLocation } from 'react-router-dom'
import {
	IconHome,
	IconFile,
	IconUsers,
	IconCircleChevronLeft,
	IconUserCircle,
	IconLogout,
} from '@tabler/icons-react'
const Sidebar = ({ children }) => {
	const auth = useAuth()
	const user = auth.getUser()
	const [open, setOpen] = useState(true)

	const location = useLocation()
	const currentPath = location.pathname

	let menu = []

	if (user.type == 1) {
		menu = [
			{ title: 'Panel Principal', to: '/dashboard', src: <IconHome /> },
			{ title: 'Pedidos', to: '/files', src: <IconFile /> },
			{ title: 'Usuarios ', to: '/users', src: <IconUsers /> },
		]
	} else {
		menu = [
			{ title: 'Panel Principal', to: '/dashboard', src: <IconHome /> },
			{ title: 'Mis Pedidos', to: '/files', src: <IconFile /> },
		]
	}

	return (
		<div className="h-screen flex">
			<div
				className={` ${
					open ? 'w-72' : 'w-20 '
				} bg-dark-purple h-full p-5  pt-8 relative duration-300 flex flex-col justify-between   shadow-md mr-6`}>
				<div>
					<IconCircleChevronLeft
						onClick={() => setOpen(!open)}
						className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
            rounded-full   ${!open && 'rotate-180'}`}
					/>
					<div className="flex gap-x-4 items-center">
						<h1
							className={`cursor-pointer duration-500 ${
								open && 'rotate-[360deg]'
							} ${
								!open && 'scale-0'
							} " text-2xl font-bold text-dark-blue overflow-hidden`}>
							VITAL<span className=" text-red-500">CLINIC</span>
						</h1>
					</div>
					<ul className="pt-6">
						{menu.map((item, index) => (
							<Link
								to={item.to}
								key={index}
								className={`flex  rounded-md p-2 cursor-pointer hover:bg-dark-blue-2 hover:text-white  text-sm items-center gap-x-4 
              ${item.gap ? 'mt-9' : 'mt-2'} ${
								currentPath === item.to ? 'bg-dark-blue text-gray-300' : ''
							}  `}>
								{item.src}
								<span
									className={`${!open && 'hidden'} origin-left duration-200`}>
									{item.title}
								</span>
							</Link>
						))}
					</ul>
				</div>
				<div className=" p-5  flex flex-col gap-3">
					<div className="flex flex-row gap-2 cursor-pointer">
						<IconUserCircle />
						<span className={`${!open && 'hidden'} origin-left duration-200`}>
							{user.name} {user.lastname}
						</span>
					</div>
					<Link
						to="/logout"
						className="flex flex-row gap-2 hover:bg-dark-blue-2 rounded-md hover:text-white px-4 py-2">
						<IconLogout />
						<span className={`${!open && 'hidden'} origin-left duration-200`}>
							Cerrar Sesión
						</span>
					</Link>
				</div>
			</div>
			<div className="w-full ">{children}</div>
		</div>
	)
}
export default Sidebar
