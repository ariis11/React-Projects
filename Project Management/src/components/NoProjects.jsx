import image from "../assets/no-projects.png";

import Button from "./Button";

export default function NoProjects({ onAddProject }) {
    return (
        <div className="w-2/3 mt-32 text-center">
            <img src={image} alt="Empty project list" className="w-20 h-20 object-contain mx-auto" />
            <h2 className="text-stone-500 text-xl font-bold my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one.</p>
            <p className="mt-8">
                <Button onClick={onAddProject}>Create new project</Button>
            </p>
        </div>
    );
}