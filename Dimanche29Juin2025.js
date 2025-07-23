 // Current Sermon Data - Inspiration Divine
        const currentSermon = {
            theme: "Comment discerner la volonté de Dieu dans ma vie ?",
            preacher: "Apôtre Nguessan Yede Émile",
            passage: "Jérémie 28",
            date: "Dimanche 29 Juin 2025",
            image: "https://i.postimg.cc/zvFMkT3K/IMG-20250722-WA0006.jpg",
            content: `
                <p> À l'occasion de la célébration de la journée de la MIFA (Mission Famille), l'Apôtre Nguessan Yede Émile a enseigné,
                     à travers deux puissants témoignages, comment Dieu peut révéler sa volonté et comment nous pouvons l’identifier.</p>
                
                <h2>Que signifie discerner la volonté de Dieu?</h2>
                <p> Discerner la volonté de Dieu c’est reconnaître, comprendre et se laisser guider par la parole de Dieu. 
                    C'est aussi mettre de coté nos propre désirs pour satisfaire les désirs de Dieu. <br>
                    Il arrive que nous cherchions à faire primer nos désirs personnels, au détriment de ce que Dieu veut réellement. 
                        Pourtant, Dieu nous parle, nous interpelle, Il nous exhorte à Lui obéir. Mais lorsque nous persistons dans notre propre voie, 
                        Il nous laisse aller jusqu’au bout de nos choix… et nous en faire porter les conséquences.
                        C'est ce que montre Jérémie 28, avec l'exemple du faux prophète Hanania. 
                        En déclarant des paroles contraires à celles données par Dieu à son prophète Jérémie pour le peuple d'Israël, 
                        Hanania subit les conséquences de son entêtement.</p>

                        <div class="verse-decoration">
                    <p class="verse-text">"[16] C’est pourquoi ainsi parle l’Éternel: Voici, je te chasse de la terre; 
                        tu mourras cette année; car tes paroles sont une révolte contre l’Éternel." <br>
                           <span class="verse-ref"> <strong> <a href="https://bible.com/bible/93/jer.28.16.LSG" >Jérémie 28:16 LSG </a> </strong></span></p>
                </div> 

                <p>Ce passage montre à quel point il est important de chercher la vraie volonté de Dieu, et non ce qui nous arrange.</p>

                <h2>Discerner la voix de Dieu par la prière.</h2>
                <p>Le premier témoignage partagé par l'Apôtre était celui de sa propre rencontre avec Maman Nguessan.
                     Il partage comment, dès le premier regard, le Saint-Esprit lui révèle que cette femme serait son épouse. 
                     Pourtant, par manque de discernement, il rejette cette pensée, croyant qu'elle n'est pas de Dieu.
                      Mais après un moment de prière, il comprend que cette pensée était de Dieu et s'y est conformé. <br>
                 Son témoignage montre que la prière est un moyen essentiel pour discerner la volonté de Dieu,
                     non seulement pour le choix du conjoint, mais aussi dans tous les domaines de la vie. 
                     Lorsque nous sommes troublés, confus ou incertains, il est important de prier, 
                     car c’est dans la prière que Dieu nous éclaire et nous permet de reconnaître sa voix.</p>
                
                <h2>Discerner la voix de Dieu par les Autorités Spirituelles.</h2>
                <p>Le discernement peut aussi passer par les autorités spirituelles. 
                    En demandant conseil aux responsables, il est possible de recevoir une direction claire de la part de Dieu. 
                    Le témoignage du frère Kouassi Kobenan et de son épouse madame Kouassi Rachel est un bel exemple de comment, à travers l’Apôtre,
                    Dieu a manifesté sa volonté dans leur vie. En se laissant conseiller et guider, ce couple a trouvé le chemin que Dieu 
                    avait tracé pour eux.<br>
                    <br>
                En somme, discerner la volonté de Dieu nécessite la prière, l’écoute de l’Esprit, 
                    l’humilité de recevoir des conseils spirituels, et la soumission à Sa Parole. 
                    C’est accepter que Dieu sache mieux que nous ce qui est bon, surtout dans des choix aussi déterminants que celui du conjoint. 
                    Car Sa volonté est toujours bonne, agréable et parfaite (Romains 12:2). Elle conduit à la paix, à la bénédiction, 
                    et à l’accomplissement de ses promesses dans notre vie. </p>

            `
        };

        // Related Sermons - Arc-en-Ciel Spirituel
        const relatedSermons = [
            {
                theme: "En ces temps de la fin, menons le bon combat car Jésus revient.",
                date: "Dimanche 20 Juillet 2025",
                url: "Dimanche20Juillet2025.html",
                image: "https://i.postimg.cc/cHGHPN4Z/Chat-GPT-Image-22-juil-2025-13-33-23.png"
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