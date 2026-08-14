type TaskDetailsPageProps = {
    params: Promise<{
        id: string;
    
    }>;
};

export default async function TaskDetailsPage({
    params,
}: TaskDetailsPageProps){
    const { id } = await params;

    return(
        <section className="space-y-6">
            {/* Breadcrumb*/}
            <div className="flex items-center gap-2 text-sm text-zinc-500">
                <a href="/tasks" className="hover: text-zinc-900">Tasks</a>

                <span>/</span>

                <span className="text-zinc-900">Tasks#{id}</span>
            </div>

            {/* Header*/}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                    <p className="text-sm font-medium text-zinc-500">
                        Tas Details
                    </p>

                    <h1 className="mt-1 text-3Xl font-semibold tracking-tight text-zinc-900">
                        Write APIDocumentation
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                        Prepare and organize the API documentation for the current project and make sure the required endpoints are cleaarly documented.
                    </p>
                </div>

                <div className="flex gap-2">
                    <button
                        type="button"
                        className="rounded-lg border border-zinc-900 px-4 py-2.5 text-sm text-zinc-700 hover-zinc-50"
                    >
                        Edit
                    </button>

                    <button 
                        type="button"
                        className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
                    >
                        Mark Complete
                    </button>
                </div>
            </div>

            {/* Main content*/}
            <div className="grid pag-6 xl:grid-cols-[1fr_320px]">
                {/*Main details*/}
                <div className="space-y-6">
                    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                        <h2 className="text-base font-semibold text-zinc-900">
                            Details
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-zinc-600">
                            This task contains the API documentation requirements for the project.
                            Include endpoint descriptions, request parameters,reponse structures,
                            and relevent examples.
                        </p>
                    </div>

                    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <h2 className="text-base font-semibold text-zinc-9000">
                                Subtasks
                            </h2>

                            <button
                                type="button"
                                className="text-sm font-medium text-zinc-950">
                                + Add
                            </button>
                        </div>

                        <div className="mt-4 space-y-3">
                            {[
                                "Document authentication endpoints",
                                "Document task endpoints",
                                "Add request examples",
                            ].map((subtask) => (
                                <label
                                    key={subtask}
                                    className="flex items-center gap-3 rounded-lg border border-zinc-100 p-3 hover:bg-zinc-50"
                                >
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-zinc-300"
                                    />

                                    <span className="text-smtext-zinc-700">
                                        {subtask}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                    
                    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                        <h2 className="text-base font-semibold text-zinc-900">
                            Activity
                        </h2>
                        <div className="mt-4 space-y-4">
                            <div className="border-1-2 border-zinc-200 pl-4">
                                <p className="text-sm text-zinc-700">
                                    Ashok created this task.
                                </p>

                                <p className="mt-1 test-xs text-zinc-400">
                                    Today
                                </p>
                            </div>

                            <div className="border-1-2 border-zinc-200 pl-4">
                                <p className="\text-sm text-zinc-700">
                                    Priority was changed to High.
                                </p>

                                <p className="mt-1 text-xs text-zinc-400">
                                    Yesterday
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Properties */}
                <aside className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                    <h2 className="text-base font-semibold text-zinc-900">
                        Properties
                    </h2>

                    <div className="mt-5 space-y-5">
                        <div>
                            <p className="text-xs font-medium text-zinc-500">
                                Status
                            </p>

                            <span className="mt-2 inline-flex rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">
                                Doing
                            </span>
                        </div>

                        <div>
                            <p className="text-xs font-medium text-zinc-500">
                                Priority
                            </p>

                            <span className="mt-2 inline-flex rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">
                                High
                            </span>
                        </div>

                        <div>
                            <p className="text-xs font-medium text-zinc-500">
                                Assignee
                            </p>

                            <div className="mt-2 flex items-center gap-2">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-white">
                                    AS
                                </span>

                                <span className="text-sm text-zinc-700">
                                    Ashok
                                </span>
                            </div>
                        </div>

                        <div>
                            <p className="text-xs font-medium text-zinc-500">
                                Due Date
                            </p>

                            <p className="mt-2 text-sm text-zinc-700">
                                Sept 15, 2026
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-medium text-zinc-500">
                                Labels
                            </p>

                            <div className="mt-2 flex flex-wraap gap-2">
                                <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600">
                                    Backend
                                </span>

                                <span className="rounded-full bg-zinc-100 px-2.5 py-1text-xs text-zinc-600">
                                    Documentation
                                </span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}