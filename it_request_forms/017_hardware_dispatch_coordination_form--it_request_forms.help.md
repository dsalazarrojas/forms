# Hardware Dispatch Coordination Form - Help Guide
## Purpose
The Hardware Dispatch Coordination Form is used for coordinating the dispatch of hardware items to customers or internal teams.

## How To Complete This Form
To complete this form, follow the steps below:

1. Fill in the form title and select the relevant category.
2. Enter a detailed description of the dispatch.
3. Choose the dispatch date.
4. Select the status of the dispatch (e.g., Scheduled, Delivered, Canceled, Returned, or Unknown).
5. Assign the tools or resources required for the dispatch.
6. Enter the email and phone number of the person responsible for the dispatch.
7. Add any additional notes or comments.

## Field-by-Field Explanation
* **Form Title** (`form_title`, text, required): Enter a brief title for the dispatch.
* **Category** (`category`, select_one, required): Select the category of the dispatch (e.g., IT Request Forms, Other).
* **Description** (`description`, text, required): Enter a detailed description of the dispatch.
* **Dispatch Date** (`dispatch_date`, date, required): Choose the date of the dispatch.
* **Status** (`dispatch_status`, select_one, required): Select the status of the dispatch (e.g., Scheduled, Delivered, Canceled, Returned, or Unknown).
* **Assigned Tool** (`assigned_tool`, select_multiple, required): Choose the tools or resources assigned to the dispatch.
* **Form ID** (`form_id`, number, optional): This field is not required but can be used to track additional information.
* **Notes** (`notes`, note, optional): Enter any additional comments or notes for the dispatch.
* **Email** (`email`, email, required): Enter the email of the person responsible for the dispatch.
* **Phone** (`phone`, text, required): Enter the phone number of the person responsible for the dispatch.
* **Date** (`date`, date, optional): Choose the date of the dispatch (if not using the dispatch_date field).
* **Time** (`time`, time, optional): Choose the time of the dispatch (if not using the dispatch_date field).
