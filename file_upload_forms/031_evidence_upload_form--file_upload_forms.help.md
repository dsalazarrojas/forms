# Evidence Upload Form - Help Guide
## Purpose
The Evidence Upload Form is designed to collect and document evidence related to specific cases or events.

## How To Complete This Form
To complete this form, follow these steps:

1. Upload the evidence you want to document.
2. Provide a brief description of the evidence.
3. Select the type of case it belongs to (Legal, Compliance, or Investigative).
4. Choose the status of the evidence (Pending, Verified, Rejected, or Archived).
5. Optionally, add any additional notes or information.
6. Optionally, provide the contact information (email and phone number) of the assignee.

## Field-by-Field Explanation
* **Upload Evidence** (`upload_evidence`, text, optional): Upload the evidence you want to document.
* **Description** (`description`, text, optional): A brief description of the evidence.
* **Date Taken** (`date_taken`, date, optional): The date the evidence was taken or collected.
* **Time Taken** (`time_taken`, time, optional): The time the evidence was taken or collected.
* **Location** (`location`, text, optional): The location where the evidence was taken or collected.
* **Case Number** (`case_number`, text, optional): The number of the case the evidence belongs to.
* **Case Type** (`case_type`, select_one, required): Select the type of case (Legal, Compliance, or Investigative).
* **Assignee** (`assignee`, text, optional): The person or entity assigned to the case.
* **Evidence Status** (`evidence_status`, select_multiple, optional): Select the status of the evidence (Pending, Verified, Rejected, or Archived).
* **Notes** (`notes`, note, optional): Add any additional notes or information.
* **Email** (`email`, email, optional): Provide the email address of the assignee.
* **Phone** (`phone`, text, optional): Provide the phone number of the assignee.

## Tips
* Make sure to complete all required fields accurately.
* Be as detailed as possible when describing the evidence and its location.
* Use the correct case type and status to ensure the evidence is tracked correctly.
