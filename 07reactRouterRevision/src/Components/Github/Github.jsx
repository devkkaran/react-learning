import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


export const githubInfoLoader = async () => {
    try {
      const res = await fetch("https://api.github.com/users/hiteshchoudhary");
  
      // if (!res.ok) {
      //   throw new Error("Failed to fetch GitHub data");
      // }
  
      const result = await res.json();
      return result; // Return the result without calling hooks here
    } catch (error) {
      console.error(error);
    }
  };


  
export default function Github() {
  const data = useLoaderData();
  console.log("Check right --------------------");


  return (
    <>
      <div className="text-center bg-yellow-300 text-green-950 text-3xl p-4">
        GitHub Followers {data.followers}
      </div>
      <img
        src={data.avatar_url}
        alt="Git Hub Avatatr"
        className="block mx-auto mt-3"
      />
    </>
  );
}


  
