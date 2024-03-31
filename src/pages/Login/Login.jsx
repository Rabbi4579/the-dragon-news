import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
    const {signIn} = useContext(AuthContext)


    const handleLogin = (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        
        signIn(email, password)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.error(error)
        })
        form.reset()
    }




    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-2xl text-center my-10">Please Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center py-5">Do not have an account? <Link className="font-bold text-blue-400" to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;