<thinking>
As an expert form designer and technical writer, I understand that creating a clear and user-friendly help guide is crucial for a successful form submission process. Let's analyze the provided YAML fields to determine the purpose, completion process, and field-by-field explanation for the "Back Number Reservation Form".

The form is designed to collect information from registrants or participants for a competition event. The form's purpose is to gather essential details for the event organizers to prepare and deliver kits or items to the registrants. This information includes names, team names, preferred and alternate back numbers, jersey sizes, event dates, contact phone numbers, delivery instructions, payment confirmation, and reservation notes.

Given the form's structure and field types, it appears to be a straightforward registration process, with the exception of the "payment_confirmed" field, which might be a bit confusing to users. This field likely indicates the status of payment, either confirmed or not, which is essential for the organizers to track and prepare for kit delivery.

To ensure the form is completed accurately and efficiently, I'll create a comprehensive help guide that addresses each field and provides clear explanations for end-users.

</thinking>

# Back Number Reservation Form - Help Guide
## Purpose
The Back Number Reservation Form is designed to collect essential information from registrants or participants for a competition event. This information is crucial for the event organizers to prepare and deliver kits or items to the registrants on time.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Enter your registrant's name.
2. Provide your team's name (if applicable).
3. Enter your preferred and alternate back numbers (first and second choices).
4. Select your jersey size from the available options.
5. Enter the date of the competition.
6. Provide a contact phone number for confirmation.
7. Enter your delivery instructions (pickup location or shipping details).
8. Mark "True" to confirm payment received.
9. Add any special notes or requests for your reservation.

## Field-by-Field Explanation

* **Registrant Name** (<code>registrant_name</code>, <label>Registrant name</label>, required/optional): Enter the name of the athlete or participant as it appears on their identification.
* **Team Name** (<code>team_name</code>, <label>Team name</label>, optional): If applicable, enter the name of the club or organization you represent.
* **Preferred Back Number** (<code>preferred_number</code>, <label>Preferred back number</label, required): Enter your preferred back number for the competition. You can provide up to two choices.
* **Alternate Back Number** (<code>alternate_number</code>, <label>Alternate back number</label, optional): Provide a backup choice for your back number.
* **Jersey Size Required** (<code>size_required</code>, <label>Jersey size required</label, required): Select the size of your jersey from the available options (XS, S, M, L, XL, XXL).
* **Event Date** (<code>event_date</code>, <label>Event date</label, required): Enter the date of the competition.
* **Contact Phone** (<code>contact_phone</code>, <label>Contact phone</label, optional): Provide a contact phone number for confirmation.
* **Delivery Instructions** (<code>delivery_instructions</code>, <label>Delivery instructions for kit</label, optional): Enter the pickup location or shipping details for your kit.
* **Payment Confirmed** (<code>payment_confirmed</code>, <label>Payment confirmed</label, required): Mark "True" to confirm that payment has been received.
* **Reservation Notes** (<code>reservation_notes</code>, <label>Reservation notes</label, optional): Add any special requests or notes for your reservation.

Note: Please ensure all required fields are filled before submitting the form.
