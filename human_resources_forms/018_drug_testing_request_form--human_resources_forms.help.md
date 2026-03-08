# drug_testing_request_form - Help Guide
## Purpose
The drug testing request form is used to collect information and approval for employee drug testing.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the employee whose information you are requesting drug testing for.
2.  Enter the employee's date of birth to confirm their identity.
3.  Choose whether or not the employee has a supervisor to review and approve the request.
4.  Choose the type of testing the employee will undergo:
    -   Random Sample
    -   Non-Donor
    -   Specimen Type
5.  Enter the reason for the testing, providing a brief explanation.
6.  Report the result of the test:
    -   Negative
    -   Positive
    -   Not Detected
7.  If the test result is positive, choose the action taken:
    -   No Action
    -   Employee Fired
8.  Add any additional notes about the situation.

## Field-by-Field Explanation

* **Employee** (`employee`, `text`, required): Enter the name of the employee you are requesting drug testing for.
* **Employee Date of Birth** (`employee_date_of_birth`, `date`, required): Enter the employee's date of birth in the standard date format (MM/DD/YYYY).
* **Supervisor** (`supervisor`, `select_one`, required): Choose 'Yes' if the employee has a supervisor, 'No' otherwise.
* **Testing Type** (`testing_type`, `select_multiple`, required): Select the type of testing the employee will undergo.
*   -   Random Sample
    -   Non-Donor
    -   Specimen Type
* **Reason for Testing** (`reason_for_testing`, `text`, required): Enter a brief explanation for the drug testing request.
* **Test Result** (`test_result`, `select_multiple`, required): Report the result of the test:
    -   Negative
    -   Positive
    -   Not Detected
* **Action Taken** (`action_taken`, `select_multiple`, required): If the test result is positive, choose the action taken:
    -   No Action
    -   Employee Fired
* **Notes** (`notes`, `text`, optional): Add any additional notes about the situation.

Note: The form is designed for official purposes only and is subject to review and processing by the HR department. All fields are required except for the "Notes" field, which is optional.
