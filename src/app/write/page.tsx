"use client";

import { Suspense } from "react";
import WriteClient from "./WriteClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading editor...</div>}>
      <WriteClient />
    </Suspense>
  );
}
