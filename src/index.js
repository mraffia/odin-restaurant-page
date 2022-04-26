import './style.css';
import generateHomePage from './homePage.js';
import generateContactPage from './contactPage.js';
import generateMenuPage from './menuPage.js';

function currentPage() {
    const header = document.createElement('div');
    const h1 = document.createElement('h1');
    const content = document.createElement('div');
    const footer = document.createElement('div');

    header.setAttribute('id', 'header');
    content.setAttribute('id', 'content');
    footer.setAttribute('id', 'footer');

    h1.textContent = "Great Nailsage Sly's Shop";
    footer.innerHTML = 'By yours truly, <a href="https://github.com/mraffia"> mraffia</a>';

    header.appendChild(h1);
    content.appendChild(generateMenuPage());
    
    document.body.appendChild(header);
    document.body.appendChild(content);
    document.body.appendChild(footer);
}

currentPage();
