import { SVGProps } from "react";

const Bookmark = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_47_554)">
        <path
          d="M24.36 24.36L15.08 15.5904L5.80005 24.36V3.47998H24.36V24.36Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_47_554">
          <rect
            width="22.04"
            height="24.36"
            fill="white"
            transform="translate(3.47998 2.31995)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Bookmark;
