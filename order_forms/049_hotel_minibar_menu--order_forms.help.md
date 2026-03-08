<thinking> 
To create a comprehensive help guide for the "Hotel Minibar Menu" form, I'll follow the structure and instructions provided. This form is used for ordering and managing menu items at a hotel, and I'll cover the purpose, completion process, and each field's explanation.

</thinking>

# Hotel Minibar Menu - Help Guide
## Purpose
The Hotel Minibar Menu form is designed for hotel staff to order and manage menu items for their customers. It helps in tracking and processing orders, payments, and customer information.

## How To Complete This Form

1. To get started, fill in the required fields, marked as such with an asterisk (\*). 
2. Fill in the optional fields based on your needs.
3. Review and ensure all fields are accurate before proceeding.
4. Click on the 'Submit' button to complete and save your order.

## Field-by-Field Explanation

* **Room Number** (`room_number`, number, required): Enter the room number of the customer who ordered or requested the menu item.
* **Order Type** (`order_type`, select_one, optional): Select the type of order (Minibar Order, Voucher, or Request).
* **Guest Feedback** (`guest_feedback`, text, optional): If a customer has provided feedback, enter it here.
* **Optional Feedback** (`optional_guest_feedback`, text, optional): If additional feedback is required, enter it here.
* **Order** (`order`, date, optional): Enter the date of the order if applicable.
* **Time** (`order_time`, time, optional): Enter the time of the order if applicable.
* **Total** (`order_total`, number, optional): Enter the total amount of the order if applicable.
* **Payment Status** (`payment_status`, select_one, optional): Select the payment status (Paid, Not Paid, or Pending).
* **Payment Method** (`payment_method`, select_one, optional): Select the payment method (Cash, Credit Card, or Other).
* **Payment Date** (`payment_date`, date, optional): Enter the date of payment if applicable.
* **Time of Payment** (`payment_time`, time, optional): Enter the time of payment if applicable.
* **Payment Amount** (`payment_amount`, number, optional): Enter the amount paid if applicable.
* **Confirmation** (`order_confirmation`, select_multiple, optional): Select whether the order is Confirmed, Not Confirmed, or Pending.
* **Note** (`order_note`, text, optional): Enter any additional notes about the order.
* **Status** (`order_status`, select_one, required): Select the status of the order (Paid, Not Paid, or Pending).
* **Assigned User** (`assigned_user`, select_one, optional): Select whether the order is assigned to a user or not.
* **Assigned Time** (`assigned_time`, time, optional): Enter the time the order was assigned if applicable.
* **Amount** (`assigned_amount`, number, optional): Enter the amount assigned if applicable.
* **Date** (`assigned_date`, date, optional): Enter the date the order was assigned if applicable.
* **Customer** (`customer`, text, optional): Enter the name of the customer or any other relevant information.
* **Email** (`customer_email`, email, optional): Enter the customer's email address.
* **Phone** (`customer_phone`, text, optional): Enter the customer's phone number.
* **Customer Note** (`customer_note`, text, optional): Enter any additional notes about the customer.
* **Customer Status** (`customer_status`, select_one, optional): Select the customer's status (Paid, Not Paid, or Pending).
* **Address** (`customer_address`, text, optional): Enter the customer's address.

Note: Some fields might seem redundant or have unclear labels, but I've done my best to provide explanations based on the provided YAML fields and their intended purpose.
