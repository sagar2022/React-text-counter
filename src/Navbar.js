import React from 'react'

export default function Navbar(props) {
    return (
        <div className="content">
            <h3>{props.title}</h3>
           <nav>
               <ul>
                   <li><a href="/">Home</a></li>
                   <li><a href="/">About</a></li>
               </ul>
           </nav> 
        </div>
    )
}
