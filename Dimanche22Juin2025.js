 // Current Sermon Data - Inspiration Divine
        const currentSermon = {
            theme: "Le coeur derrière l'offrande.",
            preacher: "Pasteur Kamenan",
            passage: "Genèse 4:1-16",
            date: "Dimanche 22 Juin 2025",
            image: "https://i.postimg.cc/V6M7xPgB/Chat-GPT-Image-22-juil-2025-16-41-43.png",
            content: `
                <p> Dans ce sermon du dimanche 22 Juin 2025, le Pasteur Kamenan nous a invités à réfléchir sur le véritable sens de l’offrande : 
                    un acte spirituel qui trouve toute sa valeur dans la disposition du cœur du donateur.</p>
                
                <h2>Qu’est-ce que l’offrande ?</h2>
                <p>L’offrande est un don à Dieu, en témoignage de notre affection et de notre amour envers Lui.</p>

                <h2>L’exemple de l’offrande d’Abel</h2>
                <p>Genèse 4 :1-16 nous révèle, à travers l’histoire des offrandes d’Abel et de Caïn, 
                    que Dieu regarde au Coeur avant l'offrande, au Donateur avant le don.</p>

                     <div class="verse-decoration">
                    <p class="verse-text">"[4] C’est par la foi qu’Abel offrit à Dieu un sacrifice plus excellent que celui de Caïn; 
                        c’est par elle qu’il fut déclaré juste, Dieu approuvant ses offrandes; et c’est par elle qu’il parle encore, quoique mort." <br>
                          <span class="verse-ref"> <strong><a href="https://bible.com/bible/93/heb.11.4.LSG" >Hébreux 11:4 LSG </a></strong></span></p> </a>
                </div> 
                <p> Ainsi, notre offrande à Dieu doit être précédée d’une disposition sincère de cœur, 
                    d’une foi vivante et d’un désir de Lui offrir ce qui est bon et excellent. 
                    C’est de cette manière qu’elle Lui sera agréable, et qu'il nous bénira.</p>
                
                <h2>L'offrande dans le contexte de la Reconstruction de l'église.</h2>
                <p>En tant que chrétiens, l’offrande doit devenir une culture dans notre vie.
                     Nous devons ouvrir notre cœur à faire l’œuvre de Dieu, et contribuer activement à la vision pour son église
                      qu’Il a communiquée à son serviteur, l’Apôtre Nguessan Yédé Émile. De cette fidélité découleront des bénédictions 
                      abondantes sur nos vies. Soyons donc des hommes et des femmes engagés, et Dieu accomplira 
                      avec nous des choses extraordinaires, pour la seule gloire de son nom.
                     </p>

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
                theme: "Comment discerner la volonté de Dieu dans ma vie ?",
                date: "Dimanche 29 Juin 2025",
                 url: "Dimanche29Juin2025.html",
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