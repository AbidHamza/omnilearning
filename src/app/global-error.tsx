"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#f6f3ec",
          color: "#1d1a16",
          fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div>
          <p style={{ fontSize: "3rem", fontWeight: 700, margin: 0 }}>500</p>
          <p style={{ marginTop: "1rem" }}>
            The server couldn&apos;t build this page.
          </p>
          {error.digest && (
            <p style={{ marginTop: "0.5rem", fontSize: "0.75rem", opacity: 0.7 }}>
              {error.digest}
            </p>
          )}
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "1.5rem",
              padding: "0.6rem 1.4rem",
              borderRadius: "3px",
              border: "1px solid #9b2c1f",
              background: "transparent",
              color: "inherit",
              font: "inherit",
              cursor: "pointer",
            }}
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
