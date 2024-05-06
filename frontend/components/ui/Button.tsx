type ButtonProps = {
  textContent: string;
  textColor: string;
  bgColor: string;
};

export default function Button({
  textContent,
  textColor,
  bgColor,
}: ButtonProps) {
  return (
    <button
      className={`${bgColor} ${textColor} w-full p-3 font-bold hover:text-gray-200`}
    >
      {textContent}
    </button>
  );
}
