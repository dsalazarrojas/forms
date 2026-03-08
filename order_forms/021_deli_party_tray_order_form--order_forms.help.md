<thinking>
To determine the form's purpose and relevance, I reviewed the input schema to identify key components and potential business logic. Based on the schema, this form is likely used for catering or food delivery services. It appears to collect order information for a party tray, which could be used for various occasions such as corporate events, social gatherings, or personal celebrations. To avoid duplication, this form is probably intended for single-party orders, and not for bulk or recurring orders.

The form's fields seem to cover essential details for the order, including the party tray type (hot or cold), size (small, large, or extra large), delivery details (date and time), delivery method (in-house or pickup), and contact information (email and phone). 

The "party_tray_note" field suggests an opportunity for users to add any additional information about the order, such as special requests or dietary restrictions. This form does not appear to be designed for complex or intricate order details but rather for straightforward party tray orders.

</thinking>

# Deli Party Tray Order Form - Help Guide
## Purpose
The Deli Party Tray Order Form is used to collect information for catering or food delivery orders for parties, corporate events, or other social gatherings. 

## How To Complete This Form
To place an order for a party tray, please follow the steps below.

1. Fill in the party name and tray order form on page 1.
2. Select the type of party tray you would like to order (Hot, Cold, or Other).
3. Choose the size of the party tray (Small, Large, or Extra Large).
4. Provide delivery details, including the date and time of delivery.
5. Select the delivery method (Delivery or Pickup).
6. Add any additional comments or notes about the order in the "party_tray_note" field.
7. Enter the email and phone number of the contact person for the order.

## Field-by-Field Explanation
* **Order Form** (`order_form`, text, required: false): Fill in the party name and tray order form to describe the details of your order.
* **Party Tray** (`party_tray`, text, required: false): Enter the type of party tray you would like to order (e.g. "Corporate Party Tray").
* **Party Tray Type** (`party_tray_type`, select_one, required: false): Select the type of party tray (Hot, Cold, or Other).
	+ If you choose "Other," please enter your custom tray type in the "Order Form" field.
* **Party Tray Size** (`party_tray_size`, select_multiple, required: false): Choose the size of the party tray (Small, Large, or Extra Large).
* **Delivery Details** (`delivery_details`, text, required: false): Provide any additional information you would like to include about the delivery (e.g. "Please deliver to the conference room").
* **Delivery Date** (`delivery_date`, date, required: false): Enter the date you would like to have the party tray delivered.
* **Delivery Time** (`delivery_time`, time, required: false): Enter the time you would like to have the party tray delivered.
* **Delivery Method** (`delivery_method`, select_one, required: false): Select the delivery method (Delivery or Pickup).
* **Party Tray Note** (`party_tray_note`, note, required: false): Add any additional comments or notes about the order.
* **Email** (`email`, email, required: false): Enter the email of the contact person for the order.
* **Phone** (`phone`, text, required: false): Enter the phone number of the contact person for the order.
