# truck_arrival_registration_form - Help Guide
## Purpose
The "truck_arrival_registration_form" is designed to collect information from drivers and trucking companies for various purposes such as registration, reporting, and record-keeping.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the necessary information for the **Driver Information** page.
2. Provide the **Truck Details** page with accurate information about the truck.
3. On the **Arrival Info** page, enter the relevant details such as arrival time and date.
4. Sign the **Signature** page with your name to verify the accuracy of the information provided.
5. If required, enter the **Driver Signature** and **Date** to confirm the information provided.
6. Enter the company's **Company Info** page with the relevant details such as name, address, phone number, and email.
7. Select the assigned tool from the options provided on the **Assigned Tool** page.
8. Enter any **Comments** or **Notes** that are relevant to the registration or reporting process.
9. On the **Arrival Time**, **Departure Time**, **Arrival Date**, and **Departure Date** pages, enter the relevant times and dates.
10. Finally, add any additional **Remarks** or **Route Info** if necessary.

## Field-by-Field Explanation
* **Driver Information** (`driver_info`, text, required: false): This section requires the driver's name, contact information, and any other relevant details.
* **Truck Details** (`truck_details`, text, required: false): Enter accurate and up-to-date information about the truck, including make, model, and any other relevant details.
* **Arrival Info** (`arrival_info`, text, required: false): Enter the arrival time and date.
* **Signature** (`signature`, note, required: false): Sign this page to confirm the accuracy of the information provided.
* **Date** (`signature_date`, date, required: false): Enter the date of the signature.
* **Time** (`signature_time`, time, required: false): Enter the time of the signature.
* **Driver Signature** (`driver_signature`, text, required: false): Enter the driver's signature.
* **Phone** (`driver_phone`, text, required: false): Enter the driver's phone number.
* **Email** (`driver_email`, email, required: false): Enter the driver's email address.
* **Company Info** (`company_info`, text, required: false): Enter the company's name, address, phone number, and email.
* **Name** (`company_name`, text, required: false): Enter the company's name.
* **Address** (`company_address`, text, required: false): Enter the company's address.
* **Phone** (`company_phone`, text, required: false): Enter the company's phone number.
* **Email** (`company_email`, email, required: false): Enter the company's email address.
* **Assigned Tool** (`assigned_tool`, select_one, required: true): Select the assigned tool from the options provided.
* **Assigned Tool ID** (`assigned_tool_id`, text, required: false): Enter the assigned tool ID, if applicable.
* **Comments** (`comments`, text, required: false): Enter any comments or remarks regarding the registration or reporting process.
* **Arrival Time** (`arrival_time`, time, required: false): Enter the arrival time.
* **Departure Time** (`departure_time`, time, required: false): Enter the departure time.
* **Arrival Date** (`arrival_date`, date, required: false): Enter the arrival date.
* **Departure Date** (`departure_date`, date, required: false): Enter the departure date.
* **Distance** (`distance`, text, required: false): Enter the distance traveled.
* **Remarks** (`remarks`, text, required: false): Enter any additional remarks.
* **Route Info** (`route_info`, text, required: false): Enter any route information.

Please note that some fields are not required, but it's essential to review each field carefully to ensure you're providing accurate and relevant information. If you have any further questions or concerns, please don't hesitate to reach out to the form's administrator for guidance.
