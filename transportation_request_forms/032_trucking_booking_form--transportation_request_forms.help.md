# Trucking Booking Form - Help Guide

## Purpose
This form is used to book a trucking service for transporting goods from one location to another. Please fill out the form with your details to provide the required information for our team to process your request.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the Company Name where the goods are being shipped from.
2. Select the size and type of trailer required for the shipment.
3. Enter the pickup location and dropoff location for the goods.
4. Provide any additional Notes about the shipment.
5. Enter your Email address so we can contact you with updates.
6. Enter your Phone Number for easy communication.

## Field-by-Field Explanation

* **Trucking Booking** (`trucking_booking_form`, text, required: false): This field is the title of the form, it's optional, but please enter a descriptive name for your shipment.
* **Company Name** (`company_name`, text, required: false): Enter the name of your company where the goods are being shipped from.
* **Trailer Size** (`trailer_size`, select_one, options: [Large, Small, Medium], required: false): Select the size of the trailer required for the shipment (Large, Small, or Medium).
* **Trailer Type** (`trailer_type`, select_multiple, options: [Dry, Refrigerated, Flatbed], required: false): Select the type of trailer required for the shipment (Dry, Refrigerated, or Flatbed).
* **Trucking Company** (`trucking_company`, text, required: false): Enter the name of the trucking company providing the service.
* **Booking Date** (`booking_date`, date, required: false): Enter the date of the booking.
* **Pickup Location** (`pickup_location`, text, required: false): Enter the location where the goods will be picked up from.
* **Dropoff Location** (`dropoff_location`, text, required: false): Enter the location where the goods will be dropped off.
* **Notes** (`notes`, note, required: false): Provide any additional information about the shipment.
* **Email** (`email`, email, required: false): Enter your email address so we can contact you with updates.
* **Phone Number** (`phone_number`, text, required: false): Enter your phone number for easy communication.

## Tips
* Please fill out the form with accurate and complete information to ensure smooth processing of your request.
* If you have any questions or concerns, please contact us at your provided email or phone number.
