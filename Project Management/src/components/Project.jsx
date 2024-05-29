import { useRef } from 'react';

import Tasks from './Tasks';

export default function Project({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
    // const taskText = useRef();

    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    // function handleAddTask() {
    //     onAddTask(taskText.current.value);
    // }

    return (
        <div className="mt-14 w-2/3">
            <header className="border-b-2 border-stone-300 pb-4 mb-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-700 mb-2">{project.title}</h1>
                    <button
                        className="text-stone-600 hover:text-stone-950"
                        onClick={onDelete}
                    >
                        Delete
                    </button>
                </div>
                <p className="text-stone-400 mb-4">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
        </div>
    );
}