import React from 'react'
import { Footer } from '../../components/UI/Footer';
import Post from './post';
import { SidNavBar } from '../../components/UI/SidNavBar';


const Posts = () => {
    return (
        <div>
            hello
            <div className="container mx-auto flex flex-wrap py-6 pb-20">
                <Post />
                <SidNavBar />
            </div>
        </div >
    )
}

export default Posts;