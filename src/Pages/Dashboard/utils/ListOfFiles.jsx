const fetchFiles = async () => {
	const url = 'https://vitalclinic-backend-81os-dev.fl0.io/files/'
	return await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			'X-User-Id': 1,
			auth_token:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJjcmlzdCB0ZXN0IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjkyMzAyMTYzLCJleHAiOjE2OTIzODg1NjN9.ztP9cQu6R2eDEtM1XQ2WX_VeRmsAJ1FXrFakJVwvEok',
		},
		next: {
			revalidate: 60,
		},
	})
		.then(response => response.json())
		.then(data => data.data)
}

const files = await fetchFiles()

export default function ListOfFiles(props) {
	const user = props.user
	return (
		<ul className="flex flex-col">
			{files ? (
				files.map(file => (
					<li key={file.id} className="flex flex-row items-center gap-3 p-2">
						<div className=" w-10 bg-green-600 h-10 text-white text-sm text-center flex justify-center items-center ">
							CSV
						</div>
						<div>
							<h3 className="font-bold">{file.filename}</h3>
							<p className="text-gray-500 text-xs italic font-light mt-1 mb-1 text-left">
								subido por: {file.uploadedBy.name}
								{user.email}
							</p>
						</div>
						<a
							href={file.downloadUrl}
							target="blank"
							className="px-3 py-2 text-sm font-medium text-center inline-flex items-center justify-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							<svg
								width="20"
								height="20"
								strokeWidth="1.5"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								color="#000">
								<path
									d="M6 20h12M12 4v12m0 0 3.5-3.5M12 16l-3.5-3.5"
									stroke="#000"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							Download
						</a>
						<p> subido el: {file.createdAt}</p>
					</li>
				))
			) : (
				<p> no hay archivos</p>
			)}
		</ul>
	)
}
