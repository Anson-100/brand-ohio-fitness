const LineGradient = ({ width = "w-full" }) => {
  return <div className={`h-2 ${width} bg-transparent`} /> //h-2 is minimum height to keep selectedPage and dotGroup working correctly
}

export default LineGradient
