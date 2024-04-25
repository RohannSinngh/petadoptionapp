import { NavLink, Outlet } from "react-router-dom";
// import { FaUser, FaHome } from "react-icons/fa";

export const AdminLayout = () => {
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/admin/users" style={{ color: 'red' }}>
                                    users
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/admin/adoption" style={{ color: 'blue' }}>
                                    adoption
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/" style={{ color: 'green' }}>
                                   Home
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    );
};
