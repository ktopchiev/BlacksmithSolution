import { createBrowserRouter } from "react-router";
import HomePage from "../features/HomePage";
import InventoryPage from "../features/inventory/InventoryPage";
import AboutPage from "../features/AboutPage";
import ContactsPage from "../features/ContactsPage";

export default const routes = createBrowserRouter([
    { path: "/", Component: HomePage },
    { path: "/inventory", Component: InventoryPage },
    { path: "/about", Component: AboutPage },
    { path: "/contacts", Component: ContactsPage },
]);