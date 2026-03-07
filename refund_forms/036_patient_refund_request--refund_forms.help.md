<thinking>...</thinking>

# Patient Refund Request - Help Guide

## Purpose
This form is used to request a refund for a patient's treatment. The form is designed to gather information about the refund request, including the reason for the refund, the refund amount, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient's treatment ID, which can be found on their medical record or by contacting the patient directly.
2. Provide a brief description of the reason for the refund.
3. Enter the refund amount that the patient is requesting.
4. You can optionally select whether the refund is active or inactive status.

## Field-by-Field Explanation

* **Patient treatment id** (`patient_treatment_id`, number, required): This is the unique identifier for the patient's treatment.
* **Reason for refund** (`reason_for_refund`, text, not required): Provide a brief description of the reason why the patient is requesting a refund.
* **Refund amount** (`refund_amount`, number, not required): Enter the amount of the refund the patient is requesting.
* **Description** (`description`, note, not required): Provide any additional details or comments about the refund request.
* **Patient id** (`patient_id`, text, not required): This is the patient's unique identifier.
* **Staff id** (`staff_id`, text, not required): This is the staff member's ID who is handling the refund request.
* **Created by** (`created_by`, select_one, not required): Select 'Yes' if the refund request was created by a staff member.
* **Status** (`status`, select_multiple, not required): Select 'Active' to indicate that the refund request is active, or 'Inactive' to mark it as inactive.
* **Updated by** (`updated_by`, text, not required): This is the staff member's ID who updated the refund request.
* **Updated at** (`updated_at`, date, not required): This is the date and time when the refund request was last updated.
* **Created at** (`created_at`, date, required): This is the date and time when the refund request was created.
* **Submitted at** (`submitted_at`, date, not required): This is the date and time when the refund request was submitted.
* **Submitted by** (`submitted_by`, text, not required): This is the staff member's ID who submitted the refund request.
* **Assigned to** (`assigned_to`, select_one, not required): Select 'Yes' to indicate that the refund request is assigned to a staff member.
* **Assigned by** (`assigned_by`, text, not required): This is the staff member's ID who assigned the refund request.
* **Due date** (`due_date`, date, not required): This is the date when the refund request is due.
* **Assigned status** (`assigned_status`, select_one, not required): Select 'Active' to indicate that the refund request is assigned status.
* **Submitted status** (`submitted_status`, select_one, not required): Select 'Active' to indicate that the refund request is submitted status.
