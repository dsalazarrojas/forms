<thinking>...</thinking>

# Stripe Product Order Form - Help Guide

## Purpose
This form is designed to collect information for a Stripe product order, including customer details, product selection, payment method, and order details. It is used to process payments and update Stripe subscription information.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your **First Name** in the text field provided.
2. Provide your **Shipping Address** in the text field.
3. Select one or more **products** from the available options.
4. Enter the **Quantity** of the selected product(s).
5. Choose your **Payment Method** from the available options.
6. Enter your **Email** address (if desired).
7. Enter your **Phone** number (if desired).
8. Add any **Notes** about your order (if desired).
9. Select whether or not to **use Stripe Card Details**.
10. Choose your **Stripe Payment Method**.
11. Enter the **Stripe Payment Token** (if applicable).
12. Enter the **Amount** of the order.
13. Enter the **Shipping Cost**.
14. Enter the **Tax** rate.
15. Calculate the total **Total** of the order.
16. Choose whether or not to **use Stripe Plan**.
17. Enter the **Stripe Plan ID** (if applicable).
18. Enter the **Stripe Plan Amount**.
19. Select the **Stripe Plan Currency**.
20. Select the **Stripe Subscription Status**.
21. Enter the **Stripe Subscription Status Date**.
22. Enter the **Stripe Subscription Status Date Time** (if applicable).
23. Enter the **Stripe Subscription Status Date Time TZ** (if applicable).

## Field-by-Field Explanation

* **First Name** (user_input, text, required): Enter your name as it appears on your identification.
* **Shipping Address** (shipping_details, text, required): Provide your full shipping address for delivery purposes.
* **Choose a product** (product_selection, select_multiple, required): Select one or more product(s) you wish to order.
* **Quantity** (quantity, number, required): Enter the number of the product(s) you wish to order.
* **Payment Method** (payment_details, select_one, required): Select your preferred payment method (e.g., credit card, bank transfer, etc.).
* **Email** (email, email, optional): Enter your email address for communication purposes.
* **Phone** (phone, text, optional): Enter your phone number for communication purposes.
* **Notes** (order_notes, note, optional): Add any additional notes or comments about your order.
* **Stripe Card Details** (stripe_card_details, select_multiple, required): Select whether or not to use Stripe card details for payment.
* **Stripe Payment Method** (stripe_payment_method, select_one, required): Choose your preferred Stripe payment method.
* **Stripe Payment Token** (stripe_payment_token, text, optional): Enter the Stripe payment token (if applicable).
* **Amount** (stripe_amount, number, required): Enter the total amount of the order.
* **Shipping Cost** (shipping_cost, number, required): Enter the shipping cost of the order.
* **Tax** (tax, number, required): Enter the tax rate of the order.
* **Total** (total, number, required): Calculate the total order cost.
* **Stripe Plan** (stripe_plan, select_one, required): Select whether or not to use Stripe plan.
* **Stripe Plan ID** (stripe_plan_id, text, required): Enter the Stripe plan ID (if applicable).
* **Stripe Plan Amount** (stripe_plan_amount, number, required): Enter the Stripe plan amount.
* **Stripe Plan Currency** (stripe_plan_currency, select_one, required): Select the Stripe plan currency.
* **Stripe Subscription Status** (stripe_subscription_status, select_one, required): Select the Stripe subscription status.
* **Stripe Subscription Status Date** (stripe_subscription_status_date, date, required): Enter the Stripe subscription status date.
* **Stripe Subscription Status Date Time** (stripe_subscription_status_date_time, time, required): Enter the Stripe subscription status date and time.
* **Stripe Subscription Status Date Time TZ** (stripe_subscription_status_date_time_tz, time, required): Enter the Stripe subscription status date and time with timezone.
* **Stripe Subscription Status Date TZ** (stripe_subscription_status_date_tz, date, optional): Enter the Stripe subscription status date with timezone.
