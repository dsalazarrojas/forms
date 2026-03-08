# homeOrganizerBookingForm - Help Guide
## Purpose
The homeOrganizerBookingForm is a simple one-page form designed to help customers book a home organizing service and provide necessary details about their request.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name in the `customer_name` field.
2. Provide a brief description of your service request in the `service_request` field.
3. Select a date for the service in the `date` field.
4. Choose a time for the service in the `time` field.
5. Select the services you need from the list of options.
6. Choose how you would like to be contacted (Email, Phone, or Chat) in the `contact_method` field.
7. Enter your email address in the `email` field.
8. Enter your phone number in the `phone` field.

## Field-by-Field Explanation
* **Home Organizer Booking Form (page 1)** (`home_organizer_booking_form`, text, required: false): This is the title of the form.
* **Customer Name (customer_name, text, required: false): Enter your name to identify yourself.
* **Service Request (service_request, text, required: false): Describe the service you need, e.g., cleaning, organization, etc.
* **Date (date, date, required: false): Select the date for the service.
* **Time (time, time, required: false): Select the time for the service.
* **Services (services, select_multiple, required: false): Choose the services you need from the list. Options are Home Organizing, Home Cleaning, and Other.
* **Contact Method (contact_method, select_one, required: false): Choose how you would like to be contacted (Email, Phone, or Chat).
* **Email (email, email, required: false): Enter your email address.
* **Phone (phone, text, required: false): Enter your phone number.
