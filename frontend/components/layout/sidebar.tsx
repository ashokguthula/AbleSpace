import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-zinc-200 bg-white md:flex md:flex-col">
      <div className="flex h-16 items-center border-b border-zinc-200 px-5">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-sm font-semibold text-white">
            A
          </div>

          <span className="text-sm font-semibold text-zinc-900">
            AbleSpace
          </span>
        </div>
      </div>

      <div className="flex-1 px-3 py-5">
        <p className="px-3 pb-2 text-xs font-medium uppercase tracking-wide text-zinc-400">
          Workspace
        </p>

        <nav className="space-y-1">
          <Link
            href="/tasks"
            className="block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
          >
            Tasks
          </Link>

          <Link
            href="/projects"
            className="block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
          >
            Projects
          </Link>
        </nav>
      </div>

      <div className="border-t border-zinc-200 p-3">
        <Link
          href="/profile"
          className="block rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
        >
          Profile
        </Link>
      </div>
    </aside>
  );
}