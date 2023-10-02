import './style.css';
import { add } from 'date-fns';
import taskIcon from './images/inbox.svg';
import todayIcon from './images/calendar-today.svg';
import weekIcon from './images/calendar-week.svg';
import addIcon from './images/plus-circle.svg';
import { Project, listProjects, parseProject } from './projectScripts';

console.log('index.js is working!');

// Fill home page
function content() {
  const content = document.createElement('div');
  content.id = 'content';

  // header
  const header = document.createElement('div');
  header.id = 'header';
  header.textContent = 'Todo List';
  content.appendChild(header);

  // main
  const main = document.createElement('div');
  main.id = 'main';
  content.appendChild(main);

  const nav = document.createElement('div');
  nav.id = 'nav';
  main.appendChild(nav);

  for (let i = 0; i < 2; i++) {
    const subnav = document.createElement('div');
    subnav.className = 'sub-nav';
    nav.appendChild(subnav);
  }

  const home = document.createElement('div');
  home.className = 'sub-nav-header';
  home.textContent = 'Home';
  nav.querySelector('.sub-nav').appendChild(home);

  // Add Home Items
  const homeItems = [['All Tasks', taskIcon], ['Today', todayIcon], ['Next 7 Days', weekIcon]];
  for (let i = 0; i < 3; i++) {
    const homeItem = document.createElement('div');
    homeItem.className = 'nav-item';
    const homeItemImg = document.createElement('img');
    homeItemImg.src = homeItems[i][1];
    homeItem.textContent = homeItems[i][0];
    homeItem.insertBefore(homeItemImg, homeItem.firstChild);
    nav.querySelector('.sub-nav').appendChild(homeItem);
  }

  const projects = document.createElement('div');
  projects.className = 'sub-nav-header';
  projects.textContent = 'Projects';
  nav.querySelector('.sub-nav:nth-child(2)').appendChild(projects);

  const matter = document.createElement('div');
  matter.id = 'matter';
  main.appendChild(matter);

  // Add 'Add Project' to Projects
  const addProjects = document.createElement('div');
  addProjects.className = 'add-item';
  const addProjectsImg = document.createElement('img');
  addProjectsImg.src = addIcon;
  addProjects.textContent = 'Add Project';
  addProjects.insertBefore(addProjectsImg, addProjects.firstChild);
  nav.querySelector('.sub-nav:nth-child(2)').appendChild(addProjects);

  // Add function to 'Add Project'
  // addProjects.addEventListener('click', TBD);

  // footer
  const footer = document.createElement('div');
  footer.id = 'footer';
  footer.textContent = 'Last updated September 2023';
  content.appendChild(footer);

  return content;
}
document.body.appendChild(content());

// Holds all projects
const allProjects = [];
// Create default project
const defaultProject = new Project('Default Project', [
  ['eat', true],
  ['sleep', false],
]);
// Add default project to all projects
allProjects.push(defaultProject);
const projectItems = listProjects(allProjects);
projectItems.forEach((project) => {
  document.getElementById('nav').querySelector('.sub-nav:nth-child(2)').insertBefore(project, document.getElementById('nav').querySelector('.sub-nav:nth-child(2)').lastChild);
});
// Display default project
const defaultProjectMatter = parseProject(defaultProject);
document.getElementById('matter').appendChild(defaultProjectMatter[0]);
document.getElementById('matter').appendChild(defaultProjectMatter[1]);
