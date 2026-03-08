# Equipment Release Form - Help Guide
## Purpose
This form is used to manage the release of equipment within the organization. It captures information about the equipment, the user requesting the release, and the details of the release process.

## How To Complete This Form
To complete this form, follow these steps:

1. Select whether the user is requesting the release of equipment (`User Request`).
2. Enter the equipment's ID, if applicable.
3. Provide the equipment's name.
4. Set the start and end dates of the release period.
5. Select the department that will be using the equipment.
6. Choose whether the equipment is currently active or inactive.
7. Enter the submitter's email address and phone number (if applicable).
8. Enter any comments or additional notes about the release.
9. Select whether the approver is aware of the release.
10. Enter the approver's email address and phone number (if applicable).
11. Enter any additional comments or notes from the approver.

## Field-by-Field Explanation

* **User Request** (`User Request`, `select_one`, required/optional): Select 'Yes' to indicate that this is a user request for the equipment release.
* **Equipment ID** (`Equipment ID`, `select_one`, required/optional): Enter the ID of the equipment being released, if applicable.
* **Equipment Name** (`Equipment Name`, `text`, required): Enter the name of the equipment being released.
* **Start Date** (`Start Date`, `date`, required): Enter the date when the release starts.
* **End Date** (`End Date`, `date`, required): Enter the date when the release ends.
* **User Department** (`User Department`, `text`, optional): Enter the department of the user requesting the release (if different from the submitter's department).
* **Equipment Status** (`Equipment Status`, `select_one`, optional): Select 'Active' if the equipment is currently in use, 'Inactive' otherwise.
* **Submitter** (`Submitter`, `text`, required): Enter the name of the person submitting the request.
* **Comments** (`Comments`, `note`, optional): Enter any additional comments or notes about the release.
* **Approver** (`Approver`, `select_one`, required): Select 'Yes' to indicate that the approver is aware of the release.
* **Submitter Email** (`Submitter Email`, `email`, required): Enter the email address of the person submitting the request.
* **Submitter Phone** (`Submitter Phone`, `text`, optional): Enter the phone number of the person submitting the request (if applicable).
* **Submitter Notes** (`Submitter Notes`, `text`, required): Enter any notes or additional comments about the submission.
* **Approver Email** (`Approver Email`, `email`, optional): Enter the email address of the approver (if applicable).
* **Approver Phone** (`Approver Phone`, `text`, optional): Enter the phone number of the approver (if applicable).
* **Approver Notes** (`Approver Notes`, `text`, required): Enter any additional comments or notes from the approver.
* **Department Approver** (`Department Approver`, `select_one`, optional): Select 'Yes' to indicate that the department approver is aware of the release.
* **Department** (`Department`, `select_multiple`, required): Select the department(s) that will be using the equipment.
* **Equipment** (`Equipment`, `select_multiple`, required): Select whether the equipment is being released or not.
* **Reason** (`Reason`, `text`, required): Enter the reason for the equipment release.
* **Comments** (`Comments`, `note`, optional): Enter any additional comments or notes about the release.
* **Submitter ID** (`Submitter ID`, `text`, optional): Enter the ID of the person submitting the request.
* **Approver ID** (`Approver ID`, `text`, optional): Enter the ID of the approver.
* **Department Approver Email** (`Department Approver Email`, `email`, optional): Enter the email address of the department approver (if applicable).
* **Department Approver Phone** (`Department Approver Phone`, `text`, optional): Enter the phone number of the department approver (if applicable).
