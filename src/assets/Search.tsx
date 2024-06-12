import { SVGProps } from "react";

const Search = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_14_73)">
        <path
          d="M19.5703 11.1818C19.5703 12.8629 19.0718 14.5063 18.1378 15.9041C17.2038 17.302 15.8763 18.3914 14.3231 19.0348C12.77 19.6781 11.0609 19.8464 9.41205 19.5185C7.76321 19.1905 6.24866 18.3809 5.05991 17.1922C3.87117 16.0035 3.06162 14.4889 2.73365 12.8401C2.40567 11.1912 2.574 9.48213 3.21734 7.92895C3.86069 6.37578 4.95016 5.04826 6.34797 4.11427C7.74578 3.18028 9.38918 2.68176 11.0703 2.68176C13.3247 2.68176 15.4867 3.5773 17.0807 5.17136C18.6748 6.76541 19.5703 8.92742 19.5703 11.1818Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.0813 17.1927L22.5703 22.6817"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_14_73">
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

export default Search;
