import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image alt="logo" width={150} height={150} src="/vercel.svg"></Image>
      </div>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/ninjas"}>Ninja Listing</Link>
    </nav>
  );
};

export default NavBar;
