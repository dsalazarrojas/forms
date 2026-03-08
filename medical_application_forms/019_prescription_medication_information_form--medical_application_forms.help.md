# Prescription Medication Information Form - Help Guide
## Purpose
This form collects information about a patient's medical treatment, including their demographics, medication details, and prescriber information.

## How To Complete This Form
1. Enter the patient's name in the **Patient Name** field.
2. Enter the patient's phone number in the **Patient Phone** field.
3. Select "Yes" or "No" for **Medication List** to indicate whether the patient is taking medication.
4. Enter the patient's medication name in the **Medication Name** field.
5. Enter the patient's medication dosage in the **Medication Dosage** field.
6. Select the start date of the medication treatment in the **Start Date** field.
7. Select the end date of the medication treatment (if applicable) in the **End Date** field.
8. Enter the prescriber's name in the **Prescriber Name** field.
9. Enter any additional prescriber information in the **Prescriber Info** field.
10. Select the prescriber's relationship with the patient (e.g., Primary Care Physician) in the **Prescriber Relationship** field.
11. Enter the prescriber's phone number in the **Prescriber Phone** field.
12. Enter the patient's age, if applicable, in the **Patient Age** field.
13. Select the patient's gender (e.g., Male, Female, Other) in the **Patient Gender** field.
14. Enter the patient's medication frequency, if applicable, in the **Medication Frequency** field.
15. Enter the patient's address in the **Patient Address** field.
16. Enter the prescriber's address in the **Prescriber Address** field.
17. Enter the medication route (e.g., oral, injection) in the **Medication Route** field.
18. Enter the medication dosage form (e.g., tablet, cream) in the **Medication Dosage Form** field.
19. Enter the medication strength (e.g., 10mg, 20mg) in the **Medication Strength** field.
20. Enter the medication route duration (e.g., daily, weekly) in the **Medication Route Duration** field.
21. Enter the medication frequency unit (e.g., days, hours) in the **Medication Frequency Unit** field.
22. Enter the medication dose in the **Medication Dose** field.
23. Enter any additional medication frequency unit, if applicable, in the **Medication Frequency Unit 2** field.
24. Enter any medication instructions in the **Medication Instructions** field.
25. Sign and date the **Patient Signature** field to confirm the patient's identity.
26. Sign and date the **Prescriber Signature** field to confirm the prescriber's identity.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, Text, Required): Enter the patient's full name, including their last name and first name.
* **Patient Phone** (`patient_phone`, Text, Required): Enter the patient's phone number for contact purposes.
* **Medication List** (`medication_list`, Select Multiple, Required): Indicate whether the patient is taking medication.
* **Medication Name** (`medication_name`, Text, Required): Enter the name of the medication the patient is taking.
* **Medication Dosage** (`medication_dosage`, Number, Required): Enter the dose of the medication the patient is taking.
* **Start Date** (`start_date`, Date, Required): Select the start date of the medication treatment.
* **End Date** (`end_date`, Date, Optional): Select the end date of the medication treatment, if applicable.
* **Prescriber Name** (`prescriber_name`, Text, Required): Enter the name of the prescriber.
* **Prescriber Info** (`prescriber_info`, Text, Optional): Enter any additional information about the prescriber.
* **Prescriber Relationship** (`prescriber_relationship`, Select One, Required): Select the prescriber's relationship with the patient (e.g., Primary Care Physician).
* **Prescriber Phone** (`prescriber_phone`, Text, Optional): Enter the prescriber's phone number for contact purposes.
* **Patient Age** (`patient_age`, Number, Optional): Enter the patient's age, if applicable.
* **Patient Gender** (`patient_gender`, Select One, Optional): Select the patient's gender (e.g., Male, Female, Other).
* **Medication Frequency** (`medication_frequency`, Text, Optional): Enter the patient's medication frequency, if applicable.
* **Patient Address** (`patient_address`, Text, Optional): Enter the patient's address.
* **Prescriber Address** (`prescriber_address`, Text, Optional): Enter the prescriber's address.
* **Medication Route** (`medication_route`, Text, Optional): Enter the medication route (e.g., oral, injection).
* **Medication Dosage Form** (`medication_dosage_form`, Text, Optional): Enter the medication dosage form (e.g., tablet, cream).
* **Medication Strength** (`medication_strength`, Text, Optional): Enter the medication strength (e.g., 10mg, 20mg).
* **Medication Route Duration** (`medication_route_duration`, Text, Optional): Enter the medication route duration (e.g., daily, weekly).
* **Medication Frequency Unit** (`medication_frequency_unit`, Text, Optional): Enter the medication frequency unit (e.g., days, hours).
* **Medication Dose** (`medication_dose`, Text, Optional): Enter the medication dose.
* **Medication Frequency Unit 2** (`medication_frequency_unit_2`, Text, Optional): Enter any additional medication frequency unit, if applicable.
* **Medication Instructions** (`medication_instructions`, Text, Optional): Enter any medication instructions.
* **Patient Signature** (`patient_signature`, Note, Required): Sign and date the **Patient Signature** field to confirm the patient's identity.
* **Prescriber Signature** (`prescriber_signature`, Note, Required): Sign and date the **Prescriber Signature** field to confirm the prescriber's identity.
