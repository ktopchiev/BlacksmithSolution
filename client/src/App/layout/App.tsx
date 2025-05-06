import { Outlet } from "react-router"
import Header from "./Header"
import { ToastContainer } from "react-toastify"
import { useEffect } from "react"
import { useAppDispatch } from "../state/store"
import { useRefreshMutation } from "../state/user/userApi"
import { setCurrentUser } from "../state/user/userSlice"
import { getJwtTokenFromLocalStorage } from "../util/utility"

function App() {
	const dispatch = useAppDispatch();
	const [refresh] = useRefreshMutation();

	useEffect(() => {
		const fetchUserData = async () => {
			let localStorageUserData = getJwtTokenFromLocalStorage();
			if (localStorageUserData) {
				let userData = await refresh().unwrap();
				dispatch(setCurrentUser(userData));
			}
		};
		fetchUserData();
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
