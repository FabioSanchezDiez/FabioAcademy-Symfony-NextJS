import Checkbox from "../elements/Checkbox";

type CourseFilter = {
  options: string[];
};

export default function CourseFilter({ options }: CourseFilter) {
  return (
    <div className="grid grid-cols-2 sm:flex justify-around rounded-md bg-slate-50 dark:bg-slate-800 my-12 p-4 shadow-xl">
      {options.map((o) => (
        <Checkbox label={o} key={o}></Checkbox>
      ))}
    </div>
  );
}
