import React,{useEffect,useState} from 'react';


function SourceCodes() {

    const [SourceCodes,setSourceCodes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(`/resourcePage/sourcecodes`)
        .then(response => response.json())
        .then((result) => {
            
            setIsLoaded(true);
            setSourceCodes(result);
        })
        .catch((error) => {
            setIsLoaded(true);
            setError(error);
        });
    },[]);
   
    return (
        <>
        
            <div className="r-p-SourceCodes">
                {!isLoaded && <img className='loading-image' src="images/25.gif" alt="gif"/>}
                {isLoaded && SourceCodes.map((code)=> (
                    <div className='r-p-sourcecodes-main'>
                    <div className='r-p-sourcecodes-content'>
                      <h3>{code.title}</h3>
                      <a href={code.link}><button>code</button></a>
                    </div>
                    <hr/>
                    </div>
                ))
                }
                
            </div>

        </>
    );
}

export default SourceCodes;