import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/Navbar.scss'
function Navbar() {
    const location = useLocation();
    const [activeRoute, setActiveRoute] = useState('');
    useEffect(() => {
        setActiveRoute(location.pathname);
    }, [location.pathname]);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };

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
            <div id="menu" class="menu">
                <div class="content" id="content">
                    <div class="left-part">
                    <div class="list-submenu">
                        <div class="item title">
                        Blog
                        </div>
                    </div>
                    <div class="list-submenu">
                        <div class="item title">
                        Community
                        </div>
                        <div class="item">
                        Discord
                        </div>
                        <div class="item">
                        Stackoverflow
                        </div>
                        <div class="item">
                        Slack
                        </div>
                    </div>
                    <div class="list-submenu">
                        <div class="item title">
                        Solution
                        </div>
                        <div class="item">
                        API
                        </div>
                    </div>
                    <div class="list-submenu">
                        <div class="item title">
                        Application
                        </div>
                        <div class="item">
                        Mobile app
                        </div>
                        <div class="item">
                        Web app
                        </div>
                    </div>
                    </div>
                    <div class="right-part">
                    <div class="card">
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