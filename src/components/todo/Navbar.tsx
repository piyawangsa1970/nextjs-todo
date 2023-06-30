import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/todo"}>
        GTCoding.
      </Link>
      <Link className="bg-white p-2" href={"/todo/add"}>
          Add Topic
      </Link>

    </nav>
  )
}

export default Navbar