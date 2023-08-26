import { Toaster, toast } from 'sonner'
import { postUploadFile } from '../../../api/post-upload-file'
export default function UploadFile() {
	//const { user, authToken } = props.userData
	const AllowedTypes = ['xls', 'xlsx', 'xlsm', 'xlsb', 'xltx']
	const handlerChange = async e => {
		const [filename, type] = e.target.files[0].name.toLowerCase().split('.')

		if (AllowedTypes.includes(type)) {
			toast.promise(postUploadFile(e), {
				loading: 'Subiendo archivo',
				success: 'Archivo subido satisfactoriamente',
				error: 'Error al subir el archivo',
			})
		} else {
			toast.error('Tipo de archivo no permitido')
		}
	}

	return (
		<section className="pb-10 w-96">
			<label
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				htmlFor="file_input">
				Subir archivo
			</label>
			<input
				onChange={handlerChange}
				className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
				aria-describedby="file_input_help"
				id="file_input"
				type="file"
				accept=".xls,.xlsx, .xlsm, .xlsb, .xltx"
			/>
			<p
				className="mt-1 text-sm text-gray-500 dark:text-gray-300"
				id="file_input_help">
				.XLSX .XLSM .XLSB .XLTX (Solo archivos EXCELS)
			</p>
			<Toaster />
		</section>
	)
}
