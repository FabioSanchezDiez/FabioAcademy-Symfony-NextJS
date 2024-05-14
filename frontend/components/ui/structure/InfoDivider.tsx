import Button from "../elements/Button";

type InfoDividerProps = {
  children: React.ReactNode;
};

export default function InfoDivider({ children }: InfoDividerProps) {
  return (
    <section className="bg-zinc-800 dark:bg-slate-800 flex justify-between items-center">
      {children}
    </section>
  );
}
