import './style.css';
import taskIcon from './images/inbox.svg';

console.log('index.js is working!');
console.log('updates are coming');

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

  const home1 = document.createElement('div');
  home1.className = 'nav-item';
  const home1Img = document.createElement('img');
  home1Img.src = taskIcon;
  home1.textContent = 'All Tasks';
  home1.insertBefore(home1Img, home1.firstChild);

  nav.querySelector('.sub-nav').appendChild(home);
  nav.querySelector('.sub-nav').appendChild(home1);

  const projects = document.createElement('div');
  projects.className = 'sub-nav-header';
  projects.textContent = 'Projects';
  nav.querySelector('.sub-nav:nth-child(2)').appendChild(projects);

  const matter = document.createElement('div');
  matter.id = 'matter';
  main.appendChild(matter);

  // footer
  const footer = document.createElement('div');
  footer.id = 'footer';
  footer.textContent = 'Last updated September 2023';
  content.appendChild(footer);

  return content;
}

document.body.appendChild(content());
