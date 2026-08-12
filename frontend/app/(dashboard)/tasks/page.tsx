const columns = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: 1,
        title: "Design homepage",
        priority: "High",
        dueDate: "Sep 12",
        label: "Design",
        member: "AS",
      },
      {
        id: 2,
        title: "Prepare API documentation",
        priority: "Medium",
        dueDate: "Sep 14",
        label: "Backend",
        member: "AK",
      },
    ],
  },
  {
    id: "doing",
    title: "Doing",
    tasks: [
      {
        id: 3,
        title: "Build login flow",
        priority: "High",
        dueDate: "Sep 15",
        label: "Development",
        member: "AS",
      },
    ],
  },
  {
    id: "completed",
    title: "Completed",
    tasks: [
      {
        id: 4,
        title: "Create project structure",
        priority: "Low",
        dueDate: "Sep 10",
        label: "Setup",
        member: "AK",
      },
    ],
  },
  {
    id: "on-hold",
    title: "On Hold",
    tasks: [
      {
        id: 5,
        title: "Review analytics requirements",
        priority: "Medium",
        dueDate: "Sep 18",
        label: "Review",
        member: "AS",
      },
    ],
  },
];

export default function TasksPage() {
  return (
    <section className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Tasks
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Manage and organize your workspace tasks.
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
        >
          + Add Task
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400"
          />

          <button
            type="button"
            className="rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
          >
            Filter
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-lg bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-900"
          >
            Board
          </button>

          <button
            type="button"
            className="rounded-lg px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-50"
          >
            List
          </button>
        </div>
      </div>

      {/* Board */}
      <div className="grid gap-4 xl:grid-cols-4">
        {columns.map((column) => (
          <div
            key={column.id}
            className="min-h-[420px] rounded-xl border border-zinc-200 bg-zinc-100/70 p-3"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-zinc-900">
                  {column.title}
                </h3>

                <span className="rounded-full bg-white px-2 py-0.5 text-xs text-zinc-500">
                  {column.tasks.length}
                </span>
              </div>

              <button
                type="button"
                className="rounded-md px-2 py-1 text-lg leading-none text-zinc-400 hover:bg-white hover:text-zinc-700"
                aria-label={`Add task to ${column.title}`}
              >
                +
              </button>
            </div>

            <div className="space-y-3">
              {column.tasks.map((task) => (
                <article
                  key={task.id}
                  className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-sm font-medium text-zinc-900">
                      {task.title}
                    </h4>

                    <button
                      type="button"
                      className="text-zinc-400 hover:text-zinc-700"
                      aria-label={`More options for ${task.title}`}
                    >
                      •••
                    </button>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600">
                      {task.label}
                    </span>

                    <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600">
                      {task.priority}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3">
                    <span className="text-xs text-zinc-500">
                      Due {task.dueDate}
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-200 text-[11px] font-semibold text-zinc-700">
                      {task.member}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}