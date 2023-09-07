import React,{useEffect,useState} from 'react';

function Tutorials() {

    
    const [tutorials,setTutorials] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(`/resourcePage/tutorials`)
        .then(response => response.json())
        .then((result) => {
            
            setIsLoaded(true);
            setTutorials(result);
        })
        .catch((error) => {
            setIsLoaded(true);
            setError(error);
        });
    },[]);
    return (
        <>
            <div className="r-p-tutorials">
              
            {!isLoaded && <img className='loading-image' src="images/25.gif" alt="gif"/>}
                {isLoaded && tutorials.map((tutorial)=> (
                    <div className='r-p-tutorials-main'>
                    <div className='r-p-tutorials-content'>
                      <h3>{tutorial.title}</h3>
                      <a href={tutorial.link}><button>Watch</button></a>
                    </div>
                    <hr/>
                    </div>
                ))
                }
                
            </div>

        </>
    );
}

export default Tutorials;