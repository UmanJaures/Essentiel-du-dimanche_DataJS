// Current Sermon Data - Inspiration Divine
        const currentSermon = {
            theme: "La Diffusion du Réveil par les jeunes — Jeune, par le Saint-Esprit, sois un acteur de Réveil !",
            preacher: "Frère Gbato Serge",
            passage: " Romains 8:19",
            date: "Dimanche 05 Octobre 2025",
            image: "https://i.postimg.cc/762qTBwL/serge.png",
            content: `
                <p> Ce dimanche 05 octobre 2025 a marqué la clôture de la Semaine Spirituelle, une 
                semaine où le Seigneur nous a fait parcourir, à travers Son serviteur, chaque étape du 
                grand film du Réveil : du rôle à incarner, au scénario à suivre, jusqu’au tournage de ce 
                grand film du Réveil. Mais chaque étape n’avait qu’un seul but : <br>
                préparer la grande diffusion. Car un film, aussi bien écrit et tourné soit-il, n’a de 
                sens que lorsqu’il est vu. De même, le Réveil n’accomplit pleinement sa mission que 
                lorsqu’il est diffusé à travers des vies qui reflètent le Christ. Dans un message, 
                certes court mais profond, l’appel était clair : amener des jeunes réveillés à devenir 
                des écrans de diffusion du Christ.
                </p>
                
               <div class="verse-decoration">
                    <p class="verse-text">" [19] Aussi la création attend-elle avec un ardent désir la 
                    révélation des fils de Dieu. »" <br>
                  <span class="verse-ref"> <strong>
                  <a href="https://bible.com/bible/93/rom.8.19.LSG" > Romains 8:19 LSG </a>
                  </strong></span>
                  </p>
                </div>

                <h2> 🔹 Être un écran de diffusion. </h2>
                <p> Diffuser, c’est transmettre, rendre visible, révéler. Ainsi, être un écran de 
                diffusion, c’est accepter d’être le support visible de l’invisible. Ta vie est comme un 
                écran : <strong> elle projette ce que le ciel veut montrer. </strong> Dans une salle de cinéma, lors de la 
                diffusion d’un film, toutes les lumières s’éteignent pour que la lumière de l’écran 
                domine et attire les regards. De même, dans un monde en proie aux ténèbres, Dieu veut 
                que ta lumière se lève, qu’elle diffuse le Christ et attire les cœurs à Lui. Car 
                « la création tout entière soupire et attend la révélation des fils de Dieu » 
                (Romains 8:19). <br>
                Autrement dit, le monde attend de voir le Christ en action dans la vie de ceux qui ont 
                été touchés par Son Esprit — une génération qui manifeste les œuvres du Christ avec 
                puissance, et qui reflète Sa vie, Sa grâce et Son feu.
                </p>

                <h2> 🔹 Diffuser le Réveil partout. </h2>
                <p>Dans le grand film divin, les fils de Dieu sont les acteurs principaux. C’est 
                pourquoi, en ces temps de la fin, Dieu a répandu l’onction de Son Esprit sur nous, 
                les jeunes, selon Sa promesse : <strong> « Dans les derniers jours, Je répandrai de Mon 
                Esprit sur toute chair ; vos fils et vos filles prophétiseront… » </strong> (Actes 2:17) 
                afin que nous portions le Réveil partout autour de nous. <br>
                Malheureusement, trop souvent, ce feu reste confiné dans les murs de nos assemblées. 
                Nous brillons à l’église, mais à l’extérieur, la flamme s’éteint. Pourtant, le véritable
                champ de diffusion, ce n’est pas le temple — c’est le monde. Nous sommes des écrans 
                lumineux. L’église est le rassemblement de ces lumières, mais le monde est la salle de 
                projection. C’est dans le monde, au milieu des ténèbres, que le film du Réveil doit être
                projeté — là où les âmes ont faim, là où les regards cherchent la lumière. Chaque lieu 
                où tu passes est une occasion de diffuser le Christ : ton école, ton quartier, ton 
                travail, ton foyer. Dieu t’y envoie comme un projecteur de Sa gloire. <br> 
                Et chaque fois que tu te trouves face à une situation difficile, souviens-toi et 
                pose-toi cette question : « À ma place, qu’aurait fait Jésus ? »

                </p>

                <strong> <p> Une lumière n’est pas allumée pour être cachée sous un boisseau. De même, 
                si le Saint-Esprit nous a allumés, c’est pour éclairer des vies. Trop souvent, nous 
                étouffons cette lumière par la peur, le compromis ou la paresse spirituelle. Mais Dieu 
                nous appelle à révéler et diffuser Sa lumière sans retenue. Le Réveil ne se vit pas pour
                rester confiné dans les murs de l’église : il doit être manifesté, projeté et diffusé 
                dans le monde. Alors ne censurons plus le film de Dieu en nous. Le monde attend de voir,
                à travers ta vie, le film du Réveil. C’est le moment de laisser Dieu diffuser Son film 
                à travers toi — que ta vie devienne l’écran sur lequel le monde verra la gloire du 
                Christ et sera transformé à jamais.
                </p> </strong> <br>
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