import React,{useState} from 'react'
const Greeting = ({isuserLoggedIn }) =>(
    <div>
        {isuserLoggedIn ? 
        (
            <h1>Welcome</h1>
        ):(
            <h1>Login Again</h1>
        )
        }
    </div>
)
const Ter = () => {
    const[userLoggedIn,setUserLoggedIn] = useState(false);
return (
  <div>
    <Greeting isuserLoggedIn = {userLoggedIn}/>
    <button onClick={() => setUserLoggedIn(!userLoggedIn)}>Login</button>
  </div>
  );
};

export default Ter