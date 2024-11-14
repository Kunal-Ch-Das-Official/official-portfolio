import React from "react";

interface CustomKnobProps {
  itemLength: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  maxItems: any;
  size: number;
}

const CustomKnob: React.FC<CustomKnobProps> = ({
  itemLength = 0,
  maxItems = 100,
  size = 100,
}) => {
  const fillPercentage = (itemLength / maxItems) * 270; // Convert length to degrees (max 270°)

  return (
    <div className="knob-container" style={{ width: size, height: size }}>
      <svg className="knob" width={size} height={size} viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="#fff"
          stroke="#cccccc"
          strokeWidth="2"
        />
        <path
          className="knob-fill"
          d={describeArc(50, 50, 45, -135, fillPercentage - 135)}
          fill="none"
          stroke="#ac01ec"
          strokeWidth="5"
        />
      </svg>
      <div className="knob-value relative bottom-[2.7rem] text-base">
        {itemLength}/{maxItems}
      </div>
    </div>
  );
};

// Function to describe an arc path for SVG
function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180.0);
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

export default CustomKnob;
