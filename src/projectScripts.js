import checkedIcon from './images/checkbox-marked-outline.svg';
import uncheckedIcon from './images/checkbox-blank-outline.svg';
import projectIcon from './images/format-list-bulleted.svg';

console.log('project_script is working!');

// Format for project objects
function Project(title, tasks) {
  this.title = title;
  this.tasks = tasks;
}

// Used to display list of projects in the nav bar
function listProjects(projects) {
  const projectItems = [];
  projects.forEach((project) => {
    const projectItem = document.createElement('div');
    projectItem.className = 'nav-item';
    const projectItemImg = document.createElement('img');
    projectItemImg.src = projectIcon;
    projectItem.textContent = project.title;
    projectItem.insertBefore(projectItemImg, projectItem.firstChild);
    projectItems.push(projectItem);
  });
  return projectItems;
}

// Used to display project material in content seciton
function parseProject(project, event) {
  const projectTitle = document.createElement('div');
  projectTitle.className = 'matter-header';
  projectTitle.textContent = project.title;

  const projectTasks = document.createElement('div');
  projectTasks.className = 'list';
  project.tasks.forEach((task) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'list-item';
    const taskItemImg = document.createElement('img');
    if (task[1] == true) {
      taskItemImg.src = checkedIcon;
    } else {
      taskItemImg.src = uncheckedIcon;
    }
    taskItemImg.addEventListener('click', function (e) {
      if (this.src == checkedIcon) {
        this.src = uncheckedIcon;
      } else {
        this.src = checkedIcon;
      }
    });
    taskItem.textContent = task[0];
    taskItem.insertBefore(taskItemImg, taskItem.firstChild);
    projectTasks.appendChild(taskItem);
  });
  return [projectTitle, projectTasks];
}

export {
  Project,
  listProjects,
  parseProject,
};
