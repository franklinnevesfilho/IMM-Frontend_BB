import {Route, Routes} from "react-router-dom";
import InvoicePage from "../pages/Invoice/InvoicePage.tsx";
import CreateInvoicePage from "../pages/Invoice/CreateInvoicePage.tsx";
import SelectedInvoicePage from "../pages/Invoice/SelectedInvoicePage.tsx";

function InvoiceRoutes() {
    return (
        <Routes>
            <Route path={'/'} element={<InvoicePage />} />
            <Route path="/create" element={<CreateInvoicePage />} />
            <Route path="/:id" element={<SelectedInvoicePage />} />
        </Routes>
    );
}

export default InvoiceRoutes;