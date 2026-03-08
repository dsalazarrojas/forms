# Corporate Housing Lease Booking Form - Help Guide
## Purpose
This form is designed to collect information from corporate clients for the purpose of booking a housing lease. It is intended to be used by business travel management companies or hotels to streamline the booking process.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your company details in the "Company Details" field.
2. Provide the details of the guest(s) you are booking for, including their names and any special requirements.
3. Select the desired dates for the booking.
4. Specify the room preference for the guest(s).
5. Enter any contact details, including email and phone numbers.
6. Add any additional comments or notes.
7. Verify your email address to confirm your contact information.

## Field-by-Field Explanation
### Company Details 
* **Company Details** (`company_details`, text, required: false): Enter the name of the company or organization making the booking.
 
### Guest Details 
* **Guest Details** (`guest_details`, text, required: false): Enter the names of the guests you are booking for, including any special requirements or requests.

### Dates Selection 
* **Dates Selection** (`dates_selection`, date, required: false): Enter the dates for the booking, in the format "YYYY-MM-DD".

### Room Preferences 
* **Room Preferences** (`room_preferences`, select_one, required: false): Select the preferred type of room, such as Single Room, Double Room, or Suite.

### Contact Details 
* **Contact Details** (`contact_details`, text, required: false): Enter a contact person's name and title within the company to ensure accurate communication.

### Email 
* **Email** (`email`, email, required: false): Enter your work email address for communication purposes.

### Phone 
* **Phone** (`phone`, text, required: false): Enter your company's main phone number for communication purposes.

### Comment 
* **Comment** (`comment`, note, required: false): Enter any additional comments or notes related to the booking request.

### Email (Verify)
* **Email (Verify)** (`email_verify`, email, required: false): Verify your email address to confirm your contact information.

### Phone (Verify)
* **Phone (Verify)** (`phone_verify`, text, required: false): Verify your phone number to confirm your contact information.

Note: The "Verify" fields are only required to confirm your contact information, not to validate the email or phone number's correctness. They are intended to prevent data entry errors.
