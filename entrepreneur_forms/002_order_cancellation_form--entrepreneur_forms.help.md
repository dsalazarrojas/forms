<thinking>

To ensure relevance and non-duplication, I will carefully analyze the form purpose and content to create a comprehensive and concise user-facing help guide.

Based on the provided YAML, the form is designed for order cancellation, which involves multiple steps and fields to gather relevant information from both customers and store representatives. The form likely exists to document and verify the cancellation process, including the reason for cancellation, order details, and confirmation of cancellation.

I will break down the form into sections to explain each field and its intended purpose, making it easy for end-users to understand and complete the form accurately.

</thinking>

# Order Cancellation Form - Help Guide
## Purpose
This form is used to document and verify the cancellation of an order. It collects information from both the customer and store representatives to ensure a smooth cancellation process.

## How To Complete This Form
To complete this form, please follow these steps:

*   Complete each field with the required information.
*   Double-check your entries for accuracy before submitting.
*   If you have any questions or concerns, please contact your store representative.

## Field-by-Field Explanation
*   **Customer Details** (`customer_details`, `text`, required: false): Enter your name, phone number, and address to help us identify you as the customer.
*   **Order Number** (`order_number`, `number`, required: false): Type the order number to help us track the cancellation.
*   **Reason for Cancellation** (`reason_for_cancellation`, `text`, required: false): Provide a brief explanation for the cancellation.
*   **Confirmation of Receipt** (`confirmation_of_receipt`, `select_one`, required: false): Confirm whether the order has been received by the customer.
    +   Options: Received, Not received
*   **Confirmation of Return** (`confirmation_of_return`, `select_one`, required: false): Confirm the status of the return process.
    +   Options: Refunded, In transit, Lost, Damaged
*   **Order Status** (`order_status`, `select_multiple`, required: false): Select the current status of the order.
    +   Options: Cancelled, Refunded, Pending, Shipped
*   **Cancellation Date** (`cancellation_date`, `date`, required: false): Enter the date of cancellation.
*   **Notes** (`notes`, `note`, required: false): Provide any additional comments or notes about the cancellation.
*   **Email** (`email`, `email`, required: false): Enter your email address for contact purposes.
*   **Phone** (`phone`, `text`, required: false): Enter your phone number for contact purposes.
*   **Address** (`address`, `text`, required: false): Enter your address for contact purposes.
*   **Order ID** (`order_id`, `number`, required: false): Enter the order ID for tracking purposes.
*   **Reason for Return** (`reason_for_return`, `text`, required: false): Provide the reason for return.
*   **Customer Signature** (`customer_signature`, `text`, required: false): Sign your name to confirm the cancellation.
*   **Date of Signature** (`customer_signature_date`, `time`, required: false): Enter the date of signature.
*   **Order Amount** (`order_amount`, `number`, required: false): Enter the amount of the order.
*   **Store Name** (`store_name`, `text`, required: false): Enter the store name for reference.
*   **Store Address** (`store_address`, `text`, required: false): Enter the store address for reference.
*   **Customer Note** (`customer_note`, `note`, required: false): Enter any additional comments or notes from the customer.
*   **Store Signature** (`store_signature`, `text`, required: false): Sign your name to confirm the cancellation.
*   **Date of Signature** (`store_signature_date`, `time`, required: false): Enter the date of signature.
*   **Reason for Receiving** (`reason_for_receiving`, `text`, required: false): Provide the reason for receiving the order.
*   **Store Note** (`store_note`, `note`, required: false): Enter any additional comments or notes from the store.
*   **Reason for Cancellation Reason** (`reason_for_cancellation_reason`, `select_one`, required: false): Confirm whether there is a reason for cancellation.
    +   Options: Yes, No
*   **Confirmation of Cancellation** (`confirmation_of_cancellation`, `select_one`, required: false): Confirm the cancellation status.
    +   Options: Yes, No

**Tips**

*   Double-check your entries for accuracy before submitting.
*   If you have any questions or concerns, please contact your store representative.
