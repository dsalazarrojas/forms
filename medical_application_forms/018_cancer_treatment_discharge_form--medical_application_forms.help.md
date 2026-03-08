# Cancer Treatment Discharge Form - Help Guide
## Purpose

This form is a critical tool for recording your discharge information from cancer treatment. Completing it helps ensure you receive the necessary care after treatment and maintain a smooth transition.

## How To Complete This Form

1.  Enter your full name as registered in the facility.
2.  Enter your medical record number for clinical records.
3.  Select your date of birth for accurate patient identification.
4.  Choose the discharging department from the list.
5.  Describe your treatment summary and any procedures received.
6.  Select all treatments you completed during your visit.
7.  Evaluate your response to treatment as guided by your healthcare provider.
8.  List medications and their schedules as prescribed.
9.  Specify your preferred pharmacy for medication pickup.
10.  Describe dietary or activity restrictions as advised.
11.  Choose emergency contact information and follow-up details.
12.  Select symptoms to report immediately to the clinic or emergency services.
13.  Confirm understanding of post-care instructions.
14.  Date and submit the form for final completion.

## Field-by-Field Explanation

*   **Patient Full Name** (`patient_name`, text, required): Enter your full name as registered in the facility for accurate patient identification.
*   **Medical Record Number** (`mrn`, text, required): Record your MRN as required for clinical records.
*   **Date of Birth** (`dob`, date, required): Select your date of birth for accurate patient identification.
*   **Discharge Date** (`discharge_date`, date, required): Final date of the current inpatient treatment phase.
*   **Discharging Department** (`discharging_dept`, select_one, required): Choose the clinic or hospital wing discharging you.
*   **Treatment Summary** (`treatment_summary_section`, note, required): Briefly describe the care received.
*   **Type of Treatment Completed** (`treatments_completed`, select_multiple, required): Select all treatments applied to this visit.
*   **Overall Response to Treatment** (`treatment_response`, select_one, required): Choose the clinical assessment of the outcome.
*   **Post-Treatment Care** (`post_treatment_care_section`, note, required): Describe how to manage your health at home.
*   **Prescribed Medications at Discharge** (`prescribed_meds`, text, required): List all medications, dosages, and schedules.
*   **Pharmacy for Pickup** (`preferred_pharmacy`, text, required): Enter the name and location of your preferred pharmacy.
*   **Dietary Restrictions** (`dietary_restrictions`, text, optional): Specify any foods or drinks to avoid.
*   **Activity Limitations** (`activity_limitations`, select_one, required): Select physical activity guidance as advised by your healthcare team.
*   **Follow-up and Emergency** (`follow_up_emergency_section`, note, required): Provide contact and scheduling information for follow-up care.
*   **Scheduled Follow-up Appointment** (`follow_up_appt`, date, required): Date of the next visit to the clinic.
*   **Emergency Contact Information** (`emergency_phone`, text, required): Direct line for after-hours oncology support.
*   **Symptoms to Report Immediately** (`reportable_symptoms`, select_multiple, required): Select symptoms to report to the ER or clinic immediately.
*   **Discharge Provider** (`discharging_provider`, text, required): Confirm the medical professional signing off this discharge.
*   **I Understand Post-Care Instructions** (`instruction_understanding`, select_one, required): Confirm understanding of post-treatment care instructions.
*   **Submission Date** (`final_date`, date, required): Date and submit the form for final completion.

## Tips

*   Ensure accurate information to provide clear care instructions.
*   Review and update this form as needed to maintain accurate records.
*   Follow up with your healthcare team as advised in this form.
*   Report symptoms or issues immediately as listed in this form.
