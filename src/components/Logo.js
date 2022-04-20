import React from "react";

function Logo() {
  return (
    <div className="logo">
      {/* les images imporées depuis la balise img sont accéssibles dans public */}
      {/* balise img like we were in public folder  */}
      <img src="./logo192.png" alt="logo react" /> 
      <h3>React world</h3>
    </div>
  );
}

export default Logo;
