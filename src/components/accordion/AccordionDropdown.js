export default function AccordionDropdown({ que, ans, showAns, onClick}) {
  return (
    <li>
      <div className="acc-que" onClick={onClick}>
        <h3>{que}</h3>  
        <span>{showAns?'➖':'➕'}</span>
      </div>
     { showAns && <p>{ans}</p>}
    </li>
  );
}
