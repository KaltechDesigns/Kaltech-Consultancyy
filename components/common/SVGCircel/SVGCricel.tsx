export const SVGCricel = ({ percentageCount,width,height }: any) => {
  

    const circleRadius = 70;
    /* The code below is calculating the `dashArray` and `dashArrayOffSet` values for a SVG circle
    element. */
    const dashArray = circleRadius * Math.PI * 2;
    const dashArrayOffSet = dashArray - (dashArray * percentageCount) / 100;
  
    return (
      <>
        <svg width={width} height={height} viewBox="0 0 150 150">
          <circle
            className="fill-none stroke-[#121212]/10"
            cx={150 / 2}
            cy={150 / 2}
            strokeWidth={"5px"}
            r={70}
          />
          <circle
            className="fill-none stroke-[#121212] transition-all duration-200 ease-linear"
            cx={150 / 2}
            cy={150 / 2}
            strokeWidth={"5px"}
            r={70}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashArrayOffSet,
            }}
            transform={`rotate(180 ${150 / 2} ${150 / 2})`}
          />
          <text
            x="50%"
            y="50%"
            dy="0.3em"
            textAnchor="middle"
            className="font-[Oxanium] text-[#121212] uppercase font-[500] text-3xl transition-all duration-200 ease-linear"
          >
            {percentageCount}%
          </text>
        </svg>
      </>
    );
  };