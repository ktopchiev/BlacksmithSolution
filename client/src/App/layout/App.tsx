import { Outlet } from "react-router"
import Header from "./Header"
import { Slide, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
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
			<ToastContainer position="bottom-right" hideProgressBar={true} transition={Slide} theme="dark" />
			<Header />
			<Outlet />
		</>
	)
}

export default App
