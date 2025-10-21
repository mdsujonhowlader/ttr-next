import { cn } from "@/lib/utils";

export default function AccordionItem({ ques, onToggle, openAcc }) {
  const isOpen = openAcc === ques.id;

  return (
    <div className="max-w-3xl mx-auto transform translate-y-1.5 transition-transform duration-300 my-4">
      <div
        onClick={onToggle}
        className={cn(
          " rounded-t-lg border-gray-200 bg-slate-100 text-slate-900 p-4 flex justify-between items-center cursor-pointer",
          "dark:bg-zinc-900 border-t dark:border-t-slate-600  dark:text-white"
        )}
      >
        <h3>{ques.question}</h3>
        <span className="font-bold">{isOpen ? "-" : "+"}</span>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out",
          isOpen
            ? "max-h-40 p-4 bg-slate-50 dark:bg-zinc-800  shadow-sm"
            : "max-h-0"
        )}
      >
        <p className="leading-relaxed">{ques.answer}</p>
      </div>
    </div>
  );
}
