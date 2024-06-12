import { SVGProps } from "react";

const Menu = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_14_60)">
        <path
          d="M3.70972 4.96667H21.7097"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.70972 12.9667H21.7097"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.70972 20.9667H21.7097"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_14_60">
          <rect
            width="21"
            height="19"
            fill="white"
            transform="translate(2 3)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Menu;
