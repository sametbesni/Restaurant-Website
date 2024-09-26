const menu = [
    {
        id: 1,
        title: "Soba with Beef",
        category: "Japan",
        price: "10.00",
        img: "images/beef-soba.jpg",
        desc: `the juicy steak slices and for slurping up the soba noodles`,
    },
    {
        id: 2,
        title: "Bun",
        category: "Vietname",
        price: "5.00",
        img: "images/bun.jpg",
        desc: `A type of bread roll, typically filled with savory fillings`,
    },
    {
        id: 3,
        title: "Pad Thai",
        category: "Thailand",
        price: "9.45",
        img: "images/Chicken-Pad-Thai.jpg",
        desc: `A traditional Thai dish made with stir-fried rice noodles, eggs, tofu, beansprouts, and a multitude of spices`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: "12.00",
        img: "images/DanDanMian.jpg",
        desc: `Dan dan noodle, serving with green onion`,
    },
    {
        id: 5,
        title: "Dim Sum",
        category: "China",
        price: "8.00",
        img: "images/dim-sum.jpg",
        desc: `A traditional Chinese meal made up of small plates of dumplings and other snack dishes and is usually accompanied by tea`,
    },
    {
        id: 6,
        title: "Fried Rice",
        category: "Korean",
        price: "8.00",
        img: "images/fride-rice.jpg",
        desc: `A dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat`,
    },
    {
        id: 7,
        title: "Hot Pot",
        category: "Thailand",
        price: "20.00",
        img: "images/hot-pot.jpg",
        desc: `A flavorful broth traditionally served inside a large metal pot. The broth is brought to a boil and left simmering for the duration of the meal`,
    },
    {
        id: 8,
        title: "Karipap",
        category: "China",
        price: "7.00",
        img: "images/karibap.jpg",
        desc: `It is a small pie consisting of curry with chicken and potatoes in a fried or baked pastry shel`,
    },
    {
        id: 9,
        title: "Kung Pao",
        category: "China",
        price: "10.00",
        img: "images/kung-pao.jpg",
        desc: `Chinese-style stir-fried chicken cubes with dried chili peppers. It's a Sichuanese staple that was brought over to America and reinvented for local flavors and tastes`,
    },
    {
        id: 10,
        title: "Miso Soup",
        category: "Japan",
        price: "6.00",
        img: "images/miso-soup.jpg",
        desc: `A traditional Japanese soup made primarily of miso paste, dashi (broth), and additional ingredients such as vegetables, seaweed, and tofu`,
    },
    {
        id: 11,
        title: "Mongolian Chicken",
        category: "Korean",
        price: "8.00",
        img: "images/Mongolian-Chicken.jpg",
        desc: `Mongolian Chicken consists of sliced boneless chicken breast or thighs with a crispy coating of cornstarch, tossed in a sweet, savory sauce with scallions.`,
    },
    {
        id: 12,
        title: "Nigiri",
        category: "Japan",
        price: "12.00",
        img: "images/nigiri.jpg",
        desc: `A type of sushi consisting of a small ball of rice topped with wasabi sauce and raw fish or other seafood`,
    },
    {
        id: 13,
        title: "Onigiri",
        category: "Japan",
        price: "8.00",
        img: "images/onigiri.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 14,
        title: "Peking Duck",
        category: "China",
        price: "25.00",
        img: "images/peking-duck.png",
        desc: `A beautifully bronzed, roast duck with a matchlessly crispy skin and deliciously juicy meat. The duck meat is sometimes sliced, but more often shredded and served with thin pancakes, strips of spring onion, cucumber and hoisin sauce`,
    },
    {
        id: 15,
        title: "Pho",
        category: "Vietname",
        price: "8.00",
        img: "images/Pho.jpg",
        desc: `A soup consisting of bone broth, rice noodles, and thinly sliced meat. It may also be served with bean sprouts, fresh herbs, limes, chiles, and other garnishes`,
    },
    {
        id: 16,
        title: "Ramen",
        category: "Japan",
        price: "8.00",
        img: "images/Ramen.jpg",
        desc: `A noodle soup, with a combination of a rich flavoured broth, one of a variety of types of noodle and a selection of meats or vegetables, often topped with a boiled egg`,
    },
    {
        id: 17,
        title: "Sashimi",
        category: "Japan",
        price: "12.00",
        img: "images/Sashimi.jpg",
        desc: `Fresh fish served raw. The fish, which must be utterly fresh, is sliced paper thin, cubed, or cut in strips, according to the nature of the fish.`,
    },
    {
        id: 18,
        title: "Sushi",
        category: "Japan",
        price: "12.00",
        img: "images/sushi.jpg",
        desc: `That features medium-grained rice cooked in vinegar, served with raw or cooked seafood and a variety of toppings or fillings`,
    },
    {
        id: 19,
        title: "Tempura",
        category: "Japan",
        price: "10.00",
        img: "images/tempura.jpg",
        desc: `Tempura is lightly battered and deep fried to create a light, crispy coating`,
    },
    {
        id: 20,
        title: "Theokbokki",
        category: "Korean",
        price: "10.00",
        img: "images/tteokbokki.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 21,
        title: "Xiaolongbao",
        category: "China",
        price: "15.00",
        img: "images/xiaolongbao.jpg",
        desc: `A small steamed buns, originally from the Jiangnian region in China, especially connected to Shanghai and Wuxi`,
    },
]

const section =document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// nav-bar change
function showContainer(containerId) {
    const containers = document.querySelectorAll('.content-container');
    containers.forEach(container => {
        container.style.display = 'none';
    });
    document.getElementById(containerId).style.display = 'block';
    localStorage.setItem('currentContainer', containerId);

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`.nav-link[onclick="showContainer('${containerId}')"]`).classList.add('active');
}

function loadPage() {
    const currentContainer = localStorage.getItem('currentContainer') || 'home';
    showContainer(currentContainer);
}
// search bar
function searchText() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const containers = document.querySelectorAll('.content-container');
    let found = false;

    containers.forEach(container => {
        container.innerHTML = container.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
    });

    containers.forEach(container => {
        const textContent = container.textContent.toLowerCase();
        if (textContent.includes(searchInput)) {
            showContainer(container.id);
            highlightText(container, searchInput);
            found = true;
        }
    });

    if (!found) {
        alert('The word you were looking for was not found.');
    }
}

/*
function highlightText(container, searchInput) {
    const innerHTML = container.innerHTML;
    const regex = new RegExp(`(${searchInput})`, 'gi');
    const newHTML = innerHTML.replace(regex, '<span class="highlight">$1</span>');
    container.innerHTML = newHTML;
}
*/
// focus of search
function highlightText(container, searchInput) {
    const elements = container.querySelectorAll('*:not(img):not(svg):not(path)');
    elements.forEach(element => {
        const innerHTML = element.innerHTML;
        const regex = new RegExp(`(${searchInput})`, 'gi');
        const newHTML = innerHTML.replace(regex, '<span class="highlight">$1</span>');
        element.innerHTML = newHTML;
    });
}

const categories = menu.reduce (
    (values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    },
    ["All"]
)

const categoryList = () => {
    const categoryBtns = categories.map((category) => {
        return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".btn-item");
  
    //filter menu
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter((menuItem) => {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "All") {
          menuList(menu);
        } else {
          menuList(menuCategory);
        }
      });
    });
};
  
const menuList = (menuItems) => {
    let displayMenu = menuItems.map ((item) => {
        return `
        <div class="menu-items col-lg-6 col-sm-12">
            <img src=${item.img} alt=${item.title} class="photo"/>
            <div class="menu-info">
                <div class="menu-title text-info-emphasis">
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                </div>
                <div class="menu-text">
                    ${item.desc}
                </div>
            </div>
        </div>
        `;
    });
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;
};
  
menuList(menu);
categoryList();