import React, { useState } from 'react';

const Login = () => {
    //State
    const [values, setValues] = useState({ email: '', password: '', name: '' });
    const [errors, setErrors] = useState({});

    const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { email, password, name } = values;

    const HandleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        let NewErrors = errors;
        switch (name) {
            case 'name':
                NewErrors.name = value.length < 5 ? 'Name must be 5 characters long!' : '';
                break;
            case 'email':
                NewErrors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
                break;
            case 'password': NewErrors.password = value.length < 8 ? 'Password must be 8 characters long!' : '';
                break;
            default:
                break;
        }

        setValues({ ...values, [name]: value });
        setErrors(NewErrors);
    }
    const disable = errors && (errors.email || errors.password || errors.password) ? true : false;

    const HandleSubmit = (e) => {
        e.preventDefault();

    }

    console.log({ disable })
    return (
        <div className="w-full container mx-auto pt-5">
            <div className="w-full justify-center max-w-xs mx-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Full Name</label>
                        <input value={name} name="name" onChange={HandleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="name" />
                        <p className="text-red-500 text-xs italic">{errors && errors.name}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email</label>
                        <input value={email} name="email" onChange={HandleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="email" />
                        <p className="text-red-500 text-xs italic">{errors && errors.email}</p>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                     </label>
                        <input value={password} name="password" onChange={HandleChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">{errors.password}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button disabled={disable} onClick={HandleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign Up
                               </button>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2021 Acme Corp. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Login;
