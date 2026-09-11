"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#0b0f0c",
          color: "#e8efe9",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div>
          <p style={{ fontSize: "3rem", fontWeight: 700, margin: 0 }}>500</p>
          <p style={{ marginTop: "1rem" }}>
            Le serveur n&apos;a pas pu construire la page.
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
              border: "1px solid #2f3a33",
              background: "transparent",
              color: "inherit",
              font: "inherit",
              cursor: "pointer",
            }}
          >
            Recharger
          </button>
        </div>
      </body>
    </html>
  );
}
