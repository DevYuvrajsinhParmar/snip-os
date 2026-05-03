export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-background flex h-full items-center justify-center p-4">
      {children}
    </main>
  );
}
