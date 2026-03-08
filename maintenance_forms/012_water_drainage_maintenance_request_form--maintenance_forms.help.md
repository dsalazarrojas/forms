# water_drainage_maintenance_request_form - Help Guide
## Purpose
The water drainage maintenance request form is used to submit a request for maintenance on the facility's water drainage system.

## How To Complete This Form
To complete this form, please follow these steps:
1. Enter the location of the issue in the "location" field.
2. Provide a detailed description of the issue in the "issue description" field.
3. Select the priority of the issue from the options provided.
4. Select the current status of the issue from the options provided.
5. Check the "assigned to" field if you would like to assign the issue to a specific person or crew.
6. If you would like to add any additional notes for the maintenance crew, you can type them in the "notes" field.
7. Finally, submit the form.

## Field-by-Field Explanation

* **Request Form** (`request_form`, text, required: false): This field is for providing a brief title or summary of the issue.
* **location** (`location`, text, required: false): Enter the exact location of the issue, such as the building and room number.
* **photo** (`photo`, text, required: false): You can attach any relevant photos or images of the issue.
* **issue description** (`issue_description`, text, required: false): Describe the issue in as much detail as possible, including any symptoms or observations.
* **Priority** (`priority`, select_one, required: false): Select the priority of the issue from the options provided (Normal, High, Low).
* **Status** (`status`, select_one, required: false): Select the current status of the issue from the options provided (New, In progress, Done).
* **assigned to** (`assigned_to`, select_one, required: false): Check this field if you would like to assign the issue to a specific person or crew.
* **assigned tool** (`assigned_tool`, text, required: false): If you would like to specify a tool or equipment needed for the maintenance, enter it here.
* **notes** (`notes`, text, required: false): Additional notes for the maintenance crew, such as any safety precautions or special instructions.
* **submitted by** (`submitted_by`, text, required: false): Your name and title or role for reference purposes.
