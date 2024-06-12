import { SVGProps } from "react";

const Message = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="22"
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_4_12)">
        <path
          d="M23.1307 1.11621L9.2373 8.90751"
          stroke="black"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M11.9329 20.1836L23.1307 1.11731H1.3916L9.23725 8.90861L11.9329 20.1836Z"
          stroke="black"
          stroke-width="2"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_12">
          <rect width="25" height="22" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Message;
