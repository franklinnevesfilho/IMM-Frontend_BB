import './App.css'
import {Route, Routes, useLocation} from "react-router-dom";
import HomePage from "./components/pages/HomePage.tsx";
import InventoryRoutes from "./components/routes/InventoryRoutes.tsx";
import CustomerRoutes from "./components/routes/CustomerRoutes.tsx";
import InvoiceRoutes from "./components/routes/InvoiceRoutes.tsx";
import SalesReportRoutes from "./components/routes/SalesReportRoutes.tsx";
import LoginPage from "./components/pages/auth/LoginPage.tsx";
import ForgotPasswordPage from "./components/pages/auth/ForgotPasswordPage.tsx";
import ResetCredentialsPage from "./components/pages/auth/ResetCredentialsPage.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import ProfilePage from "./components/pages/ProfilePage.tsx";
import NotFoundPage from './components/pages/NotFoundPage.tsx';

function App() {
    // This function checks if the current path is available for the navbar
    const location = useLocation();

    // This function checks if the current path is available for the navbar
    const isNavAvailable = () => {
        const pathName = location.pathname.toLowerCase();

        if (pathName.includes('forget-password') ||
            pathName.includes('reset-password') ||
            pathName == '/') {
            return null;
        }

        return <Navbar />;
    };


    return (
      <div className={'app'}>
          {
                isNavAvailable()
          }
          <div className={'page-container'}>
              <Routes >
                  <Route path="/" element={<LoginPage />} /> {/* Login page */}
                  <Route path="/forget-password" element={<ForgotPasswordPage />} /> {/* Requests person email address to send otp */}
                  <Route path="/reset-password/:id" element={<ResetCredentialsPage />} />{/* Used to reset password */}
                  <Route path="/profile" element={<ProfilePage />} /> {/* Once logged in the user id must be pulled from the local variables */}
                  <Route path="/home" element={<HomePage title={'Inventory Manager Master'}/>} /> {/* Home page */}
                  <Route path="/inventory/*" element={<InventoryRoutes />} /> {/* inventory page */}
                  <Route path="/customer/*" element={<CustomerRoutes />} /> {/* Shows all customers */}
                  <Route path="/invoices/*" element={<InvoiceRoutes />} /> {/* Shows all invoices */}
                  <Route path="/sales-report/*" element={<SalesReportRoutes />} /> {/* Shows sales report */}
                  <Route path="*" element={<NotFoundPage />} /> {/* Shows 404 page */}
              </Routes>
          </div>
      </div>
  )}

export default App
