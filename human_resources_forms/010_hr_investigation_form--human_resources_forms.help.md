# HR Investigation Form - Help Guide
## Purpose
This form is designed to gather information and document the process of an employee investigation.

## How To Complete This Form

1.  To start an investigation, fill out the initial page with the relevant employee information, including their name and email.
2.  Provide a brief summary of the event or incident that led to the investigation.
3.  Record witness statements, if applicable, from relevant employees or individuals involved.
4.  Update the investigation status and notes as the process unfolds.
5.  Determine and document the outcome of the investigation.

## Field-by-Field Explanation

*   **Employee Information** (`Employee Information`, `text`, required/optional): This section is used to capture basic employee information. Provide the employee's name and email address.
*   **Employee Name** (`employee_name`, `text`, required/optional): Enter the employee's name who is being investigated.
*   **Employee Email** (`employee_email`, `email`, required/optional): Enter the employee's email address for correspondence purposes.
*   **Investigator Name** (`investigator_name`, `text`, required/optional): Enter the name of the investigator handling the case.
*   **Investigation Start Date** (`investigation_start_date`, `date`, required/optional): Enter the start date of the investigation.
*   **Investigation End Date** (`investigation_end_date`, `date`, required/optional): Enter the expected completion date of the investigation.
*   **Summary of Event** (`summary_of_event`, `text`, required/optional): Provide a brief description of the incident or event being investigated.
*   **Employee Statement** (`employee_statement`, `text`, required/optional): This section is intended for the employee being investigated to provide a statement, if applicable.
*   **Witness Statements** (`witness_statements`, `select_multiple`, required/optional): Choose from the list of witness statements provided:
    *   Witness1
    *   Witness2
    *   Witness3
    *   Witness4
*   **Investigation Status** (`investigation_status`, `select_one`, required/optional): Select the current status of the investigation:
    *   pending
    *   complete
    *   onhold
*   **Investigation Notes** (`investigation_notes`, `note`, required/optional): Add any relevant notes or observations during the investigation.
*   **Action Taken** (`action_taken`, `select_multiple`, required/optional): Choose from the list:
    *   True
    *   False
*   **Outcome** (`outcome`, `select_one`, required/optional): Select the outcome of the investigation:
    *   resolved
    *   unresolved
    *   unknown
*   **Employee Sincerely** (`employee_sincerely`, `text`, required/optional): This is for the employee to express their sincerity, if applicable.
*   **Investigator Sincerely** (`investigator_sincerely`, `text`, required/optional): This is for the investigator to express their sincerity, if applicable.

Note: All fields with "required/optional" in parentheses are optional.
