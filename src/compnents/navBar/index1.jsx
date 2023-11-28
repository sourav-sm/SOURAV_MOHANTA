import {useRef} from "react";
import {FaBars,FaTimes} from "react-icons/fa";

function Navbar(){
    const navRef = userRef();
    
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">My work</a>
                <a href="/#">Blog</a>
                <a href="/#">About</a>
                <button>
                    <FaBars/>
                </button>
            </nav>
            <button>
                <FaBars/>
            </button>
        </header>
    )
}

export default Navbar;