<thinking>
This form is designed to monitor and evaluate the effectiveness of antimicrobial stewardship programs in healthcare facilities. The form collects data on various aspects of the program, including its structure, activities, and outcomes. It will help facilities assess their performance and identify areas for improvement.
</thinking>

# Antimicrobial Stewardship Monitoring Form - Help Guide
## Purpose
The Antimicrobial Stewardship Monitoring Form is a tool used to monitor and evaluate the effectiveness of antimicrobial stewardship programs in healthcare facilities. It helps facilities assess their performance and identify areas for improvement.

## How To Complete This Form

1. Enter the facility name and type, which includes the type of healthcare facility (e.g., acute care hospital, long-term care facility).
2. Select the start and end dates of the monitoring period.
3. Enter the name and role of the person completing the form.
4. Enter the total number of patients reviewed and the total number of antibiotic prescriptions.
5. Select the status of the stewardship program (e.g., comprehensive, basic, developing, no program).
6. Select the composition of the stewardship team (e.g., infectious disease physician, clinical pharmacist, microbiologist).
7. Indicate the level of leadership commitment and accountability.
8. Select the availability of pharmacy expertise (e.g., full-time ID pharmacist, part-time ID pharmacist, general pharmacist).
9. Select the types of interventions implemented (e.g., dose optimization, de-escalation, IV to oral conversion).
10. Enter the estimated cost savings and any challenges encountered.
11. Describe areas for improvement and objectives for the next monitoring period.
12. Provide an overall rating of the program's effectiveness.

## Field-by-Field Explanation

* **Facility Name** (`facility_name`, text, required): Enter the name of the healthcare facility.
* **Facility Type** (`facility_type`, select_one, required): Select the type of healthcare facility (e.g., acute care hospital, long-term care facility).
* **Monitoring Period Start** (`monitoring_period_start`, date, required): Enter the start date of the monitoring period.
* **Monitoring Period End** (`monitoring_period_end`, date, required): Enter the end date of the monitoring period.
* **Reviewer Name** (`reviewer_name`, text, required): Enter the name of the person completing the form.
* **Reviewer Role** (`reviewer_role`, select_one, required): Select the role of the person completing the form (e.g., physician, pharmacist, infection preventionist).
* **Total Patients Reviewed** (`patient_count`, number, required): Enter the number of patient records reviewed.
* **Total Antibiotic Prescriptions** (`antibiotic_prescriptions`, number, required): Enter the number of antibiotic prescriptions.
* **Stewardship Program Status** (`stewardship_program`, select_one, required): Select the status of the stewardship program (e.g., comprehensive, basic, developing, no program).
* **Stewardship Team Composition** (`stewardship_team`, select_multiple, required): Select all the members of the stewardship team (e.g., infectious disease physician, clinical pharmacist, microbiologist).
* **Leadership Commitment** (`leadership_commitment`, select_one, required): Select the level of leadership commitment (e.g., strong, moderate, limited, no commitment).
* **Accountability** (`accountability`, select_one, required): Select whether there is a designated leader (e.g., yes, no leader).
* **Pharmacy Expertise** (`drug_expertise`, select_one, required): Select the availability of pharmacy expertise (e.g., full-time ID pharmacist, part-time ID pharmacist, general pharmacist).
* **Interventions Implemented** (`action_taken`, select_one, required): Select the types of interventions implemented (e.g., prospective audit and feedback, pre-authorization, both).
* **Tracking System** (`tracking`, select_one, required): Select whether the tracking system is comprehensive, basic, limited, or none.
* **Reporting to Stakeholders** (`reporting`, select_one, required): Select whether reports are generated regularly, occasionally, rarely, or never.
* **Education Programs** (`education`, select_one, required): Select whether staff is educated regularly, occasionally, new hires only, or not at all.
* **Most Prescribed Antibiotic** (`most_prescribed_antibiotic`, select_one, required): Select the most commonly prescribed antibiotic.
* **Broad-Spectrum Antibiotic Percentage** (`broad_spectrum_percentage`, number, required): Enter the approximate percentage of broad-spectrum antibiotic use.
* **Guideline Concordance Rate** (`guideline_concordance`, number, required): Enter the percentage of staff following guidelines.
* **Cultures Obtained Before Antibiotics** (`culture_before_antibiotic`, number, required): Enter the percentage of cultures obtained before antibiotics.
* **De-Escalation Rate** (`de_escalation_rate`, number, optional): Enter the percentage of de-escalated prescriptions.
* **IV to Oral Conversion Rate** (`iv_to_oral_conversion`, number, optional): Enter the percentage of IV to oral conversions.
* **Appropriate Duration Rate** (`appropriate_duration`, number, optional): Enter the percentage of prescriptions with correct duration.
* **C. difficile Cases** (`clostridioides_difficile_cases`, number, required): Enter the number of C. difficile cases.
* **Adverse Drug Events** (`adverse_drug_events`, number, required): Enter the number of adverse drug events.
* **Resistance Patterns** (`resistance_patterns`, text, optional): Describe any notable changes in resistance patterns.
* **Total Interventions Made** (`total_interventions`, number, required): Enter the number of stewardship interventions.
* **Interventions Accepted** (`interventions_accepted`, number, required): Enter the number of interventions accepted by providers.
* **Types of Interventions** (`intervention_types`, select_multiple, required): Select all the types of interventions implemented.
* **Estimated Cost Savings** (`estimated_cost_savings`, number, optional): Enter the estimated dollar amount saved.
* **Challenges Encountered** (`challenges`, select_multiple, required): Select all the challenges encountered.
* **Areas for Improvement** (`improvement_areas`, text, required): Describe areas for improvement.
* **Objectives for Next Period** (`goals_next_period`, text, required): Describe objectives for the next monitoring period.
* **Overall Stewardship Rating** (`overall_rating`, select_one, required): Select the overall effectiveness of the program (e.g., excellent, good, fair, poor, very poor).
* **Reviewer Signature** (`reviewer_signature`, text, required): Enter the digital signature of the person completing the form.
* **Completion Date** (`completion_date`, date, required): Enter the date the form was completed.
