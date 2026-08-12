const projects = [
  {
    id: 1,
    name: "Website Redesign",
    priority: "High",
    lead: "AS",
    dueDate: "Sep 20",
  },
  {
    id: 2,
    name: "Mobile Application",
    priority: "Medium",
    lead: "AK",
    dueDate: "Sep 28",
  },
  {
    id: 3,
    name: "API Documentation",
    priority: "Low",
    lead: "AS",
    dueDate: "Oct 03",
  },
  {
    id: 4,
    name: "Analytics Dashboard",
    priority: "Medium",
    lead: "RK",
    dueDate: "Oct 08",
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      {/* Page heading */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Projects
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Organize and manage your workspace projects.
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
        >
          + Add Project
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400"
          />

          <button
            type="button"
            className="rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
          >
            Filter
          </button>
        </div>
      </div>

      {/* Projects table */}
      <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-[720px] w-full border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50/70">
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Project
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Priority
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Lead
                </th>

                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Due Date
                </th>

                <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="border-b border-zinc-100 last:border-b-0 hover:bg-zinc-50/50"
                >
                  <td className="px-5 py-4">
                    <div>
                      <p className="text-sm font-medium text-zinc-900">
                        {project.name}
                      </p>

                      <p className="mt-1 text-xs text-zinc-500">
                        Project #{project.id}
                      </p>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span className="inline-flex rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">
                      {project.priority}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 text-xs font-semibold text-zinc-700">
                      {project.lead}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-zinc-600">
                    {project.dueDate}
                  </td>

                  <td className="px-5 py-4 text-right">
                    <button
                      type="button"
                      className="rounded-lg px-3 py-2 text-sm text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900"
                    >
                      •••
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}