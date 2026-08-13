import TaskWorkspace from "@/components/tasks/TaskWorkspace";

export default function TasksPage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Tasks
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Manage and organize your workspace tasks .
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
        >
          + Add Task
        </button>
      </div>

      <TaskWorkspace />
    </section>
  );
}