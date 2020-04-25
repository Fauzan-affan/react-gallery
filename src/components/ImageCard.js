import React from 'react';

const ImageCard = ({image}) => {
    const tags = image.tags.split(",")

    return (
        <div className="my-5 mx-3 bg-white max-w-sm rounded-lg overflow-hidden shadow-lg">
            <img className="w-full" src={image.webformatURL} alt=""/>
            <div className="px-6 py-4">
                <div className="font-bold text-gray-900 text-xl mb-2">
                    Photo by {image.user}
                </div>
                <ul>
                    <li className="flex">
                        <p className="font-bold mr-1">Views: </p>
                        {image.views}
                    </li>
                    <li className="flex">
                        <p className="font-bold mr-1">Downloads: </p>
                        {image.downloads}
                    </li>
                    <li className="flex">
                        <p className="font-bold mr-1">Likes: </p>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <div key={index} className="inline-block bg-gray-800 rounded-full px-3 py-2 text-sm font-semibold text-white mr-2 my-1">
                        #{tag}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageCard;
