import { SVGProps } from "react";

const Add = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_14_47)">
        <path
          d="M2.42847 12.0968V15.5468C2.42847 18.3958 3.12647 19.5518 4.03447 20.4908C4.97447 21.3998 6.13247 22.0988 8.98047 22.0988H15.8765C18.7245 22.0988 19.8825 21.3988 20.8225 20.4908C21.7305 19.5518 22.4285 18.3968 22.4285 15.5468V8.6488C22.4285 5.7998 21.7305 4.6428 20.8225 3.7038C19.8825 2.7968 18.7245 2.0968 15.8765 2.0968H8.98047C6.13247 2.0968 4.97447 2.7958 4.03447 3.7038C3.12647 4.6438 2.42847 5.7998 2.42847 8.6488V12.0968Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.97339 12.0978H17.8834"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.4314 6.64172V17.5517"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_14_47">
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

export default Add;
