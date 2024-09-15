"use client";
 import React from "react";
 
import Sidebar from "@/app/components/Sidebar/Sidebar";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-screen h-screen bg-slate-50  flex gap-4 ">
      <Sidebar />
      <div className="flex-1 py-4 pe-4">{children}</div>
    </div>
  );
};

export default AppLayout;
