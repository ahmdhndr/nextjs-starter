"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { NextUIProvider } from "@nextui-org/react";

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
