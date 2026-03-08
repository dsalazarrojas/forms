# Laundry Pick-up Request Form - Help Guide
## Purpose
This form is designed to help customers request laundry services. It collects essential information about their preferences for pick-up and service requirements.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the services you would like to be picked up (Laundry Services).
2. Choose your preferred pick-up date.
3. Select your preferred pick-up time.
4. Enter the location where you would like to have your laundry picked up.
5. Provide your contact details.
6. Indicate whether you have laundry to be picked up (Laundry Type).
7. Enter your preferred pick-up date.
8. Add any additional notes about your request.
9. Enter your name and email address for contact purposes.
10. Enter your phone number.
11. Add any customer notes.

## Field-by-Field Explanation

* **Laundry Services** (`laundry_services`, select_multiple, required): Select all the laundry services you need to be picked up (e.g., washing, drying, ironing).
* **Preferred Date** (`preferred_date`, date, required): Enter the date you would like your laundry to be picked up. Please use the date format `YYYY-MM-DD`.
* **Preferred Time** (`preferred_time`, time, required): Select the time you would like your laundry to be picked up.
* **Pick-up Location** (`pickup_location`, text, required): Enter the location where you would like to have your laundry picked up.
* **Contact Details** (`contact_details`, text, required): Enter your name, email address, and phone number for contact purposes.
* **Laundry Type** (`laundry_type`, select_one, required): Indicate whether you have laundry to be picked up ('Yes' or 'No').
* **Pickup Date** (`pickup_date`, date, required): Enter the date you would like your laundry to be picked up. Please use the date format `YYYY-MM-DD`.
* **Notes** (`notes`, note, required): Add any additional information or comments about your request.
* **Contact Name** (`contact_name`, text, required): Enter your name.
* **Contact Email** (`contact_email`, email, required): Enter your email address.
* **Contact Phone** (`contact_phone`, text, required): Enter your phone number.
* **Customer Notes** (`customer_notes`, text, required): Add any additional comments or information about your request.
* **Pickup Type** (`pickup_type`, select_multiple, required): Select the type of pick-up services you need (e.g., delivery, collection).

## Tips
- Please ensure that you select all the necessary services and details accurately.
- Double-check your contact information for correctness.
- Add any additional comments or information in the "Customer Notes" field if necessary.
