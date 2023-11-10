import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/Navbar.scss'
function Navbar() {
    const location = useLocation();
    const [activeRoute, setActiveRoute] = useState('');
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setActiveRoute(location.pathname);
    }, [location.pathname]);

    const [activeDropdown, setActiveDropdown] = useState(null);

    const openDropdown = (dropdownId) => {
        setActiveDropdown(dropdownId);
    };
    
    const closeDropdown = () => {
        setActiveDropdown(null);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>

            <nav>
                <div className="container">
                    <div className="logo">      
                        <img src="/logo-museu.svg" />
                    </div>
                    <div className="nav-mobile">
                        <a id="nav-toggle" href="#!" onClick={toggleMobileMenu}><span>tesasd</span></a>
                    </div>
                    <div className={`list ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                        <div className={`item ${activeRoute === '/' ? 'active' : ''}`}>
                            <span className="title-item" >   
                                <Link to="/">Home</Link>
                            </span>
                        </div>

                        <div 
                            className={`item ${activeRoute === '/museu/sobre-o-museu' || activeRoute === '/museu/equipe' || activeRoute === '/museu/museu-digital' ? 'active' : ''}`} 
                            onMouseEnter={() => openDropdown('museu')}
                            onMouseLeave={closeDropdown}
                        >
                            <span className='title-item'>
                                Museu <span>{activeDropdown === 'museu' ? '▴' : '▾'}</span>
                            </span>
                            <div className={`nav-dropdown ${activeDropdown === 'museu' ? 'open' : ''}`}>
                                <div className={`item-dropdown`}>
                                    <Link to="/museu/sobre-o-museu">Sobre o museu</Link>
                                </div>
                                <div className={`item-dropdown`}>
                                    <Link to="/museu/equipe">Equipe</Link>

                                </div>
                                <div className={`item-dropdown`}>
                                    <Link to="/museu/museu-digital">Museu Digital</Link>
                                </div>
                            </div>
                        </div>
                        <div 
                            className={`item ${activeRoute === '/exposicoes/longa-duracao' || activeRoute === '/exposicoes/temporariamente' ? 'active' : ''}`} 
                            onMouseEnter={() => openDropdown('exposicoes')}
                            onMouseLeave={closeDropdown}
                        >
                            <span className='title-item'>
                                Exposições <span>{activeDropdown === 'exposicoes' ? '▴' : '▾'}</span>
                            </span>
                            <div className={`nav-dropdown ${activeDropdown === 'exposicoes' ? 'open' : ''}`}>
                                <div className={`item-dropdown`}>
                                    <Link to="/exposicoes/longa-duracao">Longa Duração</Link>
                                </div>
                                <div className={`item-dropdown`}>
                                    <Link to="/exposicoes/temporariamente">Temporárias</Link>
                                </div>
                            </div>
                        </div>

                        <div className={`item ${activeRoute === '/eventos' ? 'active' : ''}`}>
                            <span className="title-item" >   
                                <Link to="/eventos">Eventos</Link>
                            </span>
                        </div>

                        <div 
                            className={`item ${activeRoute === '/acervo/novas-colecoes' || activeRoute === '/acervo/biblioteca' ? 'active' : ''}`} 
                            onMouseEnter={() => openDropdown('acervo')}
                            onMouseLeave={closeDropdown}
                        >
                            <span className='title-item'>
                                Acervo <span>{activeDropdown === 'acervo' ? '▴' : '▾'}</span>
                            </span>
                            <div className={`nav-dropdown ${activeDropdown === 'acervo' ? 'open' : ''}`}>
                                <div className={`item-dropdown`}>
                                    <Link to="/acervo/novas-colecoes">Novas Coleções</Link>
                                </div>
                                <div className={`item-dropdown`}>
                                    <Link to="/acervo/biblioteca">Biblioteca</Link>
                                </div>
                            </div>
                        </div>

                        <div className={`item ${activeRoute === '/educativo' ? 'active' : ''}`}>
                            <span className="title-item" >   
                                <Link to="/educativo">Educativo</Link>
                            </span>
                        </div>

                        <div 
                            className={`item ${activeRoute === '/apoie/como-apoiar' || activeRoute === '/apoie/patrocinadores' ? 'active' : ''}`} 
                            onMouseEnter={() => openDropdown('apoie')}
                            onMouseLeave={closeDropdown}
                        >
                            <span className='title-item'>
                                Apoie <span>{activeDropdown === 'apoie' ? '▴' : '▾'}</span>
                            </span>
                            <div className={`nav-dropdown ${activeDropdown === 'apoie' ? 'open' : ''}`}>
                                <div className={`item-dropdown`}>
                                    <Link to="/apoie/como-apoiar">Como apoiar</Link>
                                </div>
                                <div className={`item-dropdown`}>
                                    <Link to="/apoie/patrocinadores">Patrocinadores</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;