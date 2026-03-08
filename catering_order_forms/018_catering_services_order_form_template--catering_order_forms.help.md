<thinking>
This form is designed to gather information from clients for catering services orders. It is intended for use by customers to provide their details and order information, as well as for staff to use for billing and payment purposes. This guide will help users understand how to complete the form correctly and efficiently. Please review this guide before proceeding to ensure you understand the form's purpose and requirements. If you have any questions or concerns, please refer to this guide for clarification.
</thinking>

# Catering Services Order Form Template - Help Guide
## Purpose
This form is used for clients to provide their information and order details for catering services.

## How To Complete This Form
To complete the form, follow these steps:

1.  Provide your contact information in the Client Information section.
2.  Enter the event details in the Event Details section.
3.  Select your meal options in the Meal Selection section.
4.  Calculate your total amount due based on meal quantities and tax rate.
5.  Choose your payment method and provide any special requests or notes.

## Field-by-Field Explanation

*   **Client Name (ID: 2)** (`text`, required): Please enter the name of the client or person placing the order.
*   **Email Address (ID: 3)** (`email`, required): Enter the email address of the client or person placing the order.
*   **Phone Number (ID: 4)** (`text`, required): Enter the phone number of the client or person placing the order.
*   **Event Date (ID: 6)** (`date`, required): Enter the date of the event.
*   **Event Time (ID: 7)** (`time`, required): Enter the time of the event.
*   **Event Name (ID: 8)** (`text`, required): Enter the name of the event.
*   **Event Location (ID: 9)** (`text`, required): Enter the full address of the event location.
*   **Number of Guests (ID: 10)** (`number`, required): Enter the number of guests attending the event.
*   **Meal Option 1 - Description (ID: 12)** (`text`, required): Enter the description of the first meal option.
*   **Meal Option 1 - Cost Per Order (ID: 13)** (`number`, required): Enter the cost per order of the first meal option.
*   **Meal Option 1 - Quantity (ID: 14)** (`number`, required): Enter the quantity of the first meal option.
*   **Meal Option 1 - Amount (ID: 15)** (`number`, optional): This field will be auto-calculated based on meal option 1 quantity and cost per order.
*   **Meal Option 2 - Description (ID: 16)** (`text`, optional): Enter the description of the second meal option.
*   **Meal Option 2 - Cost Per Order (ID: 17)** (`number`, optional): Enter the cost per order of the second meal option.
*   **Meal Option 2 - Quantity (ID: 18)** (`number`, optional): Enter the quantity of the second meal option.
*   **Meal Option 2 - Amount (ID: 19)** (`number`, optional): This field will be auto-calculated based on meal option 2 quantity and cost per order.
*   **Subtotal (ID: 21)** (`number`, optional): This field will be auto-calculated based on meal quantities and costs.
*   **Tax Rate (%) (ID: 22)** (`number`, optional): Enter the tax rate for the order.
*   **Total Amount Due (ID: 23)** (`number`, required): This field will be auto-calculated based on subtotal and tax rate.
*   **Payment Method (ID: 24)** (`select_one`, required): Choose the payment method for the order.
*   **Special Requests or Notes (ID: 25)** (`text`, optional): Enter any special requests or notes for the order.
