export default function generateContactPage() {
    const number = document.createElement('p');
    const address = document.createElement('p');
    const subHeader = document.createElement('h2');
    const contactPageContent = document.createElement('div');

    contactPageContent.classList.add('contact-page');
    subHeader.classList.add('page-subheader');
    number.classList.add('contact-number');
    address.classList.add('contact-adress');

    subHeader.textContent = "Contact Sly!";
    number.innerHTML = "<strong>Phone</strong>: 000-456-777";
    address.innerHTML = "<strong>Address</strong>: Dirthmouth, Hallownest";

    contactPageContent.appendChild(subHeader);
    contactPageContent.appendChild(number);
    contactPageContent.appendChild(address);

    return contactPageContent;
}