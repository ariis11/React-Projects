import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NoProjects from "./components/NoProjects";
import NewProject from "./components/NewProject";
import Project from "./components/Project";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  });

  function handleNewProject(project) {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProject: undefined,
      projects: [
        ...prevState.projects,
        project
      ]
    }));
  }

  function handleSelectedProjectChange(value) {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProject: value
    }));
  }

  function handleDeleteProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProject: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProject
      )
    }));
  }

  function handleAddTask(text) {
    debugger;
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProject,
        id: taskId
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState(prevState => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id)
    }));
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProject);

  let shownPage = (
    <Project 
      project={selectedProject} 
      onDelete={handleDeleteProject} 
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask} 
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProject === undefined) {
    shownPage = <NoProjects onAddProject={() => handleSelectedProjectChange(null)} />;
  } else if (projectsState.selectedProject === null) {
    shownPage = <NewProject onSave={handleNewProject} onCancel={() => handleSelectedProjectChange(undefined)} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
        onAddProject={() => handleSelectedProjectChange(null)} 
        projects={projectsState.projects} 
        selectedProjectId={projectsState.selectedProject}
        onProjectSelect={(id) => handleSelectedProjectChange(id)} 
      />
      {shownPage}
    </main>
  );
}

export default App;
