import { SVGProps } from "react";

const Comment = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_5_73)">
        <path
          d="M20.7845 17.9747C21.9996 15.8728 22.408 13.4004 21.9333 11.0194C21.4586 8.63839 20.1333 6.51164 18.205 5.03645C16.2767 3.56126 13.8773 2.83853 11.455 3.00327C9.03278 3.16802 6.75334 4.20898 5.04255 5.93168C3.33176 7.65439 2.30665 9.94099 2.15872 12.3644C2.01078 14.7877 2.75014 17.182 4.23868 19.1C5.72722 21.018 7.86311 22.3285 10.2473 22.7867C12.6316 23.2449 15.1011 22.8194 17.1945 21.5897L22.1285 22.9667L20.7845 17.9747Z"
          stroke="black"
          stroke-width="2"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_73">
          <rect
            width="23"
            height="23"
            fill="white"
            transform="translate(1 1)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Comment;
