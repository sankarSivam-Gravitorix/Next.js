import Image from "next/image";
import Link from "next/link";
import Productcard from "./components/productcard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <Productcard/>
    </main>
  );
}
