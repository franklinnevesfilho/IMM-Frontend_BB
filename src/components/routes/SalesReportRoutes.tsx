import {Route, Routes} from "react-router-dom";
import SalesSummaryPage from "../pages/Sales/SalesSummaryPage.tsx";
import ReportPage from "../pages/Sales/ReportPage.tsx";

function SalesReportRoutes() {
    return (
        <Routes>
            <Route path={'/'} element={<SalesSummaryPage />} />
            <Route path="/:id" element={<ReportPage />} />
        </Routes>
    );
}

export default SalesReportRoutes;