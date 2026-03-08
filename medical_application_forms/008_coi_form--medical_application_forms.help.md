# COI Form - Help Guide
## Purpose
The COI Form is a Conflict of Interest Disclosure Form designed to collect information about an individual's financial interests, employment, and other activities that may pose a conflict of interest. This form ensures accurate and complete disclosure to maintain transparency and integrity in various industries.

## How To Complete This Form
To complete the form, follow these steps:

1.  Start by reviewing each section and answering the questions accordingly.
2.  For each section, read the label and hint carefully to understand what is being asked.
3.  Fill in the required fields accurately and completely.
4.  Sign and date the form to confirm your declaration.

## Field-by-Field Explanation

*   **Employee Name** (`employee_name`, text, required): Enter your full name as it appears on your identification documents.
*   **Employee ID** (`employee_id`, text, required): Enter your identification number or any other unique identifier.
*   **Job Title** (`job_title`, text, required): Enter your current job title or position.
*   **Department** (`department`, text, required): Enter the department or division you belong to.
*   **Reports To** (`reporting_to`, text, required): Enter the person you report to or your direct supervisor's name.
*   **-- Financial Interests --**
    *   **Do you or your immediate family have financial interests in outside companies?** (`financial_interests`, select_one, required): Answer "Yes" or "No".
        +   If "Yes", proceed to the next field to describe the financial interests.
    *   **If yes, describe the financial interests** (`financial_details`, text, required): Provide a detailed description of your financial interests, including company name, nature of interest, and estimated value.
*   **-- Employment and Business Activities --**
    *   **Do you have outside employment or business interests?** (`outside_employment`, select_one, required): Answer "Yes" or "No".
        +   If "Yes", describe your outside employment or business in the next field.
    *   **If yes, describe the employment or business** (`outside_employment_details`, text, required): Provide details about your outside employment or business, including company name, position, and hours per week.
*   **-- Board and Committee Service --**
    *   **Board or Committee Service** (`board_service`, select_one, required): Answer "Yes" or "No".
        +   If "Yes", describe your board or committee roles in the next field.
    *   **If yes, describe your board or committee roles** (`board_details`, text, required): Provide details about your board or committee roles, including organization name, position, and type of work.
*   **-- Gifts and Benefits --**
    *   **Have you received gifts or benefits of substantial value?** (`gifts_received`, select_one, required): Answer "Yes" or "No".
        +   If "Yes", describe the gifts or benefits in the next field.
    *   **If yes, describe the gifts or benefits** (`gifts_description`, text, required): Provide details about the gifts or benefits, including the nature and value.
*   **-- Acknowledgment --**
    *   **I understand the importance of disclosing conflicts of interest** (`understanding_confirmed`, select_one, required): Answer "Yes" or "No".
    *   **I confirm that the information provided is accurate and complete** (`truthfulness_confirmation`, select_one, required): Answer "Yes" or "No".
    *   **Date of Disclosure** (`disclosure_date`, date, required): Enter the date you're submitting this form.
    *   **Printed Name and Signature** (`signature_printed_name`, text, required): Sign with your printed name, confirming that the information is true and complete.
