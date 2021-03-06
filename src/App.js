import React, {useState, useEffect} from 'react';

import ImageCard from './components/ImageCard.js';
import ImageSearch from './components/ImageSearch.js'

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  }, [term]);
  
  return (
      <div className="min-h-screen bg-gray-200">
        <div className="container mx-auto">
          <ImageSearch searchImage={(term) => setTerm(term)}/>
        </div>

        { !isLoading && images.length === 0 && 
          <div className="flex justify-center items-center">
            <p className="text-4xl">Image not found</p>
          </div>
        }
      
        { isLoading ? 
          <div className="flex justify-center items-center">
            <p className="text-6xl">Loading ...</p>
          </div>
            :
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {images.map(image => (
                <ImageCard key={image.id} image={image}/>
              ))}
            </div>
          </div>
        }
      </div>
  );
}

export default App;
