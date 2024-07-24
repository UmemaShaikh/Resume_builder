import React from "react";
import './../resources/DefaultLayout.css'


function DefaultLayout(props){
    return(
        <div class="layout">
         <div className="header">
           <h1>Shaikh Resume</h1>
         </div>
         <div className="content">
           {props.children}
         </div>
        </div>
    )
}
export default DefaultLayout