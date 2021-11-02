import React, { useState } from 'react';


const Login = () => {
    const [valuse, setValues] = useState({ email: '', password: '' });
    const { email, password } = valuse;

    const handleChange = (e) => {
        console.log(e.target.value);
    }


    return (
        <div className="w-full container mx-auto pt-5">
            <div className="w-full justify-center max-w-xs mx-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            email</label>
                        <input value={email} type="email" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                     </label>
                        <input value={password} type="password" onChange={handleChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                               </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                                </a>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2021 Acme Corp. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Login;
