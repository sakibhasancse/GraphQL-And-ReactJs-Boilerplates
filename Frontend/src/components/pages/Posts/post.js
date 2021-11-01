import React from 'react'
let demodata = [{
    _id: '1',
    title: 'Hello title ',
    description: 'Hello Description',
    author: 'Sakib Hasan',
    createdAt: new Date(),
    image: 'https://source.unsplash.com/collection/1346951/1000x500?sig=1'
}, {
    _id: '13',
    title: 'Hello title 2 ',
    description: 'Hello Description',
    author: 'Sakib Hasan',
    createdAt: new Date(),
    image: 'https://source.unsplash.com/collection/1346951/1000x500?sig=1'
}, {
    _id: '31',
    title: 'Hello title 3',
    description: 'Hello Description',
    author: 'Sakib Hasan',
    createdAt: new Date(),
    image: 'https://source.unsplash.com/collection/1346951/1000x500?sig=1'
}]
const Post = () => {
    return (
        <div className="container">
            <section className="w-full md:w-2/3 flex flex-col items-center px-3">
                {demodata && demodata.map((item, index) => (
                    <artical className="flex flex-col shadow my-4">
                        <a href={`/${item.slug}`} className="hover:opacity-75">
                            <img src={item.image} alt={item.title} />
                        </a>
                        <div className="flex flex-col justify-start p-6">
                            <a href={`/${item.slug}`} className="text-blue-700 text-sm font-bold uppercase pb-4">{item.title}</a>
                        </div>
                    </artical>
                ))}
            </section>
        </div>
    )
}

export default Post