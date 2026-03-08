The form is designed to track delivery information for waste management services, allowing drivers to provide detailed records of deliveries, pick-ups, and other services performed. This form captures essential details such as driver and vehicle information, customer data, delivery timing, and any issues encountered during the process. By completing this form accurately, drivers can ensure that delivery records are up-to-date and help supervisors make informed decisions.

</thinking>

# Bin Delivery Tracking Form - Help Guide
## Purpose
This form is used to track deliveries, pick-ups, and other services performed for waste management services. It helps drivers keep accurate records of their activities and provides essential information for supervisors to monitor and analyze delivery operations.

## How To Complete This Form
To complete the form, follow these steps:

1. Enter driver details, including name, ID, and phone number.
2. Select the delivery date and shift time (morning, afternoon, or night).
3. Enter vehicle details, including truck number and license plate number.
4. Choose the type of delivery vehicle.
5. Enter customer information, including name, street address, city, and ZIP code.
6. Select the type of service performed (bin delivery, pickup, or exchange).
7. Choose the type of bin being delivered (trash, recycling, compost, or commercial dumpster).
8. Select the bin size (small, medium, large, extra large, or commercial).
9. Enter the quantity of bins delivered.
10. Choose the bin condition (new, good, fair, or damaged).
11. Enter the start and end times of the delivery.
12. Indicate whether photos were taken during the delivery.
13. Select whether the customer confirmed receipt of the delivery.
14. Choose the reason for any issues encountered during the delivery.
15. Enter any additional notes or comments.
16. Indicate whether the supervisor needs to be notified of any issues.

## Field-by-Field Explanation

* **Driver Information** (`driver_name`, text, required): Enter your full name and contact number.
* **Driver ID** (`driver_id`, text, required): Enter your employee ID number.
* **Driver Phone** (`driver_phone`, text, required): Enter your contact number.
* **Delivery Date** (`delivery_date`, date, required): Enter the date of the delivery or pickup.
* **Shift Time** (`shift_time`, select_one, required): Select the time of your work shift (morning, afternoon, or night).
* **Truck Information** (`truck_information`, note, required): Enter any relevant vehicle details or comments.
* **Truck Number** (`truck_number`, text, required): Enter the vehicle identification number.
* **License Plate** (`truck_license_plate`, text, required): Enter the license plate number of the vehicle.
* **Truck Type** (`truck_type`, select_one, required): Select the type of delivery vehicle (standard, large container, roll-off, side loader, rear loader, or other).
* **Route Number** (`route_number`, text, required): Enter the assigned delivery route number.
* **Delivery Details** (`delivery_details`, note, required): Enter any relevant delivery information or comments.
* **Customer Name** (`customer_name`, text, required): Enter the name of the customer or business.
* **Delivery Address** (`delivery_address`, text, required): Enter the customer's complete street address.
* **City** (`delivery_city`, text, required): Enter the city for the delivery.
* **Zip Code** (`delivery_zip`, text, required): Enter the customer's ZIP code.
* **Service Type** (`service_type`, select_one, required): Select the type of service performed (bin delivery, pickup, or exchange).
* **Bin Type Delivered** (`bin_type_delivered`, select_one, required): Select the type of bin being delivered (trash, recycling, compost, or commercial dumpster).
* **Bin Size** (`bin_size`, select_one, required): Select the size of the bin (small, medium, large, extra large, or commercial).
* **Quantity Delivered** (`quantity_delivered`, number, required): Enter the number of bins delivered.
* **Quantity Picked Up** (`quantity_picked_up`, number, optional): Enter the number of bins picked up.
* **Bin Condition** (`bin_condition`, select_one, required): Select the condition of the bin (new, good, fair, or damaged).
* **Delivery Start Time** (`delivery_time_start`, time, required): Enter the start time of the delivery.
* **Delivery End Time** (`delivery_time_end`, time, required): Enter the end time of the delivery.
* **Photo Documentation** (`photo_documentation`, select_one, required): Indicate whether photos were taken during the delivery.
* **Customer Confirmation** (`customer_signature`, select_one, required): Select whether the customer confirmed receipt of the delivery.
* **Issues Encountered** (`issues_encountered`, select_one, required): Select the reason for any issues encountered during the delivery.
* **Issue Description** (`issue_description`, text, optional): Enter a description of any issues encountered.
* **Additional Notes** (`additional_notes`, text, optional): Enter any additional comments or information.
* **Supervisor Notification** (`supervisor_notification`, select_one, required): Indicate whether the supervisor needs to be notified of any issues.
