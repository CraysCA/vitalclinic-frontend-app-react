import Sidebar from './Sidebar'

export default function Layout({ children }) {
	return (
		<div>
			<div className="flex flex-col mx-auto w-full ">
				<Sidebar>
					<main className="w-full">{children}</main>
				</Sidebar>
			</div>
		</div>
	)
}
