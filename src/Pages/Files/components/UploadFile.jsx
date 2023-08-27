import { Toaster, toast } from 'sonner'
import { postUploadFile } from '../../../api/post-upload-file'
export default function UploadFile(props) {
	const { user, authToken } = props.userData
	const AllowedTypes = ['xls', 'xlsx', 'xlsm', 'xlsb', 'xltx']
	const handlerChange = async e => {
		const [filename, type] = e.target.files[0].name.toLowerCase().split('.')

		if (AllowedTypes.includes(type)) {
			toast.promise(postUploadFile(e, user, authToken), {
				loading: 'Subiendo archivo',
				success: 'Archivo subido satisfactoriamente',
				error: 'Error al subir el archivo',
			})
		} else {
			toast.error('Tipo de archivo no permitido')
		}
	}

	return (
		<section>
			<label
				className=" text-sm font-medium text-gray-900 dark:text-white"
				htmlFor="file_input">
				Subir archivo
			</label>
			<input
				onChange={handlerChange}
				className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none"
				aria-describedby="file_input_help"
				id="file_input"
				type="file"
				accept=".xls,.xlsx, .xlsm, .xlsb, .xltx"
			/>

			<Toaster />
		</section>
	)
}
