import { FaSearch } from "react-icons/fa";
export interface SearchboxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const CSearchbox = ({
  value,
  onChange,
  placeholder,
  className
}: SearchboxProps) => {
  return (
    <div className={`flex items-center justify-center relative ${className}`}>
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Search..."}
        className="bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
        />
    </div>
  );
};
