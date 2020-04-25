import React, { useState } from 'react';

const ImageSearch = ({ searchImage }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        searchImage(text)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="mx-2 pt-5 text-center">
                <label className="font-bold text-xl text-gray-900">Search </label>
                <input onChange={(e) => setText(e.target.value)} type="text" className="mt-2 transition ease-in-out duration-700 text-gray-900 bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 rounded-full w-full py-2 px-4 focus:outline-none hover:shadow-lg focus:shadow-lg border focus:border-gray-600 hover:border-gray-600" placeholder="Search something ..."/>
            </form>
        </div>
    );
}

export default ImageSearch;
