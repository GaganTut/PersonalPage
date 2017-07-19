/*jshint esversion: 6*/
(global => {
  const projects = [
    {
      name: 'Kanban Board',
      link: 'http://kanban.gstut.com/',
      description: 'Kanban is a personal project which I began while in DevLeague, a full-time javacript immersive course. The initial project requirements consisted of creating a board with three columns: Queue, Progress, an Completed. I decided to expand on the project and scale it upwards to be larger and have more real-world application. Therefore, I added users with user authentication as well as the ability to handle multiple boards. The stack that this project uses is React with Redux on the front-end with ExpressJS and PostgreSQL on the back-end. Handling User and multiple boards required creating five tables in the database which includes intersection tables. As I continue to build on this project, I envision users being able to share and collaborate on various taskboards to help organize team as well as individual goals.',
      miniImg: './assets/kanban.jpg'
    },
    {
      name: 'Wellit',
      link: 'http://wellitapp.com/',
      description: 'Wellit is a group project that I helped create as a group of four. The idea for the app is to create an interactive way for people to donate money to a cause or to others in need. A very simple overview of the app is that it is a mix between KickStarter and Pokemon Go. Users can create virtual wells with a story for what they money they are asking for is going to be used. Other users can then see those wells based on their map location and donate to wherever they would like. My contributions to the project consisted largely on the front-end where I was responsible for using React Native with Redux. I also implemented StripeJS API for payments as well as Mapbox API for the app\'s map. The project is now currently on the Android app store.',
      miniImg: './assets/wellit.jpg'
    },
    {
      name: 'Sorting Algorithms',
      link: 'http://gagantut.github.io/SortingAlgorithms/',
      description: 'This project is a personal project that I used to help learn and really understand various sorting algorithms. The project\'s github page has descriptions with about how each sorting algorithm works as well as pseudocode to show how it can be implemented. Beyond that, I created working visuals to display how each algorithm works visually. To do this, I used AFrame which is a web framework to create virtual reality web pages. Using aframe, I was able to create 40 columns of various lengths which represent their values. The columns are then sorted in front of your eyes depending on whichever sorting method you decide to use.',
      miniImg: './assets/algorithms.jpg'
    }
  ];
  const projectsList = document.querySelector('.projects-list');

  projects.forEach(project => {
    let title = document.createElement('h2');
    title.className = 'project-title';
    title.innerHTML = project.name;

    let description = document.createElement('p');
    description.className = 'project-description';
    description.innerHTML = project.description;

    let miniImg = document.createElement('img');
    miniImg.className = 'project-miniImg';
    //miniImg.src = project.miniImg;

    let linkArrow = document.createElement('h4');
    linkArrow.innerHTML = '------Check it out----->';
    linkArrow.className = 'link-arrow';
    linkArrow.addEventListener('click', event => {
      window.open(project.link);
    });


    let projectDiv = document.createElement('div');
    projectDiv.className = 'project-div';
    projectDiv.appendChild(title);
    projectDiv.appendChild(description);
    projectDiv.appendChild(miniImg);
    projectDiv.appendChild(linkArrow);

    projectsList.appendChild(projectDiv);
  });


})(window);