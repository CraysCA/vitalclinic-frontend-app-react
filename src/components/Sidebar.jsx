import { Link } from 'react-router-dom'
import { Children } from 'react'

export default function Sidebar() {
	return (
		<div>
			<aside>
				<nav>
					<ul>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/dashboard">Dashboard</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
						<li>
							<Link to="/files">Archivos</Link>
						</li>
					</ul>
				</nav>
			</aside>
		</div>
	)
}
