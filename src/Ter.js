import React,{useState} from 'react'
const Greeting=({isUserLoggedIn})=>(
    <div>
        {isUserLoggedIn ?(
            <h1>Welcome</h1>
        ):(
            <h1>login again</h1>
        )
        }
    </div>
)
const Ter=()=>{
    const[userLoggledIn,setUserLoggedIn]=useState(false);
    return (
        <div>
            <Greeting isUserLoggedIn={userLoggledIn}/>
            <button onClick={()=>
            setUserLoggedIn(!userLoggledIn)}>
            login</button>
        </div> 
    );
}; 
export default Ter;