// Data
const buttons = ['all', 'drops', 'tablet', 'Capsule', 'syrup'];

const products = [
  {
    id: 1,
    category: 'drops',
    title: 'Supper power',
    description:
      'പുരുഷന്മാരിൽ ലിംഗത്തിന് ഉദ്ധാരണം ഉണ്ടാകാത്ത (Erectile dysfunction)ഉദ്ധാരണക്കുറവിനും  ശീഘ്രസ്ഖലനം Premature Ejaculation പുരുഷന്മാരിലെയും സ്‌ത്രീകളിലെയും രതിമൂർച്ഛ (Orgasm) ഇല്ലായ്മ ബീജകുറവ് മൂത്രവാർച്ച അറിയാതെ മൂത്രം തുള്ളിയായി പോകുന്ന അവസ്ഥ   ലൈംഗികമായ എല്ലാ പ്രശ്നങ്ങൾക്കും പാർശഫലങ്ങൾ ഒന്നും തന്നെ ഇല്ലാത്ത ഇലക്ട്രോ ഹോമിയോ ഹെർബൽ മെഡിസിൻ Supper power  Drops & Tablets ₹ 399 രൂപ ഇപ്പോൾ തന്നെ ഓർഡർ ചെയ്യൂ ദാമ്പത്യ ജീവിതം മെച്ചപ്പെടുത്തൂ കൂടുതൽ വിവരങ്ങൾക്കും ഓർഡർ ചെയ്യാനും വിളിക്കൂ',
    price: '₹399',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrECJ_eBV2XQvFPKkzBmqUDjF0DxRtyCI0f3XdSA15IOZsYpRDLJrZYcS3o2qVer5-HapiTTTHPzdeyK3CtKIusRRt2JvEMcaHS7aXOu_LrabYYK0Ock66OaN2Ar41CpUDYc9hKHgox1Y5d9H-QwNowDrfCu1cDN0Eh_FYxyXwgdTn-cVuWF42cFxm2IU/s1600/super%20bbb.JPG',
  },
  {
    id: 2,
    category: 'drops',
    title: 'Supper power',
    description:
      'Excellent for all sexual diseases Supported by thousands.',
    price: '₹399',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrECJ_eBV2XQvFPKkzBmqUDjF0DxRtyCI0f3XdSA15IOZsYpRDLJrZYcS3o2qVer5-HapiTTTHPzdeyK3CtKIusRRt2JvEMcaHS7aXOu_LrabYYK0Ock66OaN2Ar41CpUDYc9hKHgox1Y5d9H-QwNowDrfCu1cDN0Eh_FYxyXwgdTn-cVuWF42cFxm2IU/s1600/super%20bbb.JPG',
  },
  
  {
    id: 3,
    category: 'tablet',
    title: 'Anti Allergy',
    description:
      'Specific for all type of allergy sneezing nasal oozing & sinus 300 tablets.',
    price: '₹320',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEij2cDAnFtj3gNLoxbr0y2cS4xdE442csuDFqbjhdXSiHD4UZRAPqlvBLeg72ClyvyUlFEVnjFlYJT724uIVT7yz3AdgzoP7C7LoChBkIOzVwnmjw9O2VAV54VDcJMv8ja3zKxM5NCNjWuhVoiWEZAv-eUdw5ZT858fo_8QvBO11d6hYbP6LKYvrqb8P-U/s1600/anti%20tab.JPG',
  },
  {
    id: 4,
    category: 'tablet',
    title: 'Acidol',
    description:
      ' This is natural cormin & favoratle in all type of hyper acidity heart burn with abnormal stool 300 tablets.',
    price: '₹320',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEie62Ac-i-gnTTjfBqbYvxscZkz8GBsUaG9jWc2_xunIYGy8TtN29AR-AcgHRAI-VVoDpjRbGfDw7RFGtxZ83sYzD9mvLnbOMcPJIQnim2IrJdNjHtS6wR97ed2pPho2r_7CfMP16nvS3vZOr9W3SpH8foW5Zwng36p4gK693C-q2WHXbF16nLMKbHHQLI/s327/acidotab.JPG',
  },
  {
    id: 5,
    category: 'Capsule',
    title: ' Fevorina P Capsule',
    description:
      'For all types of fever.',
    price: '₹320',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmK9COpwH1w2D6_JI5h-mDqvSH-xDRI_3Ve6pXcL4NDGPM0khyphenhyphenIBeTvBbbIxCRTxtF53jR6QcEnXzHiSPylYWMMFB4B0i52BgFfrXnRHPZ0JdODmqdPjs5DmysY3bOwwXJTrZ7uEuHM6kEgjX87KA27OBuQGUS2AM9hyphenhyphenaCI_IUB6uEQmwlLQLSvOIdKL8/s1600/feviri.JPG',
  },
  {
    id: 6,
    category: 'syrup',
    title: ' Cardial Plus',
    description:
      ' Specific for heart as a heart tonic.',
    price: '₹400',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFoCmpA8IDMZqCuCVRGDrJwxXzCn_42IFnHcJBi-eG7cmuIjBqXF113KDizWQHepYXbYlHI_oKDiy29z0-AByKaQqvpRYTXFLtCAlxat_wPbI8VmKscbAOMbWbO2RJMeHSHRiGCWn8WhQJd2EeRfksUBebzo7WYhWffk2j0ayO1a25AkqF0f2z7hCJAkY/s1600/card.JPG',
  },
  {
    id: 7,
    category: 'syrup',
    title: 'Stone Solvent',
    description:
      ' Specific for gall and kidney stone.',
    price: '₹400',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRhlJ4st_kGfMP7X5LMiexCYCvr9Zt3p2UrHQEr5Qk4XiladXFB4TA6vpe7CG9OFQS7Zs600Ob5jLFG9b3wCnx5K3MPye3RkGxTccY1paCvg3fz1_yYcvQzehijqWaLbQMMuP4NBYJK3_BRpxpCYV707LYzTTFz4ZuR7IBchFnLUi5Qvry5S12Xh5Urkw/s1600/stone.JPG',
  },

  {
    id: 8,
    category: 'tablet',
    title: 'Anti Flu',
    description:
      ' Specific for common cold & fever influenza with dry cough and bodyach.300 tablets',
    price: '₹320',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOuUVcbntx8PMDE4VQ1lI351gd0d2pSbf6PLRtLW0gvD9uSSv7ea6gU5ESKhucIaMkCe2tDqDSr4OVuOi5JQyGekT-UI5BvMyIHSLv3U5fByAlSFjqrTSBSgd_RsGmZOJJle8JzqtyfV5QnR_OCtENpRclV1SLcTHRPkf-IAtU6nWYXYejHaQqWKb3lTk/s1600/flu.JPG',
  },
  {
    id: 9,
    category: 'tablet',
    title: 'Mouth Ulcer',
    description:
      'For oral drines ulcerative tongue and mouth sore.300 tablets',
    price: '₹320',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuEQVyWLY5oSsyGPesqvjNUt3gfNxvSB4xWXIIpdu9jI4GCrgOFC5n-hCn23lvhPxJOLjTztuMjMCxBPOGSgl8KdQ8y5MT7Xw71FECi9N5ifXK4_naHpWDFsx-yp8vWtiCSLBC-Jy4b5Qx4sc0zgqTSKH8aieYlL1kEXJ3zal8-lbljyTlC6dqpb2PDvs/s1600/mouth.JPG',
  },
  {
    id: 10,
    category: 'drops',
    title: ' Anti Allergy',
    description:
      ' Specific for all type of allergy, Sneezing, Nasal Oozing & Sinu.',
    price: '₹110',
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAP54PxjlD0_xAQb1YeiE60iRmQiyf9yGgms8dGaU4MZY5kBP0-1aagBwsKqEiG_oloZvfyCZhpWoLeS_BIdtSdfU4wEvmcqhUH_9pMV2fJwSlChDdrsLZeVZiNkpOApzhWKGylaJrYBZETLiACasjotEh23YEFo_MmIG7qIcb6vb8Jx1jfUuKkSfbdR0/s1600/antibbb.JPG',
  },
];

// DOM elements
const filterContainer = document.getElementById('filterContainer');
const productsGrid = document.getElementById('productsGrid');

// Render buttons
const renderButtons = () => {
  filterContainer.innerHTML = buttons
    .map(
      (button, inx) =>
        `
    <button class="filter-btn ${
      inx === 0 && 'active'
    }" data-filter="${button}">${button}</button>
    `
    )
    .join('');
};

// Render products
const renderProducts = (productsToShow) => {
  productsGrid.innerHTML = productsToShow
    .map(
      (product) => `
        <div class="product-card show" data-category="${product.category}">
          <div class="product-image">
            <img src="${product.img}" alt="${product.title}" />
            <button><i class="${
              product.id === 2 ? 'fa-solid' : 'fa-regular'
            } fa-heart"></i></button>
          </div>

          <div class="product-info">
            <span class="category">${product.category}</span>
            <h3 class="title">${product.title}</h3>
            <p class="description">
              ${product.description}
            </p>
            <p class="price">${product.price}</p>
            <div class="actions">

            <a href="https://drnasar.github.io/myshop/">
              <button  class="btn">shop now</button>
              </a>
              <button class="rounded-btn">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        </div>
        `
    )
    .join('');
};

// Filter products
const filterProducts = (category) => {
  const productCards = document.querySelectorAll('.product-card');

  // Hide all product cards first
  productCards.forEach((card) => {
    card.classList.add('hidden');
    card.classList.remove('show');
  });

  // Show filtered products
  setTimeout(() => {
    if (category === 'all') {
      renderProducts(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      renderProducts(filteredProducts);
    }
    heartEventListener();
  }, 500);
};

// Event listener for filter buttons
const filterEventListener = () => {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Remove active class
      filterButtons.forEach((btn) => btn.classList.remove('active'));

      // Add active class to clicked button
      button.classList.add('active');

      // Filter products
      const filterValue = button.getAttribute('data-filter');
      filterProducts(filterValue);
    });
  });
};

// Event listener for heart buttons
const heartEventListener = () => {
  const heartButtons = document.querySelectorAll('.product-image button');

  heartButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');

      const icon = btn.querySelector('i');

      if (btn.classList.contains('active')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
      } else {
        icon.classList.add('fa-regular');
        icon.classList.remove('fa-solid');
      }
    });
  });
};

// Initiate the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderButtons();
  renderProducts(products);
  filterEventListener();
  heartEventListener();

});



