import { Outlet } from "react-router"
import Header from "./Header"
import { ToastContainer } from "react-toastify"
import { useEffect } from "react"
import { useAppDispatch } from "../state/store"
import { useRefreshMutation } from "../state/user/userApi"
import { setCurrentUser } from "../state/user/userSlice"

function App() {
	const dispatch = useAppDispatch();
	const [refresh] = useRefreshMutation();

	useEffect(() => {
		const fetchData = async () => {
			let data = await refresh().unwrap();
			dispatch(setCurrentUser(data ?? JSON.parse(localStorage.getItem("user")!)));
		};
		fetchData();
	}, [])

	return (
		<>
			<Header />
			<Outlet />
			<ToastContainer />
		</>
	)
}

export default App
