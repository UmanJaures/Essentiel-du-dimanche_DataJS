// Current Sermon Data - Inspiration Divine
        const currentSermon = {
            theme: "En ces temps de la fin, menons le bon combat car Jésus revient.",
            preacher: "Étudiant Pasteur Marius Fulgence Pangné",
            passage: "2 Timothée 4:6-8",
            date: "Dimanche 20 Juillet 2025",
            image: "https://i.postimg.cc/43YRbgVz/Whats-App-Image-2025-07-21-18-18-21-96e760a8.jpg",
            content: `
                <p>Le message inspiré qui nous a édifié en ce Dimanche tiré du livre de 2 Timothée, nous invite à mener le bon combat en ces temps de la fin. Il s’articule autour de plusieurs points essentiels :<br>

• La définition même du combat auquel le chrétien est appelé.<br>

• Les différents combats que nous devons mener.<br>

• Les raisons pour lesquelles il est impératif de mener ce combat.<br>

• Les ressources nécessaires pour mener ce combat avec succès.<br>

• Enfin, les bénédictions et promesses qui accompagnent cette lutte fidèle.<br>

</p>
                
                <h2>Qu’est-ce que le bon combat ? </h2>
                <p>Le combat dont il est question ici est une lutte invisible ou visible mais bien réelle, que chaque chrétien mène contre les forces du mal, 
                    les tentations du diable et tout ce qui s’oppose à la volonté de Dieu. C’est une bataille quotidienne pour rester fidèle à Dieu, 
                    marcher selon ses voies et résister à l’esprit du monde.</p>
                
                <div class="verse-decoration">
                    <p class="verse-text">"[6]  Car pour moi, je sers déjà de libation, et le moment de mon départ approche. 
                        [7] J’ai combattu le bon combat, j’ai achevé la course, j’ai gardé la foi. [8] Désormais la couronne de justice m’est réservée;
                         le Seigneur, le juste juge, me la donnera dans ce jour-là, et non seulement à moi, mais encore à tous ceux qui auront aimé son avènement." <br>
                           <span class="verse-ref"> <strong><a href="https://bible.com/bible/93/2ti.4.6-8.LSG" > 2 Timothée 4:6-8 LSG </a></strong></span></p>
                </div>
                
                <h2>Quels combats devons-nous mener ?</h2>
                <h3>• Le combat de la foi – (1 Timothée 6:12)</h3>
                <p>Ce combat se manifeste par la fidélité à Christ, même au cœur des épreuves, et par la proclamation de l’Évangile. 
                    Il inclut aussi la lutte contre le péché et les désirs charnels, en imposant à notre chair des restrictions qui permettent de marcher selon l’Esprit.</p>
                
                <h3>• Le combat d’une bonne conscience – (1 Timothée 1:18-19) </h3>
                <p> Il s’agit de servir Christ avec intégrité, dans une conscience pure, loin de la duplicité, de la critique et de l’hypocrisie.
                     C’est un engagement sincère et profond à vivre une foi authentique.</p>
                
                <h2>Pourquoi devons-nous mener ce bon combat ?</h2>
                <p> Parce que le retour de Christ est proche. Il faut se tenir prêt, vivre avec ferveur et détermination. 
                    De plus, les âmes se perdent. Le monde a besoin de Dieu, les hommes ont besoin d’être sauvés. 
                    Notre combat est aussi un acte d’amour envers ceux que Dieu veut arracher à la perdition.</p>
                
                    <h2>Quels sont les éléments nécessaires pour mener ce combat ? </h2>
                <p><strong>• Le Saint-Esprit : </strong> Il est le fondement d’une vie chrétienne victorieuse. Sans Lui, il est impossible de tenir bon dans ce combat.</p>
                <p><strong>• La Parole de Dieu : </strong> Elle est notre boussole, notre ligne de conduite. Elle éclaire notre route, nous fortifie, et nous conduit au salut. </p>
                  
                    <h2>Quels sont les fruits de ce bon combat ?</h2>
                    <p> Mener le bon combat produit en nous la fidélité, la persévérance, et nous conduit vers l’accomplissement des promesses de Dieu. 
                        Celui qui combat jusqu’au bout reçoit la couronne de justice, la vie éternelle auprès du Seigneur. Mais ce combat n’impacte pas que nous seuls :
                         il permet aussi à d’autres de revenir à Dieu. Il touche des vies, restaure des cœurs et ouvre le chemin du salut à ceux qui nous entourent. Par notre engagement, 
                         Dieu sauve, transforme et glorifie son nom.</p>
                         <p> En tant qu'enfant de Dieu nous sommes tous appelé à mener le bon combat surtout en ces temps où les ténèbres avancent sans honte, 
                            où tant d’âmes vacillent au bord du gouffre. Ce combat, c’est rester ferme quand la vérité chancelle, 
                            garder la foi quand tout pousse au reniement, et manifester la vie du christ, car au bout de cette lutte une couronne de justice nous est réservée.
                            Alors marchons avec foi, servons avec zèle, aimons avec vérité… et menons, chaque jour, le bon combat. Car Jésus revient.</p> <br>
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