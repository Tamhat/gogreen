const SvgRollerWheel = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={29}
    fill="none"
    {...props}
  >
    <circle cx={16.836} cy={12.501} r={11.724} stroke={props.color ? props.color : "#fff"} />
    <circle cx={16.78} cy={12.557} r={9.414} stroke={props.color ? props.color : "#fff"} />
    <path fill={props.color ? props.color : "#fff"} d="m7.203 28.724 4.958-4.957h9.238l4.957 4.957H7.203" />
    <path
      stroke={props.color ? props.color : "#fff"}
      d="M10.585 19.542 23.654 6.586M7.268 13.095l19.165-.042M9.906 6.135l13.181 13.069M17.047 3.471v18.366"
    />
    <path
      fill={props.color ? props.color : "#fff"}
      d="M5.39 4.372a.5.5 0 0 1 .844-.144l4.157 4.806a.5.5 0 0 1-.294.82l-6.484 1.107a.5.5 0 0 1-.55-.675L5.39 4.372"
    />
  </svg>
);
export default SvgRollerWheel;
