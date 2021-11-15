
import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import CreateAndUpdatePosts from './createAndUpdatePosts';
import UploadImage from './ImageUpload';

const CreatePost = () => {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        switch (name) {
            case 'title':
                setTitle(value);
                break;
            default:
                break;
        }

    }
    return (
        <div class="container mx-auto ">
            <div class="w-24 min-w-full py-8">
                Create a new post
            </div>

            <input class="placeholder-gray-500" name="title" value={title} onChange={(e) => handleChange(e)} placeholder="Post title ..." />
            <CreateAndUpdatePosts initialValue="Hello" limit="300" />
            <UploadImage />
            <button class="">Post</button>
        </div>
    );
}

export default CreatePost;