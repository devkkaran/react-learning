import React from "react";

function Card({userName, btnText, src = "https://www.hola.com/us/horizon/original_aspect_ratio/e4866d0b4bcb-chris-hemsworth.jpg"}) {
    // console.log("Props: " ,props);
    console.log(userName);
    console.log(btnText);
    // console.log("Props: " ,props.infoData.email);
    
  return (
<div class="relative h-[400px] w-[300px] rounded-md">
  <img
    src={src}
    alt="AirMax Pro"
    class="z-0 h-full w-full rounded-md object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">{userName}</h1>
    <p class="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText || "View Profile → ^_^"}
    </button>
  </div>
</div>

  );
}

export default Card;
