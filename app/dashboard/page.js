'use client'
import React from "react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
    const router = useRouter();
  const back = () => {
    router.push("/");
  };
  return <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>Dashboard page

<button
      onClick={back}
        style={{
          background: "blue",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          width: "55px",
        }}
      >
        Back
      </button>
  </div>;
};

export default DashboardPage;