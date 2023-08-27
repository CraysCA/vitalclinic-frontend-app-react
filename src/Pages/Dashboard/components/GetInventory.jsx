import { useState, useEffect } from 'react'
import { IconClockHour4 } from '@tabler/icons-react'

const parseDate = date => {
	const [parseDate, rest] = new Date(date).toLocaleString().split(',')
	return rest
}

const parseFilename = filename => {
	const [name, rest] = filename.split('.')
	return name
}

export default function GetInventory(props) {
	const { user, authToken } = props.userData
	const userId = user.id

	const [files, setFiles] = useState([])

	useEffect(() => {
		fetch(`https://vitalclinic-backend-81os-dev.fl0.io/files/inventory`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'X-User-Id': userId,
				auth_token: authToken,
			},
			next: {
				revalidate: 60,
			},
		})
			.then(res => res.json())
			.then(data => setFiles(data.success && data.data ? data.data : []))
	}, [userId, authToken])

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg   h-screen flex flex-col justify-center items-center">
			<h1 className="text-center font-semibold p-10 text-2xl">
				Listas de inventario
			</h1>
			<div className="flex flex-row justify-center items-center gap-6 pb-4 flex-wrap w-3/4 ">
				{files
					? files.map(file => (
							<article
								key={file.id}
								className=" shadow-md w-96 rounded-md h-52 overflow-hidden">
								<img
									className="w-full h-20 object-cover "
									src="https://t3.ftcdn.net/jpg/04/81/01/22/240_F_481012251_ZU7z6O0FZP3ImhZsjvAf5Biy7Gtdkq29.jpg"
									alt="casa"
								/>
								<div className="flex flex-col pl-4 gap-6">
									<h2 className=" font-semibold pb-4 pt-2">
										{parseFilename(file.filename)}
									</h2>

									<div className=" flex flex-row justify-between items-center pr-4">
										<div className="flex gap-2">
											<IconClockHour4 />
											<p>{parseDate(file.createdAt)}</p>
										</div>
										<a
											href={file.downloadUrl}
											className=" right-10 w-40 py-2 px-7 rounded-md bg-blue-600 font-medium  text-center text-white dark:text-blue-500  focus:bg-dark-blue transition-all duration-150 hover:bg-dark-blue-2 hover:scale-105">
											Descargar
										</a>
									</div>
								</div>
							</article>
					  ))
					: ''}

				{files.length <= 0 ? (
					<div className="flex flex-col justify-center text-center">
						<h1 className="text-center font-semibold p-10 text-2xl">
							Aún no esta disponible el inventario de hoy.
						</h1>
						<p>Vuelve más tarde.</p>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	)
}