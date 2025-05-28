"use client";

import Head from "next/head";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Portfolio - Adil</title>
        <meta name="description" content="Welcome to my portfolio!" />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem", margin: "14px 0" }}>
          Welcome to My Portfolio
        </h1>

        <p>This is your portfolio homepage.</p>
        
        <button
          type="button"
          style={{
            padding: "12px",
            cursor: "pointer",
            backgroundColor: "#0070f3",
            borderRadius: "4px",
            border: "none",
            color: "white",
            fontSize: "14px",
            margin: "18px",
          }}
          onClick={() => {
            console.log("Button clicked!");
            // Add your custom functionality here
          }}
        >
          Get Started
        </button>

        <p>
          Explore my projects and learn more about my work.
        </p>
        
        <p style={{ marginTop: "24px" }}>
          Built with{" "}
          <a href="https://nextjs.org/">
            Next.js
          </a>
        </p>
      </main>
    </div>
  );
}
