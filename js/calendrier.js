/**
 * ProjetPlus - Calendrier des formations (statique)
 * Facilement modifiable : ajoutez ou modifiez les événements ci-dessous
 */

const EVENEMENTS_FORMATIONATIONS = [
  {
    date: '2026-11-10',
    titre: 'Début – Initiation à la gestion de projets',
    type: 'debut'
  },
  {
    date: '2026-11-12',
    titre: 'Cours 2 – Gestion de projets',
    type: 'cours'
  },
  {
    date: '2026-11-17',
    titre: 'Cours 3 – Gestion de projets',
    type: 'cours'
  },
  {
    date: '2026-11-19',
    titre: 'Cours 4 – Gestion de projets',
    type: 'cours'
  },
  {
    date: '2026-11-24',
    titre: 'Début – Conception et montage de projets',
    type: 'debut'
  },
  {
    date: '2026-12-01',
    titre: 'Début – Élaboration d\'un Business Plan',
    type: 'debut'
  },
  {
    date: '2026-12-08',
    titre: 'Début – Planification stratégique',
    type: 'debut'
  },
  {
    date: '2027-01-12',
    titre: 'Début – Suivi-évaluation des projets',
    type: 'debut'
  },
  {
    date: '2027-01-19',
    titre: 'Début – Recherche et mobilisation de financements',
    type: 'debut'
  }
];

const MOIS_FR = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

function formatDateEvent(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return {
    day: d.getDate(),
    month: MOIS_FR[d.getMonth()].substring(0, 3),
    full: `${d.getDate()} ${MOIS_FR[d.getMonth()]} ${d.getFullYear()}`
  };
}

function groupByMonth(events) {
  const groups = {};
  events.forEach(function (ev) {
    const d = new Date(ev.date + 'T12:00:00');
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    if (!groups[key]) {
      groups[key] = {
        label: `${MOIS_FR[d.getMonth()].toUpperCase()} ${d.getFullYear()}`,
        events: []
      };
    }
    groups[key].events.push(ev);
  });
  return groups;
}

function renderCalendrier(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Trier par date
  const sorted = EVENEMENTS_FORMATIONATIONS.slice().sort(function (a, b) {
    return a.date.localeCompare(b.date);
  });

  const groups = groupByMonth(sorted);
  let html = '';

  Object.keys(groups).forEach(function (key) {
    const group = groups[key];
    html += `
      <div class="calendar-card mb-4 fade-in">
        <div class="calendar-header">
          <h4><i class="bi bi-calendar3 me-2"></i>${group.label}</h4>
        </div>
        <div class="calendar-body">
    `;

    group.events.forEach(function (ev) {
      const f = formatDateEvent(ev.date);
      const badge = ev.type === 'debut'
        ? '<span class="badge bg-warning text-dark ms-2">Début</span>'
        : '';
      html += `
        <div class="calendar-event">
          <div class="date">
            <div class="day">${f.day}</div>
            <div class="month">${f.month}</div>
          </div>
          <div>
            <strong>${ev.titre}</strong>${badge}
            <div class="text-muted small mt-1">${f.full}</div>
          </div>
        </div>
      `;
    });

    html += '</div></div>';
  });

  if (!html) {
    html = '<p class="text-muted">Aucun événement programmé pour le moment.</p>';
  }

  container.innerHTML = html;

  // Trigger animations
  container.querySelectorAll('.fade-in').forEach(function (el, i) {
    setTimeout(function () {
      el.classList.add('visible');
    }, 100 * i);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  renderCalendrier('calendrier-formations');
});