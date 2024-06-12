import { SVGProps } from "react";

const Profile = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_18_110)">
        <rect width="25" height="25" rx="12.5" fill="#DBDBDB" />
        <path
          d="M3.57153 23.4375C3.57153 20.6021 5.87007 18.3036 8.70546 18.3036H16.7412C19.5766 18.3036 21.8751 20.6021 21.8751 23.4375C21.8751 26.2729 19.5766 28.5714 16.7412 28.5714H12.9465H8.70546C5.87007 28.5714 3.57153 26.2729 3.57153 23.4375Z"
          fill="white"
        />
        <circle cx="12.2769" cy="11.3839" r="5.58036" fill="white" />
      </g>
      <rect
        x="0.35"
        y="0.35"
        width="24.3"
        height="24.3"
        rx="12.15"
        stroke="#C7C6C8"
        stroke-width="0.7"
      />
      <defs>
        <clipPath id="clip0_18_110">
          <rect width="25" height="25" rx="12.5" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Profile;
