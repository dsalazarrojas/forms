# Artwork Order Form - Help Guide
## Purpose
The Artwork Order Form is used to collect necessary information for ordering an artwork from our online catalog. This form ensures that we have all the necessary details for creating and delivering your ordered artwork.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter the Artwork ID or Title from our online catalog in the "Artwork ID or Title" field.
2.  Specify the quantity of the artwork you would like to order.
3.  Select whether you would like the artwork framed or not.
4.  If you choose framing, select the framing style from the provided options.
5.  Enter the recipient's full name in the "Recipient Full Name" field.
6.  Enter the shipping address, including street address, city, state, zip code, and country.
7.  If desired, add an optional gift message in the "Optional Gift Message" field.
8.  Select the preferred shipping method from the provided options.
9.  Confirm that you understand the additional delivery time for custom framing in the "I understand that custom framing adds 14 days to delivery time" field.
10. Enter a contact phone number for delivery purposes.
11. Enter the billing email address for payment and order details.

## Field-by-Field Explanation
* **Artwork ID or Title** (`artwork_selection_id`, text, required): Enter the Artwork ID or Title from our online catalog to proceed with the order.
* **Quantity** (`order_quantity`, number, required): Specify the quantity of the artwork you would like to order.
* **Would you like this artwork framed** (`framing_option`, select_one, required): Select whether you would like the artwork framed or not.
* **Select Framing Style** (`framing_style`, select_one, optional): If you selected framing, choose the framing style from the provided options.
* **Recipient Full Name** (`recipient_full_name`, text, required): Enter the recipient's full name for address and delivery purposes.
* **Shipping Address** (`shipping_address_full`, text, required): Enter the shipping address including street address, city, state, zip, and country.
* **Optional Gift Message** (`gift_message_text`, text, optional): If you would like to add a gift message, enter it in this field.
* **Preferred Shipping Method** (`shipping_method_pref`, select_one, required): Select the preferred shipping method from the provided options.
* **I understand that custom framing adds 14 days to delivery time** (`delivery_acknowledgment`, select_one, required): Confirm that you understand the additional delivery time for custom framing.
* **Contact Phone for Delivery** (`customer_contact_phone`, text, required): Enter a contact phone number for delivery purposes.
* **Billing Email Address** (`billing_email_addr`, email, required): Enter the billing email address for order details and payment purposes.
