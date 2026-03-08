# Property Management Weekly Review - Help Guide

## Purpose
This form is used by property managers to review and update the status of properties under their management on a weekly basis.

## How To Complete This Form

1. Select the "weekly_review" field to indicate the week number of the review (e.g., Week 1, Week 2, etc.).
2. Enter the property address in the "property_address" field.
3. Choose the type of property (HOA, Rental, or Other) in the "property_type" field.
4. Select any issues encountered at the property in the "issues_encountered" field, using the provided options (Electrical, Plumbing, HVAC, Landscaping, or Pest control). You can select multiple options if necessary.
5. Describe the issues encountered in the "issues_description" field.
6. Select the status of the follow-up in the "follow_up_status" field, using the provided options (Open, In Progress, or Complete).
7. Enter any follow-up notes in the "follow_up_notes" field.
8. If necessary, enter the date and time of the follow-up in the "follow_up_date" and "follow_up_time" fields.
9. Answer "Yes" or "No" to whether there is a property manager assigned to the property in the "property_managers_name" field.
10. Enter the property manager's phone number and email in the "property_manager_phone" and "property_manager_email" fields, if applicable.
11. Enter any notes from the property manager in the "property_manager_notes" field.
12. Enter the tenant's name and phone number and email, if applicable.
13. Enter any notes from the tenant in the "tenant_notes" field.

## Field-by-Field Explanation

* **Weekly Review** (`weekly_review`, number, required): This field is used to select the week number of the review.
* **Property Address** (`property_address`, text, required): Enter the address of the property being reviewed.
* **Property Type** (`property_type`, select_one, required): Choose the type of property (HOA, Rental, or Other).
* **Issues Encountered** (`issues_encountered`, select_multiple, required): Select any issues encountered at the property, using the provided options (Electrical, Plumbing, HVAC, Landscaping, or Pest control).
* **Issues Description** (`issues_description`, text, required): Describe the issues encountered in detail.
* **Follow-up Status** (`follow_up_status`, select_one, required): Select the status of the follow-up (Open, In Progress, or Complete).
* **Follow-up Notes** (`follow_up_notes`, text, optional): Enter any follow-up notes.
* **Follow-up Date** (`follow_up_date`, date, optional): Enter the date of the follow-up, if applicable.
* **Follow-up Time** (`follow_up_time`, time, optional): Enter the time of the follow-up, if applicable.
* **Property Manager's Name** (`property_managers_name`, select_one, optional): Answer "Yes" or "No" to whether there is a property manager assigned to the property.
* **Property Manager's Phone** (`property_manager_phone`, text, optional): Enter the property manager's phone number.
* **Property Manager's Email** (`property_manager_email`, text, optional): Enter the property manager's email.
* **Property Manager's Notes** (`property_manager_notes`, text, optional): Enter any notes from the property manager.
* **Tenant's Name** (`tenant_name`, text, optional): Enter the tenant's name.
* **Tenant's Phone** (`tenant_phone`, text, optional): Enter the tenant's phone number.
* **Tenant's Email** (`tenant_email`, text, optional): Enter the tenant's email.
* **Tenant's Notes** (`tenant_notes`, text, optional): Enter any notes from the tenant.
* **Date** (`date`, date, required): Enter the current date.
* **Time** (`time`, time, optional): Enter the current time.
