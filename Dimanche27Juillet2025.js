// Current Sermon Data - Inspiration Divine
        const currentSermon = {
            theme: "JADCI – En ces temps de la fin, vivons la vie du Royaume",
            preacher: "Pasteur KEI",
            passage: "Matthieu 5:13-16",
            date: "Dimanche 27 Juillet 2025",
            image: "https://i.postimg.cc/NFLkFtqj/IMG-20250729-WA0001.jpg",
            content: `
                <p> Ce dimanche 27 juillet, à l’occasion de la Journée Nationale de la Jeunesse des Assemblées de Dieu de Côte d’Ivoire, 
                nous avons eu la grâce de recevoir le Pasteur KEI qui nous a puissamment édifiés autour du thème donné.
                Sa prédication s’est articulée autour de trois grandes questions essentielles:<br>

• Qu’est-ce que le Royaume de Dieu ? <br>

• Comment vivre la vie du Royaume ? <br>

• Quels sont les résultats d’une telle vie ? <br>

</p>
                
                <h2>Qu’est-ce que le Royaume de Dieu ? </h2>
                <p>Le Royaume de Dieu, c’est la présence et le règne de Dieu dans nos cœurs et dans nos vies.
                 C’est une réalité spirituelle caractérisée par la sainteté, la bonté, la justice, la paix, l’amour et la vérité.
                Ainsi vivre la vie du Royaume, c’est vivre comme Jésus-Christ, marcher selon ses principes, et incarner ses valeurs ici-bas.
                </p>
                
                <h2>Comment vivre la vie du Royaume ?</h2>
                <p>Dans Matthieu 5:13-16, Jésus utilise deux images puissantes pour décrire la vie que doivent mener ceux qui lui appartiennent :
                 le sel de la terre et la lumière du monde. </p>

                  <div class="verse-decoration">
                    <p class="verse-text">"[13]  Vous êtes le sel de la terre. Mais si le sel perd sa saveur, avec quoi la lui rendra-t-on? 
                    Il ne sert plus qu’à être jeté dehors, et foulé aux pieds par les hommes. [14] Vous êtes la lumière du monde. 
                    Une ville située sur une montagne ne peut être cachée; [15] et on n’allume pas une lampe pour la mettre sous le boisseau, 
                    mais on la met sur le chandelier, et elle éclaire tous ceux qui sont dans la maison. [16] Que votre lumière luise ainsi devant 
                    les hommes, afin qu’ils voient vos bonnes œuvres, et qu’ils glorifient votre Père qui est dans les cieux." <br>
                           <span class="verse-ref"> <strong><a href="https://bible.com/bible/93/mat.5.13-16.LSG" >Matthieu 5:13-16 LSG </a></strong></span></p>
                </div>
                
                <h3>🔸 Vous êtes le sel de la terre </h3>
                <p> Tout comme le sel conserve, purifie et donne de la saveur, de même, en tant qu'enfants de Dieu, 
                nous sommes appelés à influencer notre génération, préserver les valeurs du Royaume, à purifier notre environnement par 
                une vie de sanctification, et réveiller chez les païens le désir et le goût pour les choses d'en haut. </p>

                 <h3>🔸 Vous êtes la lumière du monde </h3>
                <p> La lumière éclaire, révèle, guide et réchauffe. Ainsi, en Christ, nous sommes appelés à : <br>
• Éclairer ceux qui marchent dans les ténèbres en apportant la vérité de l’Évangile ; <br>
• Révéler ce qui est caché par notre intégrité et mettre à nu le péché en menant une vie de sainteté ; <br>     
• Guider ceux qui sont perdus vers le salut en Jésus-Christ ; <br>
• Réchauffer les cœurs par la compassion, l’amour, et la bienveillance. <br>
Vivre la vie du Royaume, c’est également vivre notre foi de manière visible, sans compromis ni honte. 
C’est assumer notre identité en Christ en publique et briller partout où nous sommes, pour la gloire de Dieu.
</p>
                <h2>Quels sont les résultats de mener une telle vie ?</h2>
                <p> Lorsque nous vivons véritablement la vie du Royaume : <br>
• Des âmes sont gagnées à Christ par notre témoignage vivant ; <br> 
• Le nom de Dieu est glorifié à travers notre manière d’être et d’agir ; <br>
• Nous devenons des témoins puissants de l’amour et de la puissance de Dieu dans un monde en crise. <br>
                </p>

                <strong> <p> JADCI, vivons comme de véritables enfants du Royaume de Dieu !
Demeurons dans Sa présence, laissons Dieu régner dans nos cœurs et dans toutes nos relations.
Cultivons l’humilité, portons les valeurs du Royaume et soyons des ambassadeurs de paix pour le nom de Jésus.
Car en ces temps de la fin, Dieu cherche une génération qui brille, qui conserve, qui révèle et qui guide. Une génération de sel et de lumière.
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