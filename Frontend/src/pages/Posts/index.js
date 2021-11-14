import React from 'react'
import { Footer } from '@/components/UI/Footer';
import Artical from './artical';
import { SidNavBar } from '@/components/UI/SidNavBar';
import Navbar from '@/components/UI/Navbar';


const Posts = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto flex flex-wrap py-6 pb-20">
                <Artical />
                <SidNavBar />
            </div>
        </div>
    )
}

export default Posts;