export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#dce8d8_0%,_transparent_55%),radial-gradient(ellipse_at_bottom_right,_#c5d4e8_0%,_transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-accent-light/10 blur-3xl"
      />

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-accent">
          URA
        </p>

        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Uxbridge Residents Association
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          Representing and supporting our local community. Our new website is on
          its way.
        </p>

        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/60 px-5 py-2.5 text-sm font-medium text-accent backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-light opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Coming soon
        </div>

        <p className="mt-16 text-sm text-muted">
          Questions?{" "}
          <a
            href="mailto:info@uxbridgeresidents.org"
            className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-accent-light hover:decoration-accent-light"
          >
            info@uxbridgeresidents.org
          </a>
        </p>
      </main>

      <footer className="relative z-10 px-6 py-6 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} Uxbridge Residents Association
      </footer>
    </div>
  );
}
