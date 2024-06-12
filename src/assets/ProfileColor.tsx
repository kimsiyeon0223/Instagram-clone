import { SVGProps } from "react";

const ProfileColor = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="67"
      height="67"
      viewBox="0 0 67 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="2.45"
        y="2.45"
        width="63.1"
        height="63.1"
        rx="31.55"
        stroke="url(#paint0_linear_5_48)"
        stroke-width="2.9"
      />
      <g clip-path="url(#clip0_5_48)">
        <rect x="6" y="6" width="56" height="56" rx="28" fill="#DBDBDB" />
        <path
          d="M14 58.5C14 52.1487 19.1487 47 25.5 47H43.5C49.8513 47 55 52.1487 55 58.5C55 64.8513 49.8513 70 43.5 70H35H25.5C19.1487 70 14 64.8513 14 58.5Z"
          fill="white"
        />
        <circle cx="33.5" cy="31.5" r="12.5" fill="white" />
      </g>
      <rect
        x="6.35"
        y="6.35"
        width="55.3"
        height="55.3"
        rx="27.65"
        stroke="#C7C6C8"
        stroke-width="0.7"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5_48"
          x1="56"
          y1="14"
          x2="9.49999"
          y2="55.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D600BA" />
          <stop offset="0.189405" stop-color="#FE007E" />
          <stop offset="0.470877" stop-color="#FB1F4F" />
          <stop offset="0.741448" stop-color="#FF8300" />
          <stop offset="0.89282" stop-color="#FAC935" />
        </linearGradient>
        <clipPath id="clip0_5_48">
          <rect x="6" y="6" width="56" height="56" rx="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ProfileColor;
