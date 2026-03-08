# customer_acquisition_log_form - Help Guide
## Purpose
The purpose of this form is to record and track customer interactions, including contacts made via phone, email, in-person, and other channels. It helps sales and customer support teams to document customer conversations, set up follow-up activities, and analyze customer behavior.

## How To Complete This Form

To complete this form, follow the instructions below:

1. Select the relevant customer and contact method from the dropdown menus.
2. Enter the date and time of contact.
3. Add any additional notes about the conversation.
4. Specify the customer type (new or existing lead).
5. Choose the sales status (open, closed, or follow-up).
6. Select the assigned user for the contact.
7. Indicate the customer status (active, inactive, or churned).
8. Choose the follow-up date and time.
9. Select the follow-up method (in-person, phone, email, etc.).
10. Specify the follow-up status (open, closed, or scheduled).
11. Select the follow-up user.
12. Add follow-up notes.
13. Select the lead source (new or existing).
14. Add lead source notes.
15. Choose the lead source status (open, closed, or scheduled).

## Field-by-Field Explanation

* **Customer Acquisition Log** (`customer_acquisition_log`, text, required): Enter a brief description of the customer contact.
* **Contact Person** (`contact_person`, text, optional): Enter the name of the person who made contact with the customer.
* **Email** (`email`, email, optional): Enter the customer's email address.
* **Phone** (`phone`, text, optional): Enter the customer's phone number.
* **Date of Contact** (`date_of_contact`, date, optional): Enter the date of the customer contact.
* **Time of Contact** (`time_of_contact`, time, optional): Enter the time of the customer contact.
* **Notes** (`notes`, note, optional): Add any additional notes about the customer contact.
* **Contact Method** (`contact_method`, select_one, optional): Choose the contact method (in-person, phone, email, chat, text, webinar).
* **Customer Type** (`customer_type`, select_multiple, optional): Indicate if the customer is a new or existing lead.
* **Sales Status** (`sales_status`, select_one, optional): Choose the sales status (open, closed, or follow-up).
* **Assigned User** (`assigned_user`, select_one, optional): Select the user assigned to the customer contact.
* **Customer Status** (`customer_status`, select_one, optional): Indicate the customer status (active, inactive, or churned).
* **Next Steps** (`next_steps`, note, optional): Add any next steps or follow-up activities.
* **Customer Notes** (`customer_notes`, note, optional): Add any additional customer notes.
* **Follow-up Date** (`follow_up_date`, date, optional): Enter the follow-up date.
* **Follow-up Time** (`follow_up_time`, time, optional): Enter the follow-up time.
* **Follow-up Method** (`follow_up_method`, select_one, optional): Choose the follow-up method (in-person, phone, email, etc.).
* **Follow-up Status** (`follow_up_status`, select_one, optional): Choose the follow-up status (open, closed, or scheduled).
* **Follow-up User** (`follow_up_user`, select_one, optional): Select the user for the follow-up activity.
* **Follow-up Notes** (`follow_up_notes`, note, optional): Add any follow-up notes.
* **Follow-up Type** (`follow_up_type`, select_one, optional): Choose the follow-up type (new lead or existing lead).
* **Lead Source** (`lead_source`, select_one, optional): Indicate if the lead is from a new or existing source.
* **Lead Source Notes** (`lead_source_notes`, note, optional): Add any additional lead source notes.
* **Lead Source Status** (`lead_source_status`, select_one, optional): Choose the lead source status (open, closed, or scheduled).
* **Lead Source User** (`lead_source_user`, select_one, optional): Select the user for the lead source.
