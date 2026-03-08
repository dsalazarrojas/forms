<thinking>
To create a help guide for the "Vendor Shipping Form" form, we need to understand its purpose and the fields it contains. This form appears to be used for managing vendor shipping details, including shipping methods, costs, and status.

Upon reviewing the form, we can see that it is divided into several sections, each with its own set of fields. The form seems to be used for tracking and managing vendor shipping information, and it includes fields for selecting shipping methods, tracking shipping costs, and updating the status of orders and shipments.

However, upon closer inspection, we notice that most of the fields are status-based, which seems to be a duplication of the main "delivery_status" field. We may want to consider streamlining the form to avoid confusion.

</thinking>

# Vendor Shipping Form - Help Guide
## Purpose
The Vendor Shipping Form is used to manage and track vendor shipping details, including methods, costs, and status.

## How To Complete This Form
To complete this form, follow these steps:

* Fill in the required fields, marked with an *asterisk*.
* For each field, choose the relevant option from the list or enter the required information.

## Field-by-Field Explanation
* **Contact Name** (`contact_name`, text, optional): Enter the name of the contact person.
* **Contact Phone** (`contact_phone`, text, optional): Enter the contact phone number.
* **Contact Email** (`contact_email`, email, optional): Enter the contact email address. Please note that you may need to verify this email address.
* **Contact Address** (`contact_address`, text, optional): Enter the contact address.
* **Order Form** (`order_form`, text, optional): Enter order-specific information.
* **Shipping Address** (`shipping_address`, select_multiple, optional): Select the shipping address.
* **Payment Method** (`payment_method`, select_one, optional): Select the payment method. This will likely affect the shipping cost.
* **Delivery Date** (`delivery_date`, date, optional): Choose the expected delivery date.
* **Order Status** (`order_status`, select_one, optional): Set the order status.
* **Shipping Cost** (`shipping_cost`, number, optional): Enter the shipping cost.
* **Shipping Method** (`shipping_method`, select_one, optional): Select the shipping method.
* **Shipping Details** (`shipping_details`, note, optional): Add any additional shipping details.
* **Order Notes** (`order_notes`, note, optional): Add any additional order notes.
* **Shipping Notes** (`shipping_notes`, note, optional): Add any additional shipping notes.
* **Delivery Status** (`delivery_status`, select_one, optional): Set the delivery status.
* **Payment Status** (`payment_status`, select_one, optional): Set the payment status.
* **Shipping Cost Status** (`shipping_cost_status`, select_one, optional): Set the shipping cost status.
* **Shipping Method Status** (`shipping_method_status`, select_one, optional): Set the shipping method status.
* **Shipping Details Status** (`shipping_details_status`, select_one, optional): Set the shipping details status.
* **Order Notes Status** (`order_notes_status`, select_one, optional): Set the order notes status.
* **Contact Name Status** (`contact_name_status`, select_one, optional): Set the contact name status.
* **Contact Phone Status** (`contact_phone_status`, select_one, optional): Set the contact phone status.
* **Contact Email Status** (`contact_email_status`, select_one, optional): Set the contact email status.
* **Contact Address Status** (`contact_address_status`, select_one, optional): Set the contact address status.
* **Contact Email Verified** (`contact_email_verified`, select_one, optional): Verify the contact email address.

Please note that some fields have been streamlined to reduce duplication and improve clarity.
