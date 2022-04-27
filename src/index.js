import './style.css';
import generateHomePage from './homePage.js';
import generateContactPage from './contactPage.js';
import generateMenuPage from './menuPage.js';

function currentPage() {
    const header = document.createElement('div');
    const h1 = document.createElement('h1');
    const tabs = document.createElement('ul');
    const content = document.createElement('div');
    const footer = document.createElement('div');

    header.setAttribute('id', 'header');
    content.setAttribute('id', 'content');
    footer.setAttribute('id', 'footer');

    h1.classList.add('page-header');
    tabs.classList.add('tabs');

    h1.textContent = "Great Nailsage Sly's Shop";
    footer.innerHTML = 'By yours truly, <a href="https://github.com/mraffia"> mraffia</a>';

    let pages = [
        {
            name: "Home",
            pageContent: generateHomePage()
        },
        {
            name: "Goods",
            pageContent: generateMenuPage()
        },
        {
            name: "Contact",
            pageContent: generateContactPage()
        },
    ];

    for (let i = 0; i < pages.length; i++) {
        const tab = document.createElement('li');
        tab.classList.add('tab');
        tab.setAttribute('id', pages[i].name.toLowerCase());
        tab.textContent = pages[i].name;

        tab.addEventListener('click', (e) => {
            content.innerHTML = '';
            if (e.target.id === 'home') {
                content.appendChild(pages[0].pageContent);
            } else if (e.target.id === 'goods') {
                content.appendChild(pages[1].pageContent);
            } else if (e.target.id === 'contact') {
                content.appendChild(pages[2].pageContent);
            }
        });

        tabs.appendChild(tab);
    }

    header.appendChild(h1);
    header.appendChild(tabs);
    content.appendChild(pages[0].pageContent);
    
    document.body.appendChild(header);
    document.body.appendChild(content);
    document.body.appendChild(footer);
}

currentPage();
