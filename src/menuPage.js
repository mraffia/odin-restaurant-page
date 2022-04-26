import NailmastersGlory from './images/nailmasters-glory.png'
import GatheringSwarm from './images/gathering-swarm.png'
import StalwartShell from './images/stalwart-shell.png'
import WaywardCompass from './images/waywardcompass.png'

export default function generateMenuPage() {
    let menus = [
        {
            name: "Nailmaster's Glory",
            image: NailmastersGlory,
            description: "Reduces the time needed to charge Nail Arts"
        },
        {
            name: "Gathering Swarm",
            image: GatheringSwarm,
            description: "Spawns a swarm that collects dropped Geo"
        },
        {
            name: "Stalwart Shell",
            image: StalwartShell,
            description: "Increases invincibility frames and reduces hit recoil."
        },
        {
            name: "Wayward Compass",
            image: WaywardCompass,
            description: "Shows the location of the Knight on the Map"
        },
    ]

    const menuGrid = document.createElement('div');
    const menuPageContent = document.createElement('div');

    menuGrid.classList.add('menu-grid');
    menuPageContent.classList.add('menu-page');

    for (let i = 0; i < menus.length; i++) {
        const menu = document.createElement('div');
        const menuImage = document.createElement('img');
        const menuName = document.createElement('h2');
        const menuDesc = document.createElement('p');

        menu.classList.add('menu-block');
        menuImage.classList.add('menu-image');
        menuName.classList.add('menu-name');
        menuDesc.classList.add('menu-desc');

        menuImage.src = menus[i].image;
        menuName.textContent = menus[i].name;
        menuDesc.textContent = menus[i].description;

        menu.appendChild(menuImage);
        menu.appendChild(menuName);
        menu.appendChild(menuDesc);

        menuGrid.appendChild(menu);
    }

    menuPageContent.appendChild(menuGrid);

    return menuPageContent;
}