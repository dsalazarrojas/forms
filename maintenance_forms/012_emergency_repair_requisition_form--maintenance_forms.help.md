# Emergency Repair Requisition Form - Help Guide
## Purpose
The Emergency Repair Requisition Form is used to report and manage emergency repairs that require immediate attention to prevent further damage or ensure the safety of occupants.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the `Property` field with the building or area where the issue is located.
2. Enter the contact information in the `Contact` fields: `Phone` and `Email`.
3. Describe the issue in the `Description` field.
4. Select the `Location` of the repair.
5. Provide the `Date` and `Time` of occurrence.
6. Choose the type of repair: `Urgent`, `Regular`, or `Non-emergency`.
7. Select the `Priority` level: `High`, `Medium`, or `Low`.
8. Assign the repair to: `Maintenance Team`, `Repair Person`, or `Property Manager`.
9. Add any additional `Notes` regarding the repair.
10. Finally, submit the form and it will be reviewed and acted upon.

## Field-by-Field Explanation

* **Property** (`property_id`, number, required/optional): Enter the building or area number where the issue is located.
* **Contact** (`contact_person`, text, required/optional): Enter the name of the person who reported the issue.
* **Phone** (`contact_phone`, text, required/optional): Enter the phone number of the person who reported the issue.
* **Email** (`contact_email`, email, required/optional): Enter the email address of the person who reported the issue.
* **Description** (`description`, text, required/optional): Describe the issue in detail.
* **Location** (`location`, select_one, required/optional): Select the building or area where the issue is located from the options provided.
* **Date** (`date_of_occurrence`, date, required/optional): Enter the date when the issue occurred.
* **Time** (`time_of_occurrence`, time, required/optional): Enter the time when the issue occurred.
* **Type** (`repair_type`, select_multiple, required/optional): Select the type of repair from the options provided: `Urgent`, `Regular`, or `Non-emergency`.
* **Priority** (`priority`, select_one, required/optional): Select the priority level of the repair from the options provided: `High`, `Medium`, or `Low`.
* **Assigned To** (`assigned_to`, select_one, required/optional): Select the person or team responsible for the repair from the options provided: `Maintenance Team`, `Repair Person`, or `Property Manager`.
* **Notes** (`notes`, note, required/optional): Add any additional notes regarding the repair.
* **Submitted By** (`submitted_by`, text, required/optional): Enter the name of the person who submitted the form.
* **Submitted Date** (`submitted_date`, date, required/optional): Enter the date and time the form was submitted.
* **Assigned Date** (`assigned_date`, date, required/optional): The date the repair was assigned to the selected team/person.
* **Completed Date** (`completed_date`, date, required/optional): The date the repair was completed.
