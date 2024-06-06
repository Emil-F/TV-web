import DiaryEntry from "@/components/diary/DiaryEntry";

export default function Diary() {
  return (
    <main className="container mx-auto">
      <table className="border-separate border-spacing-y-2 w-full">
        <thead>
          <tr className="text-[#9ab] bg-slate-700">
            <th className="p-2 border border-slate-50/50 rounded-tl rounded-bl">
              Month
            </th>
            <th className="border border-slate-50/50 p-2">Day</th>
            <th className="border border-slate-50/50 p-2">Name</th>
            <th className="border border-slate-50/50 p-2 rounded-tr rounded-br">
              Rating
            </th>
            <th className="border border-slate-50/50 p-2">Release</th>
          </tr>
        </thead>
        <tbody className="bg-slate-400 text-center">
          <DiaryEntry />
        </tbody>
      </table>
    </main>
  );
}
