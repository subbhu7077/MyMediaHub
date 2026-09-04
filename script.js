// =========================================
// 1. MOBILE MENU (HAMBURGER) LOGIC
// =========================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Menu ko open/close karega
    navLinks.classList.toggle('nav-active');
});

// =========================================
// 2. DARK/LIGHT MODE TOGGLE LOGIC
// =========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const themeIcon = themeToggleBtn.querySelector('i');

// Pehle se save ki hui theme check karein
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

// Button click hone par theme badlein
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // User ki pasand save karein
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// =========================================
// 3. SCROLL REVEAL ANIMATIONS (3D Effects)
// =========================================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Animations ka starting point set karein
revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    revealObserver.observe(el);
});

// =========================================
// 4. FRONTEND DOWNLOADER UI (App Logic)
// =========================================
const processBtn = document.getElementById('process-btn');
const fileUrlInput = document.getElementById('file-url');
const loadingState = document.getElementById('loading-state');
const resultState = document.getElementById('result-state');
const fileNameDisplay = document.getElementById('file-name');
const historyList = document.getElementById('history-list');

processBtn.addEventListener('click', () => {
    const url = fileUrlInput.value.trim();
    
    if (!url) {
        alert("Please paste a valid public link first.");
        return;
    }

    // Result chupao, Loading dikhao
    resultState.classList.add('hidden');
    loadingState.classList.remove('hidden');

    // Asli API na hone ki wajah se hum 2 second ka fake loading dikhayenge
    setTimeout(() => {
        loadingState.classList.add('hidden');
        resultState.classList.remove('hidden');
        
        // Link me se file ka naam nikalne ka try karein
        let extractedName = url.split('/').pop() || "my_media_file";
        if(extractedName.length > 20) extractedName = extractedName.substring(0, 20) + "...";
        
        fileNameDisplay.textContent = extractedName;

        // History me add karein
        addJobToHistory(extractedName);
        
        // Download button setup karein
        setupDownload(url);

    }, 2000); // 2000ms = 2 seconds
});

function addJobToHistory(name) {
    const li = document.createElement('li');
    li.style.listStyle = 'none';
    li.style.padding = '10px 0';
    li.style.borderBottom = '1px solid var(--glass-border)';
    li.innerHTML = `<i class="fa-solid fa-check-circle" style="color: var(--primary);"></i> Processed: ${name}`;
    
    // Nayi file list mein sabse upar dikhe
    historyList.insertBefore(li, historyList.firstChild);
}

function setupDownload(url) {
    const downloadBtn = document.getElementById('download-btn');
    
    // Purane clicks hatane ke liye button reset karein
    const newBtn = downloadBtn.cloneNode(true);
    downloadBtn.parentNode.replaceChild(newBtn, downloadBtn);
    
    newBtn.addEventListener('click', () => {
        // Legal Note: Kyunki frontend (HTML/JS) directly private servers bypass nahi kar sakta,
        // Ye button authorized public link ko naye tab mein open karega download ke liye.
        alert("Accessing your authorized file now...");
        window.open(url, '_blank');
    });
}
