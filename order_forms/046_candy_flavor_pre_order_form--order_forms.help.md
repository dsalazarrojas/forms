# Candy Flavor Pre Order Form - Help Guide

## Purpose
This form is designed to collect pre-order information for limited edition candies. It will collect customer contact information, order details, and payment information to ensure a smooth and accurate pre-order process.

## How To Complete This Form

1. Fill out the form completely and carefully.
2. Ensure all required fields are filled in.
3. Choose your flavors and quantity per flavor.
4. Select your preferred contact method for notifications.
5. Choose your delivery method and confirm you understand the lead time for preparation.
6. Verify your payment information and confirm you understand the total amount due.

## Field-by-Field Explanation

### Customer Information
* **Customer Name** (`pre_order_customer_name`): This is the name of the customer who is placing the pre-order.
	+ Please enter the customer's full name.
* **Email Address** (`pre_order_customer_email`): This is the email address of the customer who will be contacted for updates.
	+ Please enter a valid email address.
* **Phone Number** (`pre_order_customer_phone`): This is the phone number of the customer who will be contacted for updates.
	+ Please enter a valid phone number.
* **Preferred Contact Method** (`pre_order_contact_method_pref`): This is how the customer would like to be contacted for updates.
	+ Choose between Email, SMS, and Phone Call.

### Limited Edition Flavors
* **Select Your Flavor(s)** (`pre_order_flavor_selections`): This is where you will select the flavors you would like to pre-order.
	+ Choose from the available options: Salted Caramel Fudge, Midnight Peppermint, Champagne Truffle, Sparkling Strawberry, Dark Chili Chocolate, and Matcha Honey.
* **Quantity per Flavor** (`flavor_quantity_description`): This is where you will specify the quantity of each flavor you would like to pre-order.
	+ Enter the quantity per flavor.

### Delivery and Collection
* **Order Type** (`pre_order_type`): This is how you would like to receive your items.
	+ Choose between Local Pickup, Delivery (+$8), Shipping ($12), and Store Collection.
* **Pickup or Shipping Address** (`pre_order_address_field`): This is the address where you would like to collect or have your items shipped to.
	+ Please enter a valid address.
* **Total Number of Items** (`total_item_count`): This is the total count of all pre-order items.
	+ Enter a valid number.

### Payment and Confirmation
* **Total Amount Due** (`pre_order_total_amount`): This is the total cost of all pre-order items including any applicable fees.
	+ Verify the total amount due.
* **Payment Status** (`pre_order_payment_status`): This is how you would like to make payment.
	+ Choose between I have already paid via link, I will pay upon pickup, and Pay via Credit Card now.
* **Pre-Order Submission Date** (`pre_order_submission_date_field`): This is the date when the pre-order was submitted.
	+ This field is not editable.

### Additional Information
* **Gift Box Needed** (`gift_box_req`): This is whether you would like to have your pre-order items in a decorative gift box.
	+ Choose between Yes (+$3) and False.
* **Allergy Concerns** (`allergen_concerns_text`): This is where you can specify any food allergies the customer has.
	+ Enter a brief description of any allergies.
* **Special Instructions for Fulfillment** (`fulfillment_instructions_special`): This is where you can specify any special instructions for the fulfillment of your pre-order.
	+ Enter any specific requests.
* **I understand this is a pre-order and may have lead times** (`lead_time_understanding`): This is a confirmation that the customer understands the lead time for preparation.
	+ Confirm that you understand the preparation lead time may take up to 2 weeks.
