export default function generateHomePage() {
    const p = document.createElement('p');
    const homePageContent = document.createElement('div');

    p.textContent = "Welcome to Aliazone! A (self-proclaimed) 5 star restaurant with delicious food and drinks. Take a look at our menus! And don't hesitate to order or ask us anything via the numbers at the contact page";

    homePageContent.appendChild(p);

    return homePageContent;
}