import Link from "next/Link";
import Nav from "./Nav";
export default function Header() {
  return (
    <>
      <div className="bar">
        <Link href="/">Sick Fits</Link>
      </div>
      <div className="sub-bar">Search</div>
      <Nav />
    </>
  );
}
