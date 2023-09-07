import React, { useState, useEffect } from 'react';

function Navbar() {

    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        handleClick();
    }, []);


    function handleClick() {

        if (!isClicked) {
            document.querySelector('.h-p-navbar-contents').classList.remove('.slide-down');
            document.querySelector('.h-p-navbar-contents').classList.add('slide-up');

            setIsClicked(true);
            return;
        }

        document.querySelector('.h-p-navbar-contents').classList.remove('slide-up');
        document.querySelector('.h-p-navbar-contents').classList.add('slide-down');

        setIsClicked(false)

    }


    return (
        <>
            <div className='h-p-navbar'>
                <div className='h-p-navbar-contents'>
                    <a href="#h-p-footer"><h4>Contact</h4></a>
                    <a href="#"><h4>Learn</h4></a>
                    <a href="/resourcePage"><h4>About us</h4></a>
                </div>
                <img src="images/icons8-blue-circle-48.png" alt="blue-circle" onClick={handleClick} />
            </div>


        </>
    )
}

export default Navbar;