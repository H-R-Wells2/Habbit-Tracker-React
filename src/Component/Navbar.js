import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleShowMenu = () => {
        setShowMenu(prev => !prev);
    };

    return (
        <div className="w-screen flex flex-col">
            <header className="w-full h-16 flex items-center justify-between bg-white shadow-md px-4 lg:px-8">
                <NavLink to="/" className="flex items-center text-xl font-extrabold text-indigo-600">
                    Habbit Tracker
                </NavLink>

                <nav className="hidden lg:flex items-center space-x-6">
                    <NavLink
                        to='/'
                        className={({ isActive }) => `text-lg font-medium ${isActive ? 'text-indigo-600' : 'text-gray-700'}`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/detailspage'
                        className={({ isActive }) => `text-lg font-medium ${isActive ? 'text-indigo-600' : 'text-gray-700'}`}
                    >
                        Your Habits
                    </NavLink>
                </nav>

                <button
                    className="lg:hidden p-2 rounded-md hover:bg-gray-200"
                    onClick={toggleShowMenu}
                >
                    <img
                        src={require('../Assets/menu.png')}
                        alt="menu-icon"
                        className="w-6 h-6"
                    />
                </button>
            </header>

            {showMenu && (
                <div className="lg:hidden bg-white shadow-md border-t border-gray-200">
                    <nav className="flex flex-col">
                        <NavLink
                            to='/'
                            className={({ isActive }) => `block p-4 text-lg font-medium ${isActive ? 'bg-indigo-100 text-indigo-600' : 'text-gray-700'}`}
                            onClick={toggleShowMenu}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to='/detailspage'
                            className={({ isActive }) => `block p-4 text-lg font-medium ${isActive ? 'bg-indigo-100 text-indigo-600' : 'text-gray-700'}`}
                            onClick={toggleShowMenu}
                        >
                            Your Habits
                        </NavLink>
                    </nav>
                </div>
            )}

            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
};

export default Navbar;
