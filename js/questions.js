/**
 * EnglishHealthQuizbyOSEE - CLINICAL QUESTION BANK
 * Vast, multi-question randomized repository spanning 15 progressive difficulty tiers.
 * Each tier contains an extensive pool of clinically authenticated questions with:
 * - category: Clinical discipline
 * - question: Scientific query
 * - options: 4 distinct choices
 * - answer: Index of the correct choice (0 to 3)
 * - explanation: Comprehensive scientific rationale
 * - pearl: High-yield Clinical Pearl citing international literature (WHO, CDC, FDA, USP)
 */

const QUESTION_BANK = {
  1: {
    prize: "Rp 100,000",
    safe: false,
    questions: [
      {
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
      {
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
      },
      {
        category: "Clinical Thermoregulation",
        question: "What is considered the normal human core body temperature range in a healthy adult under thermoneutral resting conditions?",
        options: [
          "32.0°C - 34.0°C",
          "36.5°C - 37.5°C",
          "38.5°C - 40.0°C",
          "41.0°C - 43.0°C"
        ],
        answer: 1,
        explanation: "Normal adult human body temperature fluctuates between 36.5°C and 37.5°C (97.7°F - 99.5°F), tightly regulated by the anterior hypothalamus.",
        pearl: "Core temperature exhibits circadian rhythmicity, being lowest at approximately 4:00 AM and peaking in late afternoon around 6:00 PM."
      },
      {
        category: "Infection Control & Hygiene",
        question: "According to the World Health Organization (WHO) hand hygiene protocol, what is the recommended minimum duration for washing hands thoroughly with soap and water?",
        options: [
          "3 - 5 seconds",
          "40 - 60 seconds",
          "Over 15 minutes",
          "Exactly 1 hour"
        ],
        answer: 1,
        explanation: "The WHO 6-step handwashing technique with soap and water requires 40 to 60 seconds to ensure effective mechanical emulsion, lipid membrane disruption of pathogens, and complete microbial rinsing.",
        pearl: "Alcohol-based hand rubs (ABHR) require 20–30 seconds of rubbing until completely dry, but soap and water are mandatory when hands are visibly soiled or after caring for patients with Clostridioides difficile."
      },
      {
        category: "Sleep Medicine & Neurobiology",
        question: "What is the recommended nightly sleep duration for healthy adults according to the National Sleep Foundation and American Academy of Sleep Medicine?",
        options: [
          "1 - 3 hours per night",
          "7 - 9 hours per night",
          "14 - 16 hours per night",
          "Sleep is medically non-essential"
        ],
        answer: 1,
        explanation: "Adults require 7 to 9 hours of quality sleep per night for optimal metabolic regulation, cellular repair, immunological surveillance, and memory consolidation.",
        pearl: "During slow-wave non-REM sleep, the brain's glymphatic system expands by 60%, drastically clearing neurotoxic metabolic waste including beta-amyloid proteins."
      },
      {
        category: "Vital Signs & Respiratory Physiology",
        question: "What is the normal resting respiratory rate range for a healthy adult breathing room air at rest?",
        options: [
          "2 - 6 breaths per minute",
          "12 - 20 breaths per minute",
          "35 - 50 breaths per minute",
          "60 - 80 breaths per minute"
        ],
        answer: 1,
        explanation: "A normal resting respiratory rate (eupnea) in a healthy adult is 12 to 20 breaths per minute. A rate below 12 is termed bradypnea, whereas above 20 is tachypnea.",
        pearl: "Tachypnea is frequently the earliest and most sensitive clinical vital sign indicator of impending physiological deterioration or metabolic acidosis."
      }
    ]
  },
  2: {
    prize: "Rp 200,000",
    safe: false,
    questions: [
      {
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
      {
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
      },
      {
        category: "Nutritional Physiology & Gastroenterology",
        question: "What primary health benefit is provided by adequate dietary soluble fiber intake (e.g., from oats, psyllium, and legumes)?",
        options: [
          "Immediate elevation of blood triglycerides",
          "Blunting post-prandial glycemic spikes and reducing LDL cholesterol",
          "Total cessation of stomach acid secretion",
          "Destruction of beneficial intestinal microbiome"
        ],
        answer: 1,
        explanation: "Soluble dietary fiber forms a viscous gel in the intestinal lumen that slows carbohydrate absorption—blunting post-prandial glycemic excursions—and traps bile acids, forcing the liver to convert serum LDL cholesterol into new bile salts.",
        pearl: "Colonic fermentation of soluble prebiotic fiber produces Short-Chain Fatty Acids (SCFAs, especially butyrate), which nurture colonocytes and down-regulate systemic inflammation."
      },
      {
        category: "Hematology & Trace Elements",
        question: "Deficiency of which essential trace mineral is the most common worldwide cause of microcytic hypochromic anemia?",
        options: [
          "Sodium",
          "Iron (Fe)",
          "Potassium",
          "Iodine"
        ],
        answer: 1,
        explanation: "Iron is a critical structural component of the heme moiety in hemoglobin. Iron deficiency inhibits heme synthesis, yielding small (microcytic) and pale (hypochromic) red blood cells.",
        pearl: "Serum Ferritin is the most specific initial laboratory biomarker for assessing total body iron storage reserves."
      },
      {
        category: "Biochemistry & Classical Deficiencies",
        question: "Prolonged dietary deficiency of Vitamin C (Ascorbic Acid) leads to Scurvy due to impairment in the synthesis of which essential structural protein?",
        options: [
          "Myosin",
          "Collagen",
          "Keratin",
          "Hemoglobin"
        ],
        answer: 1,
        explanation: "Ascorbic acid serves as an obligatory cofactor for prolyl and lysyl hydroxylase enzymes. Without it, defective triple-helix collagen fibers fail to crosslink, causing capillary fragility, gum bleeding, and impaired wound healing.",
        pearl: "Scurvy is one of the oldest recorded nutritional deficiency disorders, classically cured among 18th-century sailors by citrus fruits on voyages."
      },
      {
        category: "Musculoskeletal & Bone Biology",
        question: "Which duo of micronutrients is essential for maintaining bone mineral density and preventing osteopenia and osteoporosis?",
        options: [
          "Sodium and Chloride",
          "Calcium and Vitamin D3",
          "Iron and Vitamin B1",
          "Copper and Vitamin B6"
        ],
        answer: 1,
        explanation: "Calcium provides the inorganic hydroxyapatite crystal lattice of bone, while active Vitamin D3 (calcitriol) stimulates intestinal calcium and phosphate absorption.",
        pearl: "Without adequate Vitamin D, the body absorbs only 10–15% of dietary calcium, triggering secondary hyperparathyroidism that leaches bone minerals."
      }
    ]
  },
  3: {
    prize: "Rp 300,000",
    safe: false,
    questions: [
      {
        category: "First Aid & Emergency Response",
        question: "What is the primary evidence-based first-aid protocol for managing a minor superficial (first-degree) thermal burn caused by hot liquid?",
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
      {
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
      },
      {
        category: "Airway Emergencies & First Aid",
        question: "What is the recommended emergency life-saving technique to relieve severe foreign body airway obstruction in a conscious adult choking victim?",
        options: [
          "Offering a large glass of water to wash down the object",
          "Subdiaphragmatic abdominal thrusts (The Heimlich Maneuver)",
          "Blind finger sweeps deep into the posterior oropharynx",
          "Placing the victim immediately in a flat supine position"
        ],
        answer: 1,
        explanation: "The Heimlich maneuver utilizes upward subdiaphragmatic thrusts that compress residual intrathoracic pulmonary air volume, creating an artificial cough that expels the obstructing foreign body from the laryngeal aperture.",
        pearl: "Blind finger sweeps are strictly contraindicated in conscious victims because they risk pushing the foreign body deeper into the subglottic trachea."
      },
      {
        category: "Trauma & Otorhinolaryngology",
        question: "What is the correct immediate first-aid posture and intervention for an active anterior epistaxis (nosebleed)?",
        options: [
          "Tilting the head far backward and lying down flat",
          "Leaning slightly forward and pinching the soft nasal cartilages firmly for 10–15 minutes",
          "Vigorously blowing the nose every minute",
          "Drinking cold iced water through a straw"
        ],
        answer: 1,
        explanation: "Tilting the head forward prevents blood from draining posteriorly into the pharynx and stomach (which triggers nausea, vomiting, or airway aspiration), while continuous direct pressure over Kiesselbach's plexus compresses bleeding vessels.",
        pearl: "Over 90% of anterior nosebleeds originate from Kiesselbach's plexus (Little's area) on the anterior nasal septum, easily controlled with direct finger compression."
      },
      {
        category: "Cardiopulmonary Resuscitation (CPR)",
        question: "According to American Heart Association (AHA) and ERC guidelines, what is the recommended chest compression rate during adult Basic Life Support (BLS)?",
        options: [
          "40 - 60 compressions per minute",
          "100 - 120 compressions per minute",
          "180 - 200 compressions per minute",
          "Exactly 300 compressions per minute"
        ],
        answer: 1,
        explanation: "AHA guidelines mandate a chest compression rate of 100 to 120 beats per minute at a depth of 5 to 6 cm (2 to 2.4 inches) to generate adequate coronary and cerebral perfusion pressures.",
        pearl: "Singing or timing chest compressions to the rhythm of the Bee Gees song 'Stayin' Alive' (104 bpm) matches the target CPR rate."
      },
      {
        category: "Endocrine Emergencies & First Aid",
        question: "What is the evidence-based 'Rule of 15' for managing acute mild-to-moderate hypoglycemia in a conscious diabetic patient?",
        options: [
          "Inject 15 units of rapid-acting insulin immediately",
          "Consume 15 grams of fast-acting simple carbohydrates and retest capillary blood glucose after 15 minutes",
          "Drink 15 glasses of whole milk and wait 2 hours",
          "Perform 15 minutes of vigorous calisthenics"
        ],
        answer: 1,
        explanation: "The Rule of 15 instructs consuming 15 grams of fast-acting simple sugar (e.g., 4 ounces of fruit juice, 3-4 glucose tablets, or 1 tablespoon of sugar) and re-evaluating blood glucose in 15 minutes. If glucose remains < 70 mg/dL, repeat the dose.",
        pearl: "Avoid high-fat sweets (like chocolate or pastry) for acute hypoglycemia because dietary fats delay gastric emptying and slow glucose absorption."
      }
    ]
  },
  4: {
    prize: "Rp 500,000",
    safe: false,
    questions: [
      {
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
      {
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
      },
      {
        category: "Cardiovascular Diagnostics",
        question: "Under American College of Cardiology / AHA clinical practice guidelines, what blood pressure threshold defines 'Normal Blood Pressure' in an adult?",
        options: [
          "Systolic < 120 mmHg AND Diastolic < 80 mmHg",
          "Systolic 140 - 159 mmHg AND Diastolic 90 - 99 mmHg",
          "Systolic 160 - 180 mmHg AND Diastolic > 100 mmHg",
          "Diastolic must always exceed systolic"
        ],
        answer: 0,
        explanation: "Normal blood pressure is defined as Systolic < 120 mmHg AND Diastolic < 80 mmHg. Elevated BP is Systolic 120–129 mmHg with Diastolic < 80 mmHg. Stage 1 Hypertension begins at 130/80 mmHg.",
        pearl: "Proper BP measurement requires the patient to sit quietly with back supported for 5 minutes, arm at heart level, and bladder emptied prior to cuff inflation."
      },
      {
        category: "Renal Physiology",
        question: "What is the fundamental microscopic functional and structural filtering unit of the human kidney?",
        options: [
          "Neuron",
          "Nephron",
          "Hepatocyte",
          "Alveolus"
        ],
        answer: 1,
        explanation: "Each human kidney contains approximately 1 to 1.2 million nephrons, each consisting of a glomerulus (filtering capillary tuft) and a specialized tubular system that reabsorbs water and solutes while excreting metabolic wastes.",
        pearl: "The kidneys filter approximately 180 liters of blood plasma daily, but tubular reabsorption reclaims over 99% of that filtrate, producing only 1 to 2 liters of urine."
      },
      {
        category: "Transfusion Medicine & Immunohematology",
        question: "Which red blood cell ABO/Rh blood group is designated as the 'Universal Red Blood Cell Donor' for emergency uncrossed transfusions?",
        options: [
          "AB-positive",
          "O-negative",
          "A-positive",
          "B-negative"
        ],
        answer: 1,
        explanation: "O-negative erythrocytes lack A, B, and Rh(D) surface antigens. Consequently, they can be transfused in acute trauma emergencies into recipients of any blood group without triggering acute hemolytic transfusion reactions.",
        pearl: "Conversely, AB-positive individuals are universal RBC recipients, while AB plasma is the universal donor for fresh frozen plasma."
      },
      {
        category: "Hepatology & Clinical Biochemistry",
        question: "Accumulation of which endogenous pigment derived from the breakdown of red blood cell heme leads to clinical jaundice (icterus) when liver conjugation or biliary drainage fails?",
        options: [
          "Melanin",
          "Bilirubin",
          "Creatinine",
          "Myoglobin"
        ],
        answer: 1,
        explanation: "Unconjugated bilirubin is generated from erythrocyte hemoglobin catabolism, transported to the liver bound to albumin, conjugated with glucuronic acid, and excreted into bile. Elevated serum levels (> 2.5–3.0 mg/dL) cause yellow scleral and cutaneous icterus.",
        pearl: "Scleral icterus is typically detectable earlier than skin jaundice because scleral tissue is rich in elastin, which has a very high affinity for bilirubin."
      }
    ]
  },
  5: {
    prize: "Rp 1,000,000",
    safe: true,
    questions: [
      {
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
      {
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
      },
      {
        category: "Immunology & Public Health",
        question: "What epidemiological phenomenon occurs when a high percentage of a population becomes immune to an infectious disease through vaccination, thereby conferring indirect protection to vulnerable, unvaccinated individuals?",
        options: [
          "Natural Selection",
          "Herd Immunity (Community Immunity)",
          "Genetic Drift",
          "Horizontal Gene Transfer"
        ],
        answer: 1,
        explanation: "Herd immunity occurs when a sufficient proportion of a community is immunized against a pathogen, breaking the chain of transmission and shielding non-immunized individuals (such as newborns or immunosuppressed cancer patients).",
        pearl: "For highly transmissible diseases like Measles (R0 = 12–18), the herd immunity threshold requires maintaining at least 95% community vaccine coverage."
      },
      {
        category: "Pediatric Gastroenterology & WHO Protocols",
        question: "In the management of acute pediatric diarrheal dehydration, why is low-osmolarity Oral Rehydration Salts (ORS) solution vastly superior to plain water or carbonated soft drinks?",
        options: [
          "Because soft drinks contain toxic chemical dyes",
          "It exploits sodium-glucose intestinal cotransporters (SGLT1) to drive passive reabsorption of water and electrolytes",
          "It instantly paralyzes hyperactive gastrointestinal peristalsis",
          "It contains broad-spectrum bactericidal chemical antibiotics"
        ],
        answer: 1,
        explanation: "The intestinal SGLT1 cotransporter remains intact during secretory diarrhea (such as Cholera or Rotavirus). Equimolar sodium and glucose in WHO low-osmolarity ORS drives active enterocyte uptake, pulling water along an osmotic gradient into the bloodstream.",
        pearl: "WHO reduced-osmolarity ORS (245 mOsm/L) reduces stool output by 20% and vomiting by 30% compared to older standard formulation ORS."
      },
      {
        category: "Pharmacy Practice & Drug Stability",
        question: "What is the fundamental distinction between a pharmaceutical manufacturer's Expiration Date (Exp) and a pharmacy-assigned Beyond-Use Date (BUD)?",
        options: [
          "There is no difference; both terms are legally identical",
          "Expiration date applies to intact commercial packaging, while BUD reflects stability after opening, compounding, or reconstituting",
          "BUD is determined only by the retail cashier",
          "Expiration date is valid only in European countries"
        ],
        answer: 1,
        explanation: "The manufacturer's Expiration Date applies to unopened containers stored in validated conditions. The Beyond-Use Date (BUD) is calculated by the pharmacist based on USP <795>/<797> guidelines after reconstitution, dilution, or multiple-dose vial puncture.",
        pearl: "Reconstituted oral antibiotic suspensions (e.g., Amoxicillin-Clavulanate) typically have an Expiration Date of 2–3 years intact, but a refrigerated BUD of only 7–14 days once mixed with water."
      },
      {
        category: "Emergency Pharmacology",
        question: "Why is sublingual nitroglycerin (tablets or spray) administered under the tongue rather than swallowed orally during acute anginal chest pain episodes?",
        options: [
          "Because gastric acid instantly transforms nitroglycerin into explosive gases",
          "It allows rapid transmucosal venous absorption directly into the systemic circulation, bypassing hepatic first-pass metabolism",
          "It acts purely as a local analgesic on lingual nerve endings",
          "Swallowed nitroglycerin is permanently blocked by tooth enamel"
        ],
        answer: 1,
        explanation: "Nitroglycerin undergoes extensive hepatic first-pass metabolism (>90% clearance if swallowed). Sublingual administration allows rapid absorption via extensive sublingual venous plexuses directly into the superior vena cava, providing venodilation within 1–3 minutes.",
        pearl: "Patients should sit down before taking sublingual nitroglycerin to prevent orthostatic syncope secondary to sudden systemic venous pooling."
      }
    ]
  },
  6: {
    prize: "Rp 2,000,000",
    safe: false,
    questions: [
      {
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
      {
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
      },
      {
        category: "Clinical Toxicology & Analgesic Safety",
        question: "What is the widely recognized maximum safe total daily dosage of Paracetamol (Acetaminophen) for an otherwise healthy adult to avoid acute hepatotoxicity?",
        options: [
          "500 mg per 24 hours",
          "4,000 mg (4 grams) per 24 hours",
          "15,000 mg per 24 hours",
          "No upper safety limit exists"
        ],
        answer: 1,
        explanation: "The standard maximum recommended daily limit for paracetamol in healthy adults is 4,000 mg (4 grams) per 24 hours. For patients with chronic liver disease, alcoholism, or malnutrition, guidelines lower this ceiling to 2,000–3,000 mg/day.",
        pearl: "Inadvertent overdose commonly occurs when patients consume multiple OTC multi-symptom cold, flu, and cough syrups concurrently with paracetamol tablets."
      },
      {
        category: "Gastroenterology & Drug Safety",
        question: "What is the primary pharmacological mechanism by which non-selective Non-Steroidal Anti-Inflammatory Drugs (NSAIDs, such as Ibuprofen, Ketorolac, and Piroxicam) induce gastric and duodenal ulcers?",
        options: [
          "Direct lysis of gastric parietal cells by basic chemical pH",
          "Inhibition of Cyclooxygenase-1 (COX-1), blocking synthesis of cytoprotective gastric mucosal prostaglandins (PGE2/PGI2)",
          "Excessive stimulation of pepsinogen production in the esophagus",
          "Induction of persistent bacterial Helicobacter pylori colonization"
        ],
        answer: 1,
        explanation: "COX-1 constitutively synthesizes prostaglandins (PGE2 and PGI2) in gastric mucosa, stimulating bicarbonate and mucus production while maintaining microvascular perfusion. Non-selective NSAIDs inhibit COX-1, leaving gastric mucosa vulnerable to acid-peptic erosion.",
        pearl: "Co-prescribing a Proton Pump Inhibitor (PPI) or Misoprostol is guideline-recommended for patients with high gastrointestinal risk factors requiring NSAID therapy."
      },
      {
        category: "Dermatological Pharmacology",
        question: "Prolonged, uncontrolled application of high-potency topical corticosteroids (such as Clobetasol or Betamethasone) to facial or thin skin areas risks which irreversible cutaneous adverse effect?",
        options: [
          "Epidermal hyperkeratotic thickening",
          "Cutaneous atrophy, telangiectasia, and striae",
          "Permanent generalized melanocyte destruction",
          "Instantaneous basal cell transformation"
        ],
        answer: 1,
        explanation: "Topical corticosteroids inhibit dermal fibroblast proliferation and collagen synthesis. Long-term misuse causes dermal thinning (atrophy), visible dilated capillary loops (telangiectasia), irreversible striae, and steroid-induced rosacea.",
        pearl: "Low-potency corticosteroids (e.g., Hydrocortisone 1%) should be prioritized for thin, sensitive skin surfaces such as the face, eyelids, and intertriginous flexures."
      },
      {
        category: "Otorhinolaryngology & Pharmacology",
        question: "Rebound nasal congestion (Rhinitis Medicamentosa) occurs when topical alpha-adrenergic nasal decongestant sprays (such as Oxymetazoline or Xylometazoline) are used continuously for more than:",
        options: [
          "6 to 12 months",
          "3 to 5 consecutive days",
          "48 continuous weeks",
          "3 hours total"
        ],
        answer: 1,
        explanation: "Topical alpha-agonists cause intense vasoconstriction. Continuous use exceeding 3 to 5 days down-regulates nasal alpha-adrenoceptors, causing tachyphylaxis, severe rebound interstitial edema, and refractory nasal airway obstruction.",
        pearl: "Treatment of Rhinitis Medicamentosa involves immediate cessation of the topical decongestant, supported by short-term intranasal corticosteroid sprays and oral saline irrigations."
      }
    ]
  },
  7: {
    prize: "Rp 4,000,000",
    safe: false,
    questions: [
      {
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
      {
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
      },
      {
        category: "Prescription Sig Codes & Latin Frequency",
        question: "On a formal prescription order, what administration frequency is represented by the Latin abbreviation 't.i.d.' (ter in die)?",
        options: [
          "Once every two days",
          "Three times a day (approximately every 8 hours)",
          "Once daily before bed",
          "Ten times daily"
        ],
        answer: 1,
        explanation: "'t.i.d.' stands for 'ter in die', instructing administration 3 times daily. 'b.i.d.' (bis in die) represents twice daily, and 'q.i.d.' (quater in die) represents four times daily.",
        pearl: "In hospital inpatient electronic health records, ISMP recommends writing out 'three times daily' rather than Latin sig codes to prevent transcription errors."
      },
      {
        category: "Prescription Latin Terminology",
        question: "In pharmaceutical dosage forms, what specific unit of measurement or administration is denoted by the Latin abbreviation 'gtt.' (guttae)?",
        options: [
          "Grams",
          "Drops",
          "Gallons",
          "Ounces"
        ],
        answer: 1,
        explanation: "'gtt.' derives from the Latin 'guttae', meaning 'drops'. It is standard in ophthalmic, otic, and pediatric oral drop prescriptions (e.g., 'gtt. II aur. d.' = 2 drops in the right ear).",
        pearl: "Standard international pharmacopeial droppers define 20 drops of pure distilled water at 20°C as equivalent to 1 milliliter (1 mL)."
      },
      {
        category: "Emergency Prescription Terminology",
        question: "What urgency of administration is commanded when a physician annotates a medication order with the Latin direction 'stat.' (statim)?",
        options: [
          "Administer at next morning round",
          "Immediately / at once",
          "Administer only if patient consents tomorrow",
          "Slowly infuse over 72 hours"
        ],
        answer: 1,
        explanation: "'stat.' is derived from 'statim', signifying 'immediately' or 'without delay'. In critical care, 'stat' orders take precedence over all routine pharmacy orders.",
        pearl: "Joint Commission and hospital accreditation standards require stat medication orders to be reviewed, verified, and administered within 15–30 minutes of entry."
      },
      {
        category: "Ophthalmic Pharmacy Practice",
        question: "What is the standard regulatory Beyond-Use Date (BUD) for multiple-dose preserved ophthalmic eye drop bottles once the sterile tamper seal is broken and opened?",
        options: [
          "10 years after opening",
          "Typically 28 days (4 weeks) after opening",
          "Exactly 24 hours only",
          "Indefinitely until the liquid evaporates"
        ],
        answer: 1,
        explanation: "Once an ophthalmic multi-dose bottle is unsealed, exposure to air and potential tip contact risks microbial contamination. Even with antimicrobial preservatives (e.g., Benzalkonium chloride), guidelines mandate disposal 28 days after first opening.",
        pearl: "Preservative-free single-dose eye drop vials (minims) must be used immediately and discarded within 24 hours of opening."
      }
    ]
  },
  8: {
    prize: "Rp 8,000,000",
    safe: false,
    questions: [
      {
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
      {
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
      },
      {
        category: "Antimicrobial Pharmacology",
        question: "What is the primary role of Clavulanic Acid when co-formulated with the beta-lactam antibiotic Amoxicillin (Augmentin)?",
        options: [
          "Directly penetrates the bacterial nucleoid to halt replication",
          "Irreversibly inhibits bacterial beta-lactamase enzymes, protecting amoxicillin from enzymatic degradation",
          "Acts as a gastric antacid to improve absorption",
          "Suppresses human renal excretion of amoxicillin"
        ],
        answer: 1,
        explanation: "Clavulanic acid is a suicide beta-lactamase inhibitor with negligible intrinsic antibacterial activity. It irreversibly binds and inactivates beta-lactamase enzymes produced by resistant bacteria, restoring amoxicillin's bactericidal efficacy.",
        pearl: "Other beta-lactamase inhibitor combinations include Piperacillin-Tazobactam and Ampicillin-Sulbactam."
      },
      {
        category: "Adverse Drug Reactions & Interactions",
        question: "Why must patients undergoing oral Metronidazole therapy strictly abstain from consuming alcohol during treatment and for at least 48 hours afterward?",
        options: [
          "Alcohol induces instantaneous renal precipitation of crystal stones",
          "Metronidazole inhibits aldehyde dehydrogenase, precipitating a severe disulfiram-like acetaldehyde toxicity reaction",
          "Alcohol completely neutralizes metronidazole's antiprotozoal activity",
          "The combination permanently stains tooth enamel black"
        ],
        answer: 1,
        explanation: "Metronidazole inhibits the hepatic enzyme aldehyde dehydrogenase. Ingesting alcohol leads to toxic accumulation of acetaldehyde, triggering severe flushing, throbbing headache, diaphoresis, palpitations, nausea, and vomiting.",
        pearl: "Patients should also be cautioned against alcohol-containing mouthwashes and liquid cough syrups while on metronidazole therapy."
      },
      {
        category: "Infectious Diseases & Antibiotic Complications",
        question: "Extensive exposure to broad-spectrum systemic antibiotics (such as Clindamycin or Fluoroquinolones) eradicates protective intestinal microflora, permitting overgrowth of which toxin-producing organism?",
        options: [
          "Lactobacillus acidophilus",
          "Clostridioides difficile (C. diff)",
          "Bifidobacterium bifidum",
          "Saccharomyces boulardii"
        ],
        answer: 1,
        explanation: "Broad-spectrum antibiotics eliminate commensal gut anaerobic bacteria that maintain colonization resistance, allowing spore-forming Clostridioides difficile to proliferate and release enterotoxin A and cytotoxin B, resulting in pseudomembranous colitis.",
        pearl: "Oral Vancomycin or oral Fidaxomicin represent standard first-line therapies for C. difficile colitis; intravenous vancomycin is ineffective because it is not excreted into the intestinal lumen."
      },
      {
        category: "Antifungal Pharmacology & Cardiology",
        question: "Systemic triazole antifungal agents (such as Ketoconazole, Itraconazole, and Voriconazole) carry a serious cardiac safety warning regarding which electrocardiographic abnormality?",
        options: [
          "Extreme shortening of the PR interval",
          "QTc interval prolongation and risk of Torsades de Pointes ventricular arrhythmia",
          "Acute complete atrioventricular dissociation",
          "Sudden localized bundle branch block"
        ],
        answer: 1,
        explanation: "Azole antifungals block cardiac hERG potassium channels (IKr), delaying ventricular repolarization and prolonging the QTc interval, which substantially increases the risk of malignant polymorphic ventricular tachycardia (Torsades de Pointes).",
        pearl: "The QTc-prolonging effect is compounded because azoles also potently inhibit CYP3A4, raising serum levels of other co-administered QTc-prolonging drugs (e.g., Terfenadine, Cisapride, Erythromycin)."
      }
    ]
  },
  9: {
    prize: "Rp 16,000,000",
    safe: false,
    questions: [
      {
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
      {
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
      },
      {
        category: "Clinical Microbiology & Diagnostics",
        question: "Which classical histological and microbiological staining procedure is specifically utilized to detect Mycobacterium tuberculosis due to the high mycolic acid content of its cell wall?",
        options: [
          "Standard Gram Stain",
          "Ziehl-Neelsen Acid-Fast Stain",
          "India Ink Negative Stain",
          "Giemsa Blood Stain"
        ],
        answer: 1,
        explanation: "Mycobacteria possess thick waxy cell walls rich in mycolic acids (up to 60% of cell wall weight), rendering them impermeable to Gram staining. The Ziehl-Neelsen acid-fast technique uses carbolfuchsin and heat; once stained, they resist decolorization by acid-alcohol.",
        pearl: "Automated molecular tests such as GeneXpert MTB/RIF detect Mycobacterium tuberculosis DNA and rifampicin resistance mutations simultaneously within 2 hours."
      },
      {
        category: "Infectious Diseases & Serology",
        question: "Which serological diagnostic assay detects circulating IgM antibodies directed specifically against the O9 LPS antigen of Salmonella enterica serovar Typhi in suspected enteric (Typhoid) fever?",
        options: [
          "Tubex-TF Test",
          "VDRL Syphilis Screen",
          "Mantoux Tuberculin Skin Test",
          "Western Blot"
        ],
        answer: 0,
        explanation: "The Tubex-TF test is an inhibition magnetic separation assay detecting IgM antibodies specific to the O9 lipopolysaccharide antigen of Salmonella Typhi, offering superior sensitivity and specificity compared to traditional Widal agglutination tests.",
        pearl: "Blood cultures represent the gold diagnostic standard for Typhoid fever during the first week of illness; stool and urine cultures become positive in the second and third weeks."
      },
      {
        category: "Diagnostic Virology & Hepatology",
        question: "The serological presence of which specific surface antigen in a patient's serum serves as the hallmark clinical diagnostic indicator of active acute or chronic Hepatitis B viral infection?",
        options: [
          "Anti-HBs",
          "HBsAg (Hepatitis B Surface Antigen)",
          "Anti-HAV IgM",
          "Anti-HCV IgG"
        ],
        answer: 1,
        explanation: "HBsAg (Hepatitis B surface antigen) appears in serum before biochemical evidence of liver disease and symptom onset. Persistence of HBsAg for greater than 6 months defines chronic Hepatitis B infection.",
        pearl: "Presence of isolated anti-HBs (antibodies to HBsAg) without core antibodies (anti-HBc) indicates successful immunity acquired through vaccination."
      },
      {
        category: "Parasitology & Tropical Medicine",
        question: "In the microscopic laboratory diagnosis of Malaria, what is the distinct purpose of preparing a THICK blood smear compared to a THIN blood smear?",
        options: [
          "Thick smear is solely used to count total red blood cells",
          "Thick smear concentrates parasites for high-sensitivity detection; thin smear preserves erythrocyte morphology for species identification",
          "Thick smear determines arterial oxygen content",
          "Thin smear is discarded after 5 minutes"
        ],
        answer: 1,
        explanation: "The thick smear dehemoglobinizes red blood cells, concentrating parasites 20–40 times more than a thin smear, which maximizes sensitivity for detecting low parasitemia. The methanol-fixed thin smear preserves infected erythrocyte morphology for differentiating Plasmodium species.",
        pearl: "Plasmodium falciparum typically presents on thin smear with delicate ring forms, multiple rings per RBC, and pathognomonic crescent-shaped (banana-shaped) gametocytes."
      }
    ]
  },
  10: {
    prize: "Rp 32,000,000",
    safe: true,
    questions: [
      {
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
      {
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
      },
      {
        category: "Cardiovascular & Respiratory Pharmacology",
        question: "Why are non-selective beta-blockers (such as Propranolol or Nadolol) strictly contraindicated in patients with bronchial asthma or severe chronic obstructive pulmonary disease (COPD)?",
        options: [
          "They cause severe renal vasodilation",
          "Antagonism of bronchial beta-2 adrenergic receptors induces life-threatening bronchoconstriction and bronchospasm",
          "They trigger immediate pulmonary alveolar calcification",
          "They destroy pulmonary surfactant"
        ],
        answer: 1,
        explanation: "Non-selective beta-blockers competitively block both cardiac beta-1 and bronchial smooth muscle beta-2 receptors. Blocking beta-2 receptors unopposes cholinergic bronchoconstriction, precipitating acute bronchospasm and refractory asthma exacerbations.",
        pearl: "When beta-blockade is clinically essential in patients with mild reactive airway disease, cardioselective beta-1 blockers (e.g., Bisoprolol, Metoprolol, Nebivolol) are chosen with cautious monitoring."
      },
      {
        category: "Lipidology & Skeletal Muscle Toxicology",
        question: "Patients receiving HMG-CoA reductase inhibitors (Statins, e.g., Atorvastatin, Rosuvastatin) who present with unexplained muscle pain, dark brown urine, and marked serum Creatine Kinase (CK) elevation should be evaluated for:",
        options: [
          "Acute Gouty Arthritis",
          "Statin-Induced Rhabdomyolysis",
          "Biliary Colic",
          "Osteogenesis Imperfecta"
        ],
        answer: 1,
        explanation: "Statin-induced myotoxicity ranges from mild myalgia to fulminant rhabdomyolysis. Massive skeletal muscle necrosis releases myoglobin into circulation, leading to myoglobinuria (tea-colored urine) and acute tubular necrosis renal failure.",
        pearl: "Co-administering statins with strong CYP3A4 inhibitors (e.g., Clarithromycin, Itraconazole) or Fibrates (especially Gemfibrozil) dramatically increases rhabdomyolysis risk by impeding statin clearance."
      },
      {
        category: "Endocrine Pharmacology & Nephrology",
        question: "Why must the first-line oral antidiabetic biguanide Metformin be temporarily withheld or dose-adjusted in patients with advanced chronic kidney disease (eGFR < 30 mL/min)?",
        options: [
          "It triggers severe hyperthyroidism",
          "Decreased renal clearance can cause toxic drug accumulation leading to fatal Lactic Acidosis",
          "It permanently blocks insulin secretion in the pancreas",
          "It precipitates massive gallstone formation"
        ],
        answer: 1,
        explanation: "Metformin is eliminated unchanged by renal glomerular filtration and tubular secretion. In renal impairment, accumulation of metformin inhibits mitochondrial respiratory chain complex I, shifting metabolism to anaerobic glycolysis and precipitating Metformin-Associated Lactic Acidosis (MALA).",
        pearl: "Metformin must also be withheld prior to iodinated radiocontrast procedures and for 48 hours post-procedure until stable renal function is confirmed."
      },
      {
        category: "Hematology & Anticoagulation",
        question: "What standardized laboratory coagulation parameter is monitored to adjust therapeutic dosing of the oral Vitamin K antagonist Warfarin?",
        options: [
          "Serum Ferritin",
          "International Normalized Ratio (INR)",
          "Absolute Neutrophil Count (ANC)",
          "Erythrocyte Sedimentation Rate (ESR)"
        ],
        answer: 1,
        explanation: "Warfarin inhibits Vitamin K epoxide reductase (VKORC1), blocking gamma-carboxylation of clotting factors II, VII, IX, and X. Its anticoagulant intensity is monitored using the International Normalized Ratio (INR), with a standard therapeutic target of 2.0 to 3.0.",
        pearl: "An INR > 4.5 markedly increases major bleeding risks, managed by withholding warfarin doses, administering oral/IV Vitamin K1 (Phytomenadione), or infusing Prothrombin Complex Concentrate (PCC)."
      }
    ]
  },
  11: {
    prize: "Rp 64,000,000",
    safe: false,
    questions: [
      {
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
      {
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
      },
      {
        category: "Vaccine Quality Control & GDP",
        question: "What is the standardized validated clinical procedure used to determine whether an aluminum-adsorbed vaccine (e.g., DTP, HepB, TT) has suffered irreversible structural freeze-damage?",
        options: [
          "The Paper Chromatography Test",
          "The Shake Test (comparing sedimentation rate against a deliberately frozen and thawed vial)",
          "Flame Photometry",
          "Mass Spectrometry"
        ],
        answer: 1,
        explanation: "Freezing detaches the antigen from the aluminum adjuvant, forming coarse, dense agglomerates. In the Shake Test, a suspected vial and a control frozen vial are shaken; freeze-damaged vials exhibit rapid sedimentation and clear supernatant within 15–30 minutes, whereas intact vaccines remain homogeneously cloudy.",
        pearl: "Freeze damage destroys the immunogenicity of aluminum-adsorbed vaccines and significantly increases localized injection-site sterile abscess rates."
      },
      {
        category: "Pharmaceutical Compounding & Stability",
        question: "Once an insulin vial or pen cartridge has been punctured and brought into clinical use, what is its validated stability lifespan when kept at controlled room temperature (< 30°C)?",
        options: [
          "5 years",
          "28 to 30 days",
          "Exactly 2 hours",
          "Indefinitely until frozen"
        ],
        answer: 1,
        explanation: "Unopened insulin must be stored refrigerated (+2°C to +8°C) until its expiration date. Once in use, vials and pens can remain at controlled room temperature (< 30°C) for 28 to 30 days; injecting room-temperature insulin also reduces injection-site stinging.",
        pearl: "Insulin must never be exposed to direct sunlight or temperatures exceeding 30°C, which triggers rapid irreversible monomer aggregation and fibril formation."
      },
      {
        category: "Biotechnology & Protein Formulation",
        question: "Why must lyophilized (freeze-dried) therapeutic proteins and monoclonal antibodies be reconstituted by gently swirling down the container wall rather than shaking vigorously?",
        options: [
          "Vigorous shaking creates foam that denatures tertiary protein structures at the air-liquid interface",
          "Shaking transforms the vial into a toxic explosive mixture",
          "Shaking makes the liquid change into an unsterile solid rock",
          "Proteins are immune to physical forces"
        ],
        answer: 0,
        explanation: "Vigorous agitation induces high shear stress and air cavitation bubbles. Therapeutic protein molecules unfold and denature at the air-water interface, resulting in irreversible aggregation, loss of biological potency, and enhanced immunogenicity.",
        pearl: "Protein aggregates in parenteral formulations can trigger anti-drug antibodies (ADAs), causing severe hypersensitivity or neutralizing therapeutic efficacy."
      },
      {
        category: "Sterile Pharmaceutical Manufacturing (GMP)",
        question: "Under WHO and PIC/S GMP guidelines for sterile parenteral drug manufacturing, what airborne particulate cleanliness classification is required for the critical Grade A zone during aseptic filling?",
        options: [
          "ISO Class 8 (at rest)",
          "ISO Class 5 (Grade A laminar airflow workstation)",
          "ISO Class 14 (open air)",
          "Cleanliness is not monitored in sterile filling"
        ],
        answer: 1,
        explanation: "The Grade A critical zone (under unidirectional laminar airflow velocity 0.36 - 0.54 m/s) corresponds to ISO Class 5 (max 3,520 particles of ≥ 0.5 µm per cubic meter at rest and in operation) to guarantee absolute sterility during aseptic fill-and-finish.",
        pearl: "Environmental microbial monitoring in Grade A zones mandates active air sampling, settle plates, and operator glove-print contact plates with target counts of < 1 CFU."
      }
    ]
  },
  12: {
    prize: "Rp 125,000,000",
    safe: false,
    questions: [
      {
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
      {
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
      },
      {
        category: "Clinical Toxicology & Antidotes",
        question: "In acute organophosphate pesticide poisoning, what is the specific mechanistic role of Pralidoxime (2-PAM) administered alongside Atropine?",
        options: [
          "Directly blocks muscarinic acetylcholine receptors",
          "Reactivates phosphorylated acetylcholinesterase enzymes before irreversible chemical 'aging' occurs",
          "Induces massive gastric emesis",
          "Blocks sodium-potassium ATPase pumps"
        ],
        answer: 1,
        explanation: "Organophosphates phosphorylate the active serine site of acetylcholinesterase. Pralidoxime (an oxime nucleophile) cleaves the phosphate bond, reactivating acetylcholinesterase at nicotinic neuromuscular junctions before 'aging' (dealkylation) makes inhibition permanent.",
        pearl: "While atropine controls life-threatening muscarinic symptoms (bronchorrhea, bronchospasm, bradycardia), it does not reverse nicotinic muscle paralysis—which requires 2-PAM."
      },
      {
        category: "Emergency Medicine & Toxicology",
        question: "Which specific competitive benzodiazepine receptor antagonist is indicated to reverse profound sedation or paradoxical reactions from Benzodiazepines (such as Midazolam or Diazepam)?",
        options: [
          "Flumazenil",
          "Naloxone",
          "Protamine Sulfate",
          "Methylene Blue"
        ],
        answer: 0,
        explanation: "Flumazenil is an imidazobenzodiazepine derivative that competitively antagonizes the benzodiazepine recognition site on the GABA-A receptor complex, reversing CNS depression within 1–2 minutes.",
        pearl: "Flumazenil must be used with extreme caution in chronic benzodiazepine users or co-ingestions of pro-convulsant drugs (like TCAs) due to the risk of triggering refractory withdrawal seizures."
      },
      {
        category: "Critical Care Cardiology & Toxicology",
        question: "What specific therapy is indicated for life-threatening cardiac glycoside toxicity presenting with intractable ventricular arrhythmias and severe hyperkalemia from Digoxin overdose?",
        options: [
          "Digoxin-specific antibody fragments (DigiFab / Digibind)",
          "High-dose Oral Potassium Chloride",
          "Calcium Gluconate IV rapid bolus",
          "Intravenous Epinephrine"
        ],
        answer: 0,
        explanation: "Digoxin immune Fab (DigiFab) consists of ovine antigen-binding fragments that bind free digoxin in extracellular fluid with affinity greater than cardiac Na+/K+-ATPase pumps, forming an inactive complex cleared in urine.",
        pearl: "Administering IV calcium salts during severe acute digoxin toxicity is traditionally avoided due to historical concerns of 'stone heart' hypercalcemic contracture."
      },
      {
        category: "Cardiovascular Toxicology",
        question: "In massive beta-blocker overdose refractory to IV fluids and atropine, which parenteral agent acts by stimulating myocardial adenylate cyclase via a non-adrenergic pathway to restore inotropy and heart rate?",
        options: [
          "Intravenous Glucagon",
          "Insulin alone without dextrose",
          "Sodium Polystyrene Sulfonate",
          "Oral Activated Charcoal"
        ],
        answer: 0,
        explanation: "Glucagon activates myocardial G-protein coupled receptors that bypass blocked beta-adrenergic receptors, directly stimulating adenylate cyclase to elevate intracellular cyclic AMP (cAMP), augmenting cardiac chronotropy and inotropy.",
        pearl: "High-Dose Insulin Euglycemia Therapy (HIET) is another cornerstone in severe beta-blocker and calcium channel blocker overdoses, switching myocardial metabolism from fatty acids to carbohydrates."
      }
    ]
  },
  13: {
    prize: "Rp 250,000,000",
    safe: false,
    questions: [
      {
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
      {
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
      },
      {
        category: "Clinical Pharmacokinetics & Dosing",
        question: "Which pharmacokinetic parameter relates the total amount of drug present in the body to the measured drug concentration in blood plasma, used clinically to calculate a Loading Dose?",
        options: [
          "Elimination Rate Constant (Kel)",
          "Apparent Volume of Distribution (Vd)",
          "Area Under the Curve (AUC)",
          "Fraction Excreted Unchanged (fe)"
        ],
        answer: 1,
        explanation: "Apparent Volume of Distribution (Vd = Total Dose / Plasma Concentration) reflects the extent to which a drug distributes into extravascular tissue spaces. Drugs with high lipophilicity (e.g., Digoxin, Amiodarone) have very large Vd values.",
        pearl: "The clinical loading dose formula is: Loading Dose = (Target Plasma Concentration × Vd) / Bioavailability (F)."
      },
      {
        category: "Clinical Pharmacokinetics & Nephrology",
        question: "Which classic clinical formula uses patient age, sex, body weight, and serum creatinine to estimate Creatinine Clearance (CrCl) for renal drug dose adjustments?",
        options: [
          "Cockcroft-Gault Equation",
          "Henderson-Hasselbalch Equation",
          "Michaelis-Menten Equation",
          "Nernst Potential Equation"
        ],
        answer: 0,
        explanation: "The Cockcroft-Gault formula estimates Creatinine Clearance (CrCl = [(140 - age) × weight (kg)] / [72 × Serum Cr (mg/dL)], multiplied by 0.85 for females) and remains the standard metric referenced in FDA package inserts for renal dosage titration.",
        pearl: "For obese patients (BMI ≥ 30 kg/m²), using actual total body weight significantly overestimates CrCl, requiring Adjusted Body Weight (ABW) calculations."
      },
      {
        category: "Therapeutic Drug Monitoring (TDM)",
        question: "What is the defining clinical characteristic of medications that strictly mandate Therapeutic Drug Monitoring (TDM) of serum peak and trough levels in clinical practice?",
        options: [
          "They are extremely inexpensive to manufacture",
          "A Narrow Therapeutic Index (NTI), where small differences in dose or blood concentration lead to therapeutic failure or severe toxicity",
          "They are only prescribed to pediatric patients",
          "They possess 100% renal elimination without any metabolism"
        ],
        answer: 1,
        explanation: "Narrow Therapeutic Index (NTI) drugs (e.g., Vancomycin, Gentamicin, Lithium, Theophylline, Carbamazepine, Digoxin, Phenytoin) have minimal separation between minimum effective concentration (MEC) and minimum toxic concentration (MTC), requiring TDM.",
        pearl: "Trough concentrations are drawn immediately before the next scheduled dose (within 30 minutes) to verify drug clearance and prevent cumulative organ toxicities."
      },
      {
        category: "Pharmacokinetics & Steady State",
        question: "When a drug is administered via continuous IV infusion or regular constant-interval dosing, approximately how many elimination half-lives (t1/2) are required to achieve steady-state plasma concentration (Css)?",
        options: [
          "Less than 1 half-life",
          "Approximately 4 to 5 half-lives",
          "50 to 100 half-lives",
          "Steady state is only achieved after 1 full calendar year"
        ],
        answer: 1,
        explanation: "Pharmacokinetic principle dictates that after 1 t1/2, a drug reaches 50% of steady-state; after 2, 75%; after 3, 87.5%; after 4, 93.75%; and after 5 half-lives, ~97% of steady-state is attained.",
        pearl: "Similarly, when a drug is permanently discontinued, it takes 4 to 5 half-lives for more than 95% of the drug to be eliminated from systemic circulation."
      }
    ]
  },
  14: {
    prize: "Rp 500,000,000",
    safe: false,
    questions: [
      {
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
      {
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
      },
      {
        category: "Hematology & Immunopharmacology",
        question: "What is the immunogenic mechanism responsible for Type II Heparin-Induced Thrombocytopenia (HIT Type II), which paradoxically manifests as catastrophic arterial and venous thrombosis?",
        options: [
          "Direct chemical precipitation of fibrinogen in peripheral capillaries",
          "Formation of IgG autoantibodies against platelet factor 4 (PF4)-heparin complexes, causing massive platelet activation and aggregation",
          "Sudden autoimmune destruction of bone marrow megakaryocytes",
          "Direct lysis of factor VIII by unfractionated heparin molecules"
        ],
        answer: 1,
        explanation: "In HIT Type II, patients develop IgG antibodies targeting multimolecular complexes of Platelet Factor 4 (PF4) and heparin. These immune complexes bind platelet Fc-gamma-RIIa receptors, triggering widespread platelet activation, thrombin generation, and severe paradoxical thrombosis.",
        pearl: "Upon diagnosis of HIT, all heparin sources must be halted immediately and anticoagulation transitioned to non-heparin agents like Argatroban, Bivalirudin, or Fondaparinux."
      },
      {
        category: "Pharmacogenomics & Severe Dermatologic Reactions",
        question: "Testing for which pharmacogenomic human leukocyte antigen (HLA) allele is recommended before initiating the xanthine oxidase inhibitor Allopurinol to prevent life-threatening Stevens-Johnson Syndrome / Toxic Epidermal Necrolysis (SJS/TEN)?",
        options: [
          "HLA-B*58:01",
          "HLA-B*27:05",
          "HLA-DR4",
          "HLA-DQ2"
        ],
        answer: 0,
        explanation: "The HLA-B*58:01 allele is strongly associated with Allopurinol-induced Severe Cutaneous Adverse Reactions (SCAR), including SJS and TEN, particularly in individuals of Han Chinese, Korean, and Southeast Asian ancestry.",
        pearl: "Similarly, screening for HLA-B*15:02 is mandatory before prescribing Carbamazepine in Asian patients to mitigate carbamazepine-induced SJS/TEN risks."
      },
      {
        category: "Clinical Pharmacology & Infusion Reactions",
        question: "What is the underlying pharmacological mechanism of Vancomycin Infusion Reaction (formerly known as 'Red Man Syndrome'), characterized by erythematous flushing of the upper body, neck, and face?",
        options: [
          "Type I IgE-mediated anaphylactic antibody reaction",
          "Rate-dependent, non-immune direct degranulation of mast cells and basophils releasing histamine",
          "Direct cutaneous vasoconstriction caused by vancomycin crystals",
          "Acute hyperthermia from bacterial endotoxin release"
        ],
        answer: 1,
        explanation: "Vancomycin directly triggers mast cell degranulation in a non-IgE, concentration- and rate-dependent manner. Rapid IV infusion causes profound histamine release, leading to intense flushing, pruritus, and hypotension.",
        pearl: "Vancomycin Infusion Reaction is prevented or managed by slowing the infusion rate (infusing at a rate not exceeding 10 mg/min or over a minimum of 60–120 minutes) and pre-medicating with H1/H2 antihistamines."
      },
      {
        category: "Oncology & Cumulative Drug Toxicity",
        question: "Anthracycline antineoplastic chemotherapy agents (such as Doxorubicin / Adriamycin) are associated with a dose-dependent, cumulative lifetime toxicity affecting which organ system?",
        options: [
          "Irreversible sensorineural hearing loss",
          "Dose-dependent cardiotoxicity manifesting as dilated cardiomyopathy and congestive heart failure",
          "Chronic pulmonary fibrosis",
          "End-stage tubulointerstitial renal nephritis"
        ],
        answer: 1,
        explanation: "Doxorubicin undergoes intracellular enzymatic reduction to semiquinone free radicals that chelate intracellular iron, generating massive Reactive Oxygen Species (ROS) that overwhelm myocardial antioxidant defenses, leading to myocyte vacuolization and cardiomyopathy.",
        pearl: "The iron-chelating agent Dexrazoxane (Zinecard) is FDA-approved as a cardioprotectant in patients receiving cumulative high-dose doxorubicin therapy."
      }
    ]
  },
  15: {
    prize: "Rp 1,000,000,000",
    safe: true,
    questions: [
      {
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
      {
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
      },
      {
        category: "Cancer Immunotherapy & Checkpoint Inhibitors",
        question: "Which humanized IgG4 monoclonal antibody checkpoint inhibitor works by blocking the Programmed Cell Death-1 (PD-1) receptor on cytotoxic T-lymphocytes, thereby restoring anti-tumor T-cell surveillance across multiple solid malignancies?",
        options: [
          "Pembrolizumab (Keytruda)",
          "Cetuximab (Erbitux)",
          "Trastuzumab (Herceptin)",
          "Abciximab (ReoPro)"
        ],
        answer: 0,
        explanation: "Tumor cells evade immune attack by expressing PD-L1, which binds PD-1 on cytotoxic T cells and turns off anti-tumor immunity. Pembrolizumab (Keytruda) blocks PD-1, releasing this immune brake and enabling T cells to recognize and destroy malignant cells.",
        pearl: "Drs. James P. Allison and Tasuku Honjo were awarded the 2018 Nobel Prize in Physiology or Medicine for discovering cancer immunotherapy through immune checkpoint inhibition."
      },
      {
        category: "Molecular Oncology & Kinase Inhibitors",
        question: "What landmark small-molecule tyrosine kinase inhibitor (TKI) revolutionized the management of Chronic Myeloid Leukemia (CML) by specifically targeting the BCR-ABL fusion protein kinase produced by the Philadelphia chromosome [t(9;22)]?",
        options: [
          "Imatinib (Gleevec)",
          "Sorafenib (Nexavar)",
          "Erlotinib (Tarceva)",
          "Sunitinib (Sutent)"
        ],
        answer: 0,
        explanation: "The Philadelphia chromosome translocation t(9;22)(q34;q11) creates the oncogenic constitutively active BCR-ABL fusion tyrosine kinase. Imatinib binds the ATP-binding pocket of this enzyme, halting leukemic granulocyte proliferation and transforming CML from a fatal disease into a manageable chronic condition.",
        pearl: "Imatinib represents the historical prototype of rationally designed molecular targeted therapy in cancer medicine."
      },
      {
        category: "Cellular Immunotherapy & Advanced Biologics",
        question: "In Chimeric Antigen Receptor (CAR) T-cell therapy (such as Tisagenlecleucel / Kymriah), what specific B-cell lineage surface glycoprotein is engineered into autologous T-cells to treat refractory B-cell Acute Lymphoblastic Leukemia?",
        options: [
          "CD19",
          "CD4",
          "CD8",
          "CD34"
        ],
        answer: 0,
        explanation: "Tisagenlecleucel utilizes patient-derived autologous T cells transduced with a lentiviral vector expressing an anti-CD19 chimeric antigen receptor. CD19 is uniformly expressed throughout normal and neoplastic B-cell development, allowing targeted lysis of leukemic B-cells.",
        pearl: "A critical life-threatening toxicity of CAR-T therapy is Cytokine Release Syndrome (CRS), characterized by high fevers and hemodynamic instability, treated with the anti-IL-6 receptor antibody Tocilizumab."
      },
      {
        category: "Rare Diseases & Complement Therapeutics",
        question: "Which first-in-class recombinant humanized monoclonal antibody prevents terminal complement activation by selectively binding complement protein C5, approved for Paroxysmal Nocturnal Hemoglobinuria (PNH) and Atypical Hemolytic Uremic Syndrome (aHUS)?",
        options: [
          "Eculizumab (Soliris)",
          "Adalimumab (Humira)",
          "Omalizumab (Xolair)",
          "Natalizumab (Tysabri)"
        ],
        answer: 0,
        explanation: "Eculizumab binds complement protein C5 with high affinity, inhibiting its cleavage into C5a and C5b. This blocks assembly of the cytotoxic terminal Membrane Attack Complex (MAC / C5b-9), arresting intravascular hemolysis in PNH patients lacking protective CD55/CD59 surface markers.",
        pearl: "Because terminal complement deficiency impairs clearance of encapsulated bacteria, all patients receiving eculizumab must receive Meningococcal vaccination (serogroups ACWY and B) prior to therapy."
      }
    ]
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
