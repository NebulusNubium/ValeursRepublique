
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.scss';


console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

const carrousel = document.getElementById("carrousel");
const pion = document.getElementById("pion");
const rollBtn = document.getElementById("rollBtn");
const questionText = document.getElementById("questionText");
const sourceLink = document.getElementById("sourceLink");
const choicesDiv = document.getElementById("choices");
const timerDisplay = document.getElementById("timer");

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

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

function startTimer() {
  if (!timerStarted) {
    startTime = Date.now();
    timerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      timerDisplay.innerText = "⏱ " + formatTime(elapsed);
    }, 1000);
    timerStarted = true;
  }
}

function addPenaltyTime(seconds) {
  startTime -= seconds * 1000;
}

function stopTimer() {
  clearInterval(timerInterval);
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
      el.innerText = "💣";
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
  const gap = parseInt(computedStyle.columnGap || computedStyle.gap || 0); // 

  const totalWidthPerCase = caseWidth + gap;
  const targetX = totalWidthPerCase * index - (carrousel.parentElement.offsetWidth / 2 - caseWidth / 2);
  carrousel.style.transform = `translateX(${-targetX}px)`;
}

function displayQuestion(index) {
  if (fromBonus) {
    questionText.innerText = "Vous venez d'atterrir. Relancez le dé.";
    fromBonus = false;
    rollBtn.disabled = false;
    choicesDiv.innerHTML = "";
    sourceLink.style.display = "none";
    return;
  }

  const q = questions[index];
  if (!q.text) {
    rollBtn.disabled = false;
    questionText.innerText = "Cliquez sur lancer pour avancer.";
    choicesDiv.innerHTML = "";
    sourceLink.style.display = "none";
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
          questionText.innerText = `🎉 Félicitations, bonus +${bonus}. Vous vous envolé à votre destination !`;
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
        if (wrongStreak >= 2) {
          questionText.innerText = "❌ 2 erreurs ! Vous retournez à la case Départ (Prison) et +10 secondes.";
          addPenaltyTime(10);
          position = 0;
          scrollToCase(position);
          document.querySelector(".debut").innerText = "Prison";
          wrongStreak = 0;
        } else {
          questionText.innerText = "❌ Mauvaise réponse. Retour à la case précédente.";
          position = previousPosition;
          scrollToCase(position);
        }
        rollBtn.disabled = false;
      }
    };
    choicesDiv.appendChild(btn);
  });
}

function afterMove() {
  if (position === totalCases - 1) {
    stopTimer();
    document.getElementById("questionBox").innerHTML = "<h2>🎉 Félicitations, vous avez terminé le jeu !</h2><img src='img/victoire.png' alt='Victoire' style='max-width: 300px; margin-top: 1rem;'>";
    rollBtn.disabled = true;
    return;
  }

  if (banquerouteCases.includes(position)) {
    questionText.innerText = "💥 Banqueroute ! Vous retournez à la case précédente.";
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

rollBtn.addEventListener("click", () => {
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
});

createCases();
scrollToCase(0);


// QUESTIONS 

const questions = [
  {
    "text": "(1) Que garantit l'article 1er de la Constitution française ?",
    "choices": [
      "La liberté d'expression",
      "Laïcité, égalité devant la loi, sans distinction",
      "La présidence à vie"
    ],
    "correctIndex": 1,
    "level": 3,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(2) Quel document garantit les droits et libertés en France ?",
    "choices": [
      "Le Code civil",
      "La Déclaration des Droits de l'Homme et du Citoyen",
      "La Constitution romaine"
    ],
    "correctIndex": 1,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(3) Quel hymne national est celui de la République ?",
    "choices": [
      "La Marseillaise",
      "La Carmagnole",
      "Le Chant du Départ"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(4) La République repose sur la souveraineté…",
    "choices": [
      "populaire",
      "royale",
      "militaire"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(5) Quelle est la devise de la République française ?",
    "choices": [
      "Paix, Union, Travail",
      "Liberté, Égalité, Fraternité",
      "Justice, Nation, Démocratie"
    ],
    "correctIndex": 1,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(6) Quel est le rôle du président de la République ?",
    "choices": [
      "Chef des armées",
      "Premier ministre",
      "Président du Sénat"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(7) Quel est le rôle du président de la République ?",
    "choices": [
      "Chef des armées",
      "Premier ministre",
      "Président du Sénat"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(8) Que signifie la laïcité dans la République ?",
    "choices": [
      "Liberté de pratiquer une seule religion",
      "Séparation de l'État et des religions",
      "Obligation de ne pas croire"
    ],
    "correctIndex": 1,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(9) La République repose sur la souveraineté…",
    "choices": [
      "populaire",
      "royale",
      "militaire"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(10) Que signifie la laïcité dans la République ?",
    "choices": [
      "Liberté de pratiquer une seule religion",
      "Séparation de l'État et des religions",
      "Obligation de ne pas croire"
    ],
    "correctIndex": 1,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(11) Quelle est la devise de la République française ?",
    "choices": [
      "Paix, Union, Travail",
      "Liberté, Égalité, Fraternité",
      "Justice, Nation, Démocratie"
    ],
    "correctIndex": 1,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(12) Quelle est la devise de la République française ?",
    "choices": [
      "Paix, Union, Travail",
      "Liberté, Égalité, Fraternité",
      "Justice, Nation, Démocratie"
    ],
    "correctIndex": 1,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(13) Quelle est la fête nationale française ?",
    "choices": [
      "1er mai",
      "14 juillet",
      "11 novembre"
    ],
    "correctIndex": 1,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(14) Quel est l'emblème national de la République française ?",
    "choices": [
      "Le coq",
      "Le drapeau tricolore",
      "La Tour Eiffel"
    ],
    "correctIndex": 1,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(15) Quel document garantit les droits et libertés en France ?",
    "choices": [
      "Le Code civil",
      "La Déclaration des Droits de l'Homme et du Citoyen",
      "La Constitution romaine"
    ],
    "correctIndex": 1,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(16) Que signifie la laïcité dans la République ?",
    "choices": [
      "Liberté de pratiquer une seule religion",
      "Séparation de l'État et des religions",
      "Obligation de ne pas croire"
    ],
    "correctIndex": 1,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(17) Quel est l'emblème national de la République française ?",
    "choices": [
      "Le coq",
      "Le drapeau tricolore",
      "La Tour Eiffel"
    ],
    "correctIndex": 1,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(18) Quel est le rôle du président de la République ?",
    "choices": [
      "Chef des armées",
      "Premier ministre",
      "Président du Sénat"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(19) Quelle est la devise de la République française ?",
    "choices": [
      "Paix, Union, Travail",
      "Liberté, Égalité, Fraternité",
      "Justice, Nation, Démocratie"
    ],
    "correctIndex": 1,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(20) Quel document garantit les droits et libertés en France ?",
    "choices": [
      "Le Code civil",
      "La Déclaration des Droits de l'Homme et du Citoyen",
      "La Constitution romaine"
    ],
    "correctIndex": 1,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(21) Quel document garantit les droits et libertés en France ?",
    "choices": [
      "Le Code civil",
      "La Déclaration des Droits de l'Homme et du Citoyen",
      "La Constitution romaine"
    ],
    "correctIndex": 1,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(22) Que garantit l'article 1er de la Constitution française ?",
    "choices": [
      "La liberté d'expression",
      "Laïcité, égalité devant la loi, sans distinction",
      "La présidence à vie"
    ],
    "correctIndex": 1,
    "level": 3,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(23) Que garantit l'article 1er de la Constitution française ?",
    "choices": [
      "La liberté d'expression",
      "Laïcité, égalité devant la loi, sans distinction",
      "La présidence à vie"
    ],
    "correctIndex": 1,
    "level": 3,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(24) Quel hymne national est celui de la République ?",
    "choices": [
      "La Marseillaise",
      "La Carmagnole",
      "Le Chant du Départ"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(25) La République repose sur la souveraineté…",
    "choices": [
      "populaire",
      "royale",
      "militaire"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(26) Quelle est la fête nationale française ?",
    "choices": [
      "1er mai",
      "14 juillet",
      "11 novembre"
    ],
    "correctIndex": 1,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(27) Quel est l'emblème national de la République française ?",
    "choices": [
      "Le coq",
      "Le drapeau tricolore",
      "La Tour Eiffel"
    ],
    "correctIndex": 1,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(28) La République française est…",
    "choices": [
      "une monarchie constitutionnelle",
      "une dictature éclairée",
      "une démocratie laïque"
    ],
    "correctIndex": 2,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(29) Quel est l'emblème national de la République française ?",
    "choices": [
      "Le coq",
      "Le drapeau tricolore",
      "La Tour Eiffel"
    ],
    "correctIndex": 1,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(30) Quel est l'emblème national de la République française ?",
    "choices": [
      "Le coq",
      "Le drapeau tricolore",
      "La Tour Eiffel"
    ],
    "correctIndex": 1,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(31) Quel est le rôle du président de la République ?",
    "choices": [
      "Chef des armées",
      "Premier ministre",
      "Président du Sénat"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(32) Quelle est la fête nationale française ?",
    "choices": [
      "1er mai",
      "14 juillet",
      "11 novembre"
    ],
    "correctIndex": 1,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(33) La République repose sur la souveraineté…",
    "choices": [
      "populaire",
      "royale",
      "militaire"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(34) La République repose sur la souveraineté…",
    "choices": [
      "populaire",
      "royale",
      "militaire"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(35) La République repose sur la souveraineté…",
    "choices": [
      "populaire",
      "royale",
      "militaire"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(36) Quelle est la fête nationale française ?",
    "choices": [
      "1er mai",
      "14 juillet",
      "11 novembre"
    ],
    "correctIndex": 1,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(37) Que signifie la laïcité dans la République ?",
    "choices": [
      "Liberté de pratiquer une seule religion",
      "Séparation de l'État et des religions",
      "Obligation de ne pas croire"
    ],
    "correctIndex": 1,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(38) Quelle est la devise de la République française ?",
    "choices": [
      "Paix, Union, Travail",
      "Liberté, Égalité, Fraternité",
      "Justice, Nation, Démocratie"
    ],
    "correctIndex": 1,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(39) La République française est…",
    "choices": [
      "une monarchie constitutionnelle",
      "une dictature éclairée",
      "une démocratie laïque"
    ],
    "correctIndex": 2,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(40) Quel hymne national est celui de la République ?",
    "choices": [
      "La Marseillaise",
      "La Carmagnole",
      "Le Chant du Départ"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(41) Quel document garantit les droits et libertés en France ?",
    "choices": [
      "Le Code civil",
      "La Déclaration des Droits de l'Homme et du Citoyen",
      "La Constitution romaine"
    ],
    "correctIndex": 1,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(42) Quel hymne national est celui de la République ?",
    "choices": [
      "La Marseillaise",
      "La Carmagnole",
      "Le Chant du Départ"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(43) La République française est…",
    "choices": [
      "une monarchie constitutionnelle",
      "une dictature éclairée",
      "une démocratie laïque"
    ],
    "correctIndex": 2,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(44) La République française est…",
    "choices": [
      "une monarchie constitutionnelle",
      "une dictature éclairée",
      "une démocratie laïque"
    ],
    "correctIndex": 2,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(45) Que garantit l'article 1er de la Constitution française ?",
    "choices": [
      "La liberté d'expression",
      "Laïcité, égalité devant la loi, sans distinction",
      "La présidence à vie"
    ],
    "correctIndex": 1,
    "level": 3,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(46) Quel hymne national est celui de la République ?",
    "choices": [
      "La Marseillaise",
      "La Carmagnole",
      "Le Chant du Départ"
    ],
    "correctIndex": 0,
    "level": 1,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(47) Que garantit l'article 1er de la Constitution française ?",
    "choices": [
      "La liberté d'expression",
      "Laïcité, égalité devant la loi, sans distinction",
      "La présidence à vie"
    ],
    "correctIndex": 1,
    "level": 3,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(48) La République repose sur la souveraineté…",
    "choices": [
      "populaire",
      "royale",
      "militaire"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(49) Quel est le rôle du président de la République ?",
    "choices": [
      "Chef des armées",
      "Premier ministre",
      "Président du Sénat"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  },
  {
    "text": "(50) La République repose sur la souveraineté…",
    "choices": [
      "populaire",
      "royale",
      "militaire"
    ],
    "correctIndex": 0,
    "level": 2,
    "url": "https://www.cheminsdememoire.gouv.fr/fr/les-valeurs-et-les-symboles-de-la-republique-francaise"
  }
];