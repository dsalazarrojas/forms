# Employee Complaint Form - Help Guide
## Purpose
The purpose of this form is to record and report employee complaints or incidents, which will be used to investigate and address the issue.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter a brief description of the complaint or incident in the **Employee Complaint** field.
2. If applicable, select the employee who is responsible for the complaint or incident in the **Employee Complained Against** field. You can choose multiple employees if necessary.
3. Provide a detailed **Description Of Complaint** to help investigators understand the nature of the issue.
4. Enter the date of the incident in the **Incident Date** field.
5. Enter the time of the incident in the **Incident Time** field.
6. Select the location of the incident from the available options in the **Incident Location** field.
7. Provide a detailed description of the incident in the **Description of Incident** field.
8. If you have any witness statements or evidence related to the incident, please provide them in the **Witness Statement** and **Evidence Attachements** fields, respectively.

## Field-by-Field Explanation
* **Employee Complaint** (id: 1, type: text, required: false): A brief description of the complaint or incident.
* **Employee Complained Against** (id: 2, type: select_multiple, required: false): Select the employee(s) who is responsible for the complaint or incident.
* **Description Of Complaint** (id: 3, type: text, required: false): A detailed description of the complaint or incident.
* **Incident Date** (id: 4, type: date, required: false): The date the incident occurred.
* **Incident Time** (id: 5, type: time, required: false): The time the incident occurred.
* **Incident Location** (id: 6, type: select_one, required: false): The location where the incident occurred.
* **Description of Incident** (id: 7, type: text, required: false): A detailed description of the incident.
* **Witness Statement** (id: 8, type: text, required: false): Any witness statements or statements from other employees related to the incident.
* **Evidence Attachements** (id: 9, type: note, required: false): Any evidence or attachments related to the incident, such as photos or videos.
