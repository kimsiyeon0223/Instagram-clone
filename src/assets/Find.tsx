import { SVGProps } from "react";

const Find = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_14_83)">
        <path
          d="M13.5802 14.1298L7.22021 16.6008L9.69921 10.2328L16.0592 7.76184L13.5802 14.1298Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.69921 10.2328L13.5882 14.1218L7.22021 16.6008L9.69921 10.2328Z"
          fill="black"
        />
        <path
          d="M11.6401 22.6818C17.4391 22.6818 22.1401 17.9808 22.1401 12.1818C22.1401 6.38277 17.4391 1.68176 11.6401 1.68176C5.84115 1.68176 1.14014 6.38277 1.14014 12.1818C1.14014 17.9808 5.84115 22.6818 11.6401 22.6818Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_14_83">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Find;
