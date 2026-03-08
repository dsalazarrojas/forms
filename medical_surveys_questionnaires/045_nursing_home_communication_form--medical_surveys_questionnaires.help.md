# nursing_home_communication_form - Help Guide
## Purpose
The nursing_home_communication_form is used to document the patient's health status, care plan, and any changes to their care during a stay in a nursing home.

## How To Complete This Form

1. The form is divided into multiple pages with different sections to be completed on each page.
2. Please complete each section thoroughly, taking the time to provide accurate and detailed information.

## Field-by-Field Explanation

### Resident Info
**Resident Info** (`resident_info`, text, **required**): This section is used to record the patient's basic information, such as their name and room number.

*   **Label**: **Resident Info**
*   **Label**: Enter the resident's name and room number in this field.

### Plan of Care
**Plan of Care** (`plan_of_care`, text, **required**): Describe the patient's care plan, including any medications they are taking and their medical conditions.

*   **Label**: **Plan of Care**
*   **Label**: Provide a thorough description of the patient's care plan, including medications and medical conditions.

### Health Care Provider
**Health Care Provider** (`health_care_provider`, select_one, **required**): Select the type of healthcare provider currently caring for the patient.

*   **Label**: **Health Care Provider**
*   **Label**: Select one of the following:
    *   **Nurse**
    *   **Doctor**
    *   **Occupational Therapist**
    *   **Physical Therapist**
    *   **Social Worker**

### Condition
**Condition** (`condition`, select_multiple, **optional**): Check boxes to indicate if the patient has any specific conditions, such as wounds or pressure ulcers.

*   **Label**: **Condition**
*   **Label**: Check any of the following conditions that apply to the patient:
    *   **Yes**
    *   **No**

### Medication
**Medication** (`medication`, text, **optional**): Record any new medications or changes to the patient's medication regimen.

*   **Label**: **Medication**
*   **Label**: If applicable, enter any new medications or changes to the patient's medication regimen here.

### Care Provider
**Care Provider** (`care_provider`, select_multiple, **optional**): Check boxes to indicate if the patient has specific care providers, such as physical therapists.

*   **Label**: **Care Provider**
*   **Label**: Check any of the following care providers that apply to the patient:
    *   **Yes**
    *   **No**

### Date
**Date** (`date`, date, **optional**): Record the date of the communication.

*   **Label**: **Date**
*   **Label**: Enter the date of the communication.

### Time
**Time** (`time`, time, **optional**): Record the time of the communication.

*   **Label**: **Time**
*   **Label**: Enter the time of the communication.

### Tips

*   Ensure that you are completing the form thoroughly and accurately.
*   Review the form for any necessary signatures or approvals before finalizing it.
*   Please keep the form up-to-date and current, as needed.
