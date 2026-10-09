/**
 * ProjetPlus - WhatsApp utilities
 * Numéro à personnaliser
 */

const WHATSAPP_NUMBER = '221775674388'; // Format international sans + ni espaces (Sénégal exemple)

/**
 * Ouvre WhatsApp avec un message pré-rempli
 * @param {string} message - Message à envoyer
 */
function openWhatsApp(message) {
  const encoded = encodeURIComponent(message || 'Bonjour, je souhaite obtenir des informations.');
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Message pour demande d'accompagnement
 */
function whatsappAccompagnement() {
  openWhatsApp(
    'Bonjour, je souhaite demander un accompagnement pour mon projet. Pouvez-vous m\'indiquer les prochaines étapes ?'
  );
}

/**
 * Message pour devis
 */
function whatsappDevis(service) {
  const s = service ? ` concernant : ${service}` : '';
  openWhatsApp(
    `Bonjour, je souhaite obtenir un devis${s}. Merci de me recontacter.`
  );
}

/**
 * Message pour inscription formation
 */
function whatsappInscription(formation) {
  const f = formation || 'une formation';
  openWhatsApp(
    `Bonjour, je souhaite m'inscrire à la formation : ${f}. Merci de me communiquer les modalités.`
  );
}

/**
 * Message générique contact
 */
function whatsappContact() {
  openWhatsApp('Bonjour, je souhaite vous contacter pour obtenir des informations.');
}

// Bouton flottant
document.addEventListener('DOMContentLoaded', function () {
  const floatBtn = document.querySelector('.whatsapp-float');
  if (floatBtn) {
    floatBtn.addEventListener('click', function (e) {
      e.preventDefault();
      whatsappContact();
    });
  }
});