// Menu Logic - Lógica de filtros y búsqueda

// Estado de la aplicación
let currentCategory = 'all';
let searchTerm = '';
let favorites = JSON.parse(localStorage.getItem('menuFavorites')) || [];
let showOnlyFavorites = false;

// Elementos del DOM
const menuGrid = document.getElementById('menu-grid');
const noResults = document.getElementById('no-results');
const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filter-btn');
const generateQrBtn = document.getElementById('generate-qr');
const qrContainer = document.getElementById('qr-container');
const downloadQrBtn = document.getElementById('download-qr');

// Inicializar la aplicación
function init() {
    renderMenu(menuData);
    setupEventListeners();
    setupLanguageSwitcher();
}

// Configurar event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        filterMenu();
    });

    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover active de todos los botones
            filterButtons.forEach(b => b.classList.remove('active'));
            // Añadir active al botón clickeado
            btn.classList.add('active');
            
            currentCategory = btn.dataset.category;
            filterMenu();
        });
    });

    // QR Code generation
    generateQrBtn.addEventListener('click', generateQRCode);
    downloadQrBtn.addEventListener('click', downloadQRCode);
    
    // Toggle controls - AÑADIDO
    const controlsToggle = document.getElementById('controls-toggle');
    const controls = document.getElementById('controls');
    const toggleText = controlsToggle ? controlsToggle.querySelector('.toggle-text') : null;

    if (controlsToggle && controls && toggleText) {
        controlsToggle.addEventListener('click', () => {
            controls.classList.toggle('collapsed');
            
            const isCollapsed = controls.classList.contains('collapsed');
            const textKey = isCollapsed ? 'show-controls' : 'hide-controls';
            toggleText.textContent = translations[currentLang][textKey];
        });
    }
}

// Setup language switcher
function setupLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            changeLanguage(btn.dataset.lang);
        });
    });
}

// Filtrar menú según categoría y búsqueda
function filterMenu() {
    let filteredData = menuData;

    // Filtrar por categoría
    if (currentCategory !== 'all') {
        filteredData = filteredData.filter(item => item.category === currentCategory);
    }

    // Filtrar por favoritos
    if (showOnlyFavorites) {
        filteredData = filteredData.filter(item => favorites.includes(item.id));
        
        if (filteredData.length === 0) {
            menuGrid.innerHTML = '';
            noResults.style.display = 'block';
            noResults.textContent = translations[currentLang]['no-favorites'];
            return;
        }
    }

    // Filtrar por búsqueda
    if (searchTerm) {
        filteredData = filteredData.filter(item => {
            // Obtener textos según idioma actual
            const name = typeof item.name === 'object' ? item.name[currentLang] : item.name;
            const description = typeof item.description === 'object' ? item.description[currentLang] : item.description;
            
            return name.toLowerCase().includes(searchTerm) ||
                   description.toLowerCase().includes(searchTerm);
        });
    }

    renderMenu(filteredData);
}

// Renderizar el menú
function renderMenu(data) {
    // Limpiar el grid
    menuGrid.innerHTML = '';

    // Mostrar/ocultar mensaje de "no results"
    if (data.length === 0) {
        noResults.style.display = 'block';
        noResults.textContent = translations[currentLang]['no-results'];
        return;
    } else {
        noResults.style.display = 'none';
    }

    // Crear y añadir cada item
    data.forEach(item => {
        const menuItem = createMenuItem(item);
        menuGrid.appendChild(menuItem);
    });
}

// Crear elemento HTML de un item del menú
function createMenuItem(item) {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.dataset.itemId = item.id;
    
    const name = typeof item.name === 'object' ? item.name[currentLang] : item.name;
    const description = typeof item.description === 'object' ? item.description[currentLang] : item.description;
    const categoryTranslated = translations[currentLang][`category-${item.category}`] || item.category;
    const isFavorite = favorites.includes(item.id);
    
    div.innerHTML = `
        <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-item-id="${item.id}">
            <span class="favorite-icon">❤️</span>
        </button>
        <img src="${item.image}" alt="${name}" class="menu-item-image" loading="lazy">
        <div class="menu-item-header">
            <h3 class="menu-item-name">${name}</h3>
            <span class="menu-item-price">$${item.price.toFixed(2)}</span>
        </div>
        <p class="menu-item-description">${description}</p>
        <span class="menu-item-category">${categoryTranslated}</span>
    `;
    
    // Event listener para el botón de favoritos
    const favoriteBtn = div.querySelector('.favorite-btn');
    favoriteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(item.id);
    });
    
    return div;
}

// Toggle favorite
function toggleFavorite(itemId) {
    const index = favorites.indexOf(itemId);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(itemId);
    }
    
    localStorage.setItem('menuFavorites', JSON.stringify(favorites));
    filterMenu();
}

// Show favorites toggle
const showFavoritesBtn = document.getElementById('show-favorites');
if (showFavoritesBtn) {
    showFavoritesBtn.addEventListener('click', () => {
        showOnlyFavorites = !showOnlyFavorites;
        showFavoritesBtn.classList.toggle('active');
        filterMenu();
    });
}

// Generar código QR
function generateQRCode() {
    // Limpiar QR previo si existe
    document.getElementById('qr-code').innerHTML = '';

    // URL actual de la página
    const currentURL = window.location.href;

    // Generar nuevo QR con colores verdes
    new QRCode(document.getElementById('qr-code'), {
        text: currentURL,
        width: 256,
        height: 256,
        colorDark: '#2d5016',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });

    // Mostrar el contenedor
    qrContainer.style.display = 'flex';

    // Scroll suave al QR
    qrContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Descargar código QR
function downloadQRCode() {
    const qrCanvas = document.querySelector('#qr-code canvas');
    
    if (qrCanvas) {
        const url = qrCanvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'menu-qr-code.png';
        link.href = url;
        link.click();
    }
}

// Share functionality
const shareWhatsapp = document.getElementById('share-whatsapp');
const shareFacebook = document.getElementById('share-facebook');
const shareTwitter = document.getElementById('share-twitter');
const shareCopy = document.getElementById('share-copy');
const copyNotification = document.getElementById('copy-notification');

const shareURL = window.location.href;
const shareText = "Check out this amazing restaurant menu!";

if (shareWhatsapp) {
    shareWhatsapp.addEventListener('click', () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareURL)}`, '_blank');
    });
}

if (shareFacebook) {
    shareFacebook.addEventListener('click', () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareURL)}`, '_blank');
    });
}

if (shareTwitter) {
    shareTwitter.addEventListener('click', () => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareURL)}&text=${encodeURIComponent(shareText)}`, '_blank');
    });
}

if (shareCopy) {
    shareCopy.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(shareURL);
            copyNotification.classList.add('show');
            setTimeout(() => {
                copyNotification.classList.remove('show');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    });
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);