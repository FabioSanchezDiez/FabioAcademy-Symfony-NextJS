type CheckboxProps = {
  label: string;
};

export default function Checkbox({ label }: CheckboxProps) {
  return (
    <div className="flex justify-between items-center p-2 sm:gap-6">
      <label
        htmlFor="check"
        className="font-bold text-zinc-600 dark:text-slate-200"
      >
        {label}
      </label>
      <div className="flex items-center justify-end border-zinc-600 border-2 dark:border-gray-400 rounded-md">
        <input
          className="dark:border-white-400/20 dark:scale-100 border-zinc-600 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-8 h-8"
          type="checkbox"
          name="check"
        />
      </div>
    </div>
  );
}
