"use client";
import React from "react";
import { useRouter, userouter } from "next/navigation";

const SettingsPage = () => {
  const router = useRouter();
  const back = () => {
    router.push("/dashboard");
  };
  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      Settings page
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
    </div>
  );
};

export default SettingsPage;
