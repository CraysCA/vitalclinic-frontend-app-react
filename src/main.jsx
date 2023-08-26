import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import React from 'react'

import Login from './Pages/Login/Login'
import Users from './Pages/Users/Users'
import Dashboard from './Pages/Dashboard/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './auth/AuthProvider'
import Files from './Pages/Files/Files'

const router = createBrowserRouter([
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/',
		element: <ProtectedRoute />,
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
			{
				path: '/users',
				element: <Users />,
			},
			{
				path: '/files',
				element: <Files />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>,
)
