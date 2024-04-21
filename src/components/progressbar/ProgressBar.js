import { useState } from "react";
import Bar from "./Bar";
import "./ProgressBar.css";
import { useEffect } from "react";

const ProgressBar = () => {

  const [value, setValue] = useState(0);
  const [success, setSucess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue(val => val + 1);
    }, 100)
  }, []);

  return (
    <section>
      <div className="container">
        <h2 className="mb-3">Progress Bar</h2>

        <Bar value={value} onComplete={ () => setSucess(true) } />

        <span>{success ? 'Completed' : 'Loading...'}</span>
      </div>
    </section>
  );
};

export default ProgressBar;
