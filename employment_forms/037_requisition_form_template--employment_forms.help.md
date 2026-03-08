# Requisition Form Template - Help Guide
## Purpose
The Requisition Form Template is used to create formal requests for goods or services. This form is intended for requisitioners to provide their details, the item they are requisitioning, and other relevant information related to the requisition.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Fill out your requisitioner's details, including Requisition Number, Requisition Date, Requisitioner Name, Requisitioner Department, Requisitioner Email, and Requisitioner Phone.
2. Provide information about the item being requisitioned, including Requisition Item, Requisition Description, and Requisition Cost.
3. Add any additional comments, notes, or attachments related to the requisition.
4. Select the Requisition Status and Requisition Approvals if required.
5. Choose the Requisition Reviewers if necessary.
6. Set the Requisition Due Date and Requisition Due Time if applicable.
7. Specify the Requisition Item Category and Requisition Item Subcategory.
8. Select the Requisition Requested By and Requisition Requested Date.
9. Add any changes to the Requisition Status, if needed.
10. Provide Requisition Comments if required.

## Field-by-Field Explanation

* **Requisition Number** (`requisition_number`, `text`, required: false): Enter a unique number for the requisition.
* **Requisition Date** (`requisition_date`, `date`, required: false): Enter the date when the requisition is created.
* **Requisitioner Name** (`requisitioner_name`, `text`, required: false): Enter the name of the person creating the requisition.
* **Requisitioner Department** (`requisitioner_department`, `text`, required: false): Enter the department of the person creating the requisition.
* **Requisitioner Email** (`requisitioner_email`, `email`, required: false): Enter the email address of the person creating the requisition.
* **Requisitioner Phone** (`requisitioner_phone`, `text`, required: false): Enter the phone number of the person creating the requisition.
* **Requisition Item** (`requisition_item`, `text`, required: false): Enter a description of the item being requisitioned.
* **Requisition Description** (`requisition_description`, `text`, required: false): Enter any additional information about the item being requisitioned.
* **Requisition Cost** (`requisition_cost`, `number`, required: false): Enter the cost of the item being requisitioned.
* **Requisition Status** (`requisition_status`, `text`, required: false): Select the current status of the requisition.
* **Requisition Approvals** (`requisition_approvals`, `select_one`, required: false): Select the approver(s) for the requisition.
* **Requisition Reviewers** (`requisition_reviewers`, `select_multiple`, required: false): Select the reviewer(s) for the requisition.
* **Requisition Due Date** (`requisition_due_date`, `date`, required: false): Enter the due date for the requisition.
* **Requisition Due Time** (`requisition_due_time`, `time`, required: false): Enter the due time for the requisition.
* **Requisition Item Category** (`requisition_item_category`, `text`, required: false): Enter the category of the item being requisitioned.
* **Requisition Item Subcategory** (`requisition_item_subcategory`, `text`, required: false): Enter the subcategory of the item being requisitioned.
* **Requisition Requested By** (`requisition_requested_by`, `text`, required: false): Enter the person or team requesting the item.
* **Requisition Requested Date** (`requisition_requested_date`, `date`, required: false): Enter the date the item was requested.
* **Requisition Status Change** (`requisition_status_change`, `text`, required: false): Add any changes to the requisition status.
* **Requisition Comments** (`requisition_comments`, `text`, required: false): Enter any comments about the requisition.
* **Requisition Attachment** (`requisition_attachment`, `text`, required: false): Upload any relevant attachments for the requisition.

Note: The required fields are marked as such in the YAML, and users should fill out only the necessary fields based on their specific requisition requirements.
