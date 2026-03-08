# COVID 19 Patient Pre Screening Disclosure Form V3 - Help Guide
## Purpose
This form is used to gather information from patients before screening for COVID-19. It helps healthcare providers assess the patient's risk level and make informed decisions about their screening process. Please note that this form is an essential part of the pre-screening process and is mandatory for all patients.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter your patient's full name and date of birth.
2.  Provide your contact information, including your phone number and email address.
3.  Report any symptoms you are experiencing, such as fever, cough, or shortness of breath.
4.  Confirm whether you have had close contact with a positive COVID-19 case.
5.  Confirm whether you are fully vaccinated with all boosters.
6.  Confirm whether you have had a positive test within the past 90 days.
7.  Confirm whether your symptoms have fully resolved.

## Field-by-Field Explanation

*   **Patient Full Name** (`patient_name`, `text`, required): Enter your full name as it appears on your identification.
*   **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth in the format MM/DD/YYYY.
*   **Phone Number** (`phone`, `text`, required): Enter your contact number where we can reach you.
*   **Email Address** (`email`, `email`, required): Enter your email address where we can reach you.
*   **Pre-Screening Date** (`screening_date`, `date`, required): This is the date you arrived at our facility for screening.
*   **Symptom Screening** (`symptom_screening`, `note`, required): This section is a summary of your symptoms.
*   **Fever or feeling feverish** (`fever`, `select_one`, required): Answer 'True' if you are experiencing a fever or feeling feverish. Answer 'False' otherwise.
*   **Cough in past 14 days** (`cough`, `select_one`, required): Answer 'True' if you have had a cough in the past 14 days. Answer 'False' otherwise.
*   **Shortness of breath or difficulty breathing** (`breathing_difficulty`, `select_one`, required): Answer 'True' if you are experiencing shortness of breath or difficulty breathing. Answer 'False' otherwise.
*   **Loss of taste or smell** (`loss_of_taste_smell`, `select_one`, required): Answer 'True' if you have experienced loss of taste or smell. Answer 'False' otherwise.
*   **Fatigue or body aches** (`fatigue`, `select_one`, required): Answer 'True' if you are experiencing fatigue or body aches. Answer 'False' otherwise.
*   **Sore throat or congestion** (`sore_throat`, `select_one`, required): Answer 'True' if you have a sore throat or congestion. Answer 'False' otherwise.
*   **Close contact with positive COVID case** (`known_positive_contact`, `select_one`, required): Answer 'True' if you have had close contact with a positive COVID case. Answer 'False' otherwise.
*   **Contact date if applicable** (`contact_date_range`, `date`, optional): If you have answered 'True' to close contact with positive COVID case, enter the date of contact.
*   **Quarantine or isolation period completed** (`quarantine_status`, `select_one`, required): Answer 'Yes, Completed' if you have completed the quarantine or isolation period. Answer 'In Progress' otherwise.
*   **COVID-19 Test History** (`test_history`, `note`, required): This section is a summary of your COVID-19 test history.
*   **Tested positive within 90 days** (`recent_positive`, `select_one`, required): Answer 'True' if you have had a positive test result within the past 90 days. Answer 'False' otherwise.
*   **Approximate date of positive test** (`positive_date_range`, `date`, optional): If you answered 'True' to the previous question, enter the date of the positive test.
*   **Symptoms fully resolved** (`recovery_symptoms`, `select_one`, optional): Answer 'True' if you have fully recovered from your symptoms. Answer 'False' otherwise.
*   **Vaccination Information** (`vaccination_info`, `note`, required): This section is a summary of your vaccination information.
*   **Fully vaccinated with all boosters** (`vaccination_complete`, `select_one`, required): Answer 'True' if you are fully vaccinated with all boosters. Answer 'False' otherwise.
*   **Approved for procedure or visit** (`final_screening`, `select_one`, required): Answer 'Approved' if you have been approved for the procedure or visit. Answer 'Not Approved' otherwise.

Note: The required fields are marked as such in the form and must be completed before submission. The optional fields are not marked as required and can be completed at your discretion.
