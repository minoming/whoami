import * as React from "react";

const NpmLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={60}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path
      d="M14.186 12.134v30.602h25.472v5.13H60v-5.13h45.814V12.134z"
      fill="#cb3837"
    />
    <path
      d="M29.398 17.264H19.315v20.342h10.083V22.394h5.13v15.213h5.13V17.264zm15.4 0v25.472h10.26v-5.13H65.13V17.264zM60 32.476h-4.953V22.394H60zm20.342-15.212H70.26v20.342h10.083V22.394h5.13v15.213h5.13V22.394h5.13v15.213h5.13V17.264z"
      fill="#fff"
    />
  </svg>
);

export default NpmLogo;
