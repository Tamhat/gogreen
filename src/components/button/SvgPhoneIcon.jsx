const SvgPhoneIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={54}
    height={53}
    fill="none"
    {...props}
  >
    <mask
      id="phone_svg__b"
      width={54}
      height={53}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="url(#phone_svg__a)" d="M.739.491H53.18v52.441H.739z" />
    </mask>
    <g
      mask="url(#phone_svg__b)"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <path fill="#fff" d="M.739.491H53.18v52.441H.739z" />
    </g>
    <defs>
      <pattern
        id="phone_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#phone_svg__c" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="phone_svg__c"
        width={100}
        height={100}
      />
    </defs>
  </svg>
);
export default SvgPhoneIcon;
