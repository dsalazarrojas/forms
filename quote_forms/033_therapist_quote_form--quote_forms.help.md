# Therapist Quote Form - Help Guide
## Purpose
The Therapist Quote Form is used to gather information from clients to determine their preferences and requirements for a session with a therapist. This form helps therapists to better understand client needs and provide the best possible service.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill out the "Client Information" page with your name and other relevant details.
2. On the next page, select the type of session you are looking for (e.g., "Yes" for a session, "No" for not looking for a session).
3. On the next page, select how often you would like to meet (e.g., "Yes" for regular meetings, "No" for one-time meetings).
4. On the next page, enter the date you would like to start and end your sessions.
5. On the next page, choose the time of day you would like to meet (e.g., morning, afternoon, evening).
6. Select the duration of your desired session.
7. Enter your available budget for the session.
8. Choose how you would like to pay for the session (e.g., "Yes" for payment plans, "No" for single payment).
9. Review our policies and procedures by reading the "Policies" field.
10. On the last page, enter your email address and phone number.
11. Finally, select "Yes" or "No" to submit your request.

## Field-by-Field Explanation
* **Client Information** (`client_input`, text, required: false): Enter your name, contact information, and any other relevant details.
* **What type of session are you looking for?** (`session_type`, select_one, required: false): Select the type of session you are interested in (e.g., "Yes" for a session, "No" for not looking for a session).
* **How often would you like to meet?** (`frequency`, select_multiple, required: false): Choose how often you would like to meet (e.g., "Yes" for regular meetings, "No" for one-time meetings).
* **What date would you like to start?** (`start_date`, date, required: false): Enter the date you would like to start your sessions.
* **What date would you like to end?** (`end_date`, date, required: false): Enter the date you would like to end your sessions.
* **What time of day would you like to meet?** (`start_time`, time, required: false): Choose the time of day you would like to meet (e.g., morning, afternoon, evening).
* **How long would you like the session to last?** (`duration`, number, required: false): Enter the length of your desired session.
* **What is your available budget for the session?** (`cost`, number, required: false): Enter your available budget for the session.
* **How would you like to pay for the session?** (`payment_method`, select_multiple, required: false): Choose how you would like to pay for the session (e.g., "Yes" for payment plans, "No" for single payment).
* **Policies** (`policies`, note, required: false): Review our policies and procedures by reading this field.
* **Next Steps** (`next_steps`, text, required: false): This is where you will see your next steps.
* **What is your email address?** (`email`, email, required: false): Enter your email address.
* **What is your phone number?** (`phone`, text, required: false): Enter your phone number.
* **Submit** (`submit`, select_one, required: false): Select "Yes" to submit your request or "No" to cancel.

## Tips
* Make sure to fill out all required fields.
* Be as specific as possible when providing information.
* Review the "Policies" field for important information.
* Double-check your email and phone number for accuracy.
