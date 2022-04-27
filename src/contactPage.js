import Hallownest from './images/hallownest.png'

export default function generateContactPage() {
    const numberAddress = document.createElement('p');
    const img = document.createElement('img');
    const contactPageContent = document.createElement('div');

    contactPageContent.classList.add('contact-page');
    numberAddress.classList.add('contact-number-address');
    img.classList.add('map');

    numberAddress.innerHTML = "<strong>Phone</strong>: 000-456-777 <br> <strong>Address</strong>: Dirthmouth, Hallownest";
    img.src = Hallownest;

    contactPageContent.appendChild(numberAddress);
    contactPageContent.appendChild(img);

    return contactPageContent;
}