export default function Tag({
  children,
  bgColor,
}: {
  children: React.ReactNode;
  bgColor: string;
}) {
  return (
    <div className={`${bgColor} p-2 rounded-md text-white text-sm`}>
      {children}
    </div>
  );
}
