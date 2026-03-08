# Business Partner Meet And Greet RSVP Form - Help Guide
## Purpose
The Business Partner Meet And Greet RSVP Form is designed to help us gather essential information from you, our business partner, about your attendance and preferences for the upcoming meet-and-greet event. By filling out this form, you will help us plan and prepare for your visit.

## How To Complete This Form
1. Start by reviewing the "Event Name" field where you can enter the title of the event you will be attending.
2. Next, provide the date of the event in the "Event Date" field.
3. Under the "Will You Be Attending" section, select whether you will be attending, cannot attend, or are unsure about the event.
4. If you will be attending, please provide your partner information in the subsequent fields.
5. Enter your first name, last name, company name, job title, and email address in their respective fields.
6. If you are attending with guests, enter the number of guests you plan to bring in the "Number of Guests Attending" field.
7. In the "Additional Guest Names" field, enter the names of your guests (if any).
8. If you have any dietary restrictions or preferences, please specify them in the "Dietary Restrictions" field.
9. For your seating preference, choose from the options provided in the "Seating Preference" field.
10. Finally, select your networking interests in the "Networking Interests" field.

## Field-by-Field Explanation
* **Event Name** (`event_name`, text, required: false): Enter the title of the event you will be attending.
* **Event Date** (`event_date`, date, required: true): Provide the date of the event in the correct format (YYYY-MM-DD).
* **Will You Be Attending** (`rsvp_response`, select_one, required: true): Confirm your attendance by selecting "Yes, I will attend", "No, I cannot attend", or "Maybe, I am unsure".
* **First Name** (`partner_first_name`, text, required: true): Enter your first name.
* **Last Name** (`partner_last_name`, text, required: true): Enter your last name.
* **Company Name** (`partner_company`, text, required: true): Enter your organization's name.
* **Job Title** (`partner_title`, text, required: true): Enter your position or title.
* **Email Address** (`partner_email`, email, required: true): Provide your email address for confirmation purposes.
* **Phone Number** (`partner_phone`, text, required: false): Enter your contact number (optional).
* **Number of Guests Attending** (`number_of_guests`, number, required: true): Enter the number of guests you plan to bring.
* **Additional Guest Names** (`additional_guest_names`, text, required: false): Enter the names of your guests (if any).
* **Dietary Restrictions** (`dietary_restrictions`, text, required: false): Specify any allergies or dietary preferences you may have.
* **Seating Preference** (`seating_preference`, select_one, required: false): Choose your seating preference from the provided options.
* **Networking Interests** (`networking_interests`, select_multiple, required: false): Select the topics that interest you for networking purposes.
* **Special Accommodations Needed** (`special_accommodations`, text, required: false): If you have any special needs or accommodations, please specify them here.

## Tips
* Make sure to fill out all the required fields to ensure accurate event planning.
* Review each field carefully to provide accurate and helpful information.
* If you have any questions or concerns, feel free to contact us for assistance.
