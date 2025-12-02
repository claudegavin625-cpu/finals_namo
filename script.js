// --- Data ---
const POSTS = [
    {
        id: 1,
        title: "The Electric Revolution: Beyond the Hype",
        excerpt: "We test drive the latest EV hypercars to see if the soul of driving can survive without an internal combustion engine.",
        content: `<p>The silence is deafening, but the acceleration is violent. As we transition into a fully electric future, enthusiasts are asking one critical question: Where is the emotion?</p><h3 class="text-white">Instant Torque</h3><p>There is no denying the performance benefits. 0-60 times have dropped below 2 seconds. But without the roar of a V12 or the whine of a supercharger, something feels missing.</p><h3>The Verdict</h3><p>EVs are technically superior, but for the weekend drive, we might still reach for the keys to the vintage manual.</p>`,
        date: "Oct 12, 2024",
        readTime: "5 min read",
        tags: ["EV", "Hypercar", "Future"],
        type: "article",
        image: "https://images.unsplash.com/photo-1593055365545-2b46702e53bd?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Restoring a 1967 Shelby GT500",
        excerpt: "A two-year journey of rust, sweat, and gears. How we brought an American legend back to life from a barn find.",
        content: `<p>It started as a shell in a barn in Oklahoma. Mice had made a home in the intake manifold, and the floor pans were non-existent. But the VIN tag was authentic.</p><h3>The Teardown</h3><p>Every bolt was bagged and tagged. We sandblasted the chassis down to bare metal, revealing the scars of the last 50 years.</p><h3>First Start</h3><p>After a full engine rebuild, hearing that 428 Cobra Jet fire up for the first time was worth every scraped knuckle.</p>`,
        date: "Nov 03, 2024",
        readTime: "12 min read",
        tags: ["Classic", "Restoration", "Muscle"],
        type: "tutorial",
        image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Track Day Essentials: Under $30k",
        excerpt: "You don't need a Porsche GT3 to have fun on the circuit. Here are our top 5 picks for budget track weapons.",
        content: `<p>Racing is expensive, but it doesn't have to bankrupt you. We looked at the used market for cars that offer reliability, handling, and aftermarket support.</p><h3>The Mazda Miata (ND)</h3><p>The answer is always Miata. Lightweight, rear-wheel drive, and tires are cheap. It teaches you momentum driving like no other car.</p><h3>Honda Civic Type R</h3><p>If you need to haul groceries during the week and set lap records on Sunday, the hot hatch king still reigns supreme.</p>`,
        date: "Dec 15, 2024",
        readTime: "8 min read",
        tags: ["Track", "Guide", "Budget"],
        type: "tutorial",
        image: "https://images.unsplash.com/photo-1532588213355-52317771cce6?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "The Art of Aerodynamics",
        excerpt: "Understanding downforce, drag coefficients, and how active aero is changing the way cars look and handle.",
        content: `<p>Form follows function. In the world of high-speed automotive design, the air is your biggest enemy and your greatest ally.</p>`,
        date: "Jan 20, 2025",
        readTime: "6 min read",
        tags: ["Design", "Engineering"],
        type: "article",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800"
    }
];

// --- Shared Component Rendering ---
// This allows us to keep the Navbar and Footer in one place (this JS file)
// and inject it into every HTML page automatically.

function injectSharedComponents() {
    // 1. Inject Navbar
    const navbarHTML = `
        <div class="container flex justify-between items-center">
            <!-- Logo -->
            <a href="index.html" class="flex items-center gap-2">
                <div class="logo-box">
                    <span>T</span>
                </div>
                <span style="font-size: 1.5rem; font-weight: 800; letter-spacing: -1px; color: white;">
                    TURBO<span class="text-primary">.</span>
                </span>
            </a>

            <!-- Desktop Menu -->
            <div class="md-flex items-center gap-8 hidden">
                <a href="index.html" class="nav-link ${window.location.pathname.endsWith('index.html') ? 'active' : ''}">Home</a>
                <a href="#" class="nav-link">Reviews</a>
                <a href="#" class="nav-link">Builds</a>
                <a href="about.html" class="nav-link ${window.location.pathname.endsWith('about.html') ? 'active' : ''}">About</a>
                <button class="btn btn-primary">Subscribe</button>
            </div>

            <!-- Mobile Toggle -->
            <button id="mobile-menu-btn" class="md-hidden" style="background:none; border:none; color: white;">
                <i data-lucide="menu" style="width: 28px; height: 28px;"></i>
            </button>
        </div>

        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu" class="hidden">
            <a href="index.html" class="mobile-nav-btn">Home</a>
            <a href="#" class="mobile-nav-btn">Reviews</a>
            <a href="#" class="mobile-nav-btn">Builds</a>
            <a href="about.html" class="mobile-nav-btn">About</a>
        </div>
    `;
    
    const navElement = document.getElementById('navbar');
    if(navElement) navElement.innerHTML = navbarHTML;

    // 2. Inject Footer
    const footerHTML = `
        <div class="container">
            <div class="grid md-grid-cols-4 gap-8" style="margin-bottom: 3rem;">
                <div class="col-span-2">
                    <div class="flex items-center gap-2" style="margin-bottom: 1.5rem;">
                        <div class="logo-box" style="width: 24px; height: 24px; font-size: 0.75rem;">
                            <span>T</span>
                        </div>
                        <span style="font-size: 1.25rem; font-weight: 800; color: white;">TURBO<span class="text-primary">.</span></span>
                    </div>
                    <p style="max-width: 300px; margin-bottom: 1.5rem;">
                        Fueled by passion, driven by design. The ultimate destination for automotive culture, reviews, and restoration projects.
                    </p>
                    <div class="flex gap-4">
                        <a href="#" style="color: var(--text-muted);"><i data-lucide="twitter"></i></a>
                        <a href="#" style="color: var(--text-muted);"><i data-lucide="instagram"></i></a>
                        <a href="#" style="color: var(--text-muted);"><i data-lucide="youtube"></i></a>
                    </div>
                </div>
                
                <div>
                    <h4 style="margin-bottom: 1.5rem;">Explore</h4>
                    <ul style="display: flex; flex-direction: column; gap: 1rem; font-size: 0.9rem; color: var(--text-muted);">
                        <li><a href="#">Car Reviews</a></li>
                        <li><a href="#">Project Builds</a></li>
                        <li><a href="#">Supercars</a></li>
                        <li><a href="#">Classics</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style="margin-bottom: 1.5rem;">Newsletter</h4>
                    <p style="margin-bottom: 1rem; font-size: 0.9rem;">Get the latest automotive news weekly.</p>
                    <div class="input-group">
                        <input type="email" placeholder="Email address" class="input-field">
                        <button class="btn btn-primary" style="padding: 0.5rem 1rem;">
                            <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div style="border-top: 1px solid var(--border-color); padding-top: 2rem; display: flex; justify-content: space-between; color: #52525b; font-size: 0.875rem;">
                <p>&copy; 2024 TURBO Automotive. All rights reserved.</p>
                <div class="flex gap-6">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </div>
    `;
    
    const footerElement = document.querySelector('footer');
    if(footerElement) footerElement.innerHTML = footerHTML;

    // 3. Initialize Icons
    if(window.lucide) {
        window.lucide.createIcons();
    }

    // 4. Mobile Menu Logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        });
    }
}

// Helper to generate a Post Card HTML string
function createPostCard(post) {
    // Serialize for a hypothetical click handler if needed, or just link to a post page
    return `
        <div class="card">
            <div class="card-image">
                <img src="${post.image}" alt="${post.title}">
                <div style="position: absolute; top: 1rem; left: 1rem; display: flex; gap: 0.5rem;">
                    ${post.tags.slice(0, 2).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="card-content">
                <div class="card-meta">
                    <span><i data-lucide="calendar" style="width:12px; color: var(--primary);"></i> ${post.date}</span>
                    <span><i data-lucide="clock" style="width:12px; color: var(--primary);"></i> ${post.readTime}</span>
                </div>
                <h3 class="card-title">${post.title}</h3>
                <p class="card-excerpt">${post.excerpt}</p>
                <div style="margin-top: auto; display: flex; align-items: center; font-size: 0.875rem; font-weight: 700; color: white;">
                    Read Story <i data-lucide="chevron-right" style="width: 16px; margin-left: 4px; color: var(--primary);"></i>
                </div>
            </div>
        </div>
    `;
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
    injectSharedComponents();

    // Handle scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Page specific initialization
    if (document.getElementById('recent-posts-grid')) {
        const container = document.getElementById('recent-posts-grid');
        container.innerHTML = POSTS.slice(0, 3).map(post => createPostCard(post)).join('');
        lucide.createIcons();
    }
});// --- Data ---
const POSTS = [
    {
        id: 1,
        title: "The Electric Revolution: Beyond the Hype",
        excerpt: "We test drive the latest EV hypercars to see if the soul of driving can survive without an internal combustion engine.",
        content: `<p>The silence is deafening, but the acceleration is violent. As we transition into a fully electric future, enthusiasts are asking one critical question: Where is the emotion?</p><h3 class="text-white">Instant Torque</h3><p>There is no denying the performance benefits. 0-60 times have dropped below 2 seconds. But without the roar of a V12 or the whine of a supercharger, something feels missing.</p><h3>The Verdict</h3><p>EVs are technically superior, but for the weekend drive, we might still reach for the keys to the vintage manual.</p>`,
        date: "Oct 12, 2024",
        readTime: "5 min read",
        tags: ["EV", "Hypercar", "Future"],
        type: "article",
        image: "https://images.unsplash.com/photo-1593055365545-2b46702e53bd?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Restoring a 1967 Shelby GT500",
        excerpt: "A two-year journey of rust, sweat, and gears. How we brought an American legend back to life from a barn find.",
        content: `<p>It started as a shell in a barn in Oklahoma. Mice had made a home in the intake manifold, and the floor pans were non-existent. But the VIN tag was authentic.</p><h3>The Teardown</h3><p>Every bolt was bagged and tagged. We sandblasted the chassis down to bare metal, revealing the scars of the last 50 years.</p><h3>First Start</h3><p>After a full engine rebuild, hearing that 428 Cobra Jet fire up for the first time was worth every scraped knuckle.</p>`,
        date: "Nov 03, 2024",
        readTime: "12 min read",
        tags: ["Classic", "Restoration", "Muscle"],
        type: "tutorial",
        image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Track Day Essentials: Under $30k",
        excerpt: "You don't need a Porsche GT3 to have fun on the circuit. Here are our top 5 picks for budget track weapons.",
        content: `<p>Racing is expensive, but it doesn't have to bankrupt you. We looked at the used market for cars that offer reliability, handling, and aftermarket support.</p><h3>The Mazda Miata (ND)</h3><p>The answer is always Miata. Lightweight, rear-wheel drive, and tires are cheap. It teaches you momentum driving like no other car.</p><h3>Honda Civic Type R</h3><p>If you need to haul groceries during the week and set lap records on Sunday, the hot hatch king still reigns supreme.</p>`,
        date: "Dec 15, 2024",
        readTime: "8 min read",
        tags: ["Track", "Guide", "Budget"],
        type: "tutorial",
        image: "https://images.unsplash.com/photo-1532588213355-52317771cce6?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "The Art of Aerodynamics",
        excerpt: "Understanding downforce, drag coefficients, and how active aero is changing the way cars look and handle.",
        content: `<p>Form follows function. In the world of high-speed automotive design, the air is your biggest enemy and your greatest ally.</p>`,
        date: "Jan 20, 2025",
        readTime: "6 min read",
        tags: ["Design", "Engineering"],
        type: "article",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800"
    }
];

// --- Shared Component Rendering ---
// This allows us to keep the Navbar and Footer in one place (this JS file)
// and inject it into every HTML page automatically.

function injectSharedComponents() {
    // 1. Inject Navbar
    const navbarHTML = `
        <div class="container flex justify-between items-center">
            <!-- Logo -->
            <a href="index.html" class="flex items-center gap-2">
                <div class="logo-box">
                    <span>T</span>
                </div>
                <span style="font-size: 1.5rem; font-weight: 800; letter-spacing: -1px; color: white;">
                    TURBO<span class="text-primary">.</span>
                </span>
            </a>

            <!-- Desktop Menu -->
            <div class="md-flex items-center gap-8 hidden">
                <a href="index.html" class="nav-link ${window.location.pathname.endsWith('index.html') ? 'active' : ''}">Home</a>
                <a href="#" class="nav-link">Reviews</a>
                <a href="#" class="nav-link">Builds</a>
                <a href="about.html" class="nav-link ${window.location.pathname.endsWith('about.html') ? 'active' : ''}">About</a>
                <button class="btn btn-primary">Subscribe</button>
            </div>

            <!-- Mobile Toggle -->
            <button id="mobile-menu-btn" class="md-hidden" style="background:none; border:none; color: white;">
                <i data-lucide="menu" style="width: 28px; height: 28px;"></i>
            </button>
        </div>

        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu" class="hidden">
            <a href="index.html" class="mobile-nav-btn">Home</a>
            <a href="#" class="mobile-nav-btn">Reviews</a>
            <a href="#" class="mobile-nav-btn">Builds</a>
            <a href="about.html" class="mobile-nav-btn">About</a>
        </div>
    `;
    
    const navElement = document.getElementById('navbar');
    if(navElement) navElement.innerHTML = navbarHTML;

    // 2. Inject Footer
    const footerHTML = `
        <div class="container">
            <div class="grid md-grid-cols-4 gap-8" style="margin-bottom: 3rem;">
                <div class="col-span-2">
                    <div class="flex items-center gap-2" style="margin-bottom: 1.5rem;">
                        <div class="logo-box" style="width: 24px; height: 24px; font-size: 0.75rem;">
                            <span>T</span>
                        </div>
                        <span style="font-size: 1.25rem; font-weight: 800; color: white;">TURBO<span class="text-primary">.</span></span>
                    </div>
                    <p style="max-width: 300px; margin-bottom: 1.5rem;">
                        Fueled by passion, driven by design. The ultimate destination for automotive culture, reviews, and restoration projects.
                    </p>
                    <div class="flex gap-4">
                        <a href="#" style="color: var(--text-muted);"><i data-lucide="twitter"></i></a>
                        <a href="#" style="color: var(--text-muted);"><i data-lucide="instagram"></i></a>
                        <a href="#" style="color: var(--text-muted);"><i data-lucide="youtube"></i></a>
                    </div>
                </div>
                
                <div>
                    <h4 style="margin-bottom: 1.5rem;">Explore</h4>
                    <ul style="display: flex; flex-direction: column; gap: 1rem; font-size: 0.9rem; color: var(--text-muted);">
                        <li><a href="#">Car Reviews</a></li>
                        <li><a href="#">Project Builds</a></li>
                        <li><a href="#">Supercars</a></li>
                        <li><a href="#">Classics</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style="margin-bottom: 1.5rem;">Newsletter</h4>
                    <p style="margin-bottom: 1rem; font-size: 0.9rem;">Get the latest automotive news weekly.</p>
                    <div class="input-group">
                        <input type="email" placeholder="Email address" class="input-field">
                        <button class="btn btn-primary" style="padding: 0.5rem 1rem;">
                            <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div style="border-top: 1px solid var(--border-color); padding-top: 2rem; display: flex; justify-content: space-between; color: #52525b; font-size: 0.875rem;">
                <p>&copy; 2024 TURBO Automotive. All rights reserved.</p>
                <div class="flex gap-6">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </div>
    `;
    
    const footerElement = document.querySelector('footer');
    if(footerElement) footerElement.innerHTML = footerHTML;

    // 3. Initialize Icons
    if(window.lucide) {
        window.lucide.createIcons();
    }

    // 4. Mobile Menu Logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        });
    }
}

// Helper to generate a Post Card HTML string
function createPostCard(post) {
    // Serialize for a hypothetical click handler if needed, or just link to a post page
    return `
        <div class="card">
            <div class="card-image">
                <img src="${post.image}" alt="${post.title}">
                <div style="position: absolute; top: 1rem; left: 1rem; display: flex; gap: 0.5rem;">
                    ${post.tags.slice(0, 2).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="card-content">
                <div class="card-meta">
                    <span><i data-lucide="calendar" style="width:12px; color: var(--primary);"></i> ${post.date}</span>
                    <span><i data-lucide="clock" style="width:12px; color: var(--primary);"></i> ${post.readTime}</span>
                </div>
                <h3 class="card-title">${post.title}</h3>
                <p class="card-excerpt">${post.excerpt}</p>
                <div style="margin-top: auto; display: flex; align-items: center; font-size: 0.875rem; font-weight: 700; color: white;">
                    Read Story <i data-lucide="chevron-right" style="width: 16px; margin-left: 4px; color: var(--primary);"></i>
                </div>
            </div>
        </div>
    `;
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
    injectSharedComponents();

    // Handle scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Page specific initialization
    if (document.getElementById('recent-posts-grid')) {
        const container = document.getElementById('recent-posts-grid');
        container.innerHTML = POSTS.slice(0, 3).map(post => createPostCard(post)).join('');
        lucide.createIcons();
    }
});