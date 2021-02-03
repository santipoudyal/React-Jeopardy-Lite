import React from 'react';
import {Link} from 'react-router-dom';


function Navigation(props){
    return(
        <div className="Navigation">
          <ul>
          <li>
            <Link to="/">Home</Link>
            </li> <br/>
          <li>
            <Link to="/clock">Clock</Link></li>
            <br/>
          <li>
            <Link to="/contact">Contact</Link>
            </li>             
            <Link to="/jeopardy">Jeopardy</Link>


           
          </ul>

        </div>
    )
}

export default Navigation;