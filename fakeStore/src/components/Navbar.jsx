import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const activeStyle = "underline  text-white";
    return (
        <nav className='flex justify-between items-center p-4 bg-gray-800 text-white '>
            <ul className='flex space-x-3'>
                <li>
                    <NavLink
                        to="/electronic"
                        className={({ isActive }) => isActive ? `${activeStyle} rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700` : 'rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/shop"
                        className={({ isActive }) => isActive ? `${activeStyle} rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700` : 'rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'}
                    >
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/shoes"
                        className={({ isActive }) => isActive ? `${activeStyle} rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700` : 'rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'}
                    >
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/furnitures"
                        className={({ isActive }) => isActive ? `${activeStyle} rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700` : 'rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'}
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/clothes"
                        className={({ isActive }) => isActive ? `${activeStyle} rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700` : 'rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/others"
                        className={({ isActive }) => isActive ? `${activeStyle} rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700` : 'rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'}
                    >
                        Others
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/all"
                        className={({ isActive }) => isActive ? `${activeStyle} rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700` : 'rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'}
                    >
                        All
                    </NavLink>
                </li>
            </ul>

            <ul className='flex space-x-4'>
                <li>
                    <NavLink
                        to="/myOrder"
                        className={({ isActive }) => isActive ? `${activeStyle} rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700` : 'rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'}
                    >
                        My Order
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/myAccount"
                        className={({ isActive }) => isActive ? `${activeStyle} rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700` : 'rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/myOrders"
                        className={({ isActive }) => isActive ? `${activeStyle} rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700` : 'rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/singin"
                        className={({ isActive }) => isActive ? `${activeStyle} rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700` : 'rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white'}
                    >
                        Sign In
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}