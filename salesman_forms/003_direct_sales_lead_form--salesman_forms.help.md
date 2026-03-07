<thinking>
This is a form designed for capturing sales leads, and it's essential to ensure that the information is accurate and comprehensive. The form is divided into several sections, each with its own set of fields. To ensure that the form is filled out correctly, please carefully read through each field explanation below.

</thinking>

# direct_sales_lead_form - Help Guide
## Purpose
The direct sales lead form is a tool used to collect information about potential customers and track their sales progress. It's essential to fill out this form accurately and completely to ensure that the sales team can effectively follow up with leads and convert them into sales.

## How To Complete This Form
1. Fill out the form in the following order: First Name, Last Name, Email, Phone, and Lead Source.
2. Select the correct Lead Source from the provided options (Google, Facebook, Twitter, or Other).
3. Choose the correct Sales Stage from the provided options (New Lead, Qualified, Closed Won, or Closed Lost).
4. If you've selected "Other Lead Sources" or "Other Sales Stages", please provide a brief explanation in the text field.
5. If you've selected "Other Lead Sources" or "Other Sales Stages", please provide the corresponding CRM ID and type in the respective fields.
6. Fill out the custom data fields as needed.
7. Add any additional notes in the "Notes" field.
8. If required, select the CRM Type and fill out the CRM User ID and Token fields.

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required): Enter the first name of the potential customer.
* **Last Name** (`last_name`, `text`, required): Enter the last name of the potential customer.
* **Email** (`email`, `email`, required): Enter the email address of the potential customer.
* **Phone** (`phone`, `text`, required): Enter the phone number of the potential customer.
* **Email Opt-out** (`email_opt_out`, `select_multiple`, optional): Select 'Yes' if the customer has opted out of email communications, or 'No' otherwise.
* **Lead Source** (`lead_source`, `select_one`, required): Select the source of the lead (Google, Facebook, Twitter, or Other).
* **Other Lead Sources** (`lead_source_others`, `text`, optional): If you've selected "Other Lead Sources", please provide a brief explanation of the source.
* **Sales Stage** (`sales_stage`, `select_one`, required): Select the current sales stage of the lead (New Lead, Qualified, Closed Won, or Closed Lost).
* **Other Sales Stages** (`sales_stage_others`, `text`, optional): If you've selected "Other Sales Stages", please provide a brief explanation of the stage.
* **CRM ID** (`crm_id`, `number`, optional): Enter the CRM ID associated with the lead, if applicable.
* **CRM Type** (`crm_type`, `select_multiple`, required): Select the CRM type (Salesforce, HubSpot, etc.).
* **CRM User ID** (`crm_user_id`, `number`, optional): Enter the CRM user ID associated with the lead, if applicable.
* **CRM Token** (`crm_token`, `text`, optional): Enter the CRM token associated with the lead, if applicable.
* **Custom Data 1-10** (`custom_data_1-10`, `text`, optional): Fill out any custom data fields as needed.
* **Notes** (`notes`, `note`, optional): Add any additional notes about the lead.
* **Date of Birth** (`date_of_birth`, `date`, optional): Enter the date of birth of the potential customer, if applicable.
