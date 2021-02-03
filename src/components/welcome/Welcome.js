import React from 'react';


function Welcome(props){
    console.log(props);

   /* if (props.match.params.name){
        let name= props.match.params.name

    } else{
        let name = props.name;
    }
       = let name = props.match.params.name || props.name;
       */
    let name = props.match.params.name || props.name;
    return(
     <div className="Welcome">
        Welcome, {name}!
     </div>
    );
}

export default Welcome;