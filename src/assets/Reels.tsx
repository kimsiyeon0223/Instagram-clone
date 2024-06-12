import { SVGProps } from "react";

const Reels = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_14_17)">
        <path
          d="M2.75928 7.68176H22.6602"
          stroke="black"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M14.2141 2.68079L17.0721 7.68179"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.91724 2.78979L10.7122 7.6818"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.71021 12.6808V16.1298C2.71021 18.9788 3.40821 20.1358 4.31621 21.0748C5.25621 21.9828 6.41421 22.6818 9.26221 22.6818H16.1582C19.0062 22.6818 20.1642 21.9828 21.1042 21.0748C22.0122 20.1358 22.7102 18.9788 22.7102 16.1298V9.23181C22.7102 6.38381 22.0122 5.22581 21.1042 4.28681C20.1642 3.37881 19.0062 2.67981 16.1582 2.67981H9.26221C6.41421 2.67981 5.25621 3.37881 4.31621 4.28681C3.40821 5.22581 2.71021 6.38381 2.71021 9.23181V12.6808Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.4733 18.3438C10.3352 18.264 10.2205 18.1493 10.1408 18.0112C10.0611 17.873 10.0192 17.7163 10.0193 17.5568V12.3098C10.0191 12.1501 10.061 11.9932 10.1407 11.8548C10.2205 11.7164 10.3353 11.6015 10.4736 11.5216C10.6119 11.4417 10.7688 11.3997 10.9285 11.3997C11.0882 11.3997 11.2451 11.4419 11.3833 11.5218L15.9283 14.1458C16.0667 14.2255 16.1815 14.3403 16.2614 14.4785C16.3413 14.6168 16.3833 14.7736 16.3833 14.9333C16.3833 15.093 16.3413 15.2498 16.2614 15.388C16.1815 15.5263 16.0667 15.641 15.9283 15.7208L11.3833 18.3448C11.245 18.4247 11.0881 18.4667 10.9283 18.4667C10.7686 18.4667 10.6116 18.4247 10.4733 18.3448V18.3438Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_14_17">
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

export default Reels;
