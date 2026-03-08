<thinking>
This help guide will be based on the provided YAML form structure. To start, I'll need to understand the purpose of this form and check for relevance and non-duplication. The form appears to be related to customer interactions, likely for a service industry such as debt collection or financial services. I'll need to verify this assumption as I proceed.


The form has multiple pages, but it seems the purpose of this form is to collect detailed information about a customer's debt and their next meeting. The fields suggest this is a follow-up or next-step interaction with the customer, possibly after an initial session or consultation. I'll confirm this assumption as I continue to analyze the form structure.


Upon further review, it seems that the form is designed to collect the following information:


*   Session title and date
*   Session time
*   Customer name
*   Debt list (with multiple options)
*   Debt details (three separate fields)
*   Customer contact information (phone, email, address)
*   Follow-up note
*   Next meeting date and time
*   Next meeting location
*   Customer budget

This form appears to be comprehensive, covering both the current session and next steps with the customer. I'm assuming the purpose is for a debt collection or financial service company to keep track of customer interactions and progress.

To confirm, the form seems to be designed for both initial and follow-up sessions with customers, ensuring that all relevant details are captured for future reference.


</thinking>

# <string> - Help Guide
## Purpose
This form is designed to collect detailed information about a customer's debt and next meeting details for follow-up or next-step interactions with the service company.

## How To Complete This Form
To complete this form, follow these steps:


1.  Enter the **Session Title** and **Session Date** at the top.
2.  Provide your **Session Time**.
3.  Enter your **Customer Name** for identification.
4.  Select your **Debt List** by choosing 'Yes' or 'No' for each debt.
5.  Enter the specific details for each debt (**Debt 1**, **Debt 2**, **Debt 3**).
6.  Enter your **Customer Phone Number**, **Email**, and **Address**.
7.  Leave a **Follow-up Note** for the service provider.
8.  Schedule your **Next Meeting Date**, **Time**, and **Location**.
9.  Finally, provide your **Customer Budget** for reference.

## Field-by-Field Explanation
*   **Session Title** (`session_title`, text, **required**): A brief title for the session or interaction.
*   **Session Date** (`session_date`, date, **required**): The date of the session or interaction.
*   **Session Time** (`session_time`, time, **required**): The time of the session or interaction.
*   **Customer Name** (`customer_name`, text, **required**): The name of the customer for identification.
*   **Debt List** (`debt_list`, select_multiple, **required**): Select 'Yes' or 'No' for each debt listed.
*   **Debt 1** (`debt_1`, text, **required**): Enter the details of the first debt.
*   **Debt 2** (`debt_2`, text, **required**): Enter the details of the second debt.
*   **Debt 3** (`debt_3`, text, **required**): Enter the details of the third debt.
*   **Customer Phone** (`customer_phone`, text, **required**): Enter your customer's phone number.
*   **Customer Email** (`customer_email`, email, **required**): Enter your customer's email address.
*   **Customer Address** (`customer_address`, text, **required**): Enter your customer's address.
*   **Follow-up Note** (`follow_up_note`, note, **required**): Leave a note for the service provider.
*   **Next Meeting Date** (`next_meeting_date`, date, **required**): Schedule the date of the next meeting.
*   **Next Meeting Time** (`next_meeting_time`, time, **required**): Schedule the time of the next meeting.
*   **Next Meeting Location** (`next_meeting_location`, text, **required**): Enter the location of the next meeting.
*   **Customer Budget** (`customer_budget`, text, **required**): Enter the customer's budget.
