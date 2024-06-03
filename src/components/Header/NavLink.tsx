import Link from "next/link";

type NavLink = {
  href: string;
  name: string;
};

export default function NavLink({ href, name }: NavLink) {
  return (
    <Link
      href={href}
      className="hover:text-white hover:bg-slate-600/80 hover:shadow-inner text-[#9ab] font-bold p-2 px-4 rounded"
    >
      {name}
    </Link>
  );
}
