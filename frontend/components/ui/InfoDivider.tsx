import Button from "./Button";

type InfoDividerProps = {
  children: React.ReactNode;
};

export default function InfoDivider({ children }: InfoDividerProps) {
  return (
    <section className="bg-zinc-900 dark:bg-slate-700 flex justify-between items-center">
      {children}
    </section>
  );
}
