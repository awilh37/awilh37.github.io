// ========== PROJECT DATA ==========
// EASY TO UPDATE: Just modify this array to add your projects!
const projects = [
    {
        title: "Minecraft 1.12.2",
        description: "Unblockable Eaglercraft client for Minecraft 1.12.2 with enhanced features and optimizations.",
        fullDescription: "Utilizing Eaglercraft from lax1dude, this client is able to run a fully functional Minecraft 1.12.2 experience directly in the browser. Features include multiplayer support, custom resource packs, performance optimizations, and a seamless user interface. Perfect for playing Minecraft without the need for a traditional installation.",
        icon: "⛏",
        tags: ["Game", "HTML/javascript", "Multiplayer"],
        link: "https://awilh37.github.io/mc",
        repository: "https://github.com/awilh37/mc",
        type: "mine",
        screenshots: []
    },
    {
        title: "Chem Midterm Study",
        description: "Website for studying for 2025-26 H Chem midterm",
        fullDescription: "Based on the study guide provided, this website takes all of the practice problems and turns them into a flashcard based study format. ",
        icon: "🧪",
        tags: ["Study", "Chem", "Midterm"],
        link: "https://awilh37.github.io/chemmid",
        repository: "https://github.com/awilh37/chemmid",
        type: "mine",
        screenshots: []
    },
    {
        title: "Cube Timer",
        description: "A Rubik's cube speed cubing timer with statistics and personal records tracking.",
        fullDescription: "A comprehensive speed cubing timer built with vanilla JavaScript. Features include real-time stopwatch functionality, personal best tracking, average calculations (AO5, AO12), session statistics, and local storage persistence. Perfect for cubers of all levels to track their improvement over time.",
        icon: "🎲",
        tags: ["JavaScript", "HTML/CSS", "Timer"],
        link: "https://awilh37.github.io/cube.html",
        repository: "https://github.com/awilh37/awilh37.github.io",
        type: "mine",
        screenshots: ["sshots/cube1.png", "sshots/cube2.png", "sshots/cube3.png"]
    },
    {
        title: "Tuner",
        description: "Real-time pitch detection and tuning application using Web Audio API",
        fullDescription: "Advanced pitch detector with visual waveform. Detects musical notes in real-time using microphone input and displays frequency, note name, and tuning accuracy. Features autocorrelation-based pitch detection and live waveform visualization with signal processing.",
        icon: "🎵",
        tags: ["JavaScript", "Web Audio API", "Pitch Detection"],
        link: "https://awilh37.github.io/tuner",
        repository: "https://github.com/awilh37/tuner",
        type: "mine",
        screenshots: ["sshots/tuner1.png", "sshots/tuner2.png", "sshots/tuner3.png"]
    },
    {
        title: "Record",
        description: "Multi-track audio recording and editing application with timeline and AI features",
        fullDescription: "A React-based audio workstation with 4-track recording, drag-and-drop timeline editing, latency calibration, and AI-powered features. Includes automatic lyrics generation and text-to-speech synthesis using Gemini API. Professional audio mixing in the browser.",
        icon: "🎙️",
        tags: ["React", "Audio API", "Gemini AI", "Timeline"],
        link: "https://awilh37.github.io/record",
        repository: "https://github.com/awilh37/record",
        type: "mine",
        screenshots: ["sshots/record1.png", "sshots/record2.png", "sshots/record3.png"]
    },
    {
        title: "Poker",
        description: "Web-based poker game platform with Firebase backend and role-based access control",
        fullDescription: "Complete poker application with user authentication via Google Sign-in, Firebase Firestore database, role-based access control (Player/Admin/Owner), game room management, and real-time player interactions. Features chip management, user directory, and investment platform for tracking chips.",
        icon: "♠️",
        tags: ["Firebase", "Authentication", "Firestore", "Real-time"],
        link: "https://awilh37.github.io/poker",
        repository: "https://github.com/awilh37/poker",
        type: "mine",
        screenshots: ["sshots/poker1.png", "sshots/poker2.png", "sshots/poker3.png"]
    },
    {
        title: "[WIP] Mafia",
        description: "Game coordination application for the Mafia party game",
        fullDescription: "Mafia game application built with modern web technologies. Provides game management and coordination features for the classic social deduction party game. Helps facilitate gameplay, role assignments, and game state tracking.",
        icon: "🎭",
        tags: ["Game", "Multiplayer", "Social"],
        link: "https://awilh37.github.io/mafia",
        repository: "https://github.com/awilh37/mafia",
        type: "hidden",
        screenshots: []
    },
    {
        title: "HTML Games",
        description: "Collection of browser-based games including 2048, Snake, Tetris, and more",
        fullDescription: "Curated collection of HTML/CSS/JavaScript games. Includes 2048 variants, Snake, Tetris, Pong Wars, Rock-Paper-Scissors cellular automaton, physics simulations, and other browser-based games. Each game is fully playable in the browser with no dependencies.",
        icon: "🎮",
        tags: ["HTML", "CSS", "JavaScript", "Games"],
        link: "https://awilh37.github.io/html_games",
        repository: "https://github.com/awilh37/html_games",
        type: "mine",
        screenshots: ["sshots/games1.png", "sshots/games2.png"]
    },
    {
        title: "SSH",
        description: "Browser-based SSH terminal with WebSocket gateway for secure remote access",
        fullDescription: "Web-based SSH client using WebSocket communication. Allows secure shell access through a browser interface with terminal emulation using xterm.js. Features login interface, real-time command execution, and WebSocket communication with SSH server.",
        icon: "🔌",
        tags: ["Node.js", "WebSocket", "SSH", "Terminal"],
        link: "https://awilh37.github.io/ssh",
        repository: "https://github.com/awilh37/ssh",
        type: "hidden",
        screenshots: []
    },
    {
        title: "Element",
        description: "Personality quiz that determines which chemical element you are",
        fullDescription: "Interactive personality quiz built with Tailwind CSS. Answer questions to discover your element personality - from Hydrogen to Uranium. Features dynamic progress tracking, unique element descriptions, quiz restart functionality, and beautiful UI with element-themed cards.",
        icon: "⚗️",
        tags: ["HTML", "Tailwind CSS", "Quiz"],
        link: "https://awilh37.github.io/element",
        repository: "https://github.com/awilh37/element",
        type: "mine",
        screenshots: ["sshots/element1.png", "sshots/element2.png", "sshots/element3.png"]
    },
    {
        title: "5x5 2048",
        description: "Extended 2048 game on a 5x5 grid instead of the standard 4x4",
        fullDescription: "Variant of the popular 2048 sliding tile game on a larger 5x5 grid. Combine tiles to reach higher numbers with increased complexity and challenge. Features color-coded tiles for easy number identification and real-time score tracking.",
        icon: "🧩",
        tags: ["JavaScript", "Game", "HTML"],
        link: "https://awilh37.github.io/5x5-2048",
        repository: "https://github.com/awilh37/5x5-2048",
        type: "forked",
        originalAuthor: "Evan Pereira",
        originalLink: "https://github.com/Evan727/5x5-2048",
        screenshots: []
    },
    {
        title: "Desmos Offline",
        description: "Offline version of Desmos Graphing Calculator with save/load functionality",
        fullDescription: "Browser-based graphing calculator using Desmos API v1.4. Create and save mathematical graphs locally in JSON format. Can load previously saved graphs and provides full graphing functionality without internet dependency. Perfect for mathematical visualization and analysis.",
        icon: "📊",
        tags: ["Desmos API", "Graphing", "Math"],
        link: "https://awilh37.github.io/desmos",
        repository: "https://github.com/awilh37/desmos",
        type: "forked",
        originalAuthor: "T.H.YU",
        originalLink: "https://github.com/th-yu/OfflineDesmos",
        screenshots: []
    }
];

// ========== STATE MANAGEMENT ==========
let currentFilter = 'mine';
let hiddenProjectsUnlocked = false;

// ========== RENDER PROJECTS ==========
function renderProjects() {
    const container = document.getElementById('projectsContainer');
    container.innerHTML = ''; // Clear existing projects
    
    // Filter projects based on current filter
    const filteredProjects = projects.filter(project => {
        if (currentFilter === 'hidden') {
            return hiddenProjectsUnlocked && project.type === 'hidden';
        }
        return project.type === currentFilter;
    });
    
    // Show hint for hidden projects if not unlocked
    const hintElement = document.getElementById('hiddenHint');
    if (currentFilter === 'hidden' && !hiddenProjectsUnlocked) {
        hintElement.style.display = 'block';
    } else {
        hintElement.style.display = 'none';
    }
    
    if (filteredProjects.length === 0 && currentFilter === 'hidden' && !hiddenProjectsUnlocked) {
        container.innerHTML = '<p style="text-align: center; color: #888; padding: 40px;">Unlock hidden projects with the secret hotkey...</p>';
        return;
    }
    
    if (filteredProjects.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #888; padding: 40px;">No projects in this category yet.</p>';
        return;
    }
    
    filteredProjects.forEach((project, index) => {
        const actualIndex = projects.indexOf(project);
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Add fork badge if forked
        let forkBadgeHTML = '';
        if (project.type === 'forked') {
            forkBadgeHTML = `<div class="fork-badge" title="Forked from ${project.originalAuthor}">
                <span class="fork-icon">🍴</span>
                <span class="fork-text">${project.originalAuthor}</span>
            </div>`;
        }
        
        // Build tags HTML
        const tagsHTML = project.tags
            .map(tag => `<span class="tag">${tag}</span>`)
            .join('');
        
        card.innerHTML = `
            ${forkBadgeHTML}
            <div class="project-icon">${project.icon}</div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">${tagsHTML}</div>
            <a href="${project.repository}" target="_blank" class="project-link repo-link">View Repository</a>
        `;
        
        // Add click handler to open modal
        card.addEventListener('click', () => openProjectModal(actualIndex));
        
        container.appendChild(card);
    });
}

// ========== MODAL FUNCTIONALITY ==========
function openProjectModal(projectIndex) {
    const project = projects[projectIndex];
    const modal = document.getElementById('projectModal');
    
    // Populate modal with project data
    document.getElementById('modalIcon').textContent = project.icon;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.fullDescription;
    
    // Set up repo and project links with click handlers
    const repoLink = document.getElementById('modalRepoLink');
    const projectLink = document.getElementById('modalProjectLink');
    
    repoLink.href = project.repository;
    repoLink.onclick = (e) => {
        e.preventDefault();
        window.open(project.repository, '_blank');
    };
    
    projectLink.href = project.link;
    projectLink.onclick = (e) => {
        e.preventDefault();
        window.open(project.link, '_blank');
    };
    
    // Handle screenshots carousel
    const screenshotsContainer = document.getElementById('screenshotsContainer');
    screenshotsContainer.innerHTML = '';
    
    if (project.screenshots && project.screenshots.length > 0) {
        const screenshotsTitle = document.createElement('h4');
        screenshotsTitle.textContent = 'Screenshots';
        screenshotsContainer.appendChild(screenshotsTitle);
        
        // Create carousel wrapper
        const carouselWrapper = document.createElement('div');
        carouselWrapper.className = 'carousel-wrapper';
        
        const carousel = document.createElement('div');
        carousel.className = 'carousel';
        
        // Add screenshot images
        project.screenshots.forEach((screenshot, index) => {
            const img = document.createElement('img');
            img.src = screenshot;
            img.alt = `${project.title} screenshot ${index + 1}`;
            img.className = 'carousel-image';
            if (index === 0) img.classList.add('active');
            carousel.appendChild(img);
        });
        
        carouselWrapper.appendChild(carousel);
        
        // Only add controls if there's more than 1 screenshot
        if (project.screenshots.length > 1) {
            const prevBtn = document.createElement('button');
            prevBtn.className = 'carousel-btn carousel-prev';
            prevBtn.innerHTML = '&#10094;';
            prevBtn.addEventListener('click', () => moveCarousel(-1));
            
            const nextBtn = document.createElement('button');
            nextBtn.className = 'carousel-btn carousel-next';
            nextBtn.innerHTML = '&#10095;';
            nextBtn.addEventListener('click', () => moveCarousel(1));
            
            carouselWrapper.appendChild(prevBtn);
            carouselWrapper.appendChild(nextBtn);
            
            // Add dots indicator
            const dotsContainer = document.createElement('div');
            dotsContainer.className = 'carousel-dots';
            
            project.screenshots.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.className = 'dot';
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(index));
                dotsContainer.appendChild(dot);
            });
            
            carouselWrapper.appendChild(dotsContainer);
        }
        
        screenshotsContainer.appendChild(carouselWrapper);
        
        // Store current project index for carousel navigation
        screenshotsContainer.dataset.projectIndex = projectIndex;
        screenshotsContainer.dataset.currentSlide = 0;
    }
    
    // Show modal
    modal.classList.add('active');
}

function moveCarousel(direction) {
    const container = document.getElementById('screenshotsContainer');
    const currentSlide = parseInt(container.dataset.currentSlide) || 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalSlides = images.length;
    
    let newSlide = currentSlide + direction;
    if (newSlide >= totalSlides) newSlide = 0;
    if (newSlide < 0) newSlide = totalSlides - 1;
    
    goToSlide(newSlide);
}

function goToSlide(slideIndex) {
    const container = document.getElementById('screenshotsContainer');
    const images = document.querySelectorAll('.carousel-image');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    
    // Remove active class from all images and dots
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current image and dot
    images[slideIndex].classList.add('active');
    if (dots[slideIndex]) dots[slideIndex].classList.add('active');
    
    // Update current slide index
    container.dataset.currentSlide = slideIndex;
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
}

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    
    // Modal close button
    document.querySelector('.modal-close').addEventListener('click', closeProjectModal);
    
    // Close modal when clicking outside
    document.getElementById('projectModal').addEventListener('click', (e) => {
        if (e.target.id === 'projectModal') {
            closeProjectModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
    
    // Tab/Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Update filter and render
            currentFilter = btn.dataset.filter;
            renderProjects();
        });
    });
});

// ========== HIDDEN PROJECTS - HOTKEY & PASSWORD ==========
const HOTKEY = '`'; // Backtick key
const CORRECT_PASSWORD = '125012';

// Create hidden modal for password
function createPasswordModal() {
    if (!document.getElementById('passwordModal')) {
        const modal = document.createElement('div');
        modal.id = 'passwordModal';
        modal.className = 'password-modal hidden';
        modal.innerHTML = `
            <div class="password-modal-content">
                <h2>Enter Password</h2>
                <input type="password" id="passwordInput" placeholder="Enter password" />
                <div id="passwordError" class="password-error"></div>
                <div class="password-buttons">
                    <button id="passwordSubmit" class="btn btn-primary">Unlock</button>
                    <button id="passwordCancel" class="btn btn-gray">Cancel</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Setup event listeners
        document.getElementById('passwordSubmit').addEventListener('click', checkPassword);
        document.getElementById('passwordCancel').addEventListener('click', closePasswordModal);
        document.getElementById('passwordInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkPassword();
        });
    }
}

function showPasswordModal() {
    const modal = document.getElementById('passwordModal');
    modal.classList.remove('hidden');
    document.getElementById('passwordInput').value = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('passwordInput').focus();
}

function closePasswordModal() {
    const modal = document.getElementById('passwordModal');
    modal.classList.add('hidden');
}

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const errorDiv = document.getElementById('passwordError');
    
    if (input === CORRECT_PASSWORD) {
        hiddenProjectsUnlocked = true;
        closePasswordModal();
        // Hide the hint since projects are now unlocked
        const hintElement = document.getElementById('hiddenHint');
        if (hintElement) hintElement.style.display = 'none';
        currentFilter = 'hidden';
        // Update filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === 'hidden') btn.classList.add('active');
        });
        renderProjects();
    } else {
        errorDiv.textContent = 'Incorrect password';
        document.getElementById('passwordInput').value = '';
    }
}

// Listen for hotkey
document.addEventListener('keydown', (e) => {
    if (e.key === HOTKEY) {
        e.preventDefault();
        
        // Toggle hidden projects
        if (hiddenProjectsUnlocked) {
            // Hide hidden projects
            hiddenProjectsUnlocked = false;
            const hiddenTab = document.querySelector('.hidden-tab');
            if (hiddenTab) {
                hiddenTab.style.display = 'none';
                hiddenTab.classList.remove('active');
            }
            // Switch back to "My Projects"
            currentFilter = 'mine';
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.filter === 'mine') btn.classList.add('active');
            });
            renderProjects();
        } else {
            // Show password modal to unlock
            const hiddenTab = document.querySelector('.hidden-tab');
            if (hiddenTab && hiddenTab.style.display === 'none') {
                hiddenTab.style.display = 'block';
            }
            createPasswordModal();
            showPasswordModal();
        }
    }
});

// ========== SMOOTH SCROLL FOR NAVIGATION ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
