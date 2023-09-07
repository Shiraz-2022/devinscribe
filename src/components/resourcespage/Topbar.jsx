import React,{useState} from 'react';


function Topbar() {
   

    const [isClicked,setIsClicked] = useState(false);

    function handleClick(){
        if(!isClicked){
        document.querySelector('.r-p-menubar-image').classList.remove('rotate-left-r-p-menubar-image');
        document.querySelector('.r-p-menubar-image').classList.add('rotate-right-r-p-menubar-image');
        document.querySelector('.r-p-sidebar').classList.remove('slide-right-r-p-sidebar');
        document.querySelector('.r-p-sidebar').classList.add('slide-left-r-p-sidebar');
        if(window.innerWidth > 1000){
        document.querySelector('.r-p-main').classList.remove('slide-right-r-p-main');
        document.querySelector('.r-p-main').classList.add('slide-left-r-p-main');
    }
      
        setIsClicked(true);
        return;
        }
        
        document.querySelector('.r-p-menubar-image').classList.remove('rotate-right-r-p-menubar-image');
        document.querySelector('.r-p-menubar-image').classList.add('rotate-left-r-p-menubar-image');
        document.querySelector('.r-p-sidebar').classList.remove('slide-left-r-p-sidebar');
        document.querySelector('.r-p-sidebar').classList.add('slide-right-r-p-sidebar');
        if(window.innerWidth > 1000){
        document.querySelector('.r-p-main').classList.remove('slide-left-r-p-main');
        document.querySelector('.r-p-main').classList.add('slide-right-r-p-main');
        }

        setIsClicked(false);
        
        
    }
    return (
        <>
            <div className="r-p-topbar">
                <div className="r-p-menubar">
                    <img className="r-p-menubar-image" src="images/9104127_navigation_bar_menubar_hamburger menu_icon.png" alt="menu-bar" onClick={handleClick} />
                </div>

                <a href="/"><button>Home</button></a>
            </div>
        </>
    )
}

export default Topbar;
