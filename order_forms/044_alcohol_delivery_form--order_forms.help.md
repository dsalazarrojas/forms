# Alcohol Delivery Form - Help Guide
## Purpose
This form is designed for customers to place orders for alcohol delivery. It collects necessary information for the delivery process, including customer details, order selection, and payment method.

## How To Complete This Form

1.  Fill in your **Full Name** in the `customer_name` field. Please ensure your name matches your photo ID.
2.  Enter your **Date of Birth** in the `date_of_birth` field. This will help us verify your age for alcohol delivery.
3.  Enter your **Delivery Address** in the `delivery_address` field.
4.  Enter your **Email Address** in the `email_address` field. This will be used for communication.
5.  Provide your **Contact Phone Number** in the `phone_number` field. This is needed for driver contact.
6.  In the **Beer/Lager Selection** field, choose your preferred beer/lager selection.
7.  In the **Wine/Spirits Selection** field, choose your preferred wine/spirits selection.
8.  Enter the **Total Number of Items** you would like to order in the `total_order_quantity` field.
9.  Select your preferred **Delivery Time** from the options provided (ASAP, Evening, Late Night, or Scheduled).
10. In the **Age Verification Agreement** section, confirm that you are of legal age for alcohol delivery.
11. Confirm that you understand the driver cannot deliver to intoxicated persons.
12. Select your preferred **Payment Method** (Credit/Debit Card, Card on Delivery, or Cash on Delivery).
13. If necessary, provide additional **Delivery Instructions** in the field.

## Field-by-Field Explanation

*   **Customer and Delivery Details**:
    *   **Full Name** (`customer_name`, text, required): Enter your full name.
    *   **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth to verify age.
    *   **Delivery Address** (`delivery_address`, text, required): Enter your delivery address.
    *   **Email Address** (`email_address`, email, required): Enter your email address for communication.
    *   **Contact Phone Number** (`phone_number`, text, required): Provide your contact phone number for driver contact.
*   **Your Order**:
    *   **Beer/Lager Selection** (`beer_selection`, text, optional): Select your preferred beer/lager selection.
    *   **Wine/Spirits Selection** (`wine_selection`, text, optional): Choose your preferred wine/spirits selection.
    *   **Total Number of Items** (`total_order_quantity`, number, required): Enter the total number of items you want to order.
    *   **Preferred Delivery Time** (`delivery_time_slot`, select one, required): Choose your preferred delivery time.
*   **Age Verification Agreement**:
    *   **Age Verification Agreement** (select one, required): Confirm you are of legal age for alcohol delivery.
*   **Age Verification Agreement**:
    *   **I confirm I will present a valid photo ID upon delivery** (`id_confirmation`, select one, required): Confirm you will present a valid photo ID upon delivery.
    *   **I understand the driver cannot deliver to intoxicated persons** (`sobriety_acknowledgment`, select one, required): Confirm you understand the driver cannot deliver to intoxicated persons.
*   **Payment Method**:
    *   **Payment Method** (`payment_method_order`, select one, required): Choose your preferred payment method (Credit/Debit Card, Card on Delivery, or Cash on Delivery).
*   **Delivery Instructions**:
    *   **Delivery Instructions (Gate code, etc.)** (`order_comments`, text, optional): If necessary, provide additional delivery instructions.

By following this guide, customers will be able to fill out the form accurately and successfully place their orders for alcohol delivery.
