import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {

    const { isAuthenticated, user, signout } = useAuth()

    return <nav className="navbar navbar-expand-lg fixed-top shadow">
        <div className="container">
            {
                isAuthenticated ? (
                    <NavLink to="/posts" className="navbar-brand">
                        <span>APP</span>
                    </NavLink>
                ) : (
                    <NavLink to="/" className="navbar-brand">
                        <span>APP</span>
                    </NavLink>
                )
            }
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#bs-menu-option">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="bs-menu-option">
                <div className="navbar-nav ml-auto">
                    {
                        isAuthenticated ? (
                            <>
                                <span className=" nav-link">BIENVENIDO: {user && user.fullname}</span>

                                <NavLink className="nav-link" to={'/posts'}>POST</NavLink>

                                <NavLink className="nav-link" to={'/save-post'}>SAVE POST</NavLink>

                                <button className="nav-link" onClick={signout}>SALIR</button>
                            </>
                        ) :
                            (
                                <>
                                    <NavLink className=" nav-link" to={'/'}>Home</NavLink>

                                    <NavLink className=" nav-link" to={'/login'}>Login</NavLink>

                                    <NavLink className=" nav-link" to={'/react-query'}>React Query</NavLink>
                                </>
                            )
                    }
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar;