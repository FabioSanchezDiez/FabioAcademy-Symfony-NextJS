type ButtonProps = {
  textContent: string;
  textColor: string;
  bgColor: string;
  onClick?: () => void;
};

export default function Button({
  textContent,
  textColor,
  bgColor,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${bgColor} ${textColor} w-full p-3 font-bold hover:text-gray-200`}
      onClick={onClick}
    >
      {textContent}
    </button>
  );
}
