import { Github } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
const RightChevronCircle = ({ colorTheme = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-right-circle cursor-pointer"
  >
    <circle
      fill={colorTheme === "dark" ? "#444" : "#eee"}
      cx="12"
      cy="12"
      r="10"
      stroke={colorTheme === "dark" ? "#444" : "#eee"}
    />
    <path
      d="m10 8 4 4-4 4"
      stroke={
        colorTheme === "dark" ? "rgba(255,255,255,0.5)" : "blackest/[0.5]"
      }
      className="group-hover:animate-move-right"
    />
  </svg>
);
const PlusCircle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-plus-circle cursor-pointer"
  >
    <circle fill="blackest" strokeWidth="2" cx="12" cy="12" r="10" />
    <path d="M8 12h8" />
    <path d="M12 8v8" />
  </svg>
);
const DeleteCircle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#999"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-x-circle cursor-pointer"
  >
    <circle stroke="#444" fill="#444" cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);
const EyeOn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-eye"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const EyeOff = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-eye-off"
  >
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);

const Tooltip = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgba(255,255,255,0.5)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-help-circle cursor-pointer"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </svg>
);

export const iconsHelper = {
  Tooltip,
  RightChevronCircle,
  PlusCircle,
  DeleteCircle,
  EyeOn,
  EyeOff,
  Github,
  Facebook,
  Linkedin,
};
