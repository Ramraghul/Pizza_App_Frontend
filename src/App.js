import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import TopBar from './Components/TopBar';
import HomePage from './pages/HomePage';
import CartScreen from './pages/CartScreen';
import Register from './pages/Register';
import Login from './pages/Login';
import Order from './pages/Order';
import AdminPage from './pages/AdminPage';
import AdminLogin from './pages/AdminLogin';
import AddNewPizza from './Components/Admin/AddNewPizza';
import EditPizza from "./Components/Admin/EditPizza";
import OrderList from './Components/Admin/OrderList';
import Pizzaslist from './Components/Admin/Pizzaslist';
import Userlist from './Components/Admin/Userlist'




function App() {
  const currentUser = localStorage.getItem('currentUser')

  return (

    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={currentUser ? <CartScreen /> : <HomePage />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />

        <Route path="*" element={<Userlist/>} />
        <Route path="/admin/userlist" element={<Userlist/>}  />
        <Route path="/admin/editpizza/:pizzaId" element={<EditPizza/>}/>
        <Route path="/admin/pizzalist" element={<Pizzaslist/>}  />
        <Route path="/admin/addnewpizza" element={<AddNewPizza/>}  />
        <Route path="/admin/orderlist" element={<OrderList/>}  />

      </Routes>
    </BrowserRouter>

  );
}

export default App;