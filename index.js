// Data
const attractions = [
    {
        name: "Eiffel Tower",
        description: "The iconic symbol of Paris, offering stunning city views.",
        image: "https://images.unsplash.com/photo-1573752903713-fb816da14ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjI2ODU0MTUz&ixlib=rb-1.2.1&q=80&w=1080",
        visitingHours: "9:00 AM - 12:45 AM"
    },
    {
        name: "Louvre Museum",
        description: "World's largest art museum, home to the Mona Lisa.",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
        visitingHours: "9:00 AM - 6:00 PM"
    },
    {
        name: "Notre-Dame Cathedral",
        description: "Medieval Catholic cathedral known for its French Gothic architecture.",
        image: "https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?auto=format&fit=crop&w=800&q=80",
        visitingHours: "8:00 AM - 6:45 PM"
    }
];

const locations = [
    "Eiffel Tower - 7th arrondissement",
    "Louvre Museum - 1st arrondissement",
    "Notre-Dame Cathedral - 4th arrondissement",
    "Sacré-Cœur - 18th arrondissement",
    "Arc de Triomphe - 8th arrondissement",
    "Luxembourg Gardens - 6th arrondissement"
];

// Populate Attractions
function populateAttractions() {
    const attractionsGrid = document.getElementById('attractionsGrid');
    attractions.forEach(attraction => {
        const card = document.createElement('div');
        card.className = 'attraction-card';
        card.innerHTML = `
            <img src="${attraction.image}" alt="${attraction.name}">
            <div class="content">
                <h3>${attraction.name}</h3>
                <p>${attraction.description}</p>
                <p><strong>Hours:</strong> ${attraction.visitingHours}</p>
            </div>
        `;
        attractionsGrid.appendChild(card);
    });
}

// Populate Locations
function populateLocations() {
    const locationsList = document.getElementById('locationsList');
    locations.forEach(location => {
        const li = document.createElement('li');
        li.textContent = location;
        locationsList.appendChild(li);
    });
}

// Handle Contact Form
function setupContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
}

// Smooth Scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });

            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateAttractions();
    populateLocations();
    setupContactForm();
    setupSmoothScrolling();
});