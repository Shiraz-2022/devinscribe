import React, { useEffect, useState } from 'react';

function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`/resourcePage/blogs`)
            .then(response => response.json())
            .then((result) => {

                setIsLoaded(true);
                setBlogs(result);
            })
            .catch((error) => {
                setIsLoaded(true);
                setError(error);
            });
    }, []);

    return (
        <>
            <div className="r-p-blogs">
                {!isLoaded && <img className='loading-image' src="images/25.gif" alt="gif"/>}
                {isLoaded && blogs.map((blog) => (

                    <div className='r-p-blogs-content'>
                        <h2>{blog.title}</h2>
                        <a href={blog.link}><button>Read blog</button></a>
                    </div>
                ))
                }
            </div>
        </>
    );
}

export default Blogs;