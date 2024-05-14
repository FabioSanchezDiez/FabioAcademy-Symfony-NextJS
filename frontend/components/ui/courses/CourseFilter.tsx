import Checkbox from "../elements/Checkbox";

export default function CourseFilter() {
  return (
    <div className="grid grid-cols-2 sm:flex justify-between rounded-md bg-slate-50 dark:bg-slate-800 mt-6 p-6">
      <Checkbox label="Programacion"></Checkbox>
      <Checkbox label="Desarrollo Web"></Checkbox>
      <Checkbox label="DevOps"></Checkbox>
      <Checkbox label="Mobile"></Checkbox>
    </div>
  );
}
