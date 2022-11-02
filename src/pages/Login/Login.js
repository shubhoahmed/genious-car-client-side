import React from 'react';
import img from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event => {
        event.prevnetDefault();
    }
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="text-center lg:text-left">
                    <img className='pr-10' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl text-center p-2 font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="login" />

                        </div>
                    </form>
                    <p className='text-center pb-3'>New to genius car <Link to='/signup'><span className='text-orange-600  font-semibold'>SignUp Now</span></Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;