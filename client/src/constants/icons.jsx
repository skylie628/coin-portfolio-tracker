const RightChevronCircle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-right-circle cursor-pointer"
  >
    <circle fill="#fff" cx="12" cy="12" r="10" stroke="white" />
    <path d="m10 8 4 4-4 4" />
  </svg>
);
const PlusCircle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-x-circle cursor-pointer"
  >
    <circle stroke="#fff" fill="#fff" cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);
export const iconsHelper = { RightChevronCircle, PlusCircle, DeleteCircle };
