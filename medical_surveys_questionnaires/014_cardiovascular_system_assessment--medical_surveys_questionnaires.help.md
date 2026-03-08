<thinking>...</thinking>

# Cardiovascular System Assessment - Help Guide
## Purpose
The Cardiovascular System Assessment form is designed to gather information about a patient's cardiovascular system. This form helps healthcare providers assess the patient's heart and circulatory system, including symptoms, physical examination findings, and clinical recommendations.

## How To Complete This Form
1. Begin by filling out the patient's personal information, including their full name and date of examination.
2. Select all the presenting cardiovascular symptoms from the list provided.
3. Report the duration of the symptoms, specifying days, weeks, or months.
4. Conduct a physical examination and select the results of heart sounds auscultation, peripheral pulses palpation, and other findings.
5. Document any presence or absence of peripheral edema, jugular venous distension, and capillary refill time.
6. Provide a summary of the clinical examination findings.
7. Offer clinical recommendations and next steps, if necessary.
8. Finally, enter the examiner's initials for confirmation.

## Field-by-Field Explanation
* **Patient Full Name** (`patient_name_full`, text, required): Enter the patient's full name.
* **Date of Examination** (`examination_date_conducted`, date, required): Select the date of the examination using the date picker.
* **Presenting Cardiovascular Symptoms** (`symptoms_presenting_list`, select_multiple, required): Select all the symptoms that apply, such as palpitations, syncope, orthopnea, paroxysmal nocturnal dyspnea, and fatigue.
* **Duration of Symptoms** (`symptom_duration_timeline`, text, required): Enter the duration of the symptoms, specifying days, weeks, or months.
* **Heart Sounds Auscultation** (`heart_sounds_auscultation`, select_one, required): Select the results of heart sounds auscultation, such as normal S1/S2, abnormal heart sounds, or murmur detected.
* **Peripheral Pulses (Radial/Dorsalis Pedis)** (`peripheral_pulses_palpation`, select_one, required): Select the results of peripheral pulses palpation, such as normal/equal, diminished/weak, absent, or bounding.
* **Presence of Peripheral Edema** (`peripheral_edema_presence`, select_one, required): Select the presence or absence of peripheral edema, such as absent, pitting, or non-pitting.
* **Jugular Venous Distension (JVD)** (`jugular_venous_distension_jvd`, select_one, required): Select the presence or absence of jugular venous distension, such as absent or present.
* **Capillary Refill Time (Seconds)** (`capillary_refill_time_seconds`, number, required): Measure the capillary refill time in seconds.
* **Summary of Clinical Findings** (`examination_findings_summary`, text, optional): Provide a detailed summary of the examination results.
* **Clinical Recommendations and Next Steps** (`clinical_recommendations_action`, text, optional): Offer clinical recommendations and next steps, if necessary.
* **Examiner Initials for Confirmation** (`examiner_professional_initials`, text, required): Enter the examiner's initials for confirmation.
