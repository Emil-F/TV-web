import Image from "next/image";
import Rating from "./Rating";

export default function DiaryEntry() {
  return (
    <tr className="text-[#c4def9] bg-slate-700 font-bold">
      <td className="border border-slate-50/20 p-2">Juni</td>
      <td className="border border-slate-50/20 p-2">4</td>
      <td className="border border-slate-50/20 p-2 flex items-center gap-5">
        <div className="inline-block box-border">
          <Image
            alt=""
            width={100}
            height={150}
            src={
              "https://image.tmdb.org/t/p/original/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg"
            }
            // className="rounded border border-white outline outline-offset-0 hover:outline hover:outline-green-500 hover:outline-4 hover:-outline-offset-4 transition-all ease-in-out"
            className="rounded border border-white outline outline-1 outline-transparent -outline-offset-1 hover:outline-8 hover:-outline-offset-8 hover:outline-green-500 transition-all ease-in-out duration-200"
          />
        </div>
        <p>Game of Thrones</p>
      </td>
      <td className="border border-slate-50/20 w-1/5">
        <Rating />
      </td>
      <td className="border border-slate-50/20 p-2">2011</td>
    </tr>
  );
}
