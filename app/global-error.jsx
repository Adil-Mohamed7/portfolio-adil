"use client";

import Error from "next/error";
import { useEffect } from "react";

// Remove the type annotation
export default function GlobalError({ error }) {
  useEffect(() => {
    console.error("Global error caught:", error);
  }, [error]);

  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
