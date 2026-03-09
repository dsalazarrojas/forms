# Bottle Delivery Confirmation - Help Guide
## Purpose
This form is designed to track and confirm bottle delivery activities, ensuring that all necessary information is captured and documented for future reference and analysis.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the delivery date and time in the "delivery_date" field.
2. Enter the driver's name and ID number in the "driver_name" and "driver_id" fields, respectively.
3. Enter the vehicle number in the "vehicle_number" field.
4. Enter the route number in the "route_number" field.
5. Enter the customer's name in the "customer_name" field.
6. Enter the customer's address in the "customer_address" field.
7. Enter the customer's phone number in the "customer_phone" field.
8. Enter the order number in the "order_number" field.
9. Select the delivery type from the "delivery_type" options.
10. Enter the number of full bottles delivered in the "bottle_quantity_delivered" field.
11. Select the number of empty bottles collected in the "empty_bottles_collected" field (if applicable).
12. Select the bottle types delivered in the "bottle_types" field.
13. Select the delivery location type from the "delivery_location_type" options.
14. Select the placement location from the "placement_location" options.
15. Select whether the customer was present at delivery from the "customer_present" options.
16. Select the final status of the delivery from the "delivery_status" options.
17. Select whether payment was received from the "payment_received" options.
18. Enter any customer signature in the "customer_signature" field (if applicable).
19. Enter any delivery notes or observations in the "delivery_notes" field (if applicable).
20. Select any issues encountered during delivery from the "issues_encountered" options.
21. Select whether photo confirmation was taken from the "photo_confirmation" options (if applicable).
22. Enter the driver's signature in the "driver_signature" field.
23. Enter the completion timestamp in the "completion_timestamp" field.

## Field-by-Field Explanation

* **Delivery Date** (`delivery_date`, date, required): Enter the date of delivery completion.
* **Delivery Time** (`delivery_time`, time, required): Enter the time of delivery completion.
* **Driver Name** (`driver_name`, text, required): Enter the full name of the delivery driver.
* **Driver ID Number** (`driver_id`, text, required): Enter the ID number of the delivery driver.
* **Vehicle Number** (`vehicle_number`, text, required): Enter the truck or vehicle identification number.
* **Route Number** (`route_number`, text, required): Enter the assigned delivery route number.
* **Customer Name** (`customer_name`, text, required): Enter the name of the customer receiving delivery.
* **Delivery Address** (`customer_address`, text, required): Enter the complete delivery location.
* **Customer Phone** (`customer_phone`, text, required): Enter the contact number of the customer.
* **Order Number** (`order_number`, text, required): Enter the reference order or invoice number.
* **Delivery Type** (`delivery_type`, select_one, required): Select the type of delivery service (e.g., Regular scheduled delivery, One-time delivery, etc.).
* **Number of Full Bottles Delivered** (`bottle_quantity_delivered`, number, required): Enter the count of full bottles dropped off.
* **Number of Empty Bottles Collected** (`empty_bottles_collected`, number, optional): Enter the count of empty bottles picked up (if applicable).
* **Bottle Types Delivered** (`bottle_types`, select_multiple, required): Select all types of bottles included in the delivery (e.g., 5-gallon water bottles, 3-gallon water bottles, etc.).
* **Delivery Location Type** (`delivery_location_type`, select_one, required): Select the type of location where the delivery was made (e.g., Residential home, Apartment or condo, etc.).
* **Placement Location** (`placement_location`, select_one, required): Select where the bottles were placed at the location (e.g., Front door or porch, Garage, etc.).
* **Customer Present at Delivery** (`customer_present`, select_one, required): Select whether the customer was present at delivery.
* **Delivery Status** (`delivery_status`, select_one, required): Select the final status of the delivery attempt (e.g., Completed successfully, Partial delivery, etc.).
* **Payment Received** (`payment_received`, select_one, required): Select whether payment was collected at delivery.
* **Customer Signature** (`customer_signature`, text, optional): Enter the customer or recipient signature (if applicable).
* **Delivery Notes** (`delivery_notes`, text, optional): Enter any special circumstances or observations.
* **Issues Encountered** (`issues_encountered`, select_multiple, required): Select any problems that arose during delivery.
* **Photo Confirmation Taken** (`photo_confirmation`, select_one, optional): Select whether photo evidence was captured.
* **Driver Signature** (`driver_signature`, text, required): Enter the driver's electronic signature.
* **Completion Timestamp** (`completion_timestamp`, date, required): Enter the date and time of form submission.

## Tips

* Always review the form carefully before submitting it to ensure all necessary information is captured.
* Double-check the delivery details to prevent errors.
* Use the "Customer Signature" and "Delivery Notes" fields to document any special circumstances or observations.
* Use the "Photo Confirmation Taken" field to capture photo evidence of the delivery, if applicable.
* Make sure to select all applicable issues encountered during delivery in the "Issues Encountered" field.
* Enter the correct driver signature and completion timestamp to ensure accurate tracking and reporting.
