type FrameProps = {
  children: React.ReactNode;
};
export function Frame({ children }: FrameProps) {
  return (
    <>
      <header className="flex items-center gap-1 h-14 border-muted bg-muted rounded-t-lg px-4 border">
        <div className="size-4 border rounded-full bg-red-400" />
        <div className="size-4 border rounded-full bg-yellow-400" />
        <div className="size-4 border rounded-full bg-green-400" />
      </header>
      <div className="border-x border-b border-muted p-4">{children}</div>
    </>
  );
}
