export default function generateMenuPage() {
    const p = document.createElement('p');
    const menuPageContent = document.createElement('div');

    p.textContent = "Welcome to Aliazone! A (self-proclaimed) 5 star restaurant with delicious food and drinks. Take a look at our menus! And don't hesitate to order or ask us anything via the numbers at the contact page";

    menuPageContent.appendChild(p);

    return menuPageContent;
}