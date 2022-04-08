export default function generateHomePage() {
    const p = document.createElement('p');
    const container = document.createElement('div');
    const homePageContent = document.createElement('div');

    container.setAttribute('id', 'container');

    p.textContent = "Welcome to Aliazone! A (self-proclaimed) 5 star restaurant with delicious food and drinks. Take a look at our menus! And don't hesitate to order or ask us anything via the numbers at the contact page";

    container.appendChild(p);
    homePageContent.appendChild(container);

    return homePageContent;
}