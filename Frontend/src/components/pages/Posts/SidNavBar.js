import React from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather'

export const SidNavBar = () => {
    return (
        <>
            <aside className="w-full md:w-1/3 flex flex-col item-center px-3">
                <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p class="text-xl font-semibold pb-5">About Us</p>
                    <p class="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
                    <a href="#" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
                        Get to know us
                </a>
                </div>
            </aside>
            <div className="w-full flex pt-6">
                <a className="w-1/2 bg-white shadow hover:shadow-md text-left p-6">
                    <p className="text-lg text-blue-800 font-bold flex items-center"><ArrowLeft /> Previous</p>

                    <p class="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
                </a>
                <a className="w-1/2 bg-white shadow hover:shadow-md text-right p-6">
                    <p class="text-lg text-blue-800 font-bold flex items-center justify-end"><ArrowRight /> Next</p>

                    <p class="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
                </a>

            </div>
            {/* // <div className="flex items-center py-8">
//     <a href="#" className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
//     <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
//     <a href="#" className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i class="fas fa-arrow-right ml-2"></i></a>
// </div> */}

        </>
    )
}



