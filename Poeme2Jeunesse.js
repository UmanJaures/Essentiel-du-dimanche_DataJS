// Current Sermon Data - Inspiration Divine
        const currentSermon = {
            theme: "Nouvelle vie",
            preacher: "Poème Jeunnesse",
            passage: "",
            date: "Dimanche 27 Juillet 2025",
            image: "https://i.postimg.cc/zvnYD73d/Chat-GPT-Image-29-juil-2025-13-29-55.png",
            content: `
                <p> <strong> Ce n'est pas grave </strong> <br>
Si on dit que je ne suis pas à la page <br>
Je suis même honoré <br>
Si on dit que je suis démodé <br>

Qu'on me sonde, <br>
Et qu'on voit que je suis d'un autre monde ! <br>
Eh oui, je suis d'un autre monde. <br> 
Dans le monde, mais pas du monde.<br>

Les attraits de ce monde sont funestes <br>
Et ne valent rien devant la cité Céleste <br>
Pour laquelle j'ai été sauvé(e) ! <br>
Je suis sauvé pour influencer. <br>
Sauvé pour obéir à mon Dieu. <br>
Sauvé pour vivre pieuxsement. <br>
Sauvé pour louer, et adorer Jésus <br>
Le sauveur des âmes perdues ! <br>

Ne vous étonnez pas, que j'ai changé en bien.<br>
Ne vous étonnez pas, que je ne suis plus avec eux. <br>
Car je produis le fruit de l'Esprit-Saint. <br>
Avec Jésus mon maitre, je suis bienheureux. <br>

Je veux, à tout jamais, vivre <br>
Vivre la vie d'en haut, celle du Royaume : <br>
Louange, adoration, prières, Psaumes ! <br>
Evangélisation, pureté, douceur et méditation du Livre ! <br>
Alors, viens, fais comme moi<br>
Libère-toi du poids du monde,<br>
Que Dieu nous façonne. <br>
Et vivons la vie du Royaume !</p> <br>
                
                            <i> Amen.</i>

            `
        };

        // Related Sermons - Arc-en-Ciel Spirituel
        const relatedSermons = [
            {
                theme: "Comment discerner la volonté de Dieu dans ma vie ?",
                date: "Dimanche 29 Juin 2025",
                url: "Dimanche29Juin2025.html",
                image: "https://i.postimg.cc/QMbnvnDf/1429125165-124523-1200x667x0.jpg"
            },
            {
                theme: "Le coeur derrière l'offrande.",
                date: "Dimanche 20 Juin 2025",
                 url: "Dimanche20Juin2025.html",
                image: "https://i.postimg.cc/W3mr5QP4/hands-offering-heart-generosity-compassion-vector-design-generative-ai-tender-illustration-one-pair.webp"
            }
            
        ];

        // DOM elements
        const elements = {
            churchLogo: document.getElementById('church-logo'),
            footerLogo: document.getElementById('footer-logo'),
            sermonTheme: document.getElementById('sermon-theme'),
            sermonPreacher: document.querySelector('#sermon-preacher span'),
            sermonPassage: document.querySelector('#sermon-passage span'),
            sermonDate: document.querySelector('#sermon-date span'),
            sermonImage: document.getElementById('sermon-image'),
            sermonContent: document.getElementById('sermon-content'),
            sermonTower: document.getElementById('sermon-tower'),
            viewMoreBtn: document.getElementById('view-more-btn'),
            currentYear: document.getElementById('current-year')
        };

        // Initialize the page
        function initPage() {
            // Set current year
            elements.currentYear.textContent = new Date().getFullYear();

            // Load current sermon data
            loadCurrentSermon();

            // Load related sermons (first 4)
            loadRelatedSermons(4);

            // Set up "View More" button
            elements.viewMoreBtn.addEventListener('click', function () {
                loadRelatedSermons(relatedSermons.length);
                this.style.display = 'none';
            });

            // Add scroll animations
            setupScrollAnimations();
        }

        // Load current sermon data
        function loadCurrentSermon() {
            elements.sermonTheme.textContent = currentSermon.theme;
            elements.sermonPreacher.textContent = currentSermon.preacher;
            elements.sermonPassage.textContent = currentSermon.passage;
            elements.sermonDate.textContent = currentSermon.date;
            elements.sermonImage.src = currentSermon.image;
            elements.sermonImage.alt = `Illustration: ${currentSermon.theme}`;
            elements.sermonContent.innerHTML = currentSermon.content;
        }

        // Load related sermons
        function loadRelatedSermons(count) {
            elements.sermonTower.innerHTML = '';

            const sermonsToShow = Math.min(count, relatedSermons.length);

            for (let i = 0; i < sermonsToShow; i++) {
                const sermon = relatedSermons[i];

                const link = document.createElement('a');
                link.href = sermon.url || "#";
                link.target = "_blank"; // ouvre dans un nouvel onglet (optionnel)
                link.className = 'sermon-card-link';
                link.style.textDecoration = 'none'; // pour enlever soulignement

                const sermonCard = document.createElement('div');
                sermonCard.className = 'sermon-card slide-up';
                sermonCard.style.animationDelay = `${i * 0.1}s`;

                sermonCard.innerHTML = `
      <img src="${sermon.image}" alt="${sermon.theme}" class="sermon-card-image">
      <div class="sermon-card-content">
        <h4 class="sermon-card-theme">${sermon.theme}</h4>
        <p class="sermon-card-date">${sermon.date}</p>
      </div>
    `;

                link.appendChild(sermonCard);
                elements.sermonTower.appendChild(link);
            }
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