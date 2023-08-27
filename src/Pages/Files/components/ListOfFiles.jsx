import { useState, useEffect } from 'react'
import UploadFile from './UploadFile'

const parseDate = date => {
	const [parseDate, rest] = new Date(date).toLocaleString().split(',')
	return parseDate
}

export default function ListOfFiles(props) {
	const { user, authToken } = props?.userData

	const [files, setFiles] = useState([])

	useEffect(() => {
		fetch(
			`https://vitalclinic-backend-81os-dev.fl0.io/files/?userId=${
				user?.id || ''
			}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'X-User-Id': 1,
					auth_token: authToken,
				},
				next: {
					revalidate: 60,
				},
			},
		)
			.then(res => res.json())
			.then(data => setFiles(data.success && data.data ? data.data : []))
	}, [])

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4  h-screen">
			<div className="flex flex-row justify-center items-center gap-6 pb-4 ">
				<label htmlFor="table-search" className="sr-only">
					Search
				</label>
				<div className="relative">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							className="w-5 h-5 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"></path>
						</svg>
					</div>
					<input
						type="text"
						id="table-search"
						className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search for items"
					/>
				</div>
				<UploadFile />
			</div>

			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Nombre de Archivo
						</th>
						<th scope="col" className="px-6 py-3">
							Peso
						</th>
						<th scope="col" className="px-6 py-3">
							fecha
						</th>
						<th scope="col" className="px-6 py-3">
							Subido por
						</th>
						<th scope="col" className="px-6 py-3">
							Acción
						</th>
					</tr>
				</thead>

				<tbody className=" ">
					{files.map(file => (
						<tr
							key={file.id}
							className="text-left bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								<p className="text-left truncate hover:text-clip w-40">
									{file.filename}
								</p>
							</th>
							<td className="px-6 py-4">{file.size}</td>
							<td className="px-6 py-4">{parseDate(file.createdAt)}</td>
							<td className="px-6 py-4">{file.uploadedBy.name}</td>
							<td className="px-6 py-4">
								<a
									href={file.downloadUrl}
									className=" py-2 px-7 rounded-md bg-blue-600 font-medium text-white dark:text-blue-500  focus:bg-dark-blue transition-all duration-150 hover:bg-dark-blue-2 hover:scale-105">
									Descargar
								</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{files.length <= 0 ? (
				<h2 className="text-center font-semibold p-10">Aún no hay archivos</h2>
			) : (
				''
			)}
		</div>
	)
}
