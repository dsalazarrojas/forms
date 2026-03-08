# Tango Festival Booking Form - Help Guide
## Purpose
This form is designed to help users book a spot at the Tango Festival. It will collect necessary information for festival organizers to schedule and manage bookings.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Fill in your Personal Info section with your name and any other relevant personal details.
2. Select your preferred dance categories (Tango, Salsa, Cha Cha, Rumba, or Bachata).
3. Choose your availability for the festival dates.
4. If you have any additional notes or comments, use the "Additional Notes" field to provide them.
5. Enter your email address so that we can contact you.

## Field-by-Field Explanation
* **Personal Info** (`personal_info`, `text`, required: false): Fill in your name and any other relevant personal details. This field is not required, but it's useful for us to have a record of your identity.
* **Dance Categories** (`dance_categories`, `select_multiple`, required: false): Select all the dance categories you're interested in (Tango, Salsa, Cha Cha, Rumba, or Bachata). You can choose multiple categories by selecting all the options that apply.
* **Availability** (`availability`, `time`, required: false): Choose a date and time when you're free to attend the festival.
* **Payment Info** (`payment_info`, `text`, required: false): This field is not required because we don't need any payment information. You can leave this blank.
* **Additional Notes** (`note`, `note`, required: false): Write any further information that might be helpful for the festival organizers to know.
* **Email** (`email`, `email`, required: false): Enter your email address so we can contact you about your booking.

## Tips
* Make sure to choose all the dance categories that interest you.
* Be as specific as possible with your availability to avoid conflicts.
* If you have any special requests or comments, use the "Additional Notes" field to provide them.
