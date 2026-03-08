<thinking>... internal logic checks:

*   This form is intended for customers to place tool orders. 
*   The form is divided into multiple pages with different sections. 
*   To avoid duplication, we should only display the form to customers after we verify that they are not already logged in and that their order status is not already fulfilled.
*   The form is designed to collect shipping details, contact information, and order preferences. 
*   Some fields are not required, but it's crucial that customers provide accurate contact information. 
*   If a customer orders a damaged tool, they will need to specify the type of order (change, new, or replacement). 
*   The order type selection will impact the shipping details that are requested. 
*   This form is designed to be simple and easy to use. 
*   Customers can enter their contact information and shipping details in multiple languages, but we will need to ensure that this feature is properly implemented. 
</thinking>

# Tool Order Form - Help Guide
## Purpose
The Tool Order Form is designed to help customers place orders for tools and equipment. This form collects essential information to process the order efficiently and accurately. Please fill out the form with your details, and our team will be in touch with you to confirm your order.

## How To Complete This Form
1.  To start, click on the "Next" button to proceed to the first page.
2.  On each page, fill out the required and optional fields as prompted.
3.  Use the "Next" and "Back" buttons to navigate through the pages.
4.  Once you have filled out all the required fields, click "Submit" to complete your order.

## Field-by-Field Explanation

*   **Shipping Details** (`shipping_details`, `text`, required: false): This is the first page of the form where you can enter your shipping details.
    *   Enter your shipping details accurately to ensure smooth delivery of your order.
*   **Contact Details** (`contact_details`, `text`, required: false): This page is where you can enter your contact information.
    *   Enter your name and phone number accurately to help us contact you for updates on your order.
*   **Damaged Tool** (`damaged_tool`, `number`, required: false): If your tool is damaged, please specify the type of order you are placing (change, new, or replacement).
    *   If you are unsure, you can select "New" to ensure you receive a brand new tool.
*   **Type of Order** (`order_type`, `select_one`, required: false): Select the type of order you are placing:
    *   Change: If your tool is damaged or needs repair.
    *   New: If you need a brand new tool.
    *   Replacement: If you are replacing an existing tool.
*   **Shipping Address** (`shipping_address`, `text`, required: false): Enter your shipping address to ensure accurate delivery of your order.
    *   Enter your address accurately to avoid delays in delivery.
*   **Shipping City** (`shipping_city`, `text`, required: false): Enter your city to ensure accurate delivery of your order.
    *   Enter your city accurately to ensure we can find your location.
*   **Shipping Postal Code** (`shipping_postal_code`, `text`, required: false): Enter your postal code to ensure accurate delivery of your order.
    *   Enter your postal code accurately to avoid delays in delivery.
*   **Shipping Province** (`shipping_province`, `text`, required: false): Enter your province to ensure accurate delivery of your order.
    *   Enter your province accurately to avoid delays in delivery.
*   **Customer Name** (`customer_name`, `text`, required: false): Enter your name to help us contact you for updates on your order.
    *   Enter your name accurately to avoid confusion.
*   **Customer Phone** (`customer_phone`, `text`, required: false): Enter your phone number accurately to help us contact you for updates on your order.
    *   Enter your phone number accurately to ensure we can reach you.
*   **Customer Email** (`customer_email`, `text`, required: false): Enter your email accurately to ensure we can contact you for updates on your order.
    *   Enter your email accurately to avoid delays in communication.
*   **Customer Message** (`customer_message`, `text`, required: false): Enter any additional information or special requests you may have.
    *   Enter any relevant information to help us better understand your order.
*   **Customer Request** (`customer_request`, `text`, required: false): Enter any additional information or special requests you may have.
    *   Enter any relevant information to help us better understand your order.
*   **Order Request** (`order_request`, `text`, required: false): Enter any additional information or special requests you may have.
    *   Enter any relevant information to help us better understand your order.

## Tips

*   Please fill out the form accurately and completely to ensure smooth processing of your order.
*   If you have any questions or concerns, feel free to contact us for assistance.
*   We will be in touch with you shortly to confirm your order and provide updates.
