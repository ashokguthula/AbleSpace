"use client";

import { useState } from "react";

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

export default function TaskWorkspace() {
  const [view, setView] = useState<"board" | "list">("board");

  return (
    <div className="space-y-4">
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

        <div className="flex items-center gap-1 rounded-lg bg-zinc-100 p-1">
          <button
            type="button"
            onClick={() => setView("board")}
            className={`rounded-md px-3 py-2 text-sm font-medium ${
              view === "board"
                ? "bg-white text-zinc-900 shadow-sm"
                : "text-zinc-500"
            }`}
          >
            Board
          </button>

          <button
            type="button"
            onClick={() => setView("list")}
            className={`rounded-md px-3 py-2 text-sm font-medium ${
              view === "list"
                ? "bg-white text-zinc-900 shadow-sm"
                : "text-zinc-500"
            }`}
          >
            List
          </button>
        </div>
      </div>

      {view === "board" ? <BoardView /> : <ListView />}
    </div>
  );
}

function BoardView() {
  return (
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
              className="rounded-md px-2 py-1 text-lg text-zinc-400 hover:bg-white"
            >
              +
            </button>
          </div>

          <div className="space-y-3">
            {column.tasks.map((task) => (
              <article
                key={task.id}
                className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-sm font-medium text-zinc-900">
                    {task.title}
                  </h4>

                  <button
                    type="button"
                    className="text-zinc-400 hover:text-zinc-700"
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
  );
}

function ListView() {
  const tasks = columns.flatMap((column) =>
    column.tasks.map((task) => ({
      ...task,
      status: column.title,
    })),
  );

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50">
              <th className="px-5 py-4 text-left text-xs font-semibold text-zinc-500">
                Task
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold text-zinc-500">
                Status
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold text-zinc-500">
                Priority
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold text-zinc-500">
                Due Date
              </th>
              <th className="px-5 py-4 text-left text-xs font-semibold text-zinc-500">
                Member
              </th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr
                key={task.id}
                className="border-b border-zinc-100 last:border-b-0 hover:bg-zinc-50"
              >
                <td className="px-5 py-4 text-sm font-medium text-zinc-900">
                  {task.title}
                </td>

                <td className="px-5 py-4 text-sm text-zinc-600">
                  {task.status}
                </td>

                <td className="px-5 py-4 text-sm text-zinc-600">
                  {task.priority}
                </td>

                <td className="px-5 py-4 text-sm text-zinc-600">
                  {task.dueDate}
                </td>

                <td className="px-5 py-4 text-sm text-zinc-600">
                  {task.member}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}