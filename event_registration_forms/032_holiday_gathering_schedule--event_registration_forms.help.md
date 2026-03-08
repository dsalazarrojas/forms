<thinking>This form is a crucial part of our company's culture and social life. The purpose of the form is to collect information about upcoming holiday gatherings. By filling out this form, guests can let their colleagues know if they will be attending, what time they can attend, and what they can bring to share. This form helps to ensure that everyone knows what to expect and can plan accordingly. **Please fill out this form only once per holiday gathering event** to avoid confusion and overlapping RSVPs.</thinking>

# Holiday Gathering Schedule - Help Guide
## Purpose
This form is used to collect information about your attendance and contributions to holiday gatherings. It helps us plan the event and ensure everyone knows what to expect.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the form completely and accurately.
2. Make sure to enter the correct time for your availability.
3. Select all the options that apply for what you can bring to the gathering.
4. Enter your email and phone number if you want to be contacted for further questions.
5. Review your form carefully before submitting it.

## Field-by-Field Explanation
* **Guest Information** (`holiday_gathering_schedule`, text, required: false): Enter a brief description of yourself and why you're coming to the gathering.
* **Will you join us?** (`rsvp`, select_one, required: false): Select one of the options: True, False, Maybe. This determines if you're planning to attend or not.
* **What time can you attend?** (`availability`, time, required: false): Choose the earliest time you can attend from the provided options.
* **What can you bring?** (`potluck_item`, select_multiple, required: false): Select all the options that apply for what you'd like to bring to the gathering, such as a Main course, Side dish, Dessert, Snack, or Beverage.
* **Message** (`message`, note, required: false): Add any additional comments or messages you want to share with the host or other guests.
* **Email** (`email`, email, required: false): Enter your email address so we can contact you about the gathering.
* **Phone** (`phone`, text, required: false): Enter your phone number so we can contact you about the gathering or send reminders.
* **What time can you attend? (2)** (`availability_2`, time, required: false): Choose the earliest time you can attend from the provided options (if different from your primary availability).
