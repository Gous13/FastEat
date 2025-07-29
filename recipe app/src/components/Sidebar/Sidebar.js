import React from 'react';
import { useSidebarContext } from '../../context/sidebarContext';
import { ImCancelCircle } from "react-icons/im";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { useMealContext } from '../../context/mealContext';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useSidebarContext();
    const { categories } = useMealContext();

    // ✅ Show only specific categories
    const allowedCategories = ["Beef", "Chicken", "Dessert", "Pasta", "Seafood"];

    return (
        <nav className={`sidebar ${isSidebarOpen ? 'sidebar-visible' : ""}`}>
            {/* Close Button */}
            <button type="button" className='navbar-hide-btn' onClick={closeSidebar}>
                <ImCancelCircle size={24} />
            </button>

            <div className='side-content'>
                <ul className='side-nav'>

                    {/* ✅ Static Navigation Links */}
                    <li className='side-item'>
                        <Link to="/" className='side-link ls-1 fs-13' onClick={closeSidebar}>Home</Link>
                    </li>
                    <li className='side-item'>
                        <Link to="/about" className='side-link ls-1 fs-13' onClick={closeSidebar}>About Us</Link>
                    </li>
                    <li className='side-item'>
                        <Link to="/login" className='side-link ls-1 fs-13' onClick={closeSidebar}>Login</Link>
                    </li>
                    <li className='side-item'>
                        <Link to="/register" className='side-link ls-1 fs-13' onClick={closeSidebar}>Register</Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
