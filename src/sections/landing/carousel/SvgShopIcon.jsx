const SvgShopIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none" 
    {...props}
  >
    <path
      stroke={ props.color ? props.color : "#fff" }
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.822 6.577a4.837 4.837 0 0 0-4.837-4.838 4.837 4.837 0 0 0-4.858 4.838m9.541 16.684H7.322c-3.433 0-6.067-1.24-5.32-6.231l.872-6.764c.461-2.49 2.05-3.444 3.443-3.444h11.396c1.415 0 2.91 1.025 3.444 3.444l.87 6.764c.636 4.427-1.926 6.23-5.359 6.23M15.304 11.619h-.05M8.777 11.619h-.051"
    />
  </svg>
);
export default SvgShopIcon;
