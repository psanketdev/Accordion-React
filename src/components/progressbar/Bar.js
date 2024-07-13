import { useEffect, useState } from "react";

const Bar = ({ value = 0, onComplete }) => {
  const [percentage, setPercentage] = useState(value);

  useEffect(() => {
    setPercentage(Math.min(100, Math.max(value, 0)));

    if (percentage >= 100) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="progress">
      <span style={{ color: `${percentage < 49 ? "#000" : "#fff"}` }}>
        {percentage.toFixed()}%
      </span>
      <div
        style={{ width: `${percentage}%` }}
        // style={{
        //   transform: `scaleX(${percentage / 100})`,
        //   transformOrigin: 'left'
        // }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage.toFixed()}
      ></div>
    </div>
  );
};

export default Bar;
