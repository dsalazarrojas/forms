# Car Dealership Quote Request Form - Help Guide
## Purpose
This form is designed for customers to request a quote for a car purchase or sale. By filling out this form, you'll provide us with essential information about yourself and your vehicle needs, allowing us to offer you a personalized quote and answer any questions you may have.

## How To Complete This Form
To complete this form, please follow these steps:

1. Start by filling out the contact information section, including your full name, email address, and phone number.
2. Select your preferred contact method (email, phone call, or text message).
3. Choose the car make and model you're interested in, along with your preferred vehicle year and condition.
4. Decide on your desired trim or package (e.g., SE, Limited, Sport).
5. Indicate when you plan to purchase the vehicle (within 48 hours, within 1 week, within 1 month, or just researching).
6. If you have a trade-in, provide the vehicle details (year, make, model, and mileage).
7. Let us know if you require financing and if you're unsure, select "Not Sure".
8. Add any additional requests or comments about the quote.
9. Finally, type your name for quote request confirmation.

## Field-by-Field Explanation

* **Full Name** (`full_name`, text, required): Enter your first and last name.
* **Email Address** (`email_address`, email, required): Enter your email address to receive our quote.
* **Phone Number** (`phone_number`, text, required): Enter your phone number to discuss the quote details.
* **Preferred Contact Method** (`contact_preference`, select_one, required): Choose how you'd like to be contacted (Email, Phone Call, Text Message).
* **Car Make and Model** (`vehicle_make_model`, text, required): Enter the car make and model you're interested in.
* **Preferred Vehicle Year** (`vehicle_year_preference`, number, optional): Select your preferred vehicle year (if available).
* **Vehicle Condition** (`vehicle_condition_preference`, select_one, required): Choose your preferred vehicle condition (New, Used, Certified Pre-Owned).
* **Desired Trim or Package** (`vehicle_trim_package`, text, optional): Enter your preferred vehicle trim or package (e.g., SE, Limited, Sport).
* **Preferred Exterior Color** (`vehicle_color_preference`, text, optional): Select your preferred exterior color (if available).
* **Estimated Purchase Timeframe** (`purchase_timeframe`, select_one, required): Choose when you plan to purchase (Within 48 hours, Within 1 week, Within 1 month, Just researching).
* **Do you have a trade-in?** (`trade_in_intent`, select_one, required): Indicate if you have a trade-in (True, False, Maybe).
* **Trade-In Vehicle Details** (`trade_in_details`, text, optional): Provide details about your trade-in vehicle (year, make, model, mileage).
* **Do you require financing?** (`financing_intent`, select_one, required): Let us know if you need financing (True, False, Not Sure).
* **Any additional requests or comments?** (`additional_quote_requests`, text, optional): Add any further details for the quote.
* **Type your name for quote request confirmation** (`signature_confirmation`, text, required): Enter your name to confirm the quote request.
