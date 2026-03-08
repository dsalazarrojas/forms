# Tickets Purchase Form - Help Guide
## Purpose
The Tickets Purchase Form is designed to collect information for ticket purchases, including event details, ticket quantities, prices, payment methods, and donor contact information. This form helps us process ticket sales efficiently and ensures accurate record-keeping.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Event Name** of the event for which you are purchasing tickets.
2. Select the **Ticket Type** you wish to purchase from the list of available options.
3. Enter the **Quantity** of tickets you want to buy.
4. Enter the **Price** of each ticket you are purchasing.
5. Calculate the **Total** cost of your purchase.
6. Choose your preferred **Payment Method** (Cash, Credit Card, or PayPal).
7. Enter your **Donor Name** as the person making the purchase.
8. Provide your **Donor Email** address for communication and confirmation purposes.
9. Enter your **Donor Phone Number** in E.164 format for contact verification.
10. Optionally, provide a **Donation Description** if you have any specific instructions or messages you'd like us to know.
11. You may add any additional **Notes** to your purchase, if needed.
12. If applicable, select the **Event ID** of the event you are attending.
13. Leave the **Form Submission ID** field blank, as this is automatically generated upon form submission.
14. The **Created At** field is automatically populated upon form submission and is not editable.

## Field-by-Field Explanation
* **Event Name** (`event_name`, text, required): Enter the name of the event for which you are purchasing tickets.
* **Ticket Type** (`ticket_type`, select_one, required): Select the type of ticket you wish to purchase from the list of available options.
* **Quantity** (`quantity`, number, required): Enter the number of tickets you want to buy.
* **Price** (`price`, number, required): Enter the price of each ticket you are purchasing.
* **Total** (`total`, number, required): This field is automatically calculated based on the quantity and price.
* **Payment Method** (`payment_method`, select_one, required): Choose your preferred payment method (Cash, Credit Card, or PayPal).
* **Donor Name** (`donor_name`, text, required): Enter the name of the person making the purchase.
* **Donor Email** (`donor_email`, email, required): Enter your email address for communication and confirmation purposes.
* **Donor Phone** (`donor_phone`, text, required): Enter your phone number in E.164 format for contact verification.
* **Donation Description** (`donation_description`, text, optional): Optionally, provide any additional information about your purchase.
* **Notes** (`notes`, text, optional): Add any additional notes or comments to your purchase.
* **Event ID** (`event_id`, select_one, optional): If applicable, select the ID of the event you are attending.
* **Form Submission ID** (`form_submission_id`, text, optional): This field is automatically generated upon form submission and is not editable.
* **Created At** (`created_at`, date, optional): This field is automatically populated upon form submission and is not editable.
