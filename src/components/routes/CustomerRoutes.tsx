import {Route, Routes} from "react-router-dom";
import CustomerPage from "../pages/customer/CustomerPage.tsx";
import CustomerDetailsPage from "../pages/customer/CustomerDetailsPage.tsx";
import EditCustomerPage from "../pages/customer/EditCustomerPage.tsx";
import NewCustomerPage from "../pages/customer/NewCustomerPage.tsx";

function CustomerRoutes() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<CustomerPage/>}/>
                <Route path="/:id" element={<CustomerDetailsPage/>}/>
                <Route path="/:id/edit" element={<EditCustomerPage/>}/>
                <Route path="/create" element={<NewCustomerPage/>}/>
            </Routes>
        </>
    );
}

export default CustomerRoutes;