import AppLayout from "@/app/components/Layouts/AppLayout";
import React, { useState } from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <AppLayout>{children}</AppLayout>;
};

export default Layout;
