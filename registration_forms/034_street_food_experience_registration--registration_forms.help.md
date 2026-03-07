<thinking>
We need to ensure that the form is used correctly by end users, so let's go through the reasoning for this form.
The form purpose is to register an attendee for a street food experience. This form is used to collect information about the attendee, such as their name, email, phone number, and preferences for the event. The form is not meant for general event registration, but rather for a specific street food experience, which is why the form title includes the word "Experience".
We should also check that the form is not duplicated, meaning that the attendee is not already registered for the same event.
</thinking>

# Street Food Experience Registration - Help Guide
## Purpose
This form is used to register an attendee for a street food experience. Please fill out the form with your details to complete your registration.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the "Registration Details" page with any additional information you'd like to share.
2. Enter your "Attendee Name" in the field provided.
3. Enter your "Attendee Email" in the format of a valid email address (e.g., `john.doe@example.com`).
4. Enter your "Attendee Phone" number in the format of a valid phone number (e.g., `123-456-7890`).
5. Select your event preferences from the list provided. This will help us understand your interests and tailor the experience to your needs.
6. Finally, confirm your consent by checking the box.

## Field-by-Field Explanation
* **Registration Details** (`registration_details`, text, optional): This field is a free-text field where you can provide any additional information about your registration.
* **Attendee Name** (`attendee_name`, text, optional): Please enter your name as it appears on your identification.
* **Attendee Email** (`email`, email, optional): Enter a valid email address for us to contact you about the event.
* **Attendee Phone** (`phone`, text, optional): Enter a valid phone number for us to contact you about the event.
* **Event Preferences** (`event_preferences`, select_multiple, required): Please select all that apply from the options provided to indicate your interests.
* **Consent** (`consent`, text, optional): Please confirm that you consent to the terms and conditions of the event.
