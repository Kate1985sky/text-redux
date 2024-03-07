import { NavLink } from "react-router-dom";

export const CartIcon = () => {
  return (
    <NavLink as={NavLink} to="/bucket">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        width={30}
        height={30}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    </NavLink>
  );
};

export const LogoutIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="30"
      height="30"
      viewBox="0 0 256 256"
      xmlSpace="preserve"
    >
      <defs></defs>
      <g
        style={{
          stroke: "none",
          strokeWidth: 2,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "none",
          fillRule: "nonzero",
          opacity: 1,
          cursor: "pointer",
        }}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M 45 90 c -15.663 0 -29.952 -8.61 -37.292 -22.472 l -0.496 -0.936 l 0.496 -0.936 c 4.178 -7.889 10.896 -14.376 18.918 -18.267 c 2.654 -1.286 5.752 -1.266 8.501 0.055 c 3.095 1.487 6.417 2.241 9.872 2.241 c 3.455 0 6.777 -0.754 9.872 -2.241 c 2.752 -1.321 5.85 -1.341 8.502 -0.055 c 8.022 3.891 14.74 10.378 18.917 18.267 c 0.517 0.976 0.145 2.187 -0.832 2.703 c -0.976 0.52 -2.186 0.144 -2.703 -0.832 c -3.781 -7.143 -9.864 -13.016 -17.128 -16.538 c -1.548 -0.753 -3.381 -0.731 -5.023 0.061 C 52.964 52.8 49.06 53.687 45 53.687 c -4.06 0 -7.964 -0.887 -11.604 -2.636 c -1.643 -0.789 -3.475 -0.813 -5.023 -0.061 c -6.943 3.367 -12.808 8.884 -16.616 15.604 C 18.539 78.591 31.179 86 45 86 c 2.72 0 5.434 -0.287 8.064 -0.854 c 1.074 -0.231 2.143 0.454 2.376 1.534 c 0.232 1.08 -0.454 2.144 -1.534 2.376 C 50.999 89.683 48.003 90 45 90 z"
          style={{
            stroke: "none",
            strokeWidth: 2,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "white",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          d="M 45 42.645 c -11.757 0 -21.323 -9.565 -21.323 -21.322 S 33.243 0 45 0 c 11.757 0 21.322 9.565 21.322 21.323 S 56.757 42.645 45 42.645 z M 45 4 c -9.552 0 -17.323 7.771 -17.323 17.323 S 35.448 38.645 45 38.645 s 17.322 -7.771 17.322 -17.322 S 54.552 4 45 4 z"
          style={{
            stroke: "none",
            strokeWidth: 2,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "white",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
        <path
          d="M 82.187 81.281 c 0.032 -0.047 0.053 -0.099 0.081 -0.148 c 0.036 -0.065 0.075 -0.127 0.103 -0.196 c 0.027 -0.065 0.042 -0.133 0.062 -0.2 c 0.017 -0.058 0.039 -0.113 0.051 -0.173 c 0.051 -0.258 0.051 -0.525 0 -0.783 c -0.012 -0.06 -0.034 -0.115 -0.051 -0.173 c -0.02 -0.067 -0.035 -0.135 -0.062 -0.2 c -0.028 -0.069 -0.067 -0.131 -0.103 -0.196 c -0.027 -0.049 -0.049 -0.101 -0.081 -0.148 c -0.074 -0.11 -0.157 -0.213 -0.251 -0.307 l -7.827 -7.827 c -0.781 -0.781 -2.047 -0.781 -2.828 0 s -0.781 2.047 0 2.828 l 4.414 4.414 H 65.322 c -4.093 0 -7.422 -3.329 -7.422 -7.422 v -4.313 c 0 -1.104 -0.896 -2 -2 -2 s -2 0.896 -2 2 v 4.313 c 0 6.298 5.124 11.422 11.422 11.422 h 10.373 l -4.414 4.414 c -0.781 0.781 -0.781 2.047 0 2.828 C 71.672 89.805 72.184 90 72.695 90 s 1.023 -0.195 1.414 -0.586 l 7.827 -7.827 C 82.03 81.494 82.113 81.391 82.187 81.281 z"
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 10,
            fill: "white",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform=" matrix(1 0 0 1 0 0) "
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export const ChevronDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
};

export const ChevronUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );
};
