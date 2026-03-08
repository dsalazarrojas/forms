<thinking>
We need to ensure that the end-users understand the purpose and importance of this form and that it's not a duplicate task for them to fill. This guide will help them navigate the form efficiently and effectively.

This form is for patients to record their discharge information after receiving cancer treatment. The goal is to gather essential details about their treatment, medical records, and follow-up care instructions. It's crucial that patients fill out this form accurately to ensure a smooth transition to their post-treatment care. If they have already filled out this form, please review the guide to confirm the required information and updates.

To complete this form, please follow these steps:

1.  Enter your full name and medical record number (MRN) accurately as registered in the facility.
2.  Provide your date of birth and discharge date as recorded in your treatment records.
3.  Select the discharging department as it appears on your treatment records.
4.  Describe your treatment summary, including all the procedures you received.
5.  Choose all the treatments you completed during your visit.
6.  Provide an assessment of your response to treatment, as guided by your healthcare provider.
7.  Describe post-treatment care instructions provided by your healthcare team.
8.  List any medications you've been prescribed and their schedules.
9.  Provide the name and location of your preferred pharmacy for medication pickup.
10.  Specify any dietary restrictions or activity limitations as advised by your healthcare team.
11.  Choose how you will follow up with your healthcare team, including emergency contact information.
12.  Select any symptoms you should report immediately to the clinic or emergency services.
13.  Confirm that you understand the post-treatment care instructions.
14.  Finally, date and submit the form, marking the date of completion.

Each field in this guide will walk you through each part of the form.

</thinking>

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
