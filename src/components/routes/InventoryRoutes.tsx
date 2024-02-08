import {Route, Routes} from "react-router-dom";
import SelectItemPage from "../pages/inventory/SelectItemPage.tsx";
import EditItemPage from "../pages/inventory/EditItemPage.tsx";
import CreateItemPage from "../pages/inventory/CreateItemPage.tsx";
import InventoryPage from "../pages/inventory/InventoryPage.tsx";
import CreateManufacturerPage from "../pages/inventory/CreateManufacturerPage.tsx";

function InventoryRoutes() {
    return (
        <Routes>
            <Route path={'/'} element={<InventoryPage/>}/>
            <Route path="/:id" element={<SelectItemPage/>}/>
            <Route path="/:id/edit" element={<EditItemPage/>}/>
            <Route path="/create" element={<CreateItemPage/>}/>
            <Route path="/create-manufacturer" element={<CreateManufacturerPage />}/>
        </Routes>
    );
}

export default InventoryRoutes;