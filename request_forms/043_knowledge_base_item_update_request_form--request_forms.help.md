# Knowledge Base Item Update Request Form - Help Guide
## Purpose

The Knowledge Base Item Update Request Form is a form used to update existing knowledge base items. It helps knowledge base administrators modify and maintain the accuracy of information within the knowledge base.

## How To Complete This Form

1. Ensure you have the necessary permissions and access rights to complete this form.
2. Fill out the form completely and accurately, ensuring you are providing the correct information for the update.
3. Select the correct category from the provided options.
4. Enter a detailed description of the update in the description field.
5. Choose the correct priority and notes for the update.
6. Enter a valid email address for notification purposes.
7. Enter your phone number for communication.
8. Select the correct Prophet (assuming a specific business logic is in place here).
9. Provide a submit date and time.
10. Select the correct report and status options.
11. Choose the assigned tool and user for the update.
12. Select the correct submitted by user and date and time.
13. Enter any submitted notes or status for the update.

## Field-by-Field Explanation

* **Category** (`category`, select_one, required): Select the category that the knowledge base item falls under.
* **Description** (`description`, text, required): Enter a detailed description of the update.
* **Priority** (`priority`, select_multiple, optional): Choose the priority of the update.
* **Notes** (`knowledge_base_item_update_request_form_note`, note, required): Enter any additional notes or comments for the update.
* **Email** (`email`, email, required): Enter a valid email address for notification purposes.
* **Phone** (`phone`, text, required): Enter your phone number for communication purposes.
* **Prophet** (`is_prophet`, select_multiple, optional): Select the correct Prophet (assuming a specific business logic is in place here).
* **Submit Date** (`date`, date, required): Enter the date that the update should be submitted.
* **Submit Time** (`time`, time, required): Enter the time that the update should be submitted.
* **Report** (`knowledge_base_item_update_request_form_report`, select_multiple, required): Select the correct report options.
* **Status** (`status`, select_one, required): Select the correct status of the update.
* **Assigned Tool** (`assigned_tool`, select_multiple, required): Choose the assigned tool for the update.
* **Assigned User** (`assigned_user`, text, required): Enter the name of the user assigned to the update.
* **Submitted By** (`submitted_by`, select_one, required): Select the user who submitted the update.
* **Submitted Date** (`submitted_date`, date, required): Enter the date that the update was submitted.
* **Submitted Time** (`submitted_time`, time, required): Enter the time that the update was submitted.
* **Submitted Note** (`submitted_note`, note, required): Enter any additional notes or comments for the update.
* **Submitted By** (`submitted_user`, text, required): Enter the name of the user who submitted the update.
* **Submitted Status** (`submitted_status`, text, required): Enter the status of the submitted update.
