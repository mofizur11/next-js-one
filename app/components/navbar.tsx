import Link from "next/link";
export default function NavBar() {
  return (
    <div>
      <Link href="/">Home </Link>
      <Link href="/about">About </Link>
      <Link href="/contact">Contact </Link>
      <Link href="/new/dashboard">DashBoard </Link>
      <Link href="/post">Post</Link>
    </div>
  );
}
