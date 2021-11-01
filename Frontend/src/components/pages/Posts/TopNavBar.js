import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'react-feather'

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
                    <a className="" href="#">
                        <Facebook />
                    </a>
                    <a className="pl-6" href="#">
                        <Instagram />
                    </a>
                    <a className="pl-6" href="#">
                        <Twitter />
                    </a>
                    <a className="pl-6" href="#">
                        <Linkedin />
                    </a>
                </div>
            </div>

        </nav>
    )
}
