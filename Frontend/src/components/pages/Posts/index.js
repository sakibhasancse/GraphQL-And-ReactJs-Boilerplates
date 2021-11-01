import React from 'react'
import { Footer } from './Footer';
import { Header } from './Header';
import { Navbar } from './navbar';
import Post from './post';
import { SidNavBar } from './SidNavBar';
import { TopNavBar } from './TopNavBar';

export const Posts = () => {
    return (
        <div>
            <TopNavBar />
            <Header />
            <Navbar />
            <div className="container mx-auto flex flex-wrap py-6">
                <Post />
                <SidNavBar />
            </div>
            <Footer />
        </div>
    )
}
