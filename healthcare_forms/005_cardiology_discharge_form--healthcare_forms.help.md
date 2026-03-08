# Cardiology Discharge Form - Help Guide

## Purpose
The Cardiology Discharge Form is a document used to record essential information about a patient's hospital stay, including their discharge instructions, medication management, and post-discharge care. This form helps ensure a smooth transition from hospital care to outpatient care, promoting continuity of care and minimizing the risk of complications.

## How To Complete This Form

1.  Review the patient's medical record and ensure you have all necessary information.
2.  Complete each section thoroughly, using the provided hints as guides.
3.  Double-check your entries before finalizing the form.

## Field-by-Field Explanation

*   **Patient Name**: Enter the patient's full legal name.
    *   Type: <code>text</code>, Required: true, Hint: Full legal name
*   **Patient ID or Medical Record Number**: Enter the patient's ID or medical record number.
    *   Type: <code>text</code>, Required: true, Hint: null
*   **Hospital Admission Date**: Enter the date the patient was admitted to the hospital.
    *   Type: <code>date</code>, Required: true, Hint: null
*   **Discharge Date**: Enter the date the patient was discharged from the hospital.
    *   Type: <code>date</code>, Required: true, Hint: null
*   **Hospital Name**: Enter the name of the hospital.
    *   Type: <code>text</code>, Required: true, Hint: null
*   **Attending Cardiologist**: Enter the name of the treating cardiologist.
    *   Type: <code>text</code>, Required: true, Hint: Name of the treating cardiologist
*   **Primary Diagnosis**: Enter the main cardiac condition treated.
    *   Type: <code>text</code>, Required: true, Hint: Main cardiac condition treated
*   **Procedures Performed**: List all cardiac procedures done during admission.
    *   Type: <code>text</code>, Required: true, Hint: List all cardiac procedures done during admission
*   **Surgical or Interventional Treatments**: List any surgical or interventional treatments.
    *   Type: <code>text</code>, Required: false, Hint: e.g., stent placement, bypass, pacemaker implant
*   **Discharge Medications**: List all medications the patient should take at home.
    *   Type: <code>text</code>, Required: true, Hint: List all medications patient should take at home
*   **Changes to Home Medications**: Describe any changes to the patient's medication regimen.
    *   Type: <code>text</code>, Required: false, Hint: What has been added, stopped, or modified?
*   **Activity Restrictions**: List any activity restrictions or limitations.
    *   Type: <code>text</code>, Required: true, Hint: What activities should be limited or avoided?
*   **Exercise Recommendations**: Provide specific guidance on physical activity.
    *   Type: <code>text</code>, Required: true, Hint: Specific guidance on physical activity
*   **Dietary Restrictions or Changes**: Describe any dietary modifications required.
    *   Type: <code>text</code>, Required: false, Hint: Any specific diet modifications needed?
*   **Weight Monitoring Instructions**: Determine if the patient should monitor their weight and what the target range is.
    *   Type: <code>text</code>, Required: false, Hint: Should patient monitor weight? Target range?
*   **Symptoms to Watch For**: List any red flags that require immediate medical attention.
    *   Type: <code>text</code>, Required: true, Hint: Red flags requiring immediate medical attention
*   **Follow-up Cardiology Appointment Scheduled?**: Determine if a follow-up appointment is scheduled.
    *   Type: <code>select_one</code>, Required: true, Hint: null
*   **Recommended Follow-up Date**: If applicable, enter the date for the follow-up appointment.
    *   Type: <code>date</code>, Required: false, Hint: When should patient see cardiologist again?
*   **Referrals to Other Specialists**: List any other specialist referrals.
    *   Type: <code>text</code>, Required: false, Hint: Any other doctors patient should see?
*   **Cardiac Rehabilitation Program Recommended?**: Determine if the patient should enroll in a cardiac rehabilitation program.
    *   Type: <code>select_one</code>, Required: true, Hint: null
*   **Special Patient Instructions**: Add any additional important discharge instructions.
    *   Type: <code>text</code>, Required: false, Hint: Additional important discharge instructions
*   **Emergency Contact Name**: Enter the name of the emergency contact person.
    *   Type: <code>text</code>, Required: true, Hint: Who should be contacted in case of emergency?
*   **Emergency Contact Phone Number**: Enter the emergency contact phone number, including the area code.
    *   Type: <code>text</code>, Required: true, Hint: Include area code
*   **Primary Care Physician**: Enter the name and contact information of the primary care physician.
    *   Type: <code>text</code>, Required: true, Hint: Name and contact information
*   **Patient Understanding of Discharge Instructions**: Determine if the patient has understood and acknowledged the discharge instructions.
    *   Type: <code>select_one</code>, Required: true, Hint: Did patient understand all instructions?
*   **Medication Adherence Instructions**: Emphasize the importance of taking medications as prescribed.
    *   Type: <code>text</code>, Required: false, Hint: Emphasize importance of taking medications as prescribed
*   **Discharge Summary Provided to Patient**: Determine if a discharge summary was provided to the patient.
    *   Type: <code>select_one</code>, Required: true, Hint: null

## Tips

*   Always refer to the patient's medical record for accurate and up-to-date information.
*   Use clear and concise language in the discharge instructions.
*   Review and revise the form carefully before finalizing it.
*   Ensure the patient understands and acknowledges the discharge instructions.
*   Provide all necessary information to other healthcare providers.
