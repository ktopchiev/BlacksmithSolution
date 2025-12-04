import './index.css'
import App from './App/layout/App.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { createRoot } from 'react-dom/client';
import HomePage from './features/HomePage.tsx';
import AboutPage from './features/AboutPage.tsx';
import ContactPage from './features/ContactPage.tsx';
import { Provider } from 'react-redux';
import { store } from './App/state/store.ts';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundPage from './features/NotFoundPage.tsx';
import InventoryPage from './features/inventory/InventoryPage.tsx';
import ItemPage from './features/item/ItemPage.tsx';
import LoginPage from './features/user/LoginPage.tsx';
import RegisterPage from './features/user/RegisterPage.tsx';


createRoot(document.getElementById('root')!).render(

	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} >
					<Route index element={<HomePage />} />
					<Route path="inventory">
						<Route index element={<InventoryPage />} />
						<Route path=":itemId" element={<ItemPage />} />
					</Route>
					<Route path="about" element={<AboutPage />} />
					<Route path="contacts" element={<ContactPage />} />
					<Route path="*" element={<NotFoundPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<RegisterPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</Provider>
)
