import Button from "./Button";

export default function Sidebar({ onAddProject, projects, selectedProjectId, onProjectSelect }) {
    return (
        <aside className="px-8 py-16 bg-stone-950  text-stone-50 w-1/3 rounded-r-xl md:w-72">
            <h2 className="font-bold text-lg uppercase">
                Your projects
            </h2>
            <div>
                <Button onClick={onAddProject}>+ Add Project</Button>
            </div>
            <ul>
                {projects.map(project => {
                    let buttonClasses = "w-full py-1 text-left px-2 rounded-sm hover:bg-stone-800 hover:text-stone-200";

                    if (project.id === selectedProjectId) {
                        buttonClasses += ' bg-stone-800 text-stone-200';
                    } else {
                        buttonClasses += ' text-stone-400';
                    }
                    
                    return (
                        <li key={project.id}>
                            <button 
                                className={buttonClasses}
                                onClick={() => onProjectSelect(project.id)}
                            >
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}