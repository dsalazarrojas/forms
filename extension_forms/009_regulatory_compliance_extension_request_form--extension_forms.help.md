<thinking>
**Reasoning for Form Purpose and Duplication Check**: 
The `regulatory_compliance_extension_request_form` is used to request an extension for regulatory compliance. This form will ask for the team members involved, reason, expected date of completion, review workflow, contact person, and additional comments. This is not a form used for duplicate requests, as users are required to submit their form id to ensure a unique and trackable request.
</thinking>

# regulatory_compliance_extension_request_form - Help Guide

## Purpose
This form is designed to request an extension for regulatory compliance.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the form ID to ensure a unique and trackable request.
2. List the team members involved in the compliance request.
3. Provide a clear reason for the request.
4. Specify the expected date of completion.
5. Choose the review workflow (Compliance Review, Operational Review, or Both).
6. Enter the name and email address of the contact person.
7. Add any additional comments (optional).

## Field-by-Field Explanation

* **Extension Request** (`extension_request`, text, not required): This is the main text field where you can describe the request.
* **Team Members** (`team_members`, select_multiple, required): List the team members involved in the compliance request.
* **Reason** (`reason`, text, required): Provide a clear reason for the request.
* **Expected Date** (`expected_date`, date, not required): Specify the date of expected completion.
* **Review Workflow** (`review_workflow`, select_one, required): Choose the review workflow (Compliance Review, Operational Review, or Both).
* **Contact Person** (`contact_person`, text, required): Enter the name and email address of the contact person.
* **Comment** (`comment`, text, not required): Add any additional comments about the request.
* **Form ID** (`form_id`, number, required): Fill in a unique number for the form to ensure trackability and avoid duplication.
