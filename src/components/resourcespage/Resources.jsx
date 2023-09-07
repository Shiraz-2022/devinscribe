import React,{useEffect,useState} from 'react';


function Resources() {

    const [resources,setResources] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(`/resourcePage/resources`)
        .then(response => response.json())
        .then((result) => {
            
            setIsLoaded(true);
            setResources(result);
        })
        .catch((error) => {
            setIsLoaded(true);
            setError(error);
        });
    },[]);
   
    return (
        <>
        
            <div className="r-p-resources">
                {!isLoaded && <img className='loading-image' src="images/25.gif" alt="gif"/>}
                {isLoaded && resources.map((resource)=> (
                    <div className='r-p-resources-main'>
                    <div className='r-p-resources-content'>
                      <h3>{resource.title}</h3>
                      <a href={resource.link} download><button>Download</button></a>
                    </div>
                    <hr/>
                    </div>
                ))
                }
                
            </div>

        </>
    );
}

export default Resources;