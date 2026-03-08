<thinking>
To determine the purpose and relevance of this form, let's analyze the provided YAML fields. The form is called "E Commerce Claim Form" and it appears to be used for processing claims related to e-commerce transactions. The fields included suggest that it's used to gather information about an order, including order details, product information, and customer contact information.

Upon further analysis, it seems that this form is likely used for resolving disputes or issues related to e-commerce orders, such as order cancellation, returns, or refunds. It's possible that the form is used by the company to gather more information about the issue and respond to the customer's concerns.

The form does not seem to be used for creating a new order or making a new purchase, as there are no fields related to payment methods or order creation. It's also not clear whether this form is used for internal purposes only or for external communication with customers. However, based on the fields included, it seems to be used for communication and issue resolution.

Considering the fields, there seems to be some redundancy in the address fields (e.g., shipping_address, billing_address, shipping_city, billing_city, shipping_zip, billing_zip). This might be due to the form being designed for multiple scenarios or purposes.

To avoid duplication and provide a clear explanation, I'll make sure to only explain each field once in the "Field-by-Field Explanation" section.</thinking>

# E Commerce Claim Form - Help Guide
## Purpose
This form is used for processing claims related to e-commerce transactions. It gathers information about an order, product, and customer contact details to resolve disputes or issues.

## How To Complete This Form
To complete this form, follow the steps below:

1. Enter your Order ID to identify the order you are submitting a claim for.
2. Enter the date of the order to provide a clear timeline for the issue.
3. Enter the Purchase Price of the order to help us understand the transaction value.
4. Provide the Product ID to help us identify the product in question.
5. Enter the Product Name to provide a clear description of the product.
6. Enter a brief Description of the issue or problem you are experiencing.
7. Select the Order Status to indicate the current state of the order.
8. Enter the Reason for Claim to provide a clear explanation of the issue.
9. Attach any relevant documents or evidence to support your claim (optional).
10. Enter the Contact Person's name, contact number, and email to enable us to follow up with them.

## Field-by-Field Explanation
* **Order ID** (`order_id`, number, required): Enter the ID of the order you are submitting a claim for.
* **Order Date** (`order_date`, date, required): Enter the date of the order.
* **Purchase Price** (`purchase_price`, number, required): Enter the price you paid for the order.
* **Product ID** (`product_id`, number, required): Enter the ID of the product in question.
* **Product Name** (`product_name`, text, required): Enter the name of the product.
* **Description** (`description`, text, required): Enter a brief description of the issue or problem you are experiencing.
* **Order Status** (`order_status`, select_one, required): Select the current status of the order (e.g., Order Received, Cancelled, In Transit, Completed, Refunded).
* **Reason for Claim** (`reason_for_claim`, text, required): Enter a clear explanation of the reason for your claim.
* **Attachment** (`attachment`, text, optional): Attach any relevant documents or evidence to support your claim.
* **Contact Person** (`contact_person`, text, required): Enter the name of the contact person.
* **Contact Number** (`contact_number`, text, required): Enter the contact person's phone number.
* **Email** (`email`, email, required): Enter the contact person's email address.
* **Shipping Address** (`shipping_address`, text, optional): Enter the shipping address (if different from billing address).
* **Billing Address** (`billing_address`, text, optional): Enter the billing address (if different from shipping address).
* **Shipping City** (`shipping_city`, text, optional): Enter the city of the shipping address.
* **Shipping Country** (`shipping_country`, text, optional): Enter the country of the shipping address.
* **Shipping Zip** (`shipping_zip`, text, optional): Enter the zip code of the shipping address.
* **Billing City** (`billing_city`, text, optional): Enter the city of the billing address.
* **Billing Country** (`billing_country`, text, optional): Enter the country of the billing address.
* **Billing Zip** (`billing_zip`, text, optional): Enter the zip code of the billing address.
* **Product Description** (`product_description`, text, optional): Enter a detailed description of the product.
* **Order Details** (`order_details`, text, optional): Enter any additional information about the order.
* **Notes** (`notes`, note, optional): Enter any additional notes or comments about the issue.
