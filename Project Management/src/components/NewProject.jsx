import { useRef } from 'react';

import Input from "./Input";
import Modal from './Modal';
import Button from './Button';

export default function NewProject({ onSave, onCancel }) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }

        onSave({
            id: Math.random(),
            title:  enteredTitle,
            description: enteredDescription, 
            dueDate: enteredDueDate
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption='Close'>
                <h2 className="font-bold text-lg text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a value.</p>
                <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="w-2/3 my-10">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <button
                        className="py-2 px-6 rounded-lg text-stone-800 hover:text-stone-950"
                        onClick={onCancel}
                    >Cancel</button>
                    <button
                        className="bg-stone-800 py-2 px-6 rounded-lg text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}
                    >Save</button>
                </menu>
                <div>
                    <Input title='Title' type='text' ref={title} />
                    <Input title='Description' isTextArea ref={description} />
                    <Input title='Due Date' type='date' ref={dueDate} />
                </div>
            </div>
        </>
    );
}