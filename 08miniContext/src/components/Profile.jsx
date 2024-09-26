import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const {user} = useContext(UserContext);

    if(!user) return <div> Please Login </div>

    return <div>Welcome To {user.username }  { user.password} </div>
}

export default Profile