import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className=" bg-slate-700 p-3 border-b border-slate-50/30">
      <div className="container mx-auto flex gap-5">
        <NavLink href="/" name="Home" />
        <NavLink href="/diary" name="Diary" />
      </div>
    </header>
  );
}
