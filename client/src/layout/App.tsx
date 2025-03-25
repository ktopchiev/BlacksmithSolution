import { Outlet } from "react-router"
import Header from "./Header"
import { ToastContainer } from "react-toastify"

function App() {

	return (
		<>
			<Header />
			<Outlet />
			<ToastContainer />
		</>
	)
}

export default App
