# event_equipment_delivery_form - Help Guide
## Purpose
The event_equipment_delivery_form is used to submit a request for equipment delivery for an event.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the event equipment request section with a brief description of the equipment you need.
2. Select the delivery method you prefer.
3. Choose the date for delivery.
4. Indicate if the equipment is delivered or not.
5. Choose the current status of the delivery.
6. Provide any delivery notes or comments.
7. Enter the event planner's name and email.

## Field-by-Field Explanation
- **Event Equipment Request** (`event_equipment_request`, text, optional): Enter a brief description of the equipment you need for the event.
- **Request Date** (`request_date`, date, optional): Enter the date you need the equipment by.
- **Delivery Method** (`delivery_method`, select_multiple, optional): Choose how you want the equipment to be delivered. Options: Delivery via Email, Self Pickup, Shipping to Venue.
- **Delivery Date** (`delivery_date`, date, optional): Enter the date you want the equipment delivered by.
- **Equipment Requested** (`equipment_requested`, select_multiple, optional): Choose if the equipment is requested or not.
- **Equipment Delivered** (`equipment_delivered`, select_multiple, optional): Choose if the equipment is delivered or not.
- **Delivery Status** (`delivery_status`, select_one, optional): Choose the current status of the delivery. Options: Pending, Delivered, Cancelled.
- **Delivery Note** (`delivery_note`, note, optional): Provide any notes or comments about the delivery.
- **Event Planner** (`event_planner`, text, optional): Enter the name of the event planner responsible for this delivery.
- **Email** (`email`, email, optional): Enter the email of the event planner.
