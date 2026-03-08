# Hybrid Learning Support Desk Request Form - Help Guide
## Purpose
This form is designed to support hybrid learning requests. It helps in gathering essential information about a user's support request, including their contact method, time zone, date, and resolution details. The form's main goal is to assign a technician to the request and track the resolution progress.

## How To Complete This Form
To complete this form, follow the steps below:

1. Fill in your User Information, including your name and contact details.
2. Describe your Support Request in the Support Request field.
3. Choose the type of learning resources you are requesting (Audio, Video, Image, or a combination).
4. Select your preferred contact method (Phone, Email, Chat, or In Person).
5. Specify your Time Zone (if applicable).
6. Enter the Date for which you are requesting support.
7. If you want to add any additional comments, you can do so in the Additional Comments field.
8. Select a Category for your request (IT or Non-IT).
9. Provide your Location (if applicable).
10. If you have a preferred tool or device assigned to you, enter it in the Assigned Tool field.
11. Finally, enter any additional comments or notes in the Notes field.

## Field-by-Field Explanation

### User Information
* **User Information** (`id: 1`, `type: text`, `required: true`): This is where you enter your personal details, including your name and contact information.

### Support Request
* **Support Request** (`id: 2`, `type: text`, `required: true`): This field is where you describe the reason for your support request.

### Learning Resources
* **Learning Resources** (`id: 3`, `type: select_multiple`, `required: true`): Here, you select the type(s) of learning resources you are requesting (Audio, Video, Image, or a combination).

### Description
* **Description** (`id: 4`, `type: text`, `required: false`): This field is optional and allows you to provide additional context or details about your request.

### Contact Method
* **Contact Method** (`id: 5`, `type: select_one`, `required: true`): Choose how you would like to be contacted (Phone, Email, Chat, or In Person).

### Time Zone
* **Time Zone** (`id: 6`, `type: time`, `required: false`): If your Time Zone is not your local time, please enter it here.

### Date
* **Date** (`id: 7`, `type: date`, `required: true`): Enter the Date for which you are requesting support.

### Additional Comments
* **Additional Comments** (`id: 8`, `type: text`, `required: false`): This is an optional field for any additional comments you want to provide.

### Assigned Technician
* **Assigned Technician** (`id: 9`, `type: text`, `required: false`): This field is not directly applicable as it is currently not being used.

### Resolution
* **Resolution** (`id: 10`, `type: text`, `required: true`): Describe the resolution to your support request.

### Resolution Date
* **Resolution Date** (`id: 11`, `type: date`, `required: true`): Enter the Date the support request was resolved.

### Category
* **Category** (`id: 12`, `type: select_one`, `required: true`): Select the Category for your request (IT or Non-IT).

### Location
* **Location** (`id: 13`, `type: text`, `required: false`): This field is optional and is used to indicate where you are located.

### Assigned Tool
* **Assigned Tool** (`id: 14`, `type: text`, `required: false`): This field is not directly applicable as it is currently not being used.

### Notes
* **Notes** (`id: 15`, `type: text`, `required: false`): Any additional comments or notes about your request can be entered here.

## Tips
- Make sure to fill out each field carefully and accurately.
- Ensure that each request is unique based on the combination of Category and Resolution fields to avoid duplication.
- If you have any questions or concerns, please do not hesitate to contact us.
