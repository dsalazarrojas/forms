# Domestic Pet Transport Booking Form - Help Guide
## Purpose
This form is used to book domestic pet transport services.

## How To Complete This Form
1. Fill out the form with the required information.
2. Choose the correct options for each field as required.
3. Enter any additional comments or notes in the Notes field.
4. Fill out the owner's contact information.
5. Submit the form to complete your booking.

## Field-by-Field Explanation

### Destination
* **Pickup Destination** (`destination_from`, select_one): Choose whether the pickup location is "Yes" or "No".
* **Delivery Destination** (`destination_to`, select_one): Choose whether the delivery location is "Yes" or "No".

### Schedule
* **Date of Travel** (`date_of_travel`, date): Enter the date of travel in the standard date format (e.g., MM/DD/YYYY).
* **Time of Travel** (`time_of_travel`, time): Enter the time of travel in the 24-hour format (e.g., 12:00, 14:00, etc.).

### Pet
* **Pet Type** (`pet_type`, select_multiple): Choose the type of pet that is being transported (e.g., dog, cat, bird, etc.).
* **Pet Size** (`pet_size`, select_multiple): Choose the size of the pet (e.g., small, medium, large, etc.).

### Transport
* **Transport Method** (`transport_method`, select_one): Choose the transport method (e.g., by car, by plane, etc.).
* **Transport Cost** (`transport_cost`, number): Enter the transport cost in dollars (if applicable).
* **Transport Service** (`transport_service`, select_one): Choose whether you would like to book transport service (e.g., "Yes" or "No").

### Owner
* **Pickup Contact** (`pickup_contact`, text): Enter the owner's name or phone number for pickup contact.
* **Notes** (`notes`, note): Enter any additional comments or notes about the pet or transport.
* **Email** (`email`, email): Enter the owner's email address.
* **Phone** (`phone`, text): Enter the owner's phone number.
* **Owner Email** (`owner_email`, email): Enter the owner's email address.
* **Owner Phone** (`owner_phone`, text): Enter the owner's phone number.
