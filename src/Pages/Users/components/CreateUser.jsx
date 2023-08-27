import { Toaster, toast } from 'sonner'
import { useState } from 'react'
import { postCreateUser } from '../../../api/post-create-user'
export default function CreateUser(props) {
	const { user, authToken } = props.userData
	const [credentials, setCredentials] = useState({})

	const handlerChange = e => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value })
	}
	const handlerSubmit = async e => {
		e.preventDefault()

		const isCreated = await postCreateUser(credentials, user, authToken)

		if (!isCreated) {
			toast.error('No se pudo crear el usuario')
		} else {
			toast.success('Usuario creado satisfactoriamente')
			setOpenModal(!openModal)
		}
	}

	const [openModal, setOpenModal] = useState(false)

	return (
		<section>
			<button
				onClick={() => setOpenModal(!openModal)}
				className=" text-white bg-dark-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-centerdark:focus:bg-dark-blue transition-all duration-150 hover:bg-dark-blue-2 hover:scale-105"
				type="button">
				Crear Usuario
			</button>
			{openModal ? (
				<div>
					<div className="absolute z-50 top-1 right-1/2 translate-x-1/2 translate-y-1/1 w-full max-w-md max-h-full">
						<div className="relative w-full max-w-md max-h-full">
							<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
								<button
									onClick={() => setOpenModal(!openModal)}
									type="button"
									className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
									data-modal-hide="authentication-modal">
									<svg
										className="w-3 h-3"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 14">
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
										/>
									</svg>
									<span className="sr-only">Cerrar</span>
								</button>
								<div className="px-6 py-6 lg:px-8">
									<h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
										Crear Usuario
									</h3>
									<form onSubmit={handlerSubmit} className="space-y-6">
										<div className="flex flex-row gap-3">
											<div className=" w-48">
												<label
													htmlFor="name"
													className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
													Nombre
												</label>
												<div className="mt-2">
													<input
														onChange={handlerChange}
														id="name"
														name="name"
														type="text"
														required
														className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue-2 sm:text-sm sm:leading-6 outline-none transition-all duration-500 "
													/>
												</div>
											</div>
											<div className=" w-48">
												<label
													htmlFor="lastname"
													className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
													Apellido
												</label>
												<div className="mt-2">
													<input
														onChange={handlerChange}
														id="lastname"
														name="lastname"
														type="text"
														required
														className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue-2 sm:text-sm sm:leading-6 outline-none transition-all duration-500 "
													/>
												</div>
											</div>
										</div>
										<div className=" w-96">
											<label
												htmlFor="email"
												className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
												Correo
											</label>
											<div className="mt-2">
												<input
													onChange={handlerChange}
													id="email"
													name="email"
													type="email"
													required
													className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue-2 sm:text-sm sm:leading-6 outline-none transition-all duration-500 "
												/>
											</div>
										</div>

										<div className=" w-48">
											<label
												htmlFor="customerId"
												className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
												Id de Cliente
											</label>
											<div className="mt-2">
												<input
													onChange={handlerChange}
													id="customerId"
													name="customerId"
													type="text"
													required
													className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue-2 sm:text-sm sm:leading-6 outline-none transition-all duration-500 "
												/>
											</div>
										</div>

										<h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Tipo de usuario
										</h3>
										<ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
											<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
												<div className="flex items-center pl-3">
													<input
														onChange={handlerChange}
														id="admin"
														type="radio"
														value={1}
														name="type"
														className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													/>
													<label
														htmlFor="horizontal-list-radio-license"
														className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
														Administrador
													</label>
												</div>
											</li>
											<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
												<div className="flex items-center pl-3">
													<input
														onChange={handlerChange}
														id="employee"
														type="radio"
														value="2"
														name="type"
														className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													/>
													<label
														htmlFor="employee"
														className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
														Empleado
													</label>
												</div>
											</li>
											<li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
												<div className="flex items-center pl-3">
													<input
														onChange={handlerChange}
														id="client"
														type="radio"
														value="3"
														name="type"
														className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													/>
													<label
														htmlFor="client"
														className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
														Cliente
													</label>
												</div>
											</li>
										</ul>
										<div className=" w-96">
											<label
												htmlFor="password"
												className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
												Contraseña
											</label>
											<div className="mt-2">
												<input
													onChange={handlerChange}
													id="password"
													name="password"
													type="password"
													required
													className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue-2 sm:text-sm sm:leading-6 outline-none transition-all duration-500 "
												/>
											</div>
										</div>

										<div>
											<button className=" flex justify-center items-center w-full  text-white bg-dark-blue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2dark:hover:bg-dark-blue-2 focus:outline-none dark:focus:bg-dark-blue transition-all duration-150 hover:bg-dark-blue-2 hover:scale-105">
												Crear usuario
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				''
			)}
			<Toaster />
		</section>
	)
}
