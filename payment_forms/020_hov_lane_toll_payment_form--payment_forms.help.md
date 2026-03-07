<thinking>
To provide clear and concise help documentation for the HOV Lane Toll Payment Form, we should first understand its purpose and requirements. The form is designed to collect information from users related to High-Occupancy Vehicle (HOV) lane toll payments, including vehicle information, payment details, and submission status. Each field should be explained clearly to guide users through the completion process.

The form has 25 fields, which can be categorized into several sections: Vehicle Information (fields 6, 7, 16, 20, 21), Payment Information (fields 10, 11, 12, 13, 17, 22, 23, 24), and Submission Status (fields 18, 19, 25). Some fields are required, while others are optional.

Before creating the form, we should ensure that all required fields are properly filled out and that users understand the purpose of each field.</thinking>

# HOV Lane Toll Payment Form - Help Guide
## Purpose
The HOV Lane Toll Payment Form is designed to collect information related to High-Occupancy Vehicle (HOV) lane toll payments, including vehicle information, payment details, and submission status.

## How To Complete This Form
1. Fill out the required fields marked as "Required" in the Field-by-Field Explanation section below.
2. Review each field carefully to ensure accurate and complete information is provided.
3. Submit the form once all required fields are filled out.

## Field-by-Field Explanation
* **Vehicle Plate** (`vehicle_plate`, text, Optional): Enter the vehicle plate number.
* **Vehicle Type** (`vehicle_type`, select_one, Optional): Select the type of vehicle (Car, Truck, Bus).
* **Driver Name** (`driver_name`, text, Optional): Enter the driver's name.
* **Driver Phone** (`driver_phone`, text, Optional): Enter the driver's phone number.
* **Payment Method** (`payment_method`, select_one, Optional): Select the payment method (Credit Card, PayPal, Bank Transfer).
* **Payment Date** (`payment_date`, date, Optional): Enter the payment date.
* **Payment Time** (`payment_time`, time, Optional): Enter the payment time.
* **Toll Station** (`toll_station`, text, Optional): Enter the toll station location.
* **Trip Distance** (`trip_distance`, text, Optional): Enter the trip distance.
* **Trip Time** (`trip_time`, text, Optional): Enter the trip time.
* **Toll Cost** (`toll_cost`, text, Optional): Enter the toll cost.
* **Payment Status** (`payment_status`, select_one, Optional): Select the payment status (Paid, Not Paid).
* **Payment Notes** (`payment_notes`, note, Optional): Enter any additional payment notes.
* **Driver Notes** (`driver_notes`, note, Optional): Enter any additional driver notes.
* **Vehicle License Number** (`vehicle_license_number`, text, Optional): Enter the vehicle license number.
* **Vehicle Weight** (`vehicle_weight`, text, Optional): Enter the vehicle weight.
* **Total Amount** (`total_amount`, number, Optional): Enter the total amount.
* **Payment Gateway** (`payment_gateway`, select_one, Optional): Select the payment gateway (Stripe, PayPal).
* **Payment Currency** (`payment_currency`, select_one, Optional): Select the payment currency (USD, Other).
* **Submission Status** (`submission_status`, select_one, Optional): Select the submission status (Approved, Rejected, In Progress).
