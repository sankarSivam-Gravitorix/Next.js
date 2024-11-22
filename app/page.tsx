import Image from "next/image";
import Link from "next/link";
import Productcard from "./components/productcard";

export default function Home() {
  return (
    <main style={{padding:'10px',display:'flex',gap:'10px'}}>
     
      <Link style={{color:'blue',textDecorationLine:'underline'}} href="/users">Users</Link>
      
      <Link style={{color:'blue',textDecorationLine:'underline'}} href="/dashboard">Dashboard</Link>
      <Link style={{color:'blue',textDecorationLine:'underline'}} href="/dashboard/settings">Settings</Link>
      {/* <Productcard/> */}
    </main>
  );
}
