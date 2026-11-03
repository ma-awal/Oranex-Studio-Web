// Hero er glow + grid effect ta ekhon pura page e (fixed, scroll korleo thake).
// Blur filter na, radial-gradient, tai mobile e halka.
export default function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(720px circle at 0% 0%, rgba(242,106,15,0.30), transparent 60%), radial-gradient(620px circle at 100% 32%, rgba(255,162,60,0.14), transparent 60%), radial-gradient(760px circle at 38% 100%, rgba(109,94,252,0.12), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
    </div>
  );
}
