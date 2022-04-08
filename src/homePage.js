export default function generateHomePage() {
   const h1 = document.createElement('h1');
   const p = document.createElement('p');
   const header = document.createElement('div');
   const container = document.createElement('div');
   const footer = document.createElement('div');

   const element = document.createElement('div');

   header.setAttribute('id', 'header');
   container.setAttribute('id', 'container');
   footer.setAttribute('id', 'footer');

   h1.textContent = "Aliazone";
   p.textContent = "Welcome to Aliazone! A (self-proclaimed) 5 star restaurant with delicious food and drinks. Take a look at our menus! And don't hesitate to order or ask us anything via the numbers at the contact page";
   footer.innerHTML = 'By yours truly, <a href="https://github.com/mraffia"> mraffia</a>';

   header.appendChild(h1);
   container.appendChild(p);

   element.appendChild(header);
   element.appendChild(container);
   element.appendChild(footer);

   return element;
}