import SlyShop from './images/slyshop.jpg'

export default function generateHomePage() {
    const p = document.createElement('p');
    const img = document.createElement('img');
    const homePageContent = document.createElement('div');

    img.classList.add('banner');
    p.classList.add('home-desc');
    homePageContent.classList.add('home-page');

    p.textContent = "Welcome to Sly's Shop! Sly is a Merchant in Hollow Knight. He sells many wares at his shop in Dirtmouth for Geo but drives a hard bargain. Take a look at the goods! Don't hesitate to order or ask Sly anything via the numbers at the contact page.";
    img.src = SlyShop;

    homePageContent.appendChild(img);
    homePageContent.appendChild(p);

    return homePageContent;
}