import React, { useState } from "react";

export default function AccordionDropdown({ que, ans }) {
  const [showAns, setShowAns] = useState(false);
  
  return (
    <li  className={`${(showAns?'active':'')}`}>
      <div className="acc-que" onClick={() => {setShowAns(!showAns)}}>
        <h3>{que}</h3>  
        <span>{showAns?'➖':'➕'}</span>
      </div>
     { showAns && <p>{ans}</p>}
    </li>
  );
}
