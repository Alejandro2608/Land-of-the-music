import React from 'react';
import './styles/Siderbar.css';


const Sidebar = ()=>(
    <div className="wrapper">
   	<nav id="sidebar">
   		<div className="sidebar-header">
   			<img src="" alt=""/>
   		</div>
   		
   		
   		<ul className="list-unstyled components">
   			<p>Dummy Heading</p>
   			<li className="active">
   				<a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
   				<ul className="collapse list-unstyled" id="homeSubmenu">
				   
   					<li>
   						<a href="#">home1</a>
   					</li>
   					<li>
   						<a href="#">home2</a>
   					</li>
   					<li>
   						<a href="#">home3</a>
   					</li>
   				</ul> 
   			</li>
   			
   			<li>
   				<a href="#">About</a>
   			</li>
   			<li>
   				<a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Page</a>
   				<ul className="collapse list-unstyled" id="pageSubmenu">
   					<li>
   						<a href="#">page1</a>
   					</li>
   					<li>
   						<a href="#">page2</a>
   					</li>
   					<li>
   						<a href="#">page3</a>
   					</li>
   				</ul> 
   			</li>
   			<li>
   				<a href="#">Services</a>
   			</li>
   			<li>
   				<a href="#">Contact Us</a>
   			</li>
   		</ul>
   		
   		
   	</nav>


		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav ml-auto">
  				<li className="nav-item active">
					<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
 				</li>
  				<li className="nav-item">
					<a className="nav-link" href="#">Features</a>
 				 </li>
  				<li className="nav-item">
					<a className="nav-link" href="#">Pricing</a>
  				</li>
  				<li className="nav-item">
					<a className="nav-link disabled" href="#">Disabled</a>
  				</li>
			</ul>
		</div>
	</div>



  

);
export default Sidebar;