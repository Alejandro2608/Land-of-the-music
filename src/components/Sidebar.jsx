import React from 'react';


const Sidebar = ()=>(
    <div className="wrapper">
   	<nav id="sidebar">
   		<div className="sidebar-header">
   			<h3>BOOTSTRAP SIDEBAR</h3>
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
   		
   		<ul className="list-unstyled CTAs">
   			<li>
   				<a href="#" className="download">Download code</a>
   			</li>
   			<li>
   				<a href="#" className="article">article</a>
   			</li>
   		</ul>
   	</nav>
</div>

);
export default Sidebar;