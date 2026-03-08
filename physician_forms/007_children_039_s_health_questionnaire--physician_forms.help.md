# Childrens Health Questionnaire - Help Guide
## Purpose
The purpose of this form is to collect information about a child's health status, including their contact information, medical history, and any potential risks or allergies.

## How To Complete This Form
To complete this form, please follow these steps:

1.  **Child Name**: Enter the child's full name.
2.  **Date of Birth**: Enter the child's date of birth.
3.  **Parent Contact**: Enter the best contact method for the parent or guardian.
4.  **Primary Physician**: If applicable, enter the name of the child's primary physician.
5.  **Immunizations Up to Date**: Select whether the child's immunizations are up to date.
6.  **Allergies**: List any known allergies.
7.  **Current Medications**: List any current medications the child is taking, including dosage and schedule if applicable.
8.  **Chronic Conditions**: Note any long-term health conditions.
9.  **Recent Symptoms**: Describe any recent illness or symptoms.
10. **Permission for Emergency Treatment**: Select whether you authorize emergency care if needed.

## Field-by-Field Explanation

*   **Child Name** (`child_name`, `text`, required): Enter the child's full name.
*   **Date of Birth** (`date_of_birth`, `date`, required): Enter the child's date of birth.
*   **Parent Contact** (`parent_contact`, `text`, required): Enter the best contact method for the parent or guardian.
*   **Primary Physician** (`primary_physician`, `text`, optional): If applicable, enter the name of the child's primary physician.
*   **Immunizations Up to Date** (`immunizations_up_to_date`, `select_one`, required): Select whether the child's immunizations are up to date. Options: True, False, Unsure.
*   **Allergies** (`allergies`, `text`, optional): List any known allergies.
*   **Current Medications** (`medications`, `text`, optional): List any current medications the child is taking, including dosage and schedule if applicable.
*   **Chronic Conditions** (`chronic_conditions`, `text`, optional): Note any long-term health conditions.
*   **Recent Symptoms** (`recent_symptoms`, `text`, optional): Describe any recent illness or symptoms.
*   **Permission for Emergency Treatment** (`permission_for_treatment`, `select_one`, required): Select whether you authorize emergency care if needed. Options: True, False.
