import { IoArrowBack } from "react-icons/io5";
interface IProps {
  onClick: () => void;
}
export const BackButton = ({ onClick }: IProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-white/90 hover:bg-white backdrop-blur-sm border border-pink-200 rounded-full px-6 py-3 text-gray-800 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      aria-label="Back to Wedding"
    >
      <IoArrowBack className="w-4 h-4" />
      <span className="hidden sm:inline">Back to Wedding</span>
      <span className="sm:hidden">Back</span>
    </button>
  );
};
