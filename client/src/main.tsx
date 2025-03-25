import { StrictMode } from 'react'
import './index.css'
import App from './layout/App.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { createRoot } from 'react-dom/client';
import HomePage from './features/HomePage.tsx';
import InventoryPage from './features/inventory/InventoryPage.tsx';
import AboutPage from './features/AboutPage.tsx';
import ContactsPage from './features/ContactsPage.tsx';
import ItemPage from './features/item/ItemPage.tsx';
import { Provider } from 'react-redux';
import { store } from './state/store.ts';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')!).render(
	<StrictMode>
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
						<Route path="contacts" element={<ContactsPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode >,
)
