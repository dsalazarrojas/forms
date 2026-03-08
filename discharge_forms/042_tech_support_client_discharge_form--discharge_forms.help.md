# Tech Support Client Discharge Form - Help Guide
## Purpose
This form is used to confirm the resolution of an issue and gather feedback from the client to improve the support process.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter the ticket number associated with the issue.
2.  Enter the client's name.
3.  Confirm the resolution of the issue with the client.
4.  Rate the client's satisfaction with the support received.
5.  Provide any additional feedback or comments.

## Field-by-Field Explanation

*   **Discharge Form** (`tech_support_client_discharge_form`, `note`, required: false): This is a title section that introduces the form.
*   **Ticket Number** (`support_ticket_number`, `text`, required: false): Enter the number of the support ticket associated with the issue.
*   **Client's Name** (`client_name`, `text`, required: false): Enter the client's name.
*   **Client Confirmation** (`client_confirmation`, `select_one`, required: false): Select 'True' if the client confirms the resolution of the issue, 'False' otherwise.
*   **Client Satisfaction** (`client_satisfaction`, `select_one`, required: false): Rate the client's satisfaction with the support received: Satisfied, Unsatisfied, or Neutral.
*   **Client Feedback** (`client_feedback`, `text`, required: false): Provide any additional comments or feedback the client may have.
*   **Resolution Notes** (`resolution_notes`, `text`, required: false): Enter any notes the support agent may want to record.
*   **Tech Support Agent** (`tech_support_agent`, `text`, required: false): Enter the name of the support agent handling the issue.
