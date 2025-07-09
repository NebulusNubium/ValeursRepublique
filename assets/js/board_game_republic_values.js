console.log('Jeu de plateau sur les valeurs de la République française - Mis à jour le 9 juillet 2025');

const gameElement = document.getElementById("game");
if (gameElement) {
// Tableau de 50 questions sur les valeurs de la République française
const questions = [
  {
    "text": "Quelle est la devise officielle de la République française ?",
    "choices": [
      "Liberté, Égalité, Fraternité",
      "Unité, Force, Justice",
      "Égalité, Prospérité, Liberté"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.gouvernement.fr/la-devise"
  },
  {
    "text": "Quel principe républicain garantit la liberté de conscience ?",
    "choices": [
      "Laïcité",
      "Égalité",
      "Fraternité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.gouvernement.fr/la-laicite"
  },
  {
    "text": "En quelle année la devise 'Liberté, Égalité, Fraternité' a-t-elle été adoptée officiellement ?",
    "choices": [
      "1848",
      "1789",
      "1905"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.elysee.fr/la-presidence/les-symboles-de-la-republique"
  },
  {
    "text": "Quel article de la Déclaration des droits de l’homme de 1789 proclame la liberté ?",
    "choices": [
      "Article 1",
      "Article 4",
      "Article 10"
    ],
    "correctIndex": 1,
    "level": 2,
    "url": "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/declaration-des-droits-de-l-homme-et-du-citoyen-de-1789"
  },
  {
    "text": "Quel principe promeut l’égalité devant la loi ?",
    "choices": [
      "Égalité",
      "Liberté",
      "Fraternité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "Quelle loi de 1905 consacre la séparation de l’Église et de l’État ?",
    "choices": [
      "Loi sur la laïcité",
      "Loi sur la liberté religieuse",
      "Loi sur l’égalité"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.gouvernement.fr/la-laicite"
  },
  {
    "text": "Quel symbole représente la République française ?",
    "choices": [
      "Marianne",
      "Le coq gaulois",
      "La fleur de lys"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.gouvernement.fr/marianne"
  },
  {
    "text": "Quel principe encourage la solidarité entre citoyens ?",
    "choices": [
      "Fraternité",
      "Liberté",
      "Laïcité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.elysee.fr/la-presidence/les-symboles-de-la-republique"
  },
  {
    "text": "Où est inscrite la devise 'Liberté, Égalité, Fraternité' sur les bâtiments publics ?",
    "choices": [
      "Sur le fronton",
      "À l’intérieur",
      "Sur les drapeaux"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.gouvernement.fr/la-devise"
  },
  {
    "text": "Quel événement a inspiré la devise républicaine ?",
    "choices": [
      "Révolution française",
      "Guerre de 1870",
      "Première Guerre mondiale"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.histoire.fr/revolution-francaise"
  },
  {
    "text": "Quel principe garantit l’accès égal aux fonctions publiques ?",
    "choices": [
      "Égalité",
      "Fraternité",
      "Liberté"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "Quel texte consacre la liberté d’expression ?",
    "choices": [
      "Déclaration des droits de l’homme",
      "Code civil",
      "Constitution de 1958"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/declaration-des-droits-de-l-homme-et-du-citoyen-de-1789"
  },
  {
    "text": "Quel principe interdit la discrimination religieuse ?",
    "choices": [
      "Laïcité",
      "Égalité",
      "Fraternité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.gouvernement.fr/la-laicite"
  },
  {
    "text": "Quel symbole tricolore incarne les valeurs républicaines ?",
    "choices": [
      "Drapeau tricolore",
      "Bonnet phrygien",
      "Coq gaulois"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.elysee.fr/la-presidence/les-symboles-de-la-republique"
  },
  {
    "text": "Quel article de la Constitution de 1958 mentionne la laïcité ?",
    "choices": [
      "Article 1",
      "Article 2",
      "Article 10"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/constitution-du-4-octobre-1958"
  },
  {
    "text": "Quel principe est associé à 'Un pour tous, tous pour un' ?",
    "choices": [
      "Fraternité",
      "Liberté",
      "Égalité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.elysee.fr/la-presidence/les-symboles-de-la-republique"
  },
  {
    "text": "Quel texte de 1789 proclame l’égalité des hommes ?",
    "choices": [
      "Déclaration des droits de l’homme",
      "Constitution de 1791",
      "Édit de Nantes"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/declaration-des-droits-de-l-homme-et-du-citoyen-de-1789"
  },
  {
    "text": "Quel principe garantit la neutralité religieuse de l’État ?",
    "choices": [
      "Laïcité",
      "Égalité",
      "Liberté"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.gouvernement.fr/la-laicite"
  },
  {
    "text": "Quel mouvement a promu la devise en 1848 ?",
    "choices": [
      "Seconde République",
      "Premier Empire",
      "Restauration"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.histoire.fr/seconde-republique"
  },
  {
    "text": "Quel principe protège le droit de réunion ?",
    "choices": [
      "Liberté",
      "Égalité",
      "Fraternité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/declaration-des-droits-de-l-homme-et-du-citoyen-de-1789"
  },
  {
    "text": "Quel symbole républicain porte un bonnet phrygien ?",
    "choices": [
      "Marianne",
      "Coq gaulois",
      "Fleur de lys"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.gouvernement.fr/marianne"
  },
  {
    "text": "Quel principe interdit les distinctions de naissance ?",
    "choices": [
      "Égalité",
      "Liberté",
      "Fraternité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "Quelle loi de 2004 interdit les signes religieux à l’école ?",
    "choices": [
      "Loi sur la laïcité",
      "Loi sur l’éducation",
      "Loi sur l’égalité"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.gouvernement.fr/la-laicite"
  },
  {
    "text": "Quel principe favorise l’entraide sociale ?",
    "choices": [
      "Fraternité",
      "Liberté",
      "Laïcité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.elysee.fr/la-presidence/les-symboles-de-la-republique"
  },
  {
    "text": "Quel article de 1789 garantit la liberté religieuse ?",
    "choices": [
      "Article 10",
      "Article 4",
      "Article 1"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/declaration-des-droits-de-l-homme-et-du-citoyen-de-1789"
  },
  {
    "text": "Quel principe repose sur la souveraineté populaire ?",
    "choices": [
      "Liberté",
      "Égalité",
      "Démocratie"
    ],
    "correctIndex": 2,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "Quel symbole est associé à la justice ?",
    "choices": [
      "La balance",
      "Le coq gaulois",
      "Le faisceau de licteur"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.elysee.fr/la-presidence/les-symboles-de-la-republique"
  },
  {
    "text": "Quel principe garantit l’égalité hommes-femmes ?",
    "choices": [
      "Égalité",
      "Liberté",
      "Fraternité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "Quel texte de 1946 inclut l’égalité dans son préambule ?",
    "choices": [
      "Constitution de la IVe République",
      "Déclaration de 1789",
      "Code civil"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/preambule-de-la-constitution-du-27-octobre-1946"
  },
  {
    "text": "Quel principe interdit le financement des cultes ?",
    "choices": [
      "Laïcité",
      "Égalité",
      "Fraternité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.gouvernement.fr/la-laicite"
  },
  {
    "text": "Quel événement de 1789 a aboli les privilèges ?",
    "choices": [
      "Nuit du 4 août",
      "Prise de la Bastille",
      "Exécution de Louis XVI"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.histoire.fr/4-aout-1789"
  },
  {
    "text": "Quel principe protège le droit de grève ?",
    "choices": [
      "Liberté",
      "Égalité",
      "Fraternité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/preambule-de-la-constitution-du-27-octobre-1946"
  },
  {
    "text": "Quel symbole représente l’unité nationale ?",
    "choices": [
      "Faisceau de licteur",
      "Bonnet phrygien",
      "Coq gaulois"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.elysee.fr/la-presidence/les-symboles-de-la-republique"
  },
  {
    "text": "Quel principe est incarné par 'La Marseillaise' ?",
    "choices": [
      "Liberté",
      "Égalité",
      "Fraternité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.elysee.fr/la-presidence/les-symboles-de-la-republique"
  },
  {
    "text": "Quel texte garantit l’égalité d’accès à l’éducation ?",
    "choices": [
      "Constitution de 1958",
      "Code de l’éducation",
      "Déclaration de 1789"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/constitution-du-4-octobre-1958"
  },
  {
    "text": "Quel principe promeut l’égalité salariale ?",
    "choices": [
      "Égalité",
      "Liberté",
      "Fraternité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "Quelle institution veille aux valeurs républicaines ?",
    "choices": [
      "Conseil constitutionnel",
      "Assemblée nationale",
      "Sénat"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.conseil-constitutionnel.fr/"
  },
  {
    "text": "Quel principe garantit la liberté de la presse ?",
    "choices": [
      "Liberté",
      "Égalité",
      "Fraternité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/declaration-des-droits-de-l-homme-et-du-citoyen-de-1789"
  },
  {
    "text": "Quel principe interdit les distinctions ethniques ?",
    "choices": [
      "Égalité",
      "Liberté",
      "Fraternité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "Quel texte de 1905 interdit le financement des cultes ?",
    "choices": [
      "Loi de séparation des Églises et de l’État",
      "Déclaration de 1789",
      "Constitution de 1958"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.gouvernement.fr/la-laicite"
  },
  {
    "text": "Quel principe promeut l’accès universel à la santé ?",
    "choices": [
      "Fraternité",
      "Liberté",
      "Égalité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.elysee.fr/la-presidence/les-symboles-de-la-republique"
  },
  {
    "text": "Quel événement de 1791 a renforcé la liberté religieuse ?",
    "choices": [
      "Constitution de 1791",
      "Édit de Nantes",
      "Loi de 1905"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.histoire.fr/constitution-de-1791"
  },
  {
    "text": "Quel symbole est associé à la liberté ?",
    "choices": [
      "Bonnet phrygien",
      "Faisceau de licteur",
      "Coq gaulois"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.elysee.fr/la-presidence/les-symboles-de-la-republique"
  },
  {
    "text": "Quel principe garantit l’accès égal aux emplois publics ?",
    "choices": [
      "Égalité",
      "Liberté",
      "Fraternité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "Quel texte de 1946 garantit la liberté syndicale ?",
    "choices": [
      "Préambule de la Constitution de 1946",
      "Déclaration de 1789",
      "Code du travail"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/preambule-de-la-constitution-du-27-octobre-1946"
  },
  {
    "text": "Quel principe célèbre l’unité des citoyens le 14 juillet ?",
    "choices": [
      "Fraternité",
      "Liberté",
      "Égalité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.gouvernement.fr/14-juillet"
  },
  {
    "text": "Quel texte garantit l’égalité devant l’impôt ?",
    "choices": [
      "Déclaration de 1789",
      "Code général des impôts",
      "Constitution de 1958"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/declaration-des-droits-de-l-homme-et-du-citoyen-de-1789"
  },
  {
    "text": "Quel principe favorise la cohésion nationale ?",
    "choices": [
      "Fraternité",
      "Liberté",
      "Égalité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.elysee.fr/la-presidence/les-symboles-de-la-republique"
  },
  {
    "text": "Quel principe garantit la liberté d’association ?",
    "choices": [
      "Liberté",
      "Égalité",
      "Fraternité"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/declaration-des-droits-de-l-homme-et-du-citoyen-de-1789"
  },
  {
    "text": "Quel texte de 1789 proclame la souveraineté nationale ?",
    "choices": [
      "Déclaration des droits de l’homme",
      "Constitution de 1791",
      "Édit de Versailles"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/declaration-des-droits-de-l-homme-et-du-citoyen-de-1789"
  }
];


// Récupérer les éléments du DOM
const carrousel = document.getElementById("carrousel");
const pion = document.getElementById("pion");
const rollBtn = document.getElementById("rollBtn");
const questionText = document.getElementById("questionText");
const sourceLink = document.getElementById("sourceLink");
const choicesDiv = document.getElementById("choices");
const timerDisplay = document.getElementById("timer");
const playerNameInput = document.getElementById("playerNameInput");
const rulesBtn = document.getElementById("rulesBtn");
const rulesModal = document.getElementById("rulesModal");
const closeModal = document.getElementById("closeModal");

// Variables globales
let position = 0;
let previousPosition = 0;
let hasAnswered = true;
let timerStarted = false;
let startTime;
let timerInterval;
let fromBonus = false;
let wrongStreak = 0;
const prisonCase = 13;
const banquerouteCases = Array.from({ length: questions.length }, (_, i) => i).filter(i => i !== 0 && i % 7 === 0);
const totalCases = questions.length;

// Récupérer le chemin de l'image victoire depuis un attribut data
const victoireImage = document.getElementById("game").dataset.victoireImage;

// Gestion de la modale des règles
rulesBtn.addEventListener('click', () => {
      console.log('Clic sur le bouton des règles');
      rulesModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
      console.log('Clic sur le bouton de fermeture de la modale');
      rulesModal.style.display = 'none';
});

  // Fermer la modale en cliquant à l'extérieur du contenu
window.addEventListener('click', (event) => {
      if (event.target === rulesModal) {
          console.log('Clic à l\'extérieur de la modale, fermeture');
          rulesModal.style.display = 'none';
      }
});


function formatTime(seconds) {
        if (!Number.isFinite(seconds) || seconds < 0) {
            console.error('Erreur : Temps invalide pour formatTime', seconds);
            return '0:00';
        }
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    }

    function startTimer() {
        if (!timerStarted) {
            console.log('Démarrage du minuteur');
            startTime = Date.now();
            timerInterval = setInterval(() => {
                if (!startTime) {
                    console.error('Erreur : startTime non défini dans le minuteur');
                    clearInterval(timerInterval);
                    return;
                }
                const elapsed = Math.floor((Date.now() - startTime) / 1000);
                timerDisplay.innerText = "⏱ " + formatTime(elapsed);
            }, 1000);
            timerStarted = true;
        }
    }

    function addPenaltyTime(seconds) {
        if (!startTime) {
            console.error('Erreur : startTime non défini pour addPenaltyTime');
            return;
        }
        console.log(`Ajout d'une pénalité de ${seconds} secondes`);
        startTime -= seconds * 1000;
    }

    function stopTimer() {
        console.log('Arrêt du minuteur');
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        if (!startTime) {
            console.error('Erreur : startTime non défini pour stopTimer');
            return 0;
        }
        const timeInSeconds = Math.floor((Date.now() - startTime) / 1000);
        startTime = null;
        timerStarted = false;
        return timeInSeconds >= 0 ? timeInSeconds : 0;
    }

function createCases() {
    for (let i = 0; i < totalCases; i++) {
        const el = document.createElement("div");
        el.classList.add("case");
        if (i === 0) {
            el.classList.add("debut");
            el.innerText = "Départ";
        } else if (i === totalCases - 1) {
            el.classList.add("fin");
            el.innerText = "Arrivée";
        } else if (banquerouteCases.includes(i)) {
            el.innerText = "💸";
            el.classList.add("banqueroute");
        } else if (i === prisonCase) {
            el.innerText = "⛓ Prison";
            el.classList.add("prison");
        }
        el.dataset.num = i;
        carrousel.appendChild(el);
    }
}

function scrollToCase(index) {
    const oneCase = document.querySelector(".case");
    const caseWidth = oneCase.offsetWidth;
    const computedStyle = getComputedStyle(carrousel);
    const gap = parseInt(computedStyle.columnGap || computedStyle.gap || 0);

    const totalWidthPerCase = caseWidth + gap;
    const targetX = totalWidthPerCase * index - (carrousel.parentElement.offsetWidth / 2 - caseWidth / 2);
    carrousel.style.transform = `translateX(${-targetX}px)`;
}

function displayQuestion(index) {
        console.log(`Affichage de la question pour la case ${index}`);
        if (fromBonus) {
            questionText.innerText = "Vous venez d'atterrir. Relancez le dé.";
            fromBonus = false;
            rollBtn.disabled = false;
            choicesDiv.innerHTML = "";
            sourceLink.style.display = "none";
            console.log('Message affiché pour bonus, bouton réactivé');
            return;
        }

        const q = questions[index];
        if (!q || !q.text) {
            rollBtn.disabled = false;
            questionText.innerText = "Cliquez sur lancer pour avancer.";
            choicesDiv.innerHTML = "";
            sourceLink.style.display = "none";
            console.log('Aucune question pour cette case, bouton réactivé');
            return;
        }

    hasAnswered = false;
    questionText.innerText = q.text;
    sourceLink.href = q.url;
    sourceLink.style.display = "none";
    choicesDiv.innerHTML = "";

    q.choices.forEach((choice, idx) => {
        const btn = document.createElement("button");
        btn.innerText = choice;
        btn.onclick = () => {
            if (hasAnswered) return;
            hasAnswered = true;
            sourceLink.style.display = "inline";

            if (idx === q.correctIndex) {
                wrongStreak = 0;
                const bonus = q.level;
                if (bonus > 0) {
                    questionText.innerText = `🎉 Félicitations, bonus +${bonus}. Vous vous envolez à votre destination !`;
                    pion.style.visibility = "hidden";
                    fromBonus = true;
                    setTimeout(() => {
                        position = Math.min(position + bonus, totalCases - 1);
                        scrollToCase(position);
                        setTimeout(() => {
                            pion.style.visibility = "visible";
                            afterMove();
                        }, 600);
                    }, 500);
                } else {
                    rollBtn.disabled = false;
                }
            } else {
                wrongStreak++;
                if (wrongStreak >= 3) {
                    questionText.innerText = "😢 3 erreurs ! Vous retournez à la case Départ (Prison) et +10 secondes.";
                    addPenaltyTime(10);
                    position = 0;
                    scrollToCase(position);
                    document.querySelector(".debut").innerText = "Prison";
                    wrongStreak = 0;
                } else {
                    questionText.innerText = "😢 Mauvaise réponse. Retour à la case précédente.";
                    position = previousPosition;
                    scrollToCase(position);
                }
                rollBtn.disabled = false;
            }
        };
        choicesDiv.appendChild(btn);
    });
}

function saveScore(timeInSeconds) {
        if (!Number.isFinite(timeInSeconds) || timeInSeconds < 0) {
            console.error('Erreur : Temps invalide pour saveScore', timeInSeconds);
            timeInSeconds = 0;
        }
        const playerName = playerNameInput.value.trim() || 'Anonyme';
        console.log(`Enregistrement du score pour ${playerName} : ${timeInSeconds} secondes`);

        // Sauvegarde dans localStorage
        const scores = JSON.parse(localStorage.getItem('scores') || '[]');
        scores.push({ playerName, timeInSeconds, date: new Date().toISOString() });
        // Garder seulement les 10 meilleurs scores, triés par temps croissant
        scores.sort((a, b) => a.timeInSeconds - b.timeInSeconds);
        if (scores.length > 10) scores.length = 10;
        localStorage.setItem('scores', JSON.stringify(scores));
        console.log('Score sauvegardé dans localStorage:', { playerName, timeInSeconds });

        // Essayer l'API, mais ne pas bloquer si elle échoue
        try {
            fetch('/api/save-score', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    playerName: playerName,
                    timeInSeconds: timeInSeconds,
                }),
            })
            .then(response => {
                if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`);
                return response.json();
            })
            .then(data => {
                console.log('Score enregistré via API :', data.message);
                updateLeaderboard();
            })
            .catch(error => {
                console.warn('Erreur lors de l\'enregistrement du score via API, utilisation de localStorage :', error);
                updateLeaderboard(); // Mettre à jour avec localStorage
            });
        } catch (error) {
            console.warn('Erreur dans saveScore, utilisation de localStorage :', error);
            updateLeaderboard();
        }
    }

    function updateLeaderboard() {
        console.log('Mise à jour du classement');
        const leaderboard = document.getElementById('leaderboard');
        if (!leaderboard) {
            console.error('Erreur : Élément #leaderboard introuvable.');
            return;
        }

        // Essayer de récupérer les scores via l'API
        try {
            fetch('/api/top-scores')
            .then(response => {
                if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`);
                return response.json();
            })
            .then(scores => {
                leaderboard.innerHTML = '<h3>Meilleurs scores</h3><ul>' +
                    (scores.length > 0
                        ? scores.map(score => `<li>${score.playerName} : ${formatTime(score.timeInSeconds)}</li>`).join('')
                        : '<li>Aucun score enregistré pour le moment.</li>') +
                    '</ul>';
                console.log('Classement mis à jour via API');
            })
            .catch(error => {
                console.warn('Erreur lors de la récupération des scores via API, utilisation de localStorage :', error);
                // Utiliser localStorage comme secours
                const localScores = JSON.parse(localStorage.getItem('scores') || '[]');
                leaderboard.innerHTML = '<h3>Meilleurs scores</h3><ul>' +
                    (localScores.length > 0
                        ? localScores.map(score => `<li>${score.playerName} : ${formatTime(score.timeInSeconds)}</li>`).join('')
                        : '<li>Aucun score enregistré pour le moment.</li>') +
                    '</ul>';
                console.log('Classement mis à jour avec localStorage');
            });
        } catch (error) {
            console.warn('Erreur dans updateLeaderboard, utilisation de localStorage :', error);
            const localScores = JSON.parse(localStorage.getItem('scores') || '[]');
            leaderboard.innerHTML = '<h3>Meilleurs scores</h3><ul>' +
                (localScores.length > 0
                    ? localScores.map(score => `<li>${score.playerName} : ${formatTime(score.timeInSeconds)}</li>`).join('')
                    : '<li>Aucun score enregistré pour le moment.</li>') +
                '</ul>';
            console.log('Classement mis à jour avec localStorage');
        }
    }


function afterMove() {
  if (position === totalCases - 1) {
      const finalTime = stopTimer();
      document.getElementById("questionBox").innerHTML = `<h2>🎉 Félicitations, vous avez terminé le jeu !</h2><p>Temps final : ${formatTime(finalTime)}</p><img src='${victoireImage}' alt='Victoire' style='max-width: 300px; margin-top: 1rem;'>`;
      saveScore(finalTime);

      rollBtn.innerText = "🔄 Rejouer";
      rollBtn.disabled = false;

      rollBtn.onclick = () => {
          // Réinitialiser les variables
          position = 0;
          previousPosition = 0;
          hasAnswered = true;
          timerStarted = false;
          fromBonus = false;
          wrongStreak = 0;
          clearInterval(timerInterval);
          timerDisplay.innerText = "⏱ 0:00";

          // Nettoyer l'interface
          document.querySelector(".debut").innerText = "Départ";
          pion.style.visibility = "visible";
          rollBtn.innerText = "🎲 Lancer le dé";

          // Rebrancher l'event handler initial
          rollBtn.onclick = rollHandler;

          // Réinitialiser la vue
          scrollToCase(0);
          displayQuestion(0);
      };

      return;
  }

    if (banquerouteCases.includes(position)) {
        questionText.innerText = "💸 Banqueroute ! Vous retournez à la case précédente.";
        position = Math.max(position - 1, 0);
        scrollToCase(position);
        rollBtn.disabled = false;
        return;
    }

    if (position === prisonCase) {
        questionText.innerText = "⛓ Vous êtes en prison ! Tour bloqué.";
        setTimeout(() => {
            rollBtn.disabled = false;
        }, 2000);
        return;
    }

    displayQuestion(position);
}

function rollHandler() {
    if (!hasAnswered) return;
    startTimer();
    previousPosition = position;
    const lancer = Math.floor(Math.random() * 6) + 1;
    const target = Math.min(position + lancer, totalCases - 1);
    rollBtn.disabled = true;
    questionText.innerText = `🎲 Vous avez lancé un ${lancer} !`;

    let i = position + 1;
    function step() {
        if (i > target) {
            position = target;
            afterMove();
            return;
        }
        scrollToCase(i);
        i++;
        setTimeout(step, 350);
    }
    step();
}

rollBtn.addEventListener("click", rollHandler);

playerNameInput.addEventListener('input', () => {
        console.log('Changement du nom du joueur');
        const playerName = playerNameInput.value.trim() || 'Anonyme';
        localStorage.setItem('playerName', playerName);
        console.log(`Nom du joueur sauvegardé dans localStorage : ${playerName}`);
        // Essayer l'API, mais ne pas bloquer si elle échoue
        try {
            fetch('/api/set-player-name', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    playerName: playerName,
                }),
            })
            .then(response => {
                if (!response.ok) throw new Error(`Erreur HTTP ${response.status}`);
                return response.json();
            })
            .then(data => console.log('Nom du joueur enregistré via API :', data.message))
            .catch(error => console.warn('Erreur lors de l\'enregistrement du nom via API :', error));
        } catch (error) {
            console.warn('Erreur dans playerNameInput input :', error);
        }
    });

    // Initialisation
    try {
        console.log('Début de l\'initialisation');
        createCases();
        scrollToCase(0);
        updateLeaderboard();
        console.log('Initialisation terminée : cases créées, carrousel positionné, classement mis à jour.');
    } catch (error) {
        console.error('Erreur lors de l\'initialisation:', error);
    }
}