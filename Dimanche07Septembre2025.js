// Current Sermon Data - Inspiration Divine
        const currentSermon = {
            theme: "« Grande Montagne, Qui es-tu ? »",
            preacher: " Pasteur Konde Victor",
            passage: " Zacharie 4:6-9 ; Exode 3:7-8 ; Josué 1:2-6.",
            date: "Dimanche 07 Septembre 2025",
            image: "https://i.postimg.cc/RV7RptQt/Pasteur-Konde.png",
            content: `
                <p> Bien-aimés dans le Seigneur, en ce dimanche 07 septembre 2025, nous avons clôturé 
                notre semaine spirituelle autour du thème central : « Grande Montagne, qui es-tu ? ».
                Toute la semaine, à travers différents orateurs, Dieu nous a parlé avec puissance, nous 
                rappelant que la vie chrétienne n’est pas exempte de défis, mais que chaque montagne 
                qui se dresse devant nous n’est rien devant Sa puissance. Le Pasteur Konde, reprenant 
                l’esprit des messages des jours précédents, nous a conduits à comprendre deux vérités 
                essentielles : <br>
                1. Comment Dieu voit les montagnes.
                2. Pourquoi les montagnes existent dans la vie de l’enfant de Dieu.
              Ce message de clôture nous a permis de rassembler les enseignements reçus afin d’ancrer 
              dans nos cœurs cette certitude : par le Saint-Esprit, aucune montagne ne pourra résister à 
              l’accomplissement du plan de Dieu pour nos vies.

                </p>
                
                <h2>  1️⃣ Comment Dieu voit les montagnes ?</h2>

                <p> Aux yeux des hommes, les montagnes paraissent immenses, insurmontables, comme 
                Goliath devant Israël ou comme le pharaon devant le peuple d’Israël. Mais aux yeux 
                de Dieu, elles ne sont rien. <br>
            <strong>  • La montagne n’a pas le dernier mot. </strong> <br>
                Dieu dit à Zorobabel : « Qui es-tu, grande montagne ? Devant Zorobabel, tu seras 
                aplanie » (Zacharie 4:7). Ce qui effraie l’homme ne peut jamais arrêter le plan de Dieu. <br>
            <strong>  • Les montagnes ne sont pas éternelles. </strong> <br>
                Comme les Égyptiens qui poursuivaient Israël et que Dieu fit disparaître dans la mer, 
                les obstacles que nous voyons aujourd’hui ne dureront pas toujours (Exode 14:13). <br>
            <strong>  • Dieu permet les montagnes pour manifester Sa gloire. </strong> <br>
                Quand Israël était bloqué devant la mer Rouge, Dieu a ouvert un chemin nouveau. De 
                même, une montagne n’est pas une fin, mais une opportunité pour que la puissance de 
                Dieu se révèle. <br>
                👉 En résumé : Dieu voit les montagnes comme déjà vaincues par Sa 
                Parole et par Son Esprit.
                </p>

                <h2> 2️⃣ Pourquoi les montagnes dans la vie de l’enfant de Dieu ? </h2>

                <p>Dieu étant Tout-Puissant, Il permet les montagnes dans nos vies pour : <br>
            <strong>  • Pour éprouver et fortifier notre foi. </strong> <br>
                 La montagne révèle notre dépendance envers le Saint-Esprit : « Ce n’est ni par la 
                 force, ni par la puissance, mais par mon Esprit » (Zacharie 4:6). Sans obstacles, 
                 nous ne saurions expérimenter la puissance de Dieu. <br>
            <strong>  •	Parce que l’ennemi combat notre destinée. </strong> <br>
                 Comme Goliath qui cherchait à intimider Israël (1 Samuel 17), l’ennemi met des 
                 obstacles pour nous décourager, semer le doute et nous détourner de la volonté de Dieu.<br>
            <strong>  •	Parce que nos victoires ne sont pas seulement pour nous. </strong> <br>
                Quand David a vaincu Goliath, tout Israël a été libéré et réjoui. De même, ta victoire 
                personnelle sur une montagne apportera encouragement, joie et délivrance à d’autres. <br>
             <strong> • Pour nous apprendre la reconnaissance. </strong> <br>
                Après la traversée de la mer Rouge, Israël a chanté un cantique à Dieu (Exode 15:21). 
                Chaque montagne surmontée doit nous pousser à rendre gloire et honneur à l’Éternel.

                </p>

                <strong> <p> Bien-aimés, la vie chrétienne n’est pas un chemin sans défis, mais 
                aucune montagne ne peut résister au Dieu Tout-Puissant. Quelles que soient les 
                difficultés, souvenons-nous : Dieu les voit déjà aplanies. Elles sont là pour nous 
                amener à la foi, à la dépendance au Saint-Esprit et à la reconnaissance envers Dieu. 
                Alors, comme Zorobabel, comme David, comme Israël, déclarons avec foi : <br>
                👉 « Grande Montagne, qui es-tu ? Devant l’Éternel, tu seras aplanie ! »

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
