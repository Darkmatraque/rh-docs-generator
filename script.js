// Définition des modèles de documents RH
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
    generate: (d) => {
      const fin = d.dateFin ? `au ${d.dateFin}` : "à ce jour";
      return (
`${d.lieu}, le ${d.date}

${d.entreprise}
${d.adresseEntreprise}

Objet : Attestation de travail

Je soussigné(e) ${d.signataire}, ${d.fonctionSignataire}, certifie que :

${d.nomSalarie} a été employé(e) au sein de l’entreprise ${d.entreprise} en qualité de ${d.poste}, sous contrat de type ${d.typeContrat}, du ${d.dateDebut} ${fin}.

Cette attestation est délivrée à l’intéressé(e) pour servir et valoir ce que de droit.

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
      { name: "dateNaissance", label: "Date de naissance du salarié", full: false },
      { name: "poste", label: "Poste occupé", full: false },
      { name: "dateDebut", label: "Date de début du contrat", full: false },
      { name: "dateFin", label: "Date de fin du contrat", full: false },
      { name: "appreciation", label: "Appréciation globale (facultatif)", full: true },
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

${d.nomSalarie}, né(e) le ${d.dateNaissance}, a été employé(e) au sein de l’entreprise ${d.entreprise} en qualité de ${d.poste}, du ${d.dateDebut} au ${d.dateFin}.

Durant cette période, ${d.nomSalarie} a exercé ses fonctions avec sérieux et professionnalisme.${appreciationText}
Le présent certificat est délivré à la demande de l’intéressé(e) pour servir et valoir ce que de droit.

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
      { name: "motif", label: "Motif de l’avertissement", full: true },
      { name: "faits", label: "Description des faits reprochés", full: true },
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

Ces faits constituent un manquement à vos obligations professionnelles, et ce, pour le motif suivant :
${d.motif}

Nous vous rappelons que nous attendons de votre part :
${d.attentes}

Nous vous invitons à prendre la pleine mesure de la gravité de la situation et à adopter, dès à présent, un comportement conforme à vos obligations contractuelles. À défaut, nous pourrions être amenés à envisager des mesures disciplinaires supplémentaires.

Nous restons à votre disposition pour un entretien si vous le souhaitez.

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
      { name: "dateDebut", label: "Date de début du contrat", full: false },
      { name: "dateFinEssai", label: "Date de fin de période d’essai", full: false },
      { name: "delaiPreavis", label: "Délai de préavis (ex : 7 jours)", full: false },
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

Nous vous informons par la présente de notre décision de mettre fin à votre contrat de travail en période d’essai, débuté le ${d.dateDebut}.

Conformément aux dispositions applicables, votre contrat prendra fin à l’issue d’un délai de préavis de ${d.delaiPreavis}, soit le ${d.dateFinEssai}.

Nous vous remercions pour le travail accompli au sein de ${d.entreprise} et vous souhaitons une bonne continuation pour la suite de votre parcours professionnel.

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
      { name: "dateDebut", label: "Date de début du contrat", full: false },
      { name: "dateFin", label: "Date de fin du contrat", full: false },
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

Je soussigné(e) ${d.signataire}, ${d.fonctionSignataire} au sein de ${d.entreprise}, atteste que :

${d.nomSalarie} a occupé le poste de ${d.poste} du ${d.dateDebut} au ${d.dateFin}.

Durant cette période, ${d.nomSalarie} s’est distingué(e) par les qualités suivantes :
${d.qualites}

Je recommande vivement ${d.nomSalarie} pour tout poste similaire et reste à disposition pour tout renseignement complémentaire.

${d.entreprise}

${d.signataire}
${d.fonctionSignataire}

Signature : ______________________`
      );
    }
  }
};

// DOM
const docTypeSelect = document.getElementById("docType");
const formContainer = document.getElementById("docForm");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const printBtn = document.getElementById("printBtn");
const output = document.getElementById("output");

// Génération dynamique des champs
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
}

// Récupération des données du formulaire
function getFormData(type) {
  const tpl = templates[type];
  const data = {};
  tpl.fields.forEach((field) => {
    const el = document.getElementById(field.name);
    data[field.name] = (el?.value || "").trim();
  });
  return data;
}

// Génération du document
function generateDocument() {
  const type = docTypeSelect.value;
  if (!type || !templates[type]) {
    alert("Choisis d’abord un type de document.");
    return;
  }
  const data = getFormData(type);
  const text = templates[type].generate(data);
  output.textContent = text;
}

// Copier le texte
async function copyOutput() {
  const text = output.textContent.trim();
  if (!text) {
    alert("Aucun texte à copier.");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = "Copié ✅";
    setTimeout(() => (copyBtn.textContent = "Copier le texte"), 1500);
  } catch (e) {
    alert("Impossible de copier automatiquement. Sélectionne le texte manuellement.");
  }
}

// Imprimer / PDF
function printDocument() {
  const text = output.textContent.trim();
  if (!text) {
    alert("Aucun document à imprimer.");
    return;
  }
  window.print();
}

// Events
docTypeSelect.addEventListener("change", (e) => {
  renderForm(e.target.value);
  output.textContent = "";
});

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  generateDocument();
});

copyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  copyOutput();
});

printBtn.addEventListener("click", (e) => {
  e.preventDefault();
  printDocument();
});

// Optionnel : type par défaut
// renderForm("attestationTravail");
