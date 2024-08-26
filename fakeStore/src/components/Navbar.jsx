import { NavLink } from "react-router-dom";

export default function Navbar() {
    const activeStyle =
        "relative text-white after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out after:scale-x-100";
    const linkStyle =
        "relative rounded-md px-3 py-2 text-gray-300 transition duration-300 ease-in-out hover:text-white hover:bg-gray-700";

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-900 shadow-lg">
            <ul className="flex space-x-5">
                <li>
                    <NavLink
                        to="/electronic"
                        className={({ isActive }) =>
                            isActive ? `${activeStyle} ${linkStyle}` : linkStyle
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/shop"
                        className={({ isActive }) =>
                            isActive ? `${activeStyle} ${linkStyle}` : linkStyle
                        }>
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/shoes"
                        className={({ isActive }) =>
                            isActive ? `${activeStyle} ${linkStyle}` : linkStyle
                        }>
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/furnitures"
                        className={({ isActive }) =>
                            isActive ? `${activeStyle} ${linkStyle}` : linkStyle
                        }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/clothes"
                        className={({ isActive }) =>
                            isActive ? `${activeStyle} ${linkStyle}` : linkStyle
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/others"
                        className={({ isActive }) =>
                            isActive ? `${activeStyle} ${linkStyle}` : linkStyle
                        }>
                        Others
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/all"
                        className={({ isActive }) =>
                            isActive ? `${activeStyle} ${linkStyle}` : linkStyle
                        }>
                        All
                    </NavLink>
                </li>
            </ul>

            <ul className="flex space-x-6">
                <li>
                    <NavLink
                        to="/myOrder"
                        className={({ isActive }) =>
                            isActive ? `${activeStyle} ${linkStyle}` : linkStyle
                        }>
                        My Order
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/myAccount"
                        className={({ isActive }) =>
                            isActive ? `${activeStyle} ${linkStyle}` : linkStyle
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/myOrders"
                        className={({ isActive }) =>
                            isActive ? `${activeStyle} ${linkStyle}` : linkStyle
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/signin"
                        className={({ isActive }) =>
                            isActive ? `${activeStyle} ${linkStyle}` : linkStyle
                        }>
                        Sign In
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
