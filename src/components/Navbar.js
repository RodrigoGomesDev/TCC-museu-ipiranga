import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/Navbar.scss'
function Navbar() {
    const location = useLocation();
    const [activeRoute, setActiveRoute] = useState('');
    useEffect(() => {
        setActiveRoute(location.pathname);
    }, [location.pathname]);

    // const [isDropdownOpen, setDropdownOpen] = useState(false);

    // const toggleDropdown = () => {
    //   setDropdownOpen(!isDropdownOpen);
    // };

    return (
        // <nav className="navbar">
        //     <ul>
        //         <li className={activeRoute === '/' ? 'active' : ''}>
        //         <Link to="/">Home</Link>
        //         </li>
        //         <li className={activeRoute === '/museu/sobre-o-museu' ? 'active' : ''}>
        //         <Link to="/museu/sobre-o-museu">About</Link>
        //         </li>
        //         <li>
        //             <span className="dropdown" onClick={toggleDropdown}>
        //                 Dropdown
        //             </span>
        //             <ul className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
        //                 <li><Link to="/link1">Link 1</Link></li>
        //                 <li><Link to="/link2">Link 2</Link></li>
        //                 <li><Link to="/link3">Link 3</Link></li>
        //             </ul>
        //         </li>
        //     </ul>
        // </nav>
        <div>

            <nav>
                <div className="container">
                    <div className="logo">      
                        <span>SNAFU</span>
                    </div>
                    <div className="list">
                    <div className={`item ${activeRoute === '/' ? 'active' : ''}`}>
                        <span className="title-item" >   
                            <Link to="/">Home</Link>
                        </span>
                    </div>
                    <div className="item hoverable">
                        <span className="title-item">        
                        Features <span className="arrow">▼</span>  
                        </span>
                    </div>
                    <div className="item hoverable">
                        <span className="title-item">
                        Use cases <span className="arrow">▼</span>
                        </span>
                    </div>
                    <div className="item hoverable">
                        <span className="title-item">          
                        Docs & ressources <span className="arrow">▼</span>
                        </span>
                    </div>
                    <div className="item">
                        <span className="title-item">        
                        Pricing
                        </span>
                    </div>
                    </div>
                </div>
            </nav>
            <div id="menu" className="menu">
                <div className="content" id="content">
                    <div className="left-part">
                    <div className="list-submenu">
                        <div className="item title">
                        Blog
                        </div>
                    </div>
                    <div className="list-submenu">
                        <div className="item title">
                        Community
                        </div>
                        <div className="item">
                        Discord
                        </div>
                        <div className="item">
                        Stackoverflow
                        </div>
                        <div className="item">
                        Slack
                        </div>
                    </div>
                    <div className="list-submenu">
                        <div className="item title">
                        Solution
                        </div>
                        <div className="item">
                        API
                        </div>
                    </div>
                    <div className="list-submenu">
                        <div className="item title">
                        Application
                        </div>
                        <div className="item">
                        Mobile app
                        </div>
                        <div className="item">
                        Web app
                        </div>
                    </div>
                    </div>
                    <div className="right-part">
                    <div className="card">
                        <p>Look at my fancy use case</p>
                        <button>Click to see more </button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Navbar;