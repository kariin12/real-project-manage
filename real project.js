<!DOCTYPE html>
<html lang="so">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fresh Garden Premium | JS Project</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>

    <div class="top-bar">
        Ka faa'iidayso dhimista maanta! Waxaa ka hartay: <span id="timer">00:00:00</span>
    </div>

    <header>
        <nav class="container">
            <div class="logo">Fresh<span>Garden</span></div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#auth">Account</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="cart-box">🛒 Cart: <span id="cart-count">0</span></div>
        </nav>
    </header>

    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Miraha & Khudaarta <br> Ugu Tayada Fiican</h1>
            <p>Caafimaadkaagu waa muhiim. Ka iibso halkan khudaar 100% Organic ah oo beerta laga soo guray.</p>
            <a href="#shop" class="btn-main">Hadda Iibso</a>
        </div>
    </section>

    <section id="about" class="container about-section">
        <div class="about-flex">
            <div class="about-text">
                <h2>Naga Baro</h2>
                <p>Fresh Garden waa goob kuu suurtagelinaysa inaad hesho khudaar daray ah adigoo gurigaaga jooga. Waxaan daryeelnaa tayada iyo caafimaadka macaamiishayada.</p>
                <div class="stats">
                    <div><h3>10k+</h3><p>Macaamiil</p></div>
                    <div><h3>50+</h3><p>Beeralay</p></div>
                </div>
            </div>
        </div>
    </section>

    <section id="auth" class="container">
        <div class="auth-card">
            <div class="auth-tabs">
                <button id="t-login" class="active" onclick="toggleAuth('login')">Login</button>
                <button id="t-signup" onclick="toggleAuth('signup')">Sign Up</button>
            </div>

            <form id="form-login" class="auth-form">
                <h2>Soo Gal</h2>
                <input type="email" id="l-email" placeholder="Email-kaaga" required>
                <input type="password" id="l-pass" placeholder="Password" required>
                <button type="submit" class="btn-primary">Log In</button>
            </form>

            <form id="form-signup" class="auth-form hidden">
                <h2>Is-diiwaangeli</h2>
                <input type="text" id="s-name" placeholder="Magacaaga oo buuxa" required>
                <input type="email" id="s-email" placeholder="Email-kaaga" required>
                <input type="password" id="s-pass" placeholder="Password (6+ xaraf)" required>
                <input type="password" id="s-confirm" placeholder="Hubi Password-ka" required>
                <button type="submit" class="btn-primary">Abuur Account</button>
            </form>
            <p id="auth-msg"></p>
        </div>
    </section>

    <section class="search-section container">
        <div class="search-box">
            <input type="text" id="searchInput" placeholder="Raadi khudaar ama miro..." onkeyup="searchItems()">
        </div>
        <div class="filter-group">
            <button class="f-btn active" onclick="filterItems('all')">Dhamaan</button>
            <button class="f-btn" onclick="filterItems('fruit')">Miraha</button>
            <button class="f-btn" onclick="filterItems('vegetable')">Khudaarta</button>
        </div>
    </section>

    <section id="shop" class="container">
        <h2 class="section-title">Alaabta nugu cusub</h2>
        <div id="product-grid" class="grid">
            </div>
    </section>

    <section id="faq" class="container faq-section">
        <h2 class="section-title">Su'aalaha Inta Badan La Is-weydiiyo</h2>
        <div class="faq-list">
            <div class="faq-item">
                <h4>Ma keentaan khudaarta gobolada?</h4>
                <p>Haa, waxaan u keennaa dhamaan gobolada dalka 24 saac gudahood.</p>
            </div>
            <div class="faq-item">
                <h4>Sideen u bixiyaa lacagta?</h4>
                <p>Waxaad ku bixin kartaa EVC Plus, Sahal, iyo Kaash marka alaabta laguugu keeno.</p>
            </div>
        </div>
    </section>

    <section id="contact" class="container">
        <div class="contact-box">
            <h2>Nagala Soo Xiriir</h2>
            <form id="contact-form">
                <input type="text" id="c-name" placeholder="Magacaaga" required>
                <input type="email" id="c-email" placeholder="Email-kaaga" required>
                <textarea id="c-msg" placeholder="Sideen kuu caawinaa?" required></textarea>
                <button type="submit" class="btn-primary">Dir Fariinta</button>
            </form>
            <p id="contact-msg"></p>
        </div>
    </section>

    <footer>
        <div class="container footer-grid">
            <div>
                <h3>Fresh Garden</h3>
                <p>Khudaar dabiici ah oo beerta laga soo guray si toos ah.</p>
            </div>
            <div>
                <h3>Quick Links</h3>
                <p>Home | Shop | About | Contact</p>
            </div>
            <div>
                <h3>Support</h3>
                <p>Tel: +252 61XXXXXXX <br> Email: support@garden.com</p>
            </div>
        </div>
        <p class="copyright">&copy; 2026 Fresh Garden - All Rights Reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>