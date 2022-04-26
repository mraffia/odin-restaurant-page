export default function generateContactPage() {
    const number = document.createElement('p');
    const address = document.createElement('p');
    const subHeader = document.createElement('h2');
    const contactPageContent = document.createElement('div');

    contactPageContent.classList.add('contact-page');

    subHeader.textContent = "Contact Us!";
    number.innerHTML = "<strong>Phone</strong>: 000-456-777";
    address.innerHTML = "<strong>Address</strong>: Hollywood Boulevard 42, Los Angeles, USA";

    contactPageContent.appendChild(subHeader);
    contactPageContent.appendChild(number);
    contactPageContent.appendChild(address);

    return contactPageContent;
}