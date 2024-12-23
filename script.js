// List of Poems
const poems = [
    {
        title: "Poema 1: 'Un Momento de Amor'",
        content: `Mi corazón late con cada pensamiento de ti, <br>En cada aliento, el amor se siente tan verdadero. <br>Tus ojos, un universo, tan brillantes, <br>Contigo, mi amor, vuelo alto.`
    },
    {
        title: "Poema 2: 'Juntos por Siempre'",
        content: `Junto a ti, siempre estaremos, <br>En tormentas y sol, pase lo que pase. <br>En tus brazos, mi mundo es tranquilo, <br>Contigo para siempre, mi corazón está cálido.`
    },
    // Add more poems as you wish
];

// Function to generate the poem pages
function generatePages() {
    const bookContainer = document.querySelector('.book-container');
    
    poems.forEach((poem, index) => {
        const page = document.createElement('div');
        page.classList.add('page');
        
        // Add poem content
        page.innerHTML = `
            <h2 class="poem-title">${poem.title}</h2>
            <p>${poem.content}</p>
        `;
        
        bookContainer.appendChild(page);
    });

    // Set the first page as active
    const firstPage = document.querySelector('.page');
    if (firstPage) firstPage.classList.add('active');
}

// Page navigation logic
let currentPage = 0;
const pages = document.querySelectorAll('.page');

function turnPage(direction) {
    // Remove "flipped" class from the current page
    pages[currentPage].classList.remove('active');
    pages[currentPage].classList.add('flipped');
    
    // Update currentPage
    currentPage += direction;
    
    // Wrap around if necessary
    if (currentPage < 0) currentPage = pages.length - 1;
    if (currentPage >= pages.length) currentPage = 0;

    // Add "active" class to the next page after the flip animation
    setTimeout(() => {
        pages[currentPage].classList.remove('flipped');
        pages[currentPage].classList.add('active');
    }, 500); // Delay to allow the flip animation to finish
}

// Initialize the book on page load
window.onload = generatePages;
