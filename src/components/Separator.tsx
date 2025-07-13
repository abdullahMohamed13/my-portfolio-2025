import { FaEllipsisH } from "react-icons/fa";

const separatorStyling = `flex-1 h-0.5 w-25 sm:w-50 rounded-2xl bg-white opacity-50`

export function Separator() {
  return (
    <div className="my-4 flex items-center gap-5">
      <div className={separatorStyling}></div>
      <FaEllipsisH className="text-[var(--accent)]" />
      <div className={separatorStyling}></div>
    </div>
  );
}
