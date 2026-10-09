/**
 * ProjetPlus - Validation des formulaires + envoi WhatsApp
 */

document.addEventListener('DOMContentLoaded', function () {
  // ========== FORMULAIRE CONTACT ==========
  const formContact = document.getElementById('form-contact');
  if (formContact) {
    formContact.addEventListener('submit', function (e) {
      e.preventDefault();
      if (validateContactForm()) {
        sendContactViaWhatsApp();
      }
    });
  }

  // ========== FORMULAIRE INSCRIPTION ==========
  const formInscription = document.getElementById('form-inscription');
  if (formInscription) {
    formInscription.addEventListener('submit', function (e) {
      e.preventDefault();
      if (validateInscriptionForm()) {
        sendInscriptionViaWhatsApp();
      }
    });
  }
});

function showError(input, message) {
  input.classList.add('is-invalid');
  input.classList.remove('is-valid');
  const errorEl = input.parentElement.querySelector('.form-error');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }
}

function showSuccess(input) {
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
  const errorEl = input.parentElement.querySelector('.form-error');
  if (errorEl) {
    errorEl.style.display = 'none';
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  const cleaned = phone.replace(/[\s\-\.\(\)]/g, '');
  return /^(\+?221)?[0-9]{9}$/.test(cleaned) || cleaned.length >= 8;
}

function validateContactForm() {
  let valid = true;
  const nom = document.getElementById('contact-nom');
  const email = document.getElementById('contact-email');
  const telephone = document.getElementById('contact-telephone');
  const objet = document.getElementById('contact-objet');
  const type = document.getElementById('contact-type');
  const message = document.getElementById('contact-message');

  // Nom
  if (!nom.value.trim() || nom.value.trim().length < 2) {
    showError(nom, 'Veuillez saisir votre nom (min. 2 caractères).');
    valid = false;
  } else {
    showSuccess(nom);
  }

  // Email
  if (!email.value.trim() || !isValidEmail(email.value.trim())) {
    showError(email, 'Veuillez saisir une adresse email valide.');
    valid = false;
  } else {
    showSuccess(email);
  }

  // Téléphone (optionnel mais si rempli)
  if (telephone.value.trim() && !isValidPhone(telephone.value.trim())) {
    showError(telephone, 'Numéro de téléphone invalide.');
    valid = false;
  } else if (telephone.value.trim()) {
    showSuccess(telephone);
  }

  // Objet
  if (!objet.value.trim() || objet.value.trim().length < 3) {
    showError(objet, 'Veuillez indiquer l\'objet de votre message.');
    valid = false;
  } else {
    showSuccess(objet);
  }

  // Type
  if (!type.value) {
    showError(type, 'Veuillez sélectionner un type de demande.');
    valid = false;
  } else {
    showSuccess(type);
  }

  // Message
  if (!message.value.trim() || message.value.trim().length < 10) {
    showError(message, 'Le message doit contenir au moins 10 caractères.');
    valid = false;
  } else {
    showSuccess(message);
  }

  return valid;
}

function sendContactViaWhatsApp() {
  const nom = document.getElementById('contact-nom').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const telephone = document.getElementById('contact-telephone').value.trim();
  const objet = document.getElementById('contact-objet').value.trim();
  const type = document.getElementById('contact-type').value;
  const message = document.getElementById('contact-message').value.trim();

  const text = `Bonjour, nouvelle demande de contact :

*Nom :* ${nom}
*Email :* ${email}
*Téléphone :* ${telephone || 'Non renseigné'}
*Objet :* ${objet}
*Type de demande :* ${type}
*Message :*
${message}`;

  if (typeof openWhatsApp === 'function') {
    openWhatsApp(text);
  }

  // Message de confirmation
  const alertBox = document.getElementById('contact-alert');
  if (alertBox) {
    alertBox.className = 'alert alert-success-custom mt-3';
    alertBox.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Votre message est prêt. WhatsApp va s\'ouvrir pour l\'envoyer.';
    alertBox.style.display = 'block';
  }
}

function validateInscriptionForm() {
  let valid = true;
  const nom = document.getElementById('insc-nom');
  const prenom = document.getElementById('insc-prenom');
  const telephone = document.getElementById('insc-telephone');
  const email = document.getElementById('insc-email');
  const formation = document.getElementById('insc-formation');
  const profession = document.getElementById('insc-profession');
  const message = document.getElementById('insc-message');

  if (!nom.value.trim() || nom.value.trim().length < 2) {
    showError(nom, 'Nom requis (min. 2 caractères).');
    valid = false;
  } else {
    showSuccess(nom);
  }

  if (!prenom.value.trim() || prenom.value.trim().length < 2) {
    showError(prenom, 'Prénom requis (min. 2 caractères).');
    valid = false;
  } else {
    showSuccess(prenom);
  }

  if (!telephone.value.trim() || !isValidPhone(telephone.value.trim())) {
    showError(telephone, 'Téléphone valide requis.');
    valid = false;
  } else {
    showSuccess(telephone);
  }

  if (!email.value.trim() || !isValidEmail(email.value.trim())) {
    showError(email, 'Email valide requis.');
    valid = false;
  } else {
    showSuccess(email);
  }

  if (!formation.value) {
    showError(formation, 'Veuillez sélectionner une formation.');
    valid = false;
  } else {
    showSuccess(formation);
  }

  // Profession et message optionnels
  if (profession.value.trim()) {
    showSuccess(profession);
  }
  if (message.value.trim() && message.value.trim().length < 5) {
    showError(message, 'Message trop court.');
    valid = false;
  } else if (message.value.trim()) {
    showSuccess(message);
  }

  return valid;
}

function sendInscriptionViaWhatsApp() {
  const nom = document.getElementById('insc-nom').value.trim();
  const prenom = document.getElementById('insc-prenom').value.trim();
  const telephone = document.getElementById('insc-telephone').value.trim();
  const email = document.getElementById('insc-email').value.trim();
  const formation = document.getElementById('insc-formation').value;
  const profession = document.getElementById('insc-profession').value.trim();
  const message = document.getElementById('insc-message').value.trim();

  const text = `Bonjour, je souhaite m'inscrire à une formation.

*Nom :* ${nom}
*Prénom :* ${prenom}
*Téléphone :* ${telephone}
*Email :* ${email}
*Formation :* ${formation}
*Profession :* ${profession || 'Non renseignée'}
*Message :* ${message || 'Aucun'}`;

  if (typeof openWhatsApp === 'function') {
    openWhatsApp(text);
  }

  const alertBox = document.getElementById('inscription-alert');
  if (alertBox) {
    alertBox.className = 'alert alert-success-custom mt-3';
    alertBox.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Votre demande d\'inscription est prête. WhatsApp va s\'ouvrir pour l\'envoyer.';
    alertBox.style.display = 'block';
  }
}