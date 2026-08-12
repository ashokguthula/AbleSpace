export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-4 md:px-6">
      <div>
        <h1 className="text-sm font-semibold text-zinc-900">
          Workspace
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
        >
          Search
        </button>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 text-xs font-semibold text-zinc-700">
          A
        </div>
      </div>
    </header>
  );
}