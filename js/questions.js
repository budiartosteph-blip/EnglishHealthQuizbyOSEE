/**
 * EnglishHealthQuizbyOSEE - QUESTION BANK
 * Curated and clinically structured questions spanning 15 levels.
 * Each level contains:
 * - primary: main question
 * - alternate: backup question for "Case Referral / Switch Question" lifeline
 */

const QUESTION_BANK = {
  1: {
    prize: "Rp 100,000",
    safe: false,
    primary: {
      category: "Healthy Lifestyle & Hydration",
      question: "How many liters of plain water per day are generally recommended by health authorities (e.g., WHO and MoH) for an average adult with normal physical activity?",
      options: [
        "Less than 500 mL per day",
        "Approximately 2 Liters (about 8 glasses) per day",
        "At least 10 Liters per day",
        "Only when experiencing a dry throat"
      ],
      answer: 1,
      explanation: "Health authorities recommend an average daily water intake of approximately 2 liters (or 8 glasses of 250 mL each) to maintain cellular hydration, renal clearance, and systemic electrolyte balance.",
      pearl: "Mild dehydration (a 1–2% fluid deficit) can impair cognitive performance, concentration, and working memory by up to 15%."
    },
    alternate: {
      category: "Fundamental Physiology",
      question: "What is the normal resting heart rate (pulse) range for a healthy adult at rest?",
      options: [
        "20 - 40 beats per minute",
        "60 - 100 beats per minute",
        "120 - 160 beats per minute",
        "180 - 220 beats per minute"
      ],
      answer: 1,
      explanation: "A normal resting heart rate for adults ranges from 60 to 100 beats per minute (bpm). A rate below 60 bpm is termed bradycardia, whereas a rate exceeding 100 bpm is termed tachycardia.",
      pearl: "Endurance-trained athletes frequently exhibit resting pulse rates of 40–50 bpm due to high stroke volume efficiency and elevated vagal tone."
    }
  },
  2: {
    prize: "Rp 200,000",
    safe: false,
    primary: {
      category: "Clinical Nutrition & Biochemistry",
      question: "Which group of vitamins is FAT-SOLUBLE, meaning they are absorbed alongside dietary lipids and stored in hepatic and adipose tissues?",
      options: [
        "Vitamin B-Complex and Vitamin C",
        "Vitamins B1, B6, and B12",
        "Vitamins A, D, E, and K",
        "Vitamin C and Vitamin P"
      ],
      answer: 2,
      explanation: "Vitamins A, D, E, and K (ADEK) are fat-soluble vitamins stored in liver and adipose reserves. In contrast, Vitamin C and B-complex vitamins are water-soluble and excreted in urine when in excess.",
      pearl: "Because they accumulate in adipose and hepatic tissues, excessive intake of fat-soluble vitamins (particularly Vitamin A and D) carries a genuine risk of hypervitaminosis toxicity."
    },
    alternate: {
      category: "Anatomy & Endocrinology",
      question: "Which organ contains the Islets of Langerhans and secretes the hormone Insulin to regulate blood glucose homeostasis?",
      options: [
        "Gallbladder",
        "Pancreas",
        "Spleen",
        "Thyroid Gland"
      ],
      answer: 1,
      explanation: "The pancreas synthesizes insulin via beta cells located within the Islets of Langerhans, facilitating cellular uptake of glucose into skeletal muscle and adipose tissues.",
      pearl: "In Type 1 Diabetes Mellitus, autoimmune destruction of pancreatic beta cells leads to an absolute deficiency in endogenous insulin production."
    }
  },
  3: {
    prize: "Rp 300,000",
    safe: false,
    primary: {
      category: "First Aid & Emergency Response",
      question: "What is the primary evidence-based first-aid protocol for managing a minor superficial (first-degree) thermal burn caused by hot water?",
      options: [
        "Applying toothpaste, soy sauce, or butter immediately",
        "Cooling the burn under cool running tap water for 10–20 minutes",
        "Applying direct ice cubes onto the burn wound",
        "Popping burn blisters with an unsterilized sewing needle"
      ],
      answer: 1,
      explanation: "Immediate first-aid for thermal burns involves cooling the area under gentle, room-temperature running tap water for 10 to 20 minutes to halt ongoing thermal tissue damage and relieve pain.",
      pearl: "Applying toothpaste, butter, or sauces traps heat within underlying dermal layers, damages regenerating epithelial cells, and significantly escalates the risk of secondary bacterial infection."
    },
    alternate: {
      category: "Musculoskeletal First Aid",
      question: "In the acute management of a lateral ankle ligament sprain, what is the standard evidence-based first aid protocol?",
      options: [
        "Vigorous deep tissue massage immediately",
        "The R.I.C.E. protocol (Rest, Ice, Compression, Elevation)",
        "Applying scalding hot compresses within the first hour",
        "Forced weight-bearing walking to prevent joint stiffness"
      ],
      answer: 1,
      explanation: "The acute standard of care for ligament sprains is R.I.C.E.: Rest the limb, Ice for 15–20 minutes, apply elastic Compression bandage, and Elevate the limb above heart level to reduce interstitial edema.",
      pearl: "Massaging acute ligament injuries during the initial inflammatory phase (<48 hours) risks tearing fragile capillaries and exacerbating localized hematoma."
    }
  },
  4: {
    prize: "Rp 500,000",
    safe: false,
    primary: {
      category: "Physiology & Hematology",
      question: "Which cellular blood element contains the iron-rich protein hemoglobin and is primarily responsible for transporting oxygen from the lungs to peripheral tissues?",
      options: [
        "Leukocytes (White Blood Cells)",
        "Thrombocytes (Platelets)",
        "Erythrocytes (Red Blood Cells)",
        "Blood Plasma"
      ],
      answer: 2,
      explanation: "Erythrocytes (red blood cells) are anucleated biconcave discs packed with hemoglobin. Each hemoglobin tetramer binds up to 4 oxygen (O2) molecules.",
      pearl: "The physiological lifespan of circulating erythrocytes is approximately 120 days before being phagocytosed by reticuloendothelial macrophages in the spleen and liver."
    },
    alternate: {
      category: "Anthropometry & Epidemiology",
      question: "According to WHO criteria adapted for Asian populations, what is the Body Mass Index (BMI) range classified as 'Normal Weight'?",
      options: [
        "10.0 - 15.0 kg/m²",
        "18.5 - 22.9 kg/m²",
        "25.0 - 29.9 kg/m²",
        "35.0 - 40.0 kg/m²"
      ],
      answer: 1,
      explanation: "The Asian-Pacific WHO cut-offs define normal BMI as 18.5 – 22.9 kg/m². Overweight is defined at 23.0 – 24.9 kg/m², and Obesity at ≥ 25.0 kg/m² due to higher cardiovascular risk profiles at lower BMI thresholds.",
      pearl: "BMI is calculated as: Weight in kilograms divided by the square of Height in meters (kg/m²)."
    }
  },
  5: {
    prize: "Rp 1,000,000",
    safe: true,
    primary: {
      category: "Public Health & Medication Safety",
      question: "In community health guidelines for safe home drug disposal, what is the critical reason for never discarding whole unused antibiotics into household trash or open waterways?",
      options: [
        "To prevent commercial loss for retail pharmacies",
        "To prevent environmental contamination and selective pressure causing Antimicrobial Resistance (AMR)",
        "Because antibiotics decompose into toxic cyanide gas within 2 hours",
        "To maintain municipal landfill pH neutrality"
      ],
      answer: 1,
      explanation: "Improper disposal of intact antimicrobial agents into soil and waterways creates sub-inhibitory environmental concentrations that exert selective evolutionary pressure, accelerating global Antimicrobial Resistance (AMR).",
      pearl: "Unused medications should be surrendered to official take-back programs or rendered unusable (mixed with coffee grounds or cat litter) following regulatory disposal protocols."
    },
    alternate: {
      category: "Vital Signs & Clinical Monitoring",
      question: "What is the normal peripheral blood oxygen saturation (SpO2) range measured by a pulse oximeter in a healthy adult breathing room air at sea level?",
      options: [
        "50% - 65%",
        "70% - 80%",
        "95% - 100%",
        "Exactly 150%"
      ],
      answer: 2,
      explanation: "Normal peripheral arterial oxygen saturation (SpO2) at sea level ranges between 95% and 100%. Readings below 94% signify hypoxemia warranting clinical evaluation and supplemental oxygen therapy.",
      pearl: "The phenomenon known as 'Happy Hypoxia' (silent hypoxemia), frequently noted in viral pneumonias, features SpO2 levels dropping below 88% without subjective dyspnea."
    }
  },
  6: {
    prize: "Rp 2,000,000",
    safe: false,
    primary: {
      category: "Pharmaceutical Regulatory Affairs",
      question: "In pharmaceutical product packaging symbols, what classification does a GREEN CIRCLE symbol with a black border designate?",
      options: [
        "Controlled Narcotic Drug",
        "Prescription-Only Medicine (POM)",
        "Over-The-Counter (OTC) / General Sale Medicine",
        "Limited Over-The-Counter with Warning Notices"
      ],
      answer: 2,
      explanation: "A green circle surrounded by a black border represents Over-The-Counter (OTC) General Sale medicines, indicating products of proven safety suitable for self-medication of minor self-limiting symptoms without a prescription.",
      pearl: "Even for OTC analgesics like Paracetamol, adult intake exceeding 4 grams/24h can precipitate life-threatening acute hepatic centrilobular necrosis."
    },
    alternate: {
      category: "Pharmaceutical Regulatory Affairs",
      question: "A BLUE CIRCLE symbol with a black border, accompanied by mandatory statutory warning notices (P.No. 1 to 6), designates which regulatory class of drugs?",
      options: [
        "Limited Over-The-Counter (Behind-The-Counter) Medicine",
        "Traditional Herbal Preparation",
        "Schedule II Narcotic Drug",
        "Standardized Biologics"
      ],
      answer: 0,
      explanation: "A blue circle with a black border indicates Limited Over-the-Counter medicines. These are potent medications sold in restricted unit pack sizes without a prescription, provided they carry mandated statutory caution warnings.",
      pearl: "Standard warning P.No. 1 states: 'Caution! Potent Medication. Read package insert carefully before use.' P.No. 2 states: 'For gargle only, do not swallow.'"
    }
  },
  7: {
    prize: "Rp 4,000,000",
    safe: false,
    primary: {
      category: "Medical Prescription & Latin Sig Codes",
      question: "On a physician's prescription, what clinical administration timing is indicated by the Latin abbreviation 'p.c.' (post coenam)?",
      options: [
        "Before meals on an empty stomach",
        "After meals",
        "Immediately with the first mouthful of food",
        "Exclusively at bedtime"
      ],
      answer: 1,
      explanation: "The Latin abbreviation 'p.c.' denotes 'post coenam', meaning 'after meals'. This timing is typically prescribed for drugs that risk gastric mucosal irritation (such as NSAIDs) or those requiring food lipids for enhanced absorption.",
      pearl: "Conversely, 'a.c.' (ante coenam) instructs 'before meals' (30–60 minutes prior, common for proton pump inhibitors, sucralfate, or levothyroxine)."
    },
    alternate: {
      category: "Medical Prescription & Latin Sig Codes",
      question: "What is the medical meaning of the Latin direction abbreviation 'p.r.n.' (pro re nata) commonly found on analgesic or antiemetic prescriptions?",
      options: [
        "Must be taken continuously without interruption",
        "Taken strictly every hour around the clock",
        "As needed / when symptoms arise",
        "Administered via intravenous infusion only"
      ],
      answer: 2,
      explanation: "'p.r.n.' stands for 'pro re nata', translating to 'as needed' or 'as circumstances require' (e.g., Paracetamol 500 mg tab, 1 tablet TID p.r.n. for fever or pain).",
      pearl: "Systemic antibiotic regimens must NEVER be prescribed with p.r.n. directions, as consistent minimum inhibitory steady-state serum concentrations are mandatory to prevent treatment failure."
    }
  },
  8: {
    prize: "Rp 8,000,000",
    safe: false,
    primary: {
      category: "Pharmacotherapy & Antimicrobial Stewardship",
      question: "Why are patients prescribed an antibiotic course strictly instructed to complete the entire treatment duration, even after clinical symptoms have resolved?",
      options: [
        "To ensure pharmacy inventory clearance",
        "To prevent surviving bacterial sub-populations from mutating into resistant strains (Antimicrobial Resistance)",
        "Because open antibiotic containers degrade within 24 hours",
        "To avoid acute changes in metabolic body weight"
      ],
      answer: 1,
      explanation: "Premature discontinuation of antibiotic courses leaves behind the hardiest bacterial sub-populations. These surviving microbes can mutate, exchange resistance plasmids, and propagate multi-drug resistant (MDR) strains.",
      pearl: "The World Health Organization (WHO) has ranked Antimicrobial Resistance (AMR) among the top 10 global public health threats facing humanity."
    },
    alternate: {
      category: "Clinical Drug-Drug Interactions",
      question: "Why should oral Tetracyclines or Fluoroquinolones (e.g., Ciprofloxacin) NOT be co-administered simultaneously with dairy milk or calcium/magnesium antacids?",
      options: [
        "They form toxic cyanide gas in gastric juice",
        "Multivalent cations (Ca²⁺/Mg²⁺/Al³⁺) form insoluble chelate complexes, crashing oral bioavailability",
        "They trigger rapid enzymatic breakdown of pepsin",
        "They make the drug taste unpalatably sweet"
      ],
      answer: 1,
      explanation: "Multivalent metal cations like Ca²⁺ (dairy), Mg²⁺/Al³⁺ (antacids), and Fe²⁺ (hematinics) bind and chelate the core aromatic rings of tetracyclines and fluoroquinolones into insoluble precipitates, reducing absorption by up to 85%.",
      pearl: "To prevent therapeutic failure, administration must be separated by at least 2 hours before or 4 hours after consuming divalent/trivalent cation sources."
    }
  },
  9: {
    prize: "Rp 16,000,000",
    safe: false,
    primary: {
      category: "Infectious Diseases & Medical Vector Biology",
      question: "Which mosquito species serves as the primary biological vector for Dengue virus transmission, characterized by white lyre markings and diurnal (daytime) biting habits?",
      options: [
        "Anopheles sundaicus",
        "Culex quinquefasciatus",
        "Aedes aegypti",
        "Mansonia uniformis"
      ],
      answer: 2,
      explanation: "Aedes aegypti (along with Aedes albopictus) is the primary vector transmitting Dengue virus (family Flaviviridae). Female mosquitoes exhibit bimodal diurnal biting peaks in the early morning and late afternoon.",
      pearl: "Anopheles mosquitoes transmit Malaria (nocturnal biters), whereas Culex species are primary vectors for Lymphatic Filariasis and Japanese Encephalitis."
    },
    alternate: {
      category: "Clinical Pathology & Diagnostic Biomarkers",
      question: "According to international ADA diagnostic criteria, what is the normal Fasting Plasma Glucose (FPG) range in a non-diabetic adult following an 8-hour overnight fast?",
      options: [
        "30 - 50 mg/dL",
        "70 - 99 mg/dL",
        "140 - 199 mg/dL",
        "200 - 300 mg/dL"
      ],
      answer: 1,
      explanation: "Normal fasting plasma glucose (FPG) is defined as 70 to 99 mg/dL. Values between 100 and 125 mg/dL indicate Impaired Fasting Glucose (Prediabetes), and levels ≥ 126 mg/dL on repeated testing are diagnostic for Diabetes Mellitus.",
      pearl: "The Hemoglobin A1c (HbA1c) test reflects mean glycemic control over the preceding 2–3 months; normal levels are strictly < 5.7%."
    }
  },
  10: {
    prize: "Rp 32,000,000",
    safe: true,
    primary: {
      category: "Pharmaceutical Regulatory Affairs",
      question: "In pharmaceutical drug scheduling, which category represents Prescription-Only Medicines (POM / Ethical Drugs), requiring mandatory dispensing under a physician's prescription?",
      options: [
        "Standardized Dietary Supplements",
        "General Sale Over-The-Counter Remedies",
        "Prescription-Only Medicines (POM / Ethical Drugs)",
        "Cosmeceuticals"
      ],
      answer: 2,
      explanation: "Prescription-Only Medicines (Ethical Drugs / POM) comprise potent therapeutic agents—including systemic antibiotics, hormones, antihypertensives, and parenterals—that can only be lawfully dispensed by a licensed pharmacist upon a valid prescription.",
      pearl: "Dispensing legend prescription drugs without a practitioner's order violates national Pharmacy Practice Acts and Good Pharmacy Practice (GPP) standards."
    },
    alternate: {
      category: "Cardiovascular Pharmacology",
      question: "Which first-line antihypertensive drug class works by competitively inhibiting Angiotensin-Converting Enzyme, thereby blocking the synthesis of potent vasoconstrictor Angiotensin II?",
      options: [
        "Beta-Adrenergic Blockers (e.g., Bisoprolol)",
        "ACE Inhibitors (e.g., Captopril, Ramipril, Lisinopril)",
        "Calcium Channel Blockers (e.g., Amlodipine)",
        "Loop Diuretics (e.g., Furosemide)"
      ],
      answer: 1,
      explanation: "ACE inhibitors (bearing the '-pril' suffix) inhibit the conversion of Angiotensin I to Angiotensin II, inducing systemic arteriolar vasodilation and suppressing aldosterone-mediated sodium/water retention.",
      pearl: "Because the ACE enzyme is identical to Kininase II, inhibiting it leads to respiratory accumulation of bradykinin, causing a persistent dry cough in 10–20% of treated patients."
    }
  },
  11: {
    prize: "Rp 64,000,000",
    safe: false,
    primary: {
      category: "Good Distribution Practice (GDP) & Cold Chain",
      question: "Under Good Distribution Practice (GDP) and WHO cold-chain standards, what is the mandatory validated temperature range for storing thermo-labile biologics, vaccines, and regular insulin?",
      options: [
        "Deep freeze below -50°C",
        "Controlled cold temperature between +2°C and +8°C",
        "Cool storage between +15°C and +25°C",
        "Ambient room temperature between +30°C and +37°C"
      ],
      answer: 1,
      explanation: "Validated Cold Chain standards require +2°C to +8°C for thermo-labile biologicals, vaccines (e.g., Hepatitis B, DTP, BCG, Tetanus toxoid), and insulin. Freezing exposure (<0°C) must be avoided as ice crystals denature protein structures.",
      pearl: "Oral Polio Vaccine (OPV) can be stored frozen at -15°C to -25°C in bulk depots, but must remain at +2°C to +8°C once distributed to clinical points of care."
    },
    alternate: {
      category: "Vaccine Quality Assurance",
      question: "What is the name of the temperature-sensitive indicator sticker affixed directly onto vaccine vials that undergoes irreversible progressive color change when exposed to cumulative heat over time?",
      options: [
        "Vaccine Vial Monitor (VVM)",
        "2D DataMatrix Serializer",
        "Holographic Tamper Seal",
        "Passive RFID Inlay"
      ],
      answer: 0,
      explanation: "A Vaccine Vial Monitor (VVM) is a chemical heat indicator. If the inner square is lighter than the outer circle (Stages 1 and 2), the vaccine is safe for use. If the inner square matches or is darker than the outer ring (Stages 3 and 4), the vaccine must be discarded.",
      pearl: "VVMs record cumulative heat exposure over time; they do not detect accidental freezing episodes, which require the clinical Shake Test."
    }
  },
  12: {
    prize: "Rp 125,000,000",
    safe: false,
    primary: {
      category: "Clinical Toxicology & Critical Care",
      question: "A patient presents to the Emergency Department following a massive toxic ingestion of Paracetamol (Acetaminophen). What is the first-line specific antidote that regenerates depleted hepatic glutathione reserves?",
      options: [
        "Naloxone Hydrochloride",
        "Atropine Sulfate",
        "N-Acetylcysteine (NAC)",
        "Flumazenil"
      ],
      answer: 2,
      explanation: "Paracetamol overdose saturates normal glucuronide/sulfate pathways, shunting metabolism to CYP2E1 which produces toxic NAPQI that depletes hepatic glutathione. N-Acetylcysteine (NAC) replenishes glutathione stores and acts as a direct sulfhydryl donor to neutralize NAPQI.",
      pearl: "The clinical efficacy of NAC is highest when administered within an 8-hour golden window post-ingestion, as plotted on the Rumack-Matthew nomogram."
    },
    alternate: {
      category: "Toxicology & Specific Antidotes",
      question: "Which pure competitive opioid receptor antagonist is administered parenterally in acute medical emergencies to reverse life-threatening respiratory depression caused by Opioid overdose (e.g., Morphine, Fentanyl)?",
      options: [
        "Naloxone (Narcan)",
        "Phytomenadione (Vitamin K1)",
        "Pralidoxime (2-PAM)",
        "Deferoxamine"
      ],
      answer: 0,
      explanation: "Naloxone is a high-affinity, pure competitive antagonist at mu, kappa, and delta opioid receptors that displaces opioid agonists in the CNS, restoring spontaneous respiratory drive within 1–3 minutes.",
      pearl: "Naloxone has an elimination half-life of 30–90 minutes, which is shorter than most long-acting opioids, necessitating vigilant monitoring for rebound respiratory arrest."
    }
  },
  13: {
    prize: "Rp 250,000,000",
    safe: false,
    primary: {
      category: "Fundamental Clinical Pharmacokinetics",
      question: "Which pharmacokinetic parameter, represented by the symbol 'F', is defined as the fraction or percentage of an administered active drug dose that reaches systemic circulation in an unchanged form?",
      options: [
        "Volume of Distribution (Vd)",
        "Bioavailability (F)",
        "Renal Clearance (Cl)",
        "Elimination Half-Life (t1/2)"
      ],
      answer: 1,
      explanation: "Bioavailability (F) represents the fraction of an active drug dose that enters systemic circulation unchanged. Intravenous administration offers an absolute bioavailability of 100% (F = 1.0), whereas oral routes yield F < 1.0 due to incomplete absorption and hepatic first-pass metabolism.",
      pearl: "Bioequivalence (BE) studies compare AUC and Cmax metrics between generic and reference innovator drugs within an accepted 80.00% – 125.00% 90% confidence interval window."
    },
    alternate: {
      category: "Hepatic Drug Biotransformation",
      question: "Which cytochrome P450 isoenzyme in human hepatic and intestinal microsomes is the most abundant and responsible for metabolizing more than 50% of all clinically prescribed therapeutic drugs?",
      options: [
        "CYP1A2",
        "CYP2D6",
        "CYP3A4",
        "CYP2E1"
      ],
      answer: 2,
      explanation: "CYP3A4 is the most abundant Phase I biotransformation enzyme in human liver and enterocytes, handling the oxidative clearance of over 50% of marketed pharmaceuticals, including statins, calcium channel blockers, and immunosuppressants.",
      pearl: "Grapefruit juice contains furanocoumarins that irreversibly inhibit intestinal CYP3A4, precipitously elevating serum concentrations of susceptible oral drugs to toxic levels."
    }
  },
  14: {
    prize: "Rp 500,000,000",
    safe: false,
    primary: {
      category: "Specialist Pharmacology & Drug Toxicities",
      question: "The use of Angiotensin-Converting Enzyme (ACE) Inhibitors (e.g., Captopril, Ramipril) frequently induces a persistent, refractory dry cough. What is the primary biochemical mechanism responsible for this adverse effect?",
      options: [
        "Lactic acid accumulation in pulmonary alveoli",
        "Accumulation of Bradykinin and Substance P due to drug-induced inhibition of Kininase II",
        "Diaphragmatic muscle spasms secondary to calcium ion depletion",
        "Excessive down-regulation of bronchial beta-2 adrenergic receptors"
      ],
      answer: 1,
      explanation: "The ACE enzyme is structurally identical to Kininase II, which degrades pro-inflammatory peptides bradykinin and substance P. ACE inhibition causes localized accumulation of these peptides in airway mucosa, stimulating unmyelinated C-fibers and triggering a persistent dry cough.",
      pearl: "For patients experiencing intolerable ACEI-induced dry cough, guideline-directed therapy is transitioned to Angiotensin Receptor Blockers (ARBs, such as Losartan/Candesartan), which do not alter bradykinin metabolism."
    },
    alternate: {
      category: "Antimicrobial Chemotherapy & Toxicities",
      question: "Bactericidal Aminoglycoside antibiotics (e.g., Gentamicin, Amikacin, Streptomycin) possess a narrow therapeutic window and require therapeutic drug monitoring (TDM) due to two major dose-limiting organ toxicities:",
      options: [
        "Cardiotoxicity and Hepatotoxicity",
        "Ototoxicity (vestibulocochlear cranial nerve VIII damage) and Nephrotoxicity (proximal tubular necrosis)",
        "Osteoporosis and Retinopathy",
        "Acute Pancreatitis and Peptic Ulceration"
      ],
      answer: 1,
      explanation: "Aminoglycosides selectively accumulate in the renal proximal tubular cells (causing reversible nephrotoxicity) and sensory hair cells of the inner ear cochlea and vestibular apparatus (causing irreversible sensorineural ototoxicity).",
      pearl: "Co-administering aminoglycosides with loop diuretics (e.g., Furosemide) is strictly avoided due to profound synergistic potentiation of cochlear ototoxicity."
    }
  },
  15: {
    prize: "Rp 1,000,000,000",
    safe: true,
    primary: {
      category: "Precision Oncology & Targeted Biologics",
      question: "Which groundbreaking recombinant humanized IgG1 monoclonal antibody was the first targeted agent approved by the US FDA (1998) for treating metastatic breast cancer exhibiting overexpression of the HER2/neu receptor?",
      options: [
        "Rituximab (MabThera)",
        "Bevacizumab (Avastin)",
        "Trastuzumab (Herceptin)",
        "Infliximab (Remicade)"
      ],
      answer: 2,
      explanation: "Trastuzumab (Herceptin) is a humanized monoclonal IgG1 antibody that binds specifically to extracellular domain IV of the HER2/neu (ErbB2) receptor tyrosine kinase, blocking downstream oncogenic signaling cascades and inducing antibody-dependent cellular cytotoxicity (ADCC).",
      pearl: "Rituximab targets CD20 on B-cell lymphomas; Bevacizumab targets VEGF to inhibit tumor angiogenesis; and Infliximab neutralizes TNF-alpha in refractory autoimmune disorders."
    },
    alternate: {
      category: "Advanced Non-Linear Pharmacokinetics",
      question: "In clinical pharmacokinetics, what is the term for the phenomenon where drug elimination proceeds at a constant rate (a fixed amount of drug cleared per unit time) independent of plasma concentration, due to complete saturation of elimination enzyme pathways?",
      options: [
        "First-Order Linear Kinetics",
        "Michaelis-Menten / Zero-Order Elimination Kinetics",
        "Passive Transcellular Diffusion",
        "Linear Glomerular Filtration"
      ],
      answer: 1,
      explanation: "In Zero-Order (capacity-limited or saturated Michaelis-Menten) kinetics, the metabolic/elimination pathways are saturated at maximum velocity (Vmax). Consequently, a fixed mass of drug is cleared per hour (e.g., Phenytoin at high doses, Ethanol, toxic Salicylates), and minor dosage increases can cause catastrophic exponential surges in serum drug levels.",
      pearl: "Most pharmaceuticals at typical therapeutic doses follow First-Order kinetics, where the rate of elimination is directly proportional to plasma concentration (a constant fraction cleared per unit time)."
    }
  }
};

// Lifeline Simulated Consultation Dialogues for Phone a Friend (Specialist Consultation)
const SPECIALIST_DATABASE = {
  pharmacist: {
    name: "Pharmacist Budiarto, B.Pharm. (Clinical Pharmacy & GDP Specialist)",
    avatar: "👨‍⚕️",
    getAdvice: (level, correctLetter, questionText) => {
      if (level <= 5) {
        return `Hello colleague! This is a foundational public health and clinical principle. I am 100% confident that the correct answer is option (${correctLetter}).`;
      } else if (level <= 10) {
        return `Greetings! This pharmacotherapy case is commonly encountered in hospital and retail pharmacy practice. Based on established clinical guidelines, I am 90% certain the answer is (${correctLetter}).`;
      } else {
        return `An extraordinarily challenging specialist question! Based on advanced pharmacokinetics, molecular pharmacology, and Good Distribution Practice standards, the mechanism points conclusively to option (${correctLetter}). My confidence is around 80%.`;
      }
    }
  },
  doctor: {
    name: "Dr. Farhan, Pediatrician (Clinical Medicine Specialist)",
    avatar: "🩺",
    getAdvice: (level, correctLetter, questionText) => {
      if (level <= 5) {
        return `Hello! From a basic physiological and emergency first-aid perspective, this unequivocally points to option (${correctLetter}). Go ahead and lock it in!`;
      } else if (level <= 10) {
        return `Hello! Reviewing the vital signs, pathology, and clinical presentation, option (${correctLetter}) represents the most rational diagnostic/therapeutic choice according to current medical guidelines. Confidence 85%.`;
      } else {
        return `A complex critical care and targeted therapy challenge! Evaluating the biochemical signaling pathways and toxicological dynamics, I strongly favor option (${correctLetter}). Verify your clinical judgment before final lock!`;
      }
    }
  }
};
