import React from "react";
import { useParams } from "react-router-dom";
// import About from "./src/Components/About/About";
// import {About} from "./src/Components/index.js";


function User(){
    const {userId} = useParams();

    return(
        <div className="text-4xl m-6 bg-gray-700 text-white text-center"> User: {userId} </div>
    )
}

export default User