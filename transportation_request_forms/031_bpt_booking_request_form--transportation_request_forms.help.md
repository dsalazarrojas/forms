# BPT Booking Request Form - Help Guide
## Purpose
This form is designed to collect information from customers for the booking of transportation requests. It is used to provide a clear and accurate understanding of the customer's needs for efficient delivery and pickup services.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name as the customer.
2. If applicable, provide the name of your company or organization.
3. Enter your contact email address for communication purposes.
4. Enter your contact phone number.
5. Select a date for pickup of the delivery.
6. Choose a preferred time for pickup.
7. Enter the address of the pickup location.
8. Select a date for delivery of the delivery.
9. Enter the address of the delivery location.
10. Enter the city of the delivery location.
11. Enter the state and ZIP code of the delivery location.
12. Describe the item being delivered.
13. Enter the number of items being delivered.
14. Enter the weight of the item in pounds or kilograms.
15. If applicable, provide dimensions of the item (length x width x height).
16. If applicable, specify special handling requirements (e.g., fragile, temperature controlled).
17. Select the delivery type (e.g., standard, express, same-day, scheduled).
18. If applicable, select "true" or "false" for signature required during delivery.
19. Enter any special instructions or delivery notes.
 
## Field-by-Field Explanation

- **Customer Name** (`customer_name`, `text`, required): Please enter your full name as the customer.
 
- **Company Name** (`company_name`, `text`, optional): If your organization or business is involved, please enter its name.
 
- **Contact Email** (`contact_email`, `email`, required): Enter your contact email address for communication purposes.
 
- **Contact Phone** (`contact_phone`, `text`, required): Enter your contact phone number.
 
- **Pickup Date** (`pickup_date`, `date`, required): Select the date you would like for the delivery pickup.
 
- **Preferred Pickup Time** (`pickup_time`, `time`, optional): Choose a preferred time for the delivery pickup.
 
- **Pickup Location Address** (`pickup_location`, `text`, required): Enter the full address of the pickup location.
 
- **Delivery Date** (`delivery_date`, `date`, required): Select the date you would like for the delivery.
 
- **Delivery Location Address** (`delivery_location`, `text`, required): Enter the full address of the delivery location.
 
- **City** (`city`, `text`, required): Enter the city of the delivery location.
 
- **State and ZIP Code** (`state_zip`, `text`, required): Enter the state and ZIP code of the delivery location.
 
- **Item Description** (`item_description`, `text`, required): Describe the item being delivered.
 
- **Quantity** (`item_quantity`, `number`, required): Enter the number of items being delivered.
 
- **Weight** (`item_weight`, `text`, optional): Enter the weight of the item in pounds or kilograms.
 
- **Dimensions** (`item_dimensions`, `text`, optional): If applicable, enter the length x width x height of the item.
 
- **Special Handling Required?** (`special_handling`, `text`, optional): If the item requires special handling, indicate it here.
 
- **Delivery Type** (`delivery_type`, `select_one`, required): Select the delivery type (e.g., standard, express, same-day, scheduled).
 
- **Signature Required?** (`signature_required`, `select_one`, optional): If delivery requires signature, select "true", otherwise select "false".
 
- **Special Instructions** (`special_instructions`, `text`, optional): Enter any additional delivery instructions or notes.
