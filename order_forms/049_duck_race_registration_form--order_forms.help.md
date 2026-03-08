# duck_race_registration_form - Help Guide
## Purpose

The duck race registration form is a tool used by participants to register for the duck racing event. This form captures essential information from participants, ensuring a smooth and organized event process.

## How To Complete This Form

1.  Start by selecting the "Participant Information" page.
2.  Fill out the "Participant Information" page with the required fields.
3.  Proceed to the "Event Information" page to fill out the event details.
4.  Next, go to the "Payment Information" page and choose your preferred payment method.
5.  Move to the "Registration Details" page to add any additional comments or remarks.
6.  Finally, review the "Participant Agreement" page to agree to participate in the event.
7.  If needed, add any additional information on the "Participant Additional Info" page.
8.  Complete the "Event Info Additional" page with any extra information about the event.
9.  Review and submit the form.

## Field-by-Field Explanation

*   **Participant Information (Participant Information)** (`participant_info`, text, required: false): This page captures essential information about the participant, including their name and contact details.
    *   **Name** (`participant_info`, text, required: false): Enter your name as you would like to be referred to in the event.
    *   **Contact Number** (`participant_info`, text, required: false): Provide your contact number so we can reach you for any updates.
    *   **Email** (`participant_info`, text, required: false): Enter your email address for event updates and communications.
*   **Event Information (Event Information)** (`event_info`, text, required: false): This page provides information about the event.
    *   **Event Title** (`event_info`, text, required: false): Enter the title of the event.
    *   **Event Date** (`event_info`, text, required: false): Provide the date of the event.
    *   **Event Time** (`event_info`, text, required: false): Enter the time of the event.
*   **Payment Information (Payment Information)** (`payment_info`, select_one, required: false): Choose how you would like to pay for the event.
    *   **Payment Method** (`payment_info`, select_one, required: false): Select your preferred payment method.
*   **Registration Details (Registration Details)** (`registration_details`, text, required: false): Add any additional comments or remarks about your participation.
*   **Participant Agreement (Participant Agreement)** (`participant_agreement`, select_multiple, required: false): Agree to participate in the event.
    *   **Option 1** (`participant_agreement`, select_multiple, required: false): Choose Option 1
    *   **Option 2** (`participant_agreement`, select_multiple, required: false): Choose Option 2
    *   **Option 3** (`participant_agreement`, select_multiple, required: false): Choose Option 3
*   **Participant Additional Info (Participant Additional Info)** (`participant_additional_info`, text, required: false): Provide any additional information about the participant.
*   **Event Info Additional (Event Info Additional)** (`event_info_additional`, text, required: false): Add any extra event information.

## Tips

*   Ensure you have all the necessary information ready before completing the form.
*   Review each field carefully to ensure accuracy.
*   Submit the form once you have filled out all the required fields.

Please note that this guide is based on the provided YAML fields and explanations are provided to the best of my abilities. If you have any questions or need further clarification, please don't hesitate to ask.
