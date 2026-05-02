import logo from '../movies-logo.png';
import {BrowserRouter as Router, NavLink,BrowserRouter, Route, Link, Routes} from 'react-router-dom';

function Header() {
    return (
        <header className="App-header">

            <div className="ht-header">

                <div className="container">
                    <nav className="navbar navbar-default navbar-custom">
                        
                        <div className="navbar-header logo">
                            <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <div id="nav-icon1">
                            <span></span>
                            <span></span>
                            <span></span>
                            </div>
                            </div>
                            <Link to={"/"}>
                                <img className="logo" src="/images/movies-logo.png" alt="" width="100" height="58" />
                            </Link>
                        </div>
                        
                        <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav flex-child-menu menu-left">
                            <li className="hidden">
                                <a href="#page-top"></a>
                            </li>
                            <li className="dropdown first">
                            <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
                            Home <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </a>
                            <ul className="dropdown-menu level1">
                                <li><a href="#">Home 01</a></li>
                                <li><a href="#">Home 02</a></li>
                                <li><a href="#">Home 03</a></li>
                            </ul>
                            </li>
                            <li className="dropdown first">
                            <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                            movies<i className="fa fa-angle-down" aria-hidden="true"></i>
                            </a>
                            <ul className="dropdown-menu level1">
                                <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Movie grid<i className="ion-ios-arrow-forward"></i></a>
                                <ul className="dropdown-menu level2">
                                    <li><a href="#">Movie grid</a></li>
                                    <li><a href="#">movie grid full width</a></li>
                                </ul>
                                </li>			
                                <li><a href="#">Movie list</a></li>
                                <li><a href="#">Movie single</a></li>
                                <li className="it-last"><a href="#">Series single</a></li>
                            </ul>
                            </li>
                            <li className="dropdown first">
                            <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                            celebrities <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </a>
                            <ul className="dropdown-menu level1">
                                <li><a href="#">celebrity grid 01</a></li>
                                <li><a href="#">celebrity grid 02 </a></li>
                                <li><a href="#">celebrity list</a></li>
                                <li className="it-last"><a href="#">celebrity single</a></li>
                            </ul>
                            </li>
                            <li className="dropdown first">
                            <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                            news <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </a>
                            <ul className="dropdown-menu level1">
                                <li><a href="#">blog List</a></li>
                                <li><a href="#">blog Grid</a></li>
                                <li className="it-last"><a href="#">blog Detail</a></li>
                            </ul>
                            </li>
                            <li className="dropdown first">
                            <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                            community <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </a>
                            <ul className="dropdown-menu level1">
                                <li><a href="#">user favorite grid</a></li>
                                <li><a href="#">user favorite list</a></li>
                                <li><a href="#">user profile</a></li>
                                <li className="it-last"><a href="#">user rate</a></li>
                            </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav flex-child-menu menu-right">
                            <li className="dropdown first">
                            <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                            pages <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </a>
                            <ul className="dropdown-menu level1">
                                <li><a href="#">Landing</a></li>
                                <li><a href="#">404 Page</a></li>
                                <li className="it-last"><a href="#">Coming soon</a></li>
                            </ul>
                            </li>                
                            <li><a href="#">Help</a></li>
                            <li className="loginLink"><a href="#">LOG In</a></li>
                            <li className="btn signupLink"><a href="#">sign up</a></li>
                        </ul>
                        </div>
                    
                    </nav>
                    
                
                </div>

            </div>

        </header>
  );
}

export default Header;
