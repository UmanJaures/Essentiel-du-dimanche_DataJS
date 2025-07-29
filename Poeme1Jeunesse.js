// Current Sermon Data - Inspiration Divine
        const currentSermon = {
            theme: "Vivons comme des enfants du Royaume de Dieu",
            preacher: "Poème Jeunnesse",
            passage: "",
            date: "Dimanche 27 Juillet 2025",
            image: "https://i.postimg.cc/zvnYD73d/Chat-GPT-Image-29-juil-2025-13-29-55.png",
            content: `
                <p> <strong> Jeunes des A.D.C.I, en ces temps de la fin vivons la vie du royaume. </strong> <br>
Nous vivons l’agonie d’un monde sans repères, <br>
Où l’obscurité gagne du terrain au quotidien.  <br>
Les cœurs sont froids, les âmes sont vides,  <br>
Et les hommes, enivrés de leur propre orgueil,  <br>
Courent sans fin après vanité et illusions. <br>

L’amour du prochain s’est évaporé, <br>
La vérité est étouffée par la popularité, <br>
Et l’injustice règne sous le masque de la normalité. <br>
« Sache que dans les derniers jours, <br>
Il y aura des temps difficiles » (2 Timothée 3:1) <br>
Et nous y sommes. <br>

Les valeurs du ciel sont piétinées, <br>
La sainteté moquée, la foi tournée en dérision. <br>
La perversion s’affiche sans honte, <br>
Et l’obscurité parle plus fort que la lumière.  <br>

Mais quand les ténèbres s’intensifient, c’est le moment pour la lumière de briller davantage. <br>
Alors Jeunes des A.D.C.I., levons-nous ! <br>
Car nous sommes appelés à plus. <br>

« Vous êtes la lumière du monde » (Matthieu 5:14), <br>
Que donc la lumière que nous sommes brille, <br>
Et qu’elle soit éclatante comme l’aurore. <br>
Dans un monde en ruine, soyons des bâtisseurs d’espoir. <br>
Là où la haine règne, semons l’amour. <br>
Et laissons l’amour de Dieu couler de nos cœurs. <br>

Vivons par l’Esprit, et non par la chair, <br>
Car « le fruit de l’Esprit c’est l’amour, la joie, la paix, la bonté, la foi ...» (Galates 5:22). <br>
Tombons en adoration là où l'ego s'exalte. <br>
Recherchons la sainteté dans un monde sale, <br>
Restons intègres là où la corruption séduit. <br>
« Soyez saints, car je suis saint » (1 Pierre 1:16), <br>
Telle est l’identité du Royaume que nous portons. <br>

Ne nous laissons pas entraîner par les désirs de ce siècle. <br>
N’aimons point le monde, ni les choses qui sont dans le monde... <br>
Car tout ce qui est dans le monde passe, <br>
Mais celui qui fait la volonté de Dieu demeure éternellement  (1 Jean 2:15-17). <br>

Jeunes des A.D.C.I., cherchons d’abord le Royaume, <br>
Et sa justice, sa paix et sa vérité (Matthieu 6:33). <br>
Que nos ambitions soient alignées avec le ciel, <br>
Que nos choix témoignent de notre citoyenneté divine. <br>
Jeunes des A.D.C.I En ces temps de la fin, <br>
Ne soyons pas spectateurs mais témoins, <br>
Ne soyons pas passifs mais porteurs de vie. <br>
Jeunes des A.D.C.I Nous sommes une race élue, un sacerdoce royal, un peuple saint » (1 Pierre 2:9), <br>
Vivons donc comme des enfants du Royaume !</p> <br>
                
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