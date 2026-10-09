/**
 * ProjetPlus - Données et filtres formations / projets
 */

// Données formations (réutilisables)
const FORMATIONS_DATA = [
  {
    id: 'initiation-gestion',
    titre: 'Initiation à la gestion de projets',
    niveau: 'Débutant',
    duree: '4 semaines',
    horaires: '16h00 – 18h00',
    format: 'Présentiel / En ligne',
    seances: 8,
    tarif: '75 000 FCFA',
    prerequis: 'Aucun',
    description: 'Découvrez les fondamentaux de la gestion de projets et acquérez les bases pour structurer vos idées.',
    objectifs: [
      'Comprendre le cycle de vie d\'un projet',
      'Identifier et formuler un projet',
      'Définir des objectifs SMART',
      'Élaborer un planning simple'
    ]
  },
  {
    id: 'montage-projets',
    titre: 'Conception et montage de projets',
    niveau: 'Intermédiaire',
    duree: '5 semaines',
    horaires: '16h00 – 18h00',
    format: 'Présentiel / En ligne',
    seances: 10,
    tarif: '95 000 FCFA',
    prerequis: 'Bases de gestion de projets',
    description: 'Apprenez à concevoir, structurer et monter un projet complet de A à Z.',
    objectifs: [
      'Réaliser un diagnostic de besoins',
      'Rédiger un document de projet',
      'Structurer le cadre logique',
      'Préparer un dossier de financement'
    ]
  },
  {
    id: 'business-plan',
    titre: 'Élaboration d\'un Business Plan',
    niveau: 'Intermédiaire',
    duree: '4 semaines',
    horaires: '16h00 – 18h00',
    format: 'Présentiel / En ligne',
    seances: 8,
    tarif: '85 000 FCFA',
    prerequis: 'Idée d\'entreprise ou projet',
    description: 'Construisez un business plan solide et convaincant pour votre projet entrepreneurial.',
    objectifs: [
      'Analyser le marché et la concurrence',
      'Élaborer le modèle économique',
      'Construire les projections financières',
      'Présenter un BP professionnel'
    ]
  },
  {
    id: 'planification-strategique',
    titre: 'Planification stratégique',
    niveau: 'Avancé',
    duree: '4 semaines',
    horaires: '16h00 – 18h00',
    format: 'Présentiel / En ligne',
    seances: 8,
    tarif: '90 000 FCFA',
    prerequis: 'Expérience en gestion',
    description: 'Maîtrisez les outils de planification stratégique pour orienter organisations et projets.',
    objectifs: [
      'Réaliser une analyse SWOT / PESTEL',
      'Définir vision, mission et objectifs',
      'Élaborer un plan stratégique',
      'Suivre la mise en œuvre'
    ]
  },
  {
    id: 'suivi-evaluation',
    titre: 'Suivi-évaluation des projets',
    niveau: 'Intermédiaire',
    duree: '3 semaines',
    horaires: '16h00 – 18h00',
    format: 'Présentiel / En ligne',
    seances: 6,
    tarif: '70 000 FCFA',
    prerequis: 'Bases de gestion de projets',
    description: 'Apprenez à suivre, mesurer et évaluer la performance de vos projets.',
    objectifs: [
      'Concevoir un système de suivi',
      'Définir des indicateurs pertinents',
      'Collecter et analyser les données',
      'Rédiger un rapport d\'évaluation'
    ]
  },
  {
    id: 'recherche-financement',
    titre: 'Recherche et mobilisation de financements',
    niveau: 'Intermédiaire',
    duree: '4 semaines',
    horaires: '16h00 – 18h00',
    format: 'Présentiel / En ligne',
    seances: 8,
    tarif: '80 000 FCFA',
    prerequis: 'Projet structuré',
    description: 'Identifiez les sources de financement et préparez des dossiers de demande convaincants.',
    objectifs: [
      'Cartographier les bailleurs et financeurs',
      'Adapter le dossier au bailleur',
      'Rédiger une note conceptuelle',
      'Négocier et finaliser le financement'
    ]
  }
];

// Filtres projets
document.addEventListener('DOMContentLoaded', function () {
  const filtreBtns = document.querySelectorAll('.filtre-btn');
  const projetCards = document.querySelectorAll('[data-secteur]');

  if (filtreBtns.length && projetCards.length) {
    filtreBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const secteur = this.getAttribute('data-filtre');

        // Active state
        filtreBtns.forEach(function (b) {
          b.classList.remove('active');
        });
        this.classList.add('active');

        // Filter
        projetCards.forEach(function (card) {
          if (secteur === 'tous' || card.getAttribute('data-secteur') === secteur) {
            card.style.display = '';
            card.classList.add('fade-in', 'visible');
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Pré-remplir formation depuis URL ?formation=xxx
  const urlParams = new URLSearchParams(window.location.search);
  const formationParam = urlParams.get('formation');
  const selectFormation = document.getElementById('insc-formation');
  if (selectFormation && formationParam) {
    selectFormation.value = formationParam;
  }
});