import { useState } from 'react';

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === '') {
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return (
        <div className="flex items-center gap-2">
            <input 
                type='text'
                onChange={handleChange}
                value={enteredTask}
                className="bg-stone-200 rounded-sm px-2 py-1 w-64"></input>
            <button 
                className="text-stone-700 text-sm py-2 px-4 hover:text-stone-950"
                onClick={handleClick}
            >
                Add Task
            </button>
        </div>
    );
}