import React from 'react';
import { AtSign, Instagram, Twitter, Linkedin } from 'react-feather'

export const TopNavBar = () => {
    return (
        <nav className="w-full py-4 bg-blue-800 shadow">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between">

                <nav>
                    <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                        <li><a className="hover:text-gray-200 hover:underline px-4" href="/">Home</a></li>
                        <li><a className="hover:text-gray-200 hover:underline px-4" href="#">About</a></li>
                    </ul>
                </nav>

                <div className="flex items-center text-lg no-underline text-white pr-6">
                    <a href="/signup" class="block my-3 py-1.5 px-3 bg-blue-400 hover:bg-blue-300 text-blue-900 hover:text-blue-800 rounded transition duration-300">Sign Up</a>
                    <a href="/login" class="block my-3 py-1.5 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300 ml-2">Sign In</a></div>
            </div>

        </nav>
    )
}
