// Données des enseignements
        const allSermons = [
             
             {
                theme: "Christ Crucifié.",
                date: "17 Aout 2025",
                thematic: "Psaume 22:2-5 ; Psaume 22:16-17.",
                image: "https://i.postimg.cc/pr36J5Tn/god-love-jesus-christ-crucified-vector-illustration-42212065.webp ",
                url: "Dimanche17Aout2025.html"
             },
             {
                theme: "Le rôle de l’enfant de Dieu en ces temps difficiles",
                date: "10 Aout 2025",
                thematic: "1 Timothée 2:1-8",
                image: "https://i.postimg.cc/qMy8yx4x/man-kneeling-praying-to-god-faith-prayer-concept-sketch-vector-illustration-2-G2-T31-R.jpg",
                url: "Dimanche10Aout2025.html"
            },
             {
                theme: "Enfant, sois un acteur du Réveil par le Saint-Esprit",
                date: "03 Aout 2025",
                thematic: "1 Samuel 3:1-4",
                image: "https://i.postimg.cc/Hn7NLYhx/Reveil-de-l-enfant.webp",
                url: "Dimanche03Aout2025.html"
            },
            {
                theme: "JADCI – En ces temps de la fin, vivons la vie du Royaume de Dieu.",
                date: "27 Juillet 2025",
                thematic: "Matthieu 5:13-16",
                image: "https://i.postimg.cc/zvnYD73d/Chat-GPT-Image-29-juil-2025-13-29-55.png",
                url: "Dimanche27Juillet2025.html"
            },
            {
                theme: "Enfants du Royaume",
                date: "27 Juillet 2025",
                thematic: "Poeme de la Jeunesse",
                image: "https://i.postimg.cc/g23NcKRY/vivons-la-vie-du-royaume.webp",
                url: "Poeme I Jeunesse.html"
            },
            {
                theme: "Nouvelle vie",
                date: "27 Juillet 2025",
                thematic: "Poeme de la Jeunese",
                image: "https://i.postimg.cc/FzJ7VgS4/New-Life-sm.webp",
                url: "Poeme II Jeunesse.html"
            },
           {
                theme: "En ces temps de la fin, menons le bon combat car Jésus revient.",
                date: "20 Juillet 2025",
                thematic: "2 Timothée 4:6-8",
                image: "https://i.postimg.cc/cHGHPN4Z/Chat-GPT-Image-22-juil-2025-13-33-23.png",
                url: "Dimanche20Juillet2025.html"
            },
            {
                theme: "Comment discerner la volonté de Dieu dans ma vie ?",
                date: "29 Juin 2025",
                thematic: "Jérémie 28",
                image: "https://i.postimg.cc/QMbnvnDf/1429125165-124523-1200x667x0.jpg",
                url: "Dimanche29Juin2025.html"
            },
          {
                theme: "Le coeur derrière l'offrande.",
                date: "22 Juin 2025",
                thematic: "Genèse 4:1-16",
                image: "https://i.postimg.cc/W3mr5QP4/hands-offering-heart-generosity-compassion-vector-design-generative-ai-tender-illustration-one-pair.webp",
                url: "Dimanche22Juin2025.html"
            }
            
        ];

        // DOM elements
        const elements = {
            churchLogo: document.getElementById('church-logo'),
            footerLogo: document.getElementById('footer-logo'),
            sermonsContainer: document.getElementById('sermons-container'),
            prevBtn: document.getElementById('prev-btn'),
            nextBtn: document.getElementById('next-btn'),
            currentYear: document.getElementById('current-year')
        };

        // Initialize the page
        function initPage() {
            // Set current year
            elements.currentYear.textContent = new Date().getFullYear();

            // Load sermons
            loadSermons();

            // Set up navigation buttons
            setupNavigation();

            // Add scroll animations
            setupScrollAnimations();
        }

        // Load sermons
        function loadSermons() {
            elements.sermonsContainer.innerHTML = '';

            allSermons.forEach((sermon, index) => {
                const sermonCard = document.createElement('a');
                sermonCard.href = sermon.url || "#";
                sermonCard.className = 'sermon-card slide-up';
                sermonCard.style.animationDelay = `${index * 0.1}s`;
                sermonCard.innerHTML = `
                    <img src="${sermon.image}" alt="${sermon.theme}" class="sermon-card-image">
                    <div class="sermon-card-content">
                        <h4 class="sermon-card-theme">${sermon.theme}</h4>
                        <p class="sermon-card-date">${sermon.date}</p>
                        <span class="sermon-card-thematic">${sermon.thematic}</span>
                    </div>
                `;
                elements.sermonsContainer.appendChild(sermonCard);
            });
        }

        // Setup navigation controls
        function setupNavigation() {
            elements.prevBtn.addEventListener('click', () => {
                elements.sermonsContainer.scrollBy({
                    left: -400,
                    behavior: 'smooth'
                });
            });

            elements.nextBtn.addEventListener('click', () => {
                elements.sermonsContainer.scrollBy({
                    left: 400,
                    behavior: 'smooth'
                });
            });
        }

        // Setup scroll animations
        function setupScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.slide-up').forEach(el => {
                observer.observe(el);
            });
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', initPage);