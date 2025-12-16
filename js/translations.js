// Translations - Fordítások

const translations = {
    en: {
        // Header
        "restaurant-name": "🍷 La Trattoria",
        "restaurant-tagline": "Authentic Italian Cuisine",
        
        // Search
        "search-placeholder": "🔍 Search dishes...",
        
        // Filters
        "filter-all": "All",
        "filter-starters": "Starters",
        "filter-mains": "Main Courses",
        "filter-desserts": "Desserts",
        "filter-drinks": "Drinks",
        
        // QR Section
        "qr-title": "QR Code Generator",
        "qr-description": "For future delivery integration",
        "qr-generate": "Generate QR Code",
        "qr-instruction": "Scan to view the menu",
        "qr-download": "Download QR",
        
        // No results
        "no-results": "No dishes found. Try another search term.",
        
        // Categories (for display)
        "category-starters": "Starters",
        "category-mains": "Main Courses",
        "category-desserts": "Desserts",
        "category-drinks": "Drinks",
        
        // Favorites
        "show-favorites": "❤️ Show Favorites Only",
        "no-favorites": "No favorites yet. Click the heart icon on dishes to add them!",
        
        // Share
        "share-title": "Share Our Menu",
        "share-description": "Tell your friends about us!",
        "share-whatsapp": "WhatsApp",
        "share-facebook": "Facebook",
        "share-twitter": "Twitter",
        "share-copy": "Copy Link",
        "link-copied": "Link copied!",
        
        // Controls
        "hide-controls": "Hide Search",
        "show-controls": "Show Search"
    },
    hu: {
        // Header
        "restaurant-name": "🍷 La Trattoria",
        "restaurant-tagline": "Autentikus Olasz Konyha",
        
        // Search
        "search-placeholder": "🔍 Ételek keresése...",
        
        // Filters
        "filter-all": "Összes",
        "filter-starters": "Előételek",
        "filter-mains": "Főételek",
        "filter-desserts": "Desszertek",
        "filter-drinks": "Italok",
        
        // QR Section
        "qr-title": "QR Kód Generátor",
        "qr-description": "Jövőbeli kiszállítási integrációhoz",
        "qr-generate": "QR Kód Generálása",
        "qr-instruction": "Szkenneld be az étlapot",
        "qr-download": "QR Kód Letöltése",
        
        // No results
        "no-results": "Nem található étel. Próbálj meg másik keresési kifejezést.",
        
        // Categories
        "category-starters": "Előételek",
        "category-mains": "Főételek",
        "category-desserts": "Desszertek",
        "category-drinks": "Italok",
        
        // Favorites
        "show-favorites": "❤️ Csak Kedvencek",
        "no-favorites": "Még nincs kedvenc. Kattints a szív ikonra az ételeken!",
        
        // Share
        "share-title": "Ossza Meg Étlapunkat",
        "share-description": "Ajánlja barátainak!",
        "share-whatsapp": "WhatsApp",
        "share-facebook": "Facebook",
        "share-twitter": "Twitter",
        "share-copy": "Link Másolása",
        "link-copied": "Link másolva!",
        
        // Controls
        "hide-controls": "Keresés Elrejtése",
        "show-controls": "Keresés Megjelenítése"
    }
};

// Current language
let currentLang = 'en';

// Change language function
function changeLanguage(lang) {
    currentLang = lang;
    
    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update toggle text if controls are collapsed
    const controls = document.getElementById('controls');
    const toggleText = document.querySelector('.toggle-text');
    if (controls && toggleText) {
        const isCollapsed = controls.classList.contains('collapsed');
        const textKey = isCollapsed ? 'show-controls' : 'hide-controls';
        toggleText.textContent = translations[lang][textKey];
    }
    
    // Re-render menu with translated categories
    filterMenu();
}