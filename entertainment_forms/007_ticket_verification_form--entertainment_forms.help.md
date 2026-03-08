# Ticket Verification Form - Help Guide
## Purpose
The Ticket Verification Form is used to verify details about tickets sold or redeemed. It captures information from ticket buyers, sellers, or both, and should only be filled out when a ticket has changed hands or ownership is disputed.

## How To Complete This Form
To complete this form, follow these steps:

1. Ensure you have all the relevant information about the ticket before starting the form.
2. Fill out the form with the correct information about the ticket.
3. Double-check that all required fields are filled out, as indicated by the asterisk (\*).

## Field-by-Field Explanation
### Ticket Verification Form
* **ticket_verification** (`ticket_verification`, `text`, *required*): Enter the ticket ID or description to identify the ticket you are verifying.
* **ticket_verification_date** (`ticket_verification_date`, `date`, *required*): Enter the date the ticket was sold or redeemed.
* **event_participant** (`event_participant`, `select_one`, *optional*): Select the participant who sold or redeemed the ticket.
	+ Options: participant1, participant2, participant3
* **event_planner** (`event_planner`, `text`, *optional*): Enter the name of the event planner or organization associated with the ticket.
* **participant_signature** (`participant_signature`, `text`, *optional*): Enter the participant's signature if available.
* **ticket_confirmation** (`ticket_confirmation`, `select_multiple`, *optional*): Select the confirmation method used to verify the ticket.
	+ Options: confirmation1, confirmation2, confirmation3

## Tips
* Ensure you fill out the form accurately and completely to avoid errors.
* If you're unsure about any field, refer to the provided instructions or contact the relevant authority.
* Remember to submit the form only when a ticket has changed hands or ownership is disputed.
