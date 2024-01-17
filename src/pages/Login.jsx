import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Login () {
    const { register, handleSubmit } = useForm()
    const { signin } = useAuth()
    const navigate = useNavigate()

    if (Cookies.get('token')) navigate("/posts")

    return <>
        <br/><br/><div className="container py-4">
            <h1 className="text-center">Login</h1><hr />
            <div className="card shadow col-md-5 mx-auto p-4">
                <form
                    onSubmit={handleSubmit(async (values) => {
                        signin(values);
                    })}
                >
                    <div className="mt-1 mb-3">
                        <input type="text" placeholder="Username"
                            className="form-control"
                            { ...register('username', {required: true})} autoFocus />
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder="Password"
                            className="form-control"
                            { ...register('password', {required: true})} />
                    </div>
                    
                    <div className="card-footer text-center">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}