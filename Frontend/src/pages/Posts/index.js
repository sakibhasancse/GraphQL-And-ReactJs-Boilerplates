import React from 'react'
import { Footer } from '../../components/UI/Footer';
import Artical from './artical';
import { SidNavBar } from '../../components/UI/SidNavBar';


const Posts = () => {
    return (
        <div>
            <div className="container mx-auto flex flex-wrap py-6 pb-20">
                <Artical />
                <SidNavBar />
            </div>
        </div>
    )
}

export default Posts;