import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, MealDetails, Error, Category} from "./pages/index";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AboutPage from './pages/AboutPage';
import Navbar from "./components/Header/Navbar";  // ✅ Import Navbar
import ChatBot from './components/ChatBot';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />

      <Routes>
        {/* ✅ Home Page with Header */}
        <Route path="/" element={<><Header /><Home /><Footer /></>} />

        {/* ✅ About Us Page with Navbar instead of Header */}
        <Route path="/about" element={<><Navbar /><AboutPage /><Footer /></>} />

        {/* ✅ Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ✅ Protected Pages */}
        <Route path="/meal/:id" element={<RequireAuth><MealDetails /></RequireAuth>} />
        <Route path="/meal/category/:name" element={<RequireAuth><Category /></RequireAuth>} />

        {/* ✅ Error Page */}
        <Route path="*" element={<Error />} />

      
      </Routes>
      <ChatBot/>
    </BrowserRouter>
  );
}

/* ✅ Simple Auth Guard */
const RequireAuth = ({ children }) => {
  const isLoggedIn = localStorage.getItem("user");
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default App;
