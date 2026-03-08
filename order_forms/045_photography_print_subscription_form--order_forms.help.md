# <string> - Help Guide
## Purpose
This form is used to collect customer information and subscription details for orders.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the customer's details, including their email address and phone number.
2. Choose the subscription plan and confirm whether or not the customer has ordered prints.
3. Enter the start and end dates for the subscription, if applicable.
4. Select the payment method and confirm whether or not the subscription is active.
5. Add any additional notes about the subscription.

## Field-by-Field Explanation
* **Customer (`customer`, `text`, required: false)**: Enter the customer's name or identifier.
* **Email (`email`, `email`, required: true)**: Enter the customer's email address.
* **Phone Number (`phone_number`, `text`, required: true)**: Enter the customer's phone number.
* **Subscription Plan (`subscription_plan`, `select_multiple`, required: false)**: Choose the subscription plan that applies to this customer.
* **Prints Ordered (`prints_ordered`, `number`, required: true)**: Enter the number of prints ordered.
* **Subscription Start Date (`subscription_start_date`, `date`, required: true)**: Enter the start date of the subscription.
* **Subscription End Date (`subscription_end_date`, `date`, required: false)**: Enter the end date of the subscription, if applicable.
* **Payment Method (`payment_method`, `select_one`, required: true)**: Select the payment method for this subscription.
* **Subscription Status (`subscription_status`, `select_one`, required: false)**: Choose the status of the subscription (Active or Inactive).
* **Subscription Notes (`subscription_notes`, `note`, required: false)**: Add any additional notes about the subscription.

## Tips
* Make sure to fill out all required fields to ensure accurate ordering.
* Double-check the subscription start and end dates if they are relevant.
* Use the correct payment method to avoid delays in the ordering process.
