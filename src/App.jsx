import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard'; // Adjust path
import Home from './pages/dashboard/Home';
import Billables from './pages/dashboard/Billables';
import Rewards from './pages/dashboard/Rewards';
import Payments from './pages/dashboard/Payments';
import Customers from './pages/dashboard/Customers';
import Login from './pages/Login'; // Adjust path
import SalesReportGeneral from './pages/salesreport/SalesReportGeneral';
import PaymentTypeReport from './pages/salesreport/PaymentTypeReport';
import ByCustomerReport from './pages/salesreport/ByCustomerReport';
import ByEmployeeReport from './pages/salesreport/ByEmployeeReport';
import ByCategoryReport from './pages/salesreport/ByCategoryReport';
import ByProductReport from './pages/salesreport/ByProductReport';
import MainBillables from './pages/billables/MainBillables';
import OrderHistory from './pages/history/OrderHistory';
import RewardsHistory from './pages/history/RewardsHistory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Navigate to='/home/dashboard' />} />
        <Route path='/home/dashboard' element={<Dashboard />}>
          <Route path='' element={<Navigate to='general' />} />
          <Route path='general' element={<Home />} />
          <Route path='billables' element={<Billables />} />
          <Route path='rewards' element={<Rewards />} />
          <Route path='payments' element={<Payments />} />
          <Route path='customers' element={<Customers />} />
        </Route>
        <Route path='/home/sales-report' element={<Dashboard />}>
          <Route path='' element={<Navigate to='general' />} />
          <Route path='general' element={<SalesReportGeneral />} />
          <Route path='payment-type' element={<PaymentTypeReport />} />
          <Route path='by-customer' element={<ByCustomerReport />} />
          <Route path='by-employee' element={<ByEmployeeReport />} />
          <Route path='by-category' element={<ByCategoryReport />} />
          <Route path='by-product' element={<ByProductReport />} />
        </Route>
        <Route path='/billables' element={<Dashboard />}>
          <Route path='' element={<MainBillables />} />
        </Route>
        <Route path='/history' element={<Dashboard />}>
        <Route path='' element={<Navigate to='billables' />} />
          <Route path='billables' element={<OrderHistory />} />
          <Route path='rewards' element={<RewardsHistory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
