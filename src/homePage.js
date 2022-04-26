import Restaurant from './images/restaurant.jpg'

export default function generateHomePage() {
    const p = document.createElement('p');
    const img = document.createElement('img');
    const homePageContent = document.createElement('div');

    img.classList.add('banner');

    p.textContent = "Welcome to Aliazone! A (self-proclaimed) 5 star restaurant with delicious food and drinks. Take a look at our menus! And don't hesitate to order or ask us anything via the numbers at the contact page";
    // Photo by Igor Starkov: https://www.pexels.com/photo/photo-of-cafe-interior-1307698/
    img.src = Restaurant;

    homePageContent.appendChild(img);
    homePageContent.appendChild(p);

    return homePageContent;
}