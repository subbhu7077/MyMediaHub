<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Global SEO Meta Tags -->
    <title>MyMediaHub | Your Media, Your Control</title>
    <meta name="description" content="Download and manage your favorite K-Drama, Bollywood, Odia, and viral status media quickly.">
    <meta name="keywords" content="media downloader, status video, bollywood edits, odia status, free media manager, neon 3d downloader">
    
    <!-- Premium Google Fonts: Poppins -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Professional Icons: FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Link to our CSS file -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <!-- Animated Background Elements -->
    <div class="bg-shape shape-1"></div>
    <div class="bg-shape shape-2"></div>

    <!-- 1. PREMIUM NAVBAR -->
    <nav class="navbar">
        <div class="logo">
            <i class="fa-solid fa-layer-group"></i> MyMedia<span>Hub</span>
        </div>
        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#tool">Downloader</a></li>
            <li><a href="#features">Features</a></li>
        </ul>
        <div class="nav-actions">
            <button id="theme-toggle" class="theme-btn" aria-label="Toggle Dark/Light Mode">
                <i class="fa-solid fa-moon"></i>
            </button>
            <div class="hamburger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </div>
    </nav>

    <!-- 2. 3D HERO SECTION -->
    <section id="home" class="hero">
        <div class="hero-content reveal">
            <h1 class="hero-title">
                YOUR <span class="gradient-text">MEDIA.</span><br>
                YOUR <span class="gradient-text">CONTROL.</span>
            </h1>
            <p class="hero-subtitle">Manage and access files you own or are explicitly authorized to use from one premium, clean workspace.</p>
            <div class="hero-buttons">
                <a href="#tool" class="btn btn-primary">Start Managing <i class="fa-solid fa-arrow-right"></i></a>
                <a href="#features" class="btn btn-secondary">Explore Features</a>
            </div>
        </div>
        <div class="hero-3d-element reveal">
            <!-- 3D Floating Glass Card -->
            <div class="glass-card floating">
                <i class="fa-solid fa-cloud-arrow-down card-icon"></i>
                <h3>Secure Access</h3>
                <p>100% Authorized & Safe</p>
            </div>
        </div>
    </section>

    <!-- 3. TOP CATEGORIES SECTION -->
    <section id="categories" class="categories glass-card reveal" style="margin: 20px 5%; padding: 30px 20px; text-align: center;">
        <h2 style="margin-bottom:20px; font-size: 2rem;">🔥 Top <span class="gradient-text">Categories</span></h2>
        <div style="display:flex; flex-wrap:wrap; gap:15px; justify-content:center;">
            <button class="btn btn-secondary"><i class="fa-solid fa-heart"></i> K-Drama Status</button>
            <button class="btn btn-secondary"><i class="fa-solid fa-film"></i> Bollywood Edits</button>
            <button class="btn btn-secondary"><i class="fa-brands fa-whatsapp"></i> WhatsApp Status</button>
            <button class="btn btn-secondary"><i class="fa-solid fa-music"></i> Odia Status</button>
            <button class="btn btn-secondary"><i class="fa-solid fa-fire"></i> Trending Audio</button>
        </div>
    </section>

    <!-- 4. FILE TOOL INTERFACE (The App) -->
    <section id="tool" class="tool-section">
        <div class="tool-container glass-card reveal">
            <h2><i class="fa-solid fa-wand-magic-sparkles"></i> Media Downloader Hub</h2>
            <p class="legal-notice"><i class="fa-solid fa-shield-halved"></i> Note: For public and authorized files only. API connection required for external platforms.</p>
            
            <div class="input-group">
                <input type="url" id="file-url" placeholder="Paste your public file link here...">
                <button id="process-btn" class="btn btn-primary">Process Link</button>
            </div>

            <!-- UI States for processing -->
            <div id="loading-state" class="hidden">
                <div class="loader"></div>
                <p>Analyzing link... Please wait.</p>
            </div>

            <div id="result-state" class="hidden glass-card result-card" style="margin-top: 20px; padding: 20px;">
                <div class="file-info" style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                    <i id="file-icon" class="fa-solid fa-file" style="font-size: 2rem; color: var(--primary);"></i>
                    <div style="text-align: left;">
                        <h4 id="file-name">file_name.mp4</h4>
                        <p id="file-size" style="color: var(--text-muted); font-size: 0.9rem;">Ready to access</p>
                    </div>
                </div>
                <button id="download-btn" class="btn btn-primary" style="width: 100%; justify-content: center;">Download File</button>
            </div>
            
            <!-- History UI -->
            <div class="history-section" style="margin-top: 30px; text-align: left;">
                <h3>Recent Jobs</h3>
                <ul id="history-list">
                    <!-- JavaScript will add items here -->
                </ul>
            </div>
        </div>
    </section>

    <!-- 5. FEATURES SECTION -->
    <section id="features" class="features">
        <h2 class="section-title reveal">Premium <span>Features</span></h2>
        <div class="feature-grid">
            <div class="feature-card glass-card reveal">
                <i class="fa-regular fa-image"></i>
                <h3>Image Management</h3>
                <p>Organize and preview your royalty-free or personal images easily.</p>
            </div>
            <div class="feature-card glass-card reveal">
                <i class="fa-solid fa-link"></i>
                <h3>Public File Links</h3>
                <p>Directly download media from your own authorized public storage links.</p>
            </div>
        </div>
    </section>

    <!-- 6. FOOTER -->
    <footer>
        <div class="footer-content">
            <div class="footer-logo">
                <i class="fa-solid fa-layer-group"></i> MyMedia<span>Hub</span>
            </div>
            <div class="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
        <p class="copyright">&copy; 2026 MyMediaHub. Built for legitimate and authorized media only.</p>
    </footer>

    <!-- Link to our JavaScript file -->
    <script src="script.js"></script>
</body>
</html>
    
