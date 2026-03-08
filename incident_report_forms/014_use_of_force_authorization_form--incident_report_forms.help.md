# Use Of Force Authorization Form - Help Guide
## Purpose
This form is used for authorizing the use of force in a given incident, providing a standardized way to document and authorize the use of force.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the date and time of the incident in the "Incident Date" and "Incident Time" fields.
2. Enter the name and ID of the officer in charge of the incident in the "Officer In Charge" and "Officer In Charge ID" fields.
3. Enter the name and ID of the suspect involved in the "Suspect Name" and "Suspect ID" fields.
4. Provide a detailed description of the incident in the "Description" field.
5. Select the type of force used from the "Force Used" dropdown menu.
6. Select the injuries sustained by the suspect from the "Injuries Sustained" dropdown menu.
7. Have the officer in charge and suspect sign the form in the "Officer In Charge Signature" and "Suspect Signature" fields.
8. Enter the name of the person reporting the incident in the "Incident Reporter" field.
9. Enter the date the form was completed in the "Date Completed" field.
10. Enter the name of the officer who completed the form in the "Completed By" field.

## Field-by-Field Explanation

- **Incident Date** (`incident_date`, `date`, `false`): Enter the date the incident occurred.

- **Incident Time** (`incident_time`, `time`, `false`): Enter the time the incident occurred.

- **Officer In Charge** (`officer_in_charge`, `text`, `false`): Enter the name of the officer in charge of the incident.

- **Officer In Charge ID** (`officer_in_charge_id`, `number`, `false`): Enter the ID of the officer in charge of the incident.

- **Suspect Name** (`suspect_name`, `text`, `false`): Enter the name of the suspect involved.

- **Suspect ID** (`suspect_id`, `number`, `false`): Enter the ID of the suspect involved.

- **Description** (`description`, `text`, `false`): Provide a detailed description of the incident.

- **Force Used** (`force_used`, `select_one`, `false`): Select the type of force used during the incident:

    • Police Car
    • Pepper spray
    • Taser

- **Injuries Sustained** (`injuries_sustained`, `select_multiple`, `false`): Select the injuries sustained by the suspect:

    • Head
    • Neck
    • Back
    • Face
    • Arm
    • Leg
    • Hand
    • Foot
    • Other

- **Officer In Charge Signature** (`officer_in_charge_signature`, `note`, `false`): Sign the form, confirming your involvement in the incident.

- **Suspect Signature** (`suspect_signature`, `note`, `false`): Sign the form, confirming your involvement in the incident.

- **Incident Reporter** (`incident_reporter`, `select_one`, `false`): Enter the name of the person reporting the incident:

    • Officer
    • Witness
    • Witness 1
    • Witness 2

- **Date Completed** (`date_completed`, `date`, `false`): Enter the date the form was completed.

- **Completed By** (`completed_by`, `text`, `false`): Enter the name of the officer who completed the form.

# Tips

* Make sure to fill out all required fields.
* Review the form carefully before submitting to ensure accuracy and completeness.
* If you are unsure about any information, consult with a supervisor or colleague.
* Keep the form in a secure location to ensure confidentiality.
