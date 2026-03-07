<thinking>
The form is intended to capture information from plumbers and their customers. It helps track referrals and customer interactions. The form is likely used by plumbers to record and follow up on customer leads.
To avoid duplication, users should not create a new referral if a customer already exists in the system or if they have a duplicate referral for the same customer.
The form is likely used by plumbers to capture information about customers they have referred or are currently interacting with. It will help them track the status and follow-up of these leads.
This form might be used in conjunction with other forms that capture customer interactions, such as chats, calls, or meetings.
</thinking>

# Plumber Referral Form - Help Guide
## Purpose
This form is designed to capture information from plumbers and their customers to help track referrals and customer interactions.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the customer's name.
2. Specify how you met the customer.
3. Choose the type of job the customer is looking for.
4. Enter the customer's phone number.
5. Enter the customer's email address.
6. Choose the status of the lead (if applicable).
7. Indicate the status of follow-up activities (if applicable).
8. Enter the date when the lead status changed (if applicable).
9. Choose the frequency of follow-up activities (if applicable).
10. Add any additional customer notes.

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, text, required/optional): Enter the customer's full name.
* **Referral Source** (`referral_source`, text, required/optional): Describe how you met the customer.
* **How did you meet the customer?** (`customer_name`, text, required/optional): This field duplicates the customer's name field. Please use this field to describe how you met the customer.
* **Job Type** (`job_type`, text, required/optional): Enter the type of job the customer is looking for.
* **Customer Phone** (`customer_phone`, text, required/optional): Enter the customer's phone number.
* **Customer Email** (`customer_email`, email, required/optional): Enter the customer's email address.
* **Lead Status** (`lead_status`, select_one, required/optional): Choose the status of the lead from the options available (if applicable).
* **Follow Up Status** (`follow_up_status`, select_multiple, required/optional): Indicate the status of follow-up activities from the options available (if applicable).
* **Lead Status Change Date** (`lead_status_change_date`, date, required/optional): Enter the date when the lead status changed (if applicable).
* **Follow Up Date** (`follow_up_date`, date, required/optional): Choose the date for follow-up activities (if applicable).
* **Follow Up Frequency** (`follow_up_frequency`, text, required/optional): Describe the frequency of follow-up activities.
* **Customer Notes** (`customer_note`, text, required/optional): Add any additional customer notes.
* **Assigned Tool** (`assigned_tool`, select_one, required/optional): Choose the tool assigned to the customer from the available options.
* **Created At** (`created_at`, time, required/optional): This field is not editable, it displays the date and time when the referral was created.
* **Inactive** is selected by default when a status is chosen in the Follow Up Status field.
* When filling the Follow Up Frequency field, you can describe how frequently the plumber will follow up with the customer, e.g., daily, weekly, or monthly.
