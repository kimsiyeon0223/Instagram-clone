import { SVGProps } from "react";

const Detail = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_47_529)">
        <path
          d="M12 13.9667C12.8284 13.9667 13.5 13.2951 13.5 12.4667C13.5 11.6382 12.8284 10.9667 12 10.9667C11.1716 10.9667 10.5 11.6382 10.5 12.4667C10.5 13.2951 11.1716 13.9667 12 13.9667Z"
          fill="black"
        />
        <path
          d="M6 13.9667C6.82843 13.9667 7.5 13.2951 7.5 12.4667C7.5 11.6382 6.82843 10.9667 6 10.9667C5.17157 10.9667 4.5 11.6382 4.5 12.4667C4.5 13.2951 5.17157 13.9667 6 13.9667Z"
          fill="black"
        />
        <path
          d="M18 13.9667C18.8284 13.9667 19.5 13.2951 19.5 12.4667C19.5 11.6382 18.8284 10.9667 18 10.9667C17.1716 10.9667 16.5 11.6382 16.5 12.4667C16.5 13.2951 17.1716 13.9667 18 13.9667Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_47_529">
          <rect
            width="16"
            height="4"
            fill="white"
            transform="translate(4 10)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Detail;
