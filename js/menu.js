// Menu Logic - Lógica de filtros y búsqueda

// Estado de la aplicación
let currentCategory = 'all';
let searchTerm = '';

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
    
    // Obtener textos según idioma actual
    const name = typeof item.name === 'object' ? item.name[currentLang] : item.name;
    const description = typeof item.description === 'object' ? item.description[currentLang] : item.description;
    const categoryTranslated = translations[currentLang][`category-${item.category}`] || item.category;
    
    div.innerHTML = `
        <div class="menu-item-image">${item.image}</div>
        <div class="menu-item-header">
            <h3 class="menu-item-name">${name}</h3>
            <span class="menu-item-price">$${item.price.toFixed(2)}</span>
        </div>
        <p class="menu-item-description">${description}</p>
        <span class="menu-item-category">${categoryTranslated}</span>
    `;
    return div;
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
        colorDark: '#2d5016',  // Verde oscuro del tema
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
        // Convertir canvas a imagen
        const url = qrCanvas.toDataURL('image/png');
        
        // Crear link de descarga
        const link = document.createElement('a');
        link.download = 'menu-qr-code.png';
        link.href = url;
        link.click();
    }
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);