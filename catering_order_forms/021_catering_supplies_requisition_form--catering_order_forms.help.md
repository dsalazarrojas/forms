# Catering Supplies Requisition Form - Help Guide
## Purpose
The Catering Supplies Requisition Form is used to request and track catering supplies from suppliers. This form will help us to gather all the necessary information to efficiently process and deliver the supplies you need.

## How To Complete This Form

1. Fill out the Requestor Information section, which includes your name, email address, and phone number.
2. Provide your department or business unit and the date you need the supplies by.
3. Enter the event or purpose of the requisition.
4. Select the supplies you need and specify the quantity and unit of measurement.
5. Enter the delivery location and preferred delivery time.
6. Provide any special handling requirements (e.g. fragile, temperature-controlled).
7. Enter your budget code or account number (for accounting purposes).
8. Add any additional notes or special requests.
9. Confirm that the requisition is approved for processing.

## Field-by-Field Explanation

* **Requestor Name** (`requestor_name`, text, required): Please enter your name so we know who is submitting the requisition.
* **Email Address** (`requestor_email`, email, required): Please enter your email address so we can contact you with updates on your requisition.
* **Phone Number** (`requestor_phone`, text, required): Please enter your phone number so we can contact you with any questions or updates.
* **Department or Business Unit** (`department_name`, text, required): Please enter your department or business unit so we know which team is requesting the supplies.
* **Requisition Date** (`requisition_date`, date, required): Please enter the date you need the supplies by.
* **Required By Date** (`required_by_date`, date, required): Please enter the date you need the supplies by.
* **Requisition ID** (`requisition_id`, text, required): Please note that a system-generated reference number will be assigned to your requisition.
* **Event or Purpose** (`event_or_purpose`, text, required): Please explain what the supplies are for (e.g. conference, party, etc.).
* **Item Name** (`supply_item_1_name`, text, required): Please specify the name of the supply item you need.
* **Item Category** (`supply_item_1_category`, select_one, required): Please select the category of the supply item (e.g. Serving Ware, Food Containers, etc.).
* **Quantity Needed** (`supply_item_1_quantity`, number, required): Please enter the quantity of the supply item you need.
* **Unit of Measurement** (`supply_item_1_unit`, text, required): Please specify the unit of measurement for the supply item (e.g. boxes, cases, units, etc.).
* **Delivery Location** (`delivery_location`, text, required): Please enter the full address where the supplies should be delivered.
* **Preferred Delivery Time** (`delivery_time`, text, optional): If you have a preferred delivery time, please specify it here.
* **Special Handling Requirements** (`special_handling`, text, optional): If the supply item has any special handling requirements (e.g. fragile, temperature-controlled), please specify them here.
* **Budget Code or Account Number** (`budget_code`, text, optional): If you have a budget code or account number, please enter it here for accounting purposes.
* **Additional Notes or Special Requests** (`requisition_notes`, text, optional): If you have any additional notes or special requests, please enter them here.
* **Requisition Approved for Processing** (`approval_status`, select_one, required): Please confirm that the requisition is approved for processing.

## Tips

* Please fill out the form accurately and thoroughly to ensure that the supplies are delivered on time and in the correct quantities.
* If you have any questions or concerns, please do not hesitate to contact us.
