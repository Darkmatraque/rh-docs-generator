// ------------------------------
//   TEMPLATES DOCUMENTS RH
// ------------------------------

const templates = {
  attestationTravail: {
    label: "Attestation de travail",
    fields: [
      { name: "entreprise", label: "Nom de l’entreprise", full: false },
      { name: "adresseEntreprise", label: "Adresse de l’entreprise", full: true },
      { name: "lieu", label: "Lieu", full: false },
      { name: "date", label: "Date", full: false },
      { name: "nomSalarie", label: "Nom du salarié", full: false },
      { name: "poste", label: "Poste occupé", full: false },
      { name: "dateDebut", label: "Date de début du contrat", full: false },
      { name: "dateFin", label: "Date de fin (laisser vide si en cours)", full: false },
      { name: "typeContrat", label: "Type de contrat (CDI, CDD…)", full: false },
      { name: "signataire", label: "Nom du signataire", full: false },
      { name: "fonctionSignataire", label: "Fonction du signataire", full: false }
    ],
    generate: (d, country) => {
      const fin = d.dateFin ? `au ${d.dateFin}` : "à ce jour";
      const objet = country === "fr" ? "Attestation d’emploi" : "Attestation de travail";

      return (
`${d.lieu}, le ${d.date}

${d.entreprise}
${d.adresseEntreprise}

Objet : ${objet}

Je soussigné(e) ${d.signataire}, ${d.fonctionSignataire}, certifie que :

${d.nomSalarie} a été employé(e) au sein de l’entreprise ${d.entreprise} en qualité de ${d.poste}, sous contrat de type ${d.typeContrat}, du ${d.dateDebut} ${fin}.

La présente attestation est délivrée à la demande de l’intéressé(e) pour servir et valoir ce que de droit.

${d.entreprise}

Signature : ______________________`
      );
    }
  },

  certificatEmployeur: {
    label: "Certificat d’employeur",
    fields: [
      { name: "entreprise", label: "Nom de l’entreprise", full: false },
      { name: "adresseEntreprise", label: "Adresse de l’entreprise", full: true },
      { name: "lieu", label: "Lieu", full: false },
      { name: "date", label: "Date", full: false },
      { name: "nomSalarie", label: "Nom du salarié", full: false },
      { name: "dateNaissance", label: "Date de naissance", full: false },
      { name: "poste", label: "Poste occupé", full: false },
      { name: "dateDebut", label: "Date de début", full: false },
      { name: "dateFin", label: "Date de fin", full: false },
      { name: "appreciation", label: "Appréciation (facultatif)", full: true },
      { name: "signataire", label: "Nom du signataire", full: false },
      { name: "fonctionSignataire", label: "Fonction du signataire", full: false }
    ],
    generate: (d) => {
      const appreciationText = d.appreciation
        ? `\nAppréciation : ${d.appreciation}\n`
        : "";

      return (
`${d.lieu}, le ${d.date}

${d.entreprise}
${d.adresseEntreprise}

Objet : Certificat d’employeur

Je soussigné(e) ${d.signataire}, ${d.fonctionSignataire}, certifie que :

${d.nomSalarie}, né(e) le ${d.dateNaissance}, a été employé(e) en qualité de ${d.poste}, du ${d.dateDebut} au ${d.dateFin}.

${appreciationText}
Certificat délivré pour servir et valoir ce que de droit.

${d.entreprise}

Signature : ______________________`
      );
    }
  },

  lettreAvertissement: {
    label: "Lettre d’avertissement",
    fields: [
      { name: "entreprise", label: "Nom de l’entreprise", full: false },
      { name: "adresseEntreprise", label: "Adresse de l’entreprise", full: true },
      { name: "lieu", label: "Lieu", full: false },
      { name: "date", label: "Date", full: false },
      { name: "nomSalarie", label: "Nom du salarié", full: false },
      { name: "poste", label: "Poste du salarié", full: false },
      { name: "faits", label: "Faits reprochés", full: true },
      { name: "motif", label: "Motif de l’avertissement", full: true },
      { name: "attentes", label: "Attentes / mesures correctives", full: true },
      { name: "signataire", label: "Nom du signataire", full: false },
      { name: "fonctionSignataire", label: "Fonction du signataire", full: false }
    ],
    generate: (d) => {
      return (
`${d.lieu}, le ${d.date}

${d.entreprise}
${d.adresseEntreprise}

À l’attention de : ${d.nomSalarie}, ${d.poste}

Objet : Avertissement disciplinaire

Madame, Monsieur,

Nous faisons suite aux faits suivants :
${d.faits}

Ces faits constituent un manquement à vos obligations professionnelles :
${d.motif}

Nous attendons de votre part :
${d.attentes}

Nous vous invitons à corriger immédiatement la situation.

${d.entreprise}

${d.signataire}
${d.fonctionSignataire}

Signature : ______________________`
      );
    }
  },

  finPeriodeEssai: {
    label: "Fin de période d’essai",
    fields: [
      { name: "entreprise", label: "Nom de l’entreprise", full: false },
      { name: "adresseEntreprise", label: "Adresse de l’entreprise", full: true },
      { name: "lieu", label: "Lieu", full: false },
      { name: "date", label: "Date", full: false },
      { name: "nomSalarie", label: "Nom du salarié", full: false },
      { name: "poste", label: "Poste du salarié", full: false },
      { name: "dateDebut", label: "Début du contrat", full: false },
      { name: "dateFinEssai", label: "Fin de période d’essai", full: false },
      { name: "delaiPreavis", label: "Délai de préavis", full: false },
      { name: "signataire", label: "Nom du signataire", full: false },
      { name: "fonctionSignataire", label: "Fonction du signataire", full: false }
    ],
    generate: (d) => {
      return (
`${d.lieu}, le ${d.date}

${d.entreprise}
${d.adresseEntreprise}

À l’attention de : ${d.nomSalarie}, ${d.poste}

Objet : Rupture de la période d’essai

Madame, Monsieur,

Nous mettons fin à votre contrat en période d’essai, débuté le ${d.dateDebut}.

Votre contrat prendra fin après un préavis de ${d.delaiPreavis}, soit le ${d.dateFinEssai}.

${d.entreprise}

${d.signataire}
${d.fonctionSignataire}

Signature : ______________________`
      );
    }
  },

  lettreRecommandation: {
    label: "Lettre de recommandation",
    fields: [
      { name: "entreprise", label: "Nom de l’entreprise", full: false },
      { name: "adresseEntreprise", label: "Adresse de l’entreprise", full: true },
      { name: "lieu", label: "Lieu", full: false },
      { name: "date", label: "Date", full: false },
      { name: "nomSalarie", label: "Nom du salarié", full: false },
      { name: "poste", label: "Poste occupé", full: false },
      { name: "dateDebut", label: "Début du contrat", full: false },
      { name: "dateFin", label: "Fin du contrat", full: false },
      { name: "qualites", label: "Qualités / points forts", full: true },
      { name: "signataire", label: "Nom du signataire", full: false },
      { name: "fonctionSignataire", label: "Fonction du signataire", full: false }
    ],
    generate: (d) => {
      return (
`${d.lieu}, le ${d.date}

${d.entreprise}
${d.adresseEntreprise}

Objet : Lettre de recommandation

Je soussigné(e) ${d.signataire}, ${d.fonctionSignataire}, atteste que :

${d.nomSalarie} a occupé le poste de ${d.poste} du ${d.dateDebut} au ${d.dateFin}.

Qualités principales :
${d.qualites}

Je recommande vivement ${d.nomSalarie} pour tout poste similaire.

${d.entreprise}

${d.signataire}
${d.fonctionSignataire}

Signature : ______________________`
      );
    }
  }
};

// ------------------------------
//   DOM ELEMENTS
// ------------------------------

const docTypeSelect = document.getElementById("docType");
const countrySelect = document.getElementById("country");
const formContainer = document.getElementById("docForm");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const pdfBtn = document.getElementById("pdfBtn");
const output = document.getElementById("output");
const themeToggle = document.getElementById("themeToggle");
const assistantSelect = document.getElementById("assistantDocType");
const assistantText = document.getElementById("assistantText");

// ------------------------------
//   THEME (clair / sombre)
// ------------------------------

(function initTheme() {
  const saved = localStorage.getItem("grh-theme");
  if (saved === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    if (next === "light") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    localStorage.setItem("grh-theme", next);
  });
}

// ------------------------------
//   FORM BUILDER
// ------------------------------

function renderForm(type) {
  formContainer.innerHTML = "";
  if (!type || !templates[type]) return;

  const tpl = templates[type];

  tpl.fields.forEach((field) => {
    const wrapper = document.createElement("div");
    wrapper.className = "form-field" + (field.full ? " full" : "");

    const label = document.createElement("label");
    label.textContent = field.label;
    label.setAttribute("for", field.name);

    let input;
    if (field.full && field.name !== "adresseEntreprise") {
      input = document.createElement("textarea");
    } else {
      input = document.createElement("input");
      input.type = "text";
    }

    input.id = field.name;
    input.name = field.name;

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    formContainer.appendChild(wrapper);
  });

  // Recharger données sauvegardées pour ce type
  loadFormData(type);
}

// ------------------------------
//   GET / SAVE FORM DATA
// ------------------------------

function getFormData(type) {
  const tpl = templates[type];
  const data = {};
  tpl.fields.forEach((field) => {
    const el = document.getElementById(field.name);
    data[field.name] = (el?.value || "").trim();
  });
  return data;
}

function saveFormData(type) {
  if (!type) return;
  const data = getFormData(type);
  localStorage.setItem(`grh-form-${type}`, JSON.stringify(data));
}

function loadFormData(type) {
  const raw = localStorage.getItem(`grh-form-${type}`);
  if (!raw) return;
  const data = JSON.parse(raw);
  Object.keys(data).forEach((key) => {
    const el = document.getElementById(key);
    if (el) el.value = data[key];
  });
}

// ------------------------------
//   GENERATE DOCUMENT
// ------------------------------

function generateDocument() {
  const type = docTypeSelect.value;
  const country = countrySelect.value || "generic";

  if (!type || !templates[type]) {
    alert("Veuillez sélectionner un type de document.");
    return;
  }

  const data = getFormData(type);
  const text = templates[type].generate(data, country);
  output.textContent = text;

  // Sauvegarde du dernier document
  localStorage.setItem("grh-last-type", type);
  localStorage.setItem("grh-last-output", text);
}

// ------------------------------
//   COPY TEXT
// ------------------------------

async function copyOutput() {
  const text = output.textContent.trim();
  if (!text) {
    alert("Aucun texte à copier.");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = "Copié ✓";
    setTimeout(() => (copyBtn.textContent = "Copier"), 1500);
  } catch (e) {
    alert("Impossible de copier automatiquement.");
  }
}

// ------------------------------
//   PDF PRO EXPORT
// ------------------------------

async function downloadPDF() {
  const text = output.textContent.trim();
  if (!text) {
    alert("Aucun document à exporter.");
    return;
  }

  const { jsPDF } = window.jspdf;

  const doc = new jsPDF({
    unit: "pt",
    format: "a4"
  });

  const marginLeft = 60;
  const marginTop = 80;
  const maxWidth = 475;

  // Header "logo" texte
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Générateur RH", marginLeft, 40);
  doc.setFontSize(10);
  doc.setFont("Helvetica", "normal");
  doc.text("Outil de génération de documents RH", marginLeft, 55);

  doc.setDrawColor(180);
  doc.line(marginLeft, 60, marginLeft + 300, 60);

  // Corps
  doc.setFont("Times", "Roman");
  doc.setFontSize(12);
  doc.setLineHeightFactor(1.4);

  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, marginLeft, marginTop);

  // Footer simple
  doc.setFontSize(8);
  doc.setTextColor(120);
  doc.text("Document généré automatiquement via Générateur RH", marginLeft, 810);

  doc.save("document-rh-professionnel.pdf");
}

// ------------------------------
//   ASSISTANT RH (simple)
// ------------------------------

const assistantMessages = {
  attestationTravail:
    "Utilisez une attestation de travail pour prouver qu’une personne est ou a été employée dans votre entreprise.",
  certificatEmployeur:
    "Le certificat d’employeur est souvent demandé pour des démarches administratives (assurances, bail, etc.).",
  lettreAvertissement:
    "La lettre d’avertissement doit rester factuelle, précise et proportionnée aux faits reprochés.",
  finPeriodeEssai:
    "La fin de période d’essai doit respecter les délais de préavis prévus par le contrat ou la loi.",
  lettreRecommandation:
    "La lettre de recommandation met en avant les qualités et compétences du salarié pour ses futures démarches."
};

function updateAssistant(type) {
  if (!assistantText) return;
  if (!type || !assistantMessages[type]) {
    assistantText.textContent =
      "Choisissez un type de document pour obtenir un conseil rapide sur son utilisation.";
    return;
  }
  assistantText.textContent = assistantMessages[type];
}

// ------------------------------
//   FAQ ACCORDION
// ------------------------------

function initFAQ() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item) => {
    const q = item.querySelector(".faq-question");
    if (!q) return;
    q.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
}

// ------------------------------
//   INIT
// ------------------------------

if (docTypeSelect) {
  // Recharger dernier type + output
  const lastType = localStorage.getItem("grh-last-type");
  const lastOutput = localStorage.getItem("grh-last-output");

  if (lastType && templates[lastType]) {
    docTypeSelect.value = lastType;
    renderForm(lastType);
    if (lastOutput && output) {
      output.textContent = lastOutput;
    }
  }

  docTypeSelect.addEventListener("change", (e) => {
    const type = e.target.value;
    renderForm(type);
    output.textContent = "";
    updateAssistant(type);
  });

  generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    generateDocument();
    saveFormData(docTypeSelect.value);
  });

  copyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    copyOutput();
  });

  pdfBtn.addEventListener("click", (e) => {
    e.preventDefault();
    downloadPDF();
  });

  if (assistantSelect && assistantText) {
    assistantSelect.addEventListener("change", (e) => {
      updateAssistant(e.target.value);
    });
  }
}

// FAQ init
document.addEventListener("DOMContentLoaded", initFAQ);
