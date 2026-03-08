# Antimicrobial Stewardship Monitoring Form - Help Guide
## Purpose
The Antimicrobial Stewardship Monitoring Form is a tool used to track and analyze antimicrobial use in a healthcare facility. This form helps healthcare professionals monitor and reduce the misuse of antibiotics, promoting better patient care and reducing the development of antibiotic-resistant bacteria.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the monitoring date in the format of MM/DD/YYYY.
2. Enter the name of the healthcare facility.
3. Enter the department or unit where the monitoring is being conducted.
4. Enter the name of the person conducting the monitoring.
5. Enter the number of patient records reviewed.
6. Enter the number of cases with inappropriate antimicrobial use detected.
7. Select all types of inappropriate prescribing detected.
8. Enter the percentage of cases with proper cultures obtained before prescribing.
9. Enter the number of de-escalation opportunities identified.
10. Enter the number of cases requiring escalation to a broader spectrum.
11. Select all resistant organisms detected during the period.
12. Enter the percentage of clinicians accepting stewardship recommendations.
13. Select whether prescriber education sessions were conducted.
14. Select the topics covered in prescriber education sessions.
15. Enter the overall compliance with institutional protocols.
16. Enter an estimate of antimicrobial expenditure during this period in dollars.
17. Select the trend in antimicrobial expenditure compared to the previous period.
18. Enter the number of adverse events related to antimicrobial use.
19. Enter the number of clinical failures due to inappropriate therapy.
20. Enter any recommendations for the next monitoring period.

## Field-by-Field Explanation

* **Monitoring date** (`monitoring_date`, date, required): Enter the date of the monitoring period.
* **Healthcare facility name** (`facility_name`, text, required): Enter the name of the healthcare facility where the monitoring is being conducted.
* **Department or unit** (`department`, text, required): Enter the department or unit where the monitoring is being conducted.
* **Person conducting monitoring** (`monitoring_personnel`, text, required): Enter the name of the person conducting the monitoring.
* **Number of patient records reviewed** (`patient_count_monitored`, number, required): Enter the total number of patient records reviewed during the monitoring period.
* **Inappropriate antimicrobial use detected** (`inappropriate_use_detected`, number, required): Enter the number of cases with inappropriate antimicrobial use detected during the monitoring period.
* **Types of inappropriate prescribing detected** (`inappropriate_prescribing_types`, select_multiple, required): Select all types of inappropriate prescribing detected during the monitoring period:
	+ Broad spectrum without indication
	+ Unnecessary combination therapy
	+ Wrong drug for organism
	+ Duration too long
	+ Dosage incorrect
	+ Drug interaction
* **Proportion of cultures obtained before prescribing** (`culture_results_compliance`, number, required): Enter the percentage of cases with proper cultures obtained before prescribing.
* **De-escalation opportunities identified** (`de_escalation_opportunities`, number, required): Enter the number of cases where a narrower antimicrobial spectrum could have been used.
* **Cases requiring escalation to broader spectrum** (`escalation_cases`, number, required): Enter the number of cases requiring escalation to a broader antimicrobial spectrum.
* **Resistant organisms detected** (`resistant_organisms_detected`, select_multiple, required): Select all resistant organisms detected during the monitoring period:
	+ MRSA
	+ VRE
	+ ESBL
	+ Pseudomonas
	+ C difficile
	+ Acinetobacter
* **Clinician acceptance rate** (`clinician_acceptance_rate`, number, required): Enter the percentage of clinicians who accepted stewardship recommendations.
* **Prescriber education conducted** (`prescriber_education_conducted`, select_one, required): Select whether prescriber education sessions were conducted:
	+ Yes, multiple sessions
	+ Yes, at least one session
	+ No
* **Topics covered in education** (`education_topics`, select_multiple, not required): Select all topics covered in prescriber education sessions:
	+ Culture and sensitivity testing
	+ De-escalation strategies
	+ Duration guidelines
	+ Resistance patterns
	+ Cost management
	+ Other
* **Overall compliance with protocols** (`protocol_compliance`, number, required): Enter the overall compliance with institutional protocols as a percentage.
* **Estimated antimicrobial expenditure** (`antibiotic_expenditure`, number, not required): Enter an estimate of antimicrobial expenditure during this period in dollars.
* **Trend in antimicrobial expenditure** (`expenditure_trend`, select_one, required): Select the trend in antimicrobial expenditure compared to the previous period:
	+ Increased significantly
	+ Increased slightly
	+ No change
	+ Decreased slightly
	+ Decreased significantly
* **Adverse events related to antimicrobial use** (`adverse_events`, number, required): Enter the number of adverse events related to antimicrobial use.
* **Clinical failures due to inappropriate therapy** (`treatment_failures`, number, required): Enter the number of clinical failures due to inappropriate antimicrobial therapy.
* **Recommendations for next monitoring period** (`recommendations_next_period`, text, not required): Enter any recommendations for the next monitoring period.
