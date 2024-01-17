import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar () {

    const { isAuthenticated, user, signout } = useAuth()

    return <>
        <nav className="py-2 bg-light fixed-top shadow">
            <div className="container d-flex justify-content-between">
                <h5 className="mt-2 text-dark">
                    {
                        isAuthenticated ? (
                            <NavLink to="/posts" className="nav-link">App</NavLink>
                        ) : (
                            <NavLink to="/" className="nav-link">App</NavLink>
                        )
                    }
                    
                </h5>

                <ul className="nav">
                    {
                        isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link">Bienvenido: {user && user.fullname}</span>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'/posts'}>Post</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'/save-post'}>Save Post</NavLink>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={signout}>Salir</button>
                                </li>
                            </>
                        ) : 
                        (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'/'}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'/login'}>Login</NavLink>
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
        </nav>
    </>
}