# Car Accessory Delivery Form - Help Guide
## Purpose
This form is designed for customers to order car accessories and services for their vehicles. Please use this form to provide detailed information about your vehicle and the accessories you need, as well as your preferred delivery options.

## How To Complete This Form

1.  Read through each section carefully to ensure you understand what information is required.
2.  Fill in your First Name, Last Name, Email Address, and Phone Number in the "Customer Information" section.
3.  Provide your vehicle's Year, Make, Model, and Color in the "Vehicle Information" section.
4.  Select the accessories you need in the "Accessories Selection" section.
5.  Specify any custom requests or special specifications in the "Custom Specifications or Colors" section.
6.  Choose your preferred installation option in the "Installation Preferences" section.
7.  Select your preferred delivery address, date, and time window in the "Delivery Information" section.
8.  Choose your payment method in the "Payment Information" section.
9.  Confirm your order by selecting "Yes, confirm order" in the final section.

## Field-by-Field Explanation

*   **First Name** (`first_name`, `text`, required): Enter your first name.
*   **Last Name** (`last_name`, `text`, required): Enter your last name.
*   **Email Address** (`email_address`, `email`, required): Enter your email address.
*   **Phone Number** (`phone_number`, `text`, required): Enter your phone number.
*   **Vehicle Year** (`vehicle_year`, `number`, required): Enter the year your vehicle was manufactured.
*   **Vehicle Make** (`vehicle_make`, `text`, required): Enter your vehicle's brand name (e.g., Toyota, Ford, etc.).
*   **Vehicle Model** (`vehicle_model`, `text`, required): Enter your vehicle's model name (e.g., Corolla, Mustang, etc.).
*   **Vehicle Color** (`vehicle_color`, `text`, optional): Enter your vehicle's color.
*   **License Plate Number** (`license_plate`, `text`, optional): Enter your vehicle's license plate number.
*   **Accessory Types Needed** (`accessory_types`, `select_multiple`, required): Select all the accessories you need (e.g., Exterior trim, Interior trim, etc.).
*   **Specific Exterior Accessories** (`exterior_accessories`, `text`, optional): List any specific exterior accessories you need.
*   **Specific Interior Accessories** (`interior_accessories`, `text`, optional): List any specific interior accessories you need.
*   **Custom Specifications or Colors** (`custom_specifications`, `text`, optional): Enter any custom specifications or colors you need.
*   **Do you need installation service?** (`installation_needed`, `select_one`, required): Select your preferred installation option (e.g., Yes, professional installation, etc.).
*   **Installation Location** (`installation_location`, `select_one`, optional): Select where you'd like the installation to be done (e.g., Our facility, Your location, etc.).
*   **Delivery Address** (`delivery_address`, `text`, required): Enter the address where you'd like the accessories delivered.
*   **City** (`city`, `text`, required): Enter the city where you'd like the accessories delivered.
*   **State/Province** (`state`, `text`, required): Enter the state or province where you'd like the accessories delivered.
*   **ZIP or Postal Code** (`zip_code`, `text`, required): Enter the ZIP or postal code where you'd like the accessories delivered.
*   **Preferred Delivery Date** (`delivery_date`, `date`, required): Enter the date you'd like the accessories delivered.
*   **Preferred Delivery Time Window** (`delivery_window`, `select_one`, required): Select the time window you'd prefer for the delivery (e.g., Morning, Afternoon, etc.).
*   **Special Delivery Instructions** (`special_instructions`, `text`, optional): Enter any special requests you have for the delivery.
*   **Preferred Payment Method** (`payment_method`, `select_one`, required): Select your preferred payment method (e.g., Credit card, PayPal, etc.).
*   **Order Confirmation** (`order_confirmation`, `select_one`, required): Confirm your order by selecting "Yes, confirm order".
