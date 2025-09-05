// Current Sermon Data - Inspiration Divine
        const currentSermon = {
            theme: "Les épreuves dans la vie de l’enfant de Dieu (suite).",
            preacher: " Pasteur Konde Victor",
            passage: " Ésaïe 51:22-23 ; Ésaïe 54:15-17.",
            date: "Dimanche 31 Aout 2025",
            image: "https://i.postimg.cc/RFQTXqzW/Whats-App-Image-2025-08-24-12-38-19-c9327640.jpg",
            content: `
                <p> Les épreuves font partie de la vie ordinaire du chrétien. C’est un outil entre 
                les mains de Dieu pour l’évaluation de notre foi et la maturation de notre personnalité.
                 Le but des épreuves, selon Dieu, est de nous amener à être conformes à la stature 
                 parfaite de son Fils Jésus-Christ, conformément à l’écriture qui dit : 
                 « Tout disciple accompli sera comme son maître. »
                </p>
                
                <h2> 🔹 Cas 1 : L’épreuve comme punition de Dieu pour le péché. </h2>

               <div class="verse-decoration">
                    <p class="verse-text">" [22] Le Seigneur, ton Maître, ton Dieu, va défendre son 
                    peuple. Voici ce qu’il dit : « Je vais reprendre de tes mains la coupe qui fait 
                    tourner la tête, la coupe de ma colère. Tu n’en boiras plus jamais. [23] Je la 
                    mettrai dans la main de ceux qui te font souffrir. Ils te disaient : “Mets-toi par 
                    terre ! Nous allons marcher sur toi.” Et tu faisais de ton dos un passage, un 
                    chemin sur lequel ils marchaient. »" <br>
                  <span class="verse-ref"> <strong>
                  <a href="https://bible.com/bible/133/isa.51.22-23.PDV2017" > Ésaïe 51:22-23 PDV </a>
                  </strong></span>
                  </p>
                </div>

                <p> Parfois, nos propres choix et nos actes ouvrent des portes qui attirent la colère 
                de Dieu et permettent à nos ennemis d’en profiter pour nous accabler. Mais même dans 
                ces moments : <br>
  <strong>• La colère de Dieu n’est jamais éternelle ;</strong> elle a une limite, car Il est plein de 
                compassion. Sa discipline vise à corriger, non à détruire définitivement. <br>
  </strong>• Dieu défend toujours son peuple au temps marqué.</strong> Même lorsque la situation semble 
                désespérée et que l’ennemi croit avoir pris le dessus, rien n’échappe à sa souveraineté.
                Tes ennemis ne resteront pas impunis, car tout instrument de châtiment levé contre un 
                enfant de Dieu finit par être brisé.
                </p>

                <h2> 🔹 Cas 2 : L’épreuve venant de la méchanceté de l’ennemi. </h2>

                 <div class="verse-decoration">
                    <p class="verse-text">" [15] Si on vient t’attaquer, je n’y serai pour rien. 
                    Celui qui t’attaquera tombera devant toi. [16] Regarde, c’est moi qui ai créé le 
                    forgeron, lui qui souffle sur les charbons brûlants et qui fabrique des armes de 
                    toutes sortes. C’est moi aussi qui ai créé l’homme capable de détruire ces armes. 
                    [17] Aucune arme faite pour t’attaquer ne peut te faire de mal. Et si quelqu’un veut
                     t’accuser au tribunal, tu pourras prouver qu’il a tort. « Voilà la part que je 
                     réserve à ceux qui sont mes serviteurs, voilà comment je leur rends justice. 
                     Moi, le Seigneur, je le déclare. »" <br>
                  <span class="verse-ref"> <strong>
                  <a href="https://bible.com/bible/133/isa.54.15-17.PDV2017" > Ésaïe 54:15-17 PDV </a>
                  </strong></span>
                  </p>
                </div>

                <p>Nous avons un ennemi jaloux de notre position en Jésus, qui cherche chaque jour à 
                nous faire du mal. Les Écritures nous disent que nous ne devons pas ignorer ses 
                desseins. Ses desseins : « Le voleur ne vient que pour dérober, égorger et détruire… » 
                (Jean 10:10). <br>
                Mais face à ses desseins, Dieu nous rassure : Il combat pour nous et avec nous. Il 
                veut que nous expérimentions sa grâce, sa faveur et son repos. Voilà pourquoi, malgré 
                les attaques, nous pouvons rester confiants : « Ils te feront la guerre, mais ils ne 
                te vaincront pas, car je suis avec toi pour te délivrer » (Jérémie 1:19).
                </p>

                <strong> <p> L’épreuve n’est jamais la fin du chemin. Elle n’est ni un piège définitif, 
                ni une fatalité. Entre les mains de Dieu, elle devient un tremplin : pour nous 
                rapprocher de Christ, pour révéler sa victoire, et pour témoigner au monde que nous 
                servons un Dieu fidèle.
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
