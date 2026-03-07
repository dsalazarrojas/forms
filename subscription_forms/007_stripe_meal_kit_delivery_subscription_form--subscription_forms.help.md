<thinking>
This form is designed to collect information for a subscription to a meal kit delivery service using Stripe as the payment gateway. The purpose of this form is to create a subscription that aligns with the user's preferences and schedule. Before filling out this form, ensure that you are not already subscribed to a meal kit delivery service with us, as this form is intended for new subscribers only.

This form is divided into several pages, each with its own set of questions and options. Please fill out the form carefully, making sure to provide accurate and complete information for each field. If you need help or have questions, feel free to ask.
</thinking>

# stripe_meal_kit_delivery_subscription_form - Help Guide
## Purpose
The purpose of this form is to create a subscription to a meal kit delivery service that meets your needs and preferences. Please fill out the form carefully to ensure you get the right subscription.

## How To Complete This Form
To complete this form, follow these steps:

1. Select your delivery plan from the options provided.
2. Enter your name and phone number accurately.
3. Provide a valid email address for communication.
4. Enter your address for delivery purposes.
5. Choose whether you want to connect your Stripe account.
6. Select the desired Stripe plan.
7. Choose whether you want to start or end your subscription on a specific date.
8. Add any additional notes (optional).

## Field-by-Field Explanation
* **Delivery Plan** (`delivery_plan`, select_one, required):
  + Select whether you want a one-time delivery or a recurring delivery plan.
* **Name** (`name`, text, required):
  + Enter your name as it appears on your identification.
* **Email** (`email`, email, required):
  + Enter your valid email address for communication and order updates.
* **Phone** (`phone`, text, required):
  + Enter your phone number for delivery and order updates.
* **Address** (`address`, text, required):
  + Enter your address where the meal kits will be delivered.
* **Stripe Connect** (`stripe_connect`, select_one, optional):
  + Choose whether you want to connect your existing Stripe account for easier billing and payment processing.
* **Stripe User ID** (`stripe_user_id`, number, optional):
  + Enter your existing Stripe User ID for connection purposes (if selected).
* **Stripe API Key** (`stripe_api_key`, select_one, optional):
  + Choose whether you want to use a public or private Stripe API key (only if you have a Stripe account).
* **Stripe Plan** (`stripe_plan`, select_one, required):
  + Select the desired meal kit delivery plan from the options provided.
* **Start Date** (`start_date`, date, required):
  + Choose the date when you want your subscription to start.
* **End Date** (`end_date`, date, required):
  + Choose the date when you want your subscription to end.
* **Note** (`note`, note, optional):
  + Add any additional information or notes about your subscription (if needed).
