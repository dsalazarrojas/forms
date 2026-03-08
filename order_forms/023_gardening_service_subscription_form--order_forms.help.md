# Gardening Service Subscription Form - Help Guide
## Purpose
The Gardening Service Subscription Form is used to create and manage customer subscriptions for a gardening service. This form collects information from customers to determine their subscription type, start and end dates, service frequency, payment method, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your **Customer Name** in the first field.
2. Provide your **Email** address in the second field.
3. Enter your **Phone Number** in the third field.
4. Select your preferred **Subscription Type** (Yearly or Monthly).
5. Enter your desired **Subscription Start Date** and **Subscription End Date**.
6. Enter your **Address** in the street address field.
7. Select your preferred **Service Frequency** (Weekly, Bi-Weekly, Monthly).
8. Select your preferred **Payment Method** (Check or Credit Card).
9. If applicable, provide your **Payment Terms** and **Payment Schedule**.
10. Enter any additional **Notes** about your subscription.
11. Select the **Assigned Tool** for your subscription.
12. Select the **Assigned User** for your subscription.
13. Optionally, select the **Assigned Group** for your subscription.
14. Select the **Assigned Status** of your subscription (Active, Inactive, On-hold).
15. Enter any additional **Notes 1-8** for further information.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required): Enter your full name as it appears on your identification.
* **Email** (`email`, email, required): Enter your email address for communication purposes.
* **Phone Number** (`phone_number`, text, required): Enter your phone number for contact and communication.
* **Subscription Type** (`subscription_type`, select_multiple, required): Select the type of subscription you want (Yearly or Monthly).
* **Subscription Start Date** (`subscription_start_date`, date, required): Enter the start date of your subscription in MM/DD/YYYY format.
* **Subscription End Date** (`subscription_end_date`, date, required): Enter the end date of your subscription in MM/DD/YYYY format.
* **Address** (`address`, text, required): Enter your street address.
* **Service Frequency** (`service_frequency`, select_one, required): Select how often you want the service (Weekly, Bi-Weekly, Monthly).
* **Payment Method** (`payment_method`, select_one, required): Select your preferred payment method (Check or Credit Card).
* **Payment Terms** (`payment_terms`, text, optional): If applicable, enter any additional payment terms or conditions.
* **Payment Schedule** (`payment_schedule`, text, optional): If applicable, enter your payment schedule details.
* **Notes** (`notes`, note, optional): Enter any additional information or notes about your subscription.
* **Assigned Tool** (`assigned_tool`, text, required): Enter the tool assigned to you for your subscription.
* **Assigned User** (`assigned_user`, text, required): Enter the user assigned to you for your subscription.
* **Assigned Group** (`assigned_group`, text, optional): If applicable, select the group assigned to you for your subscription.
* **Assigned Status** (`assigned_status`, select_one, required): Select the status of your subscription (Active, Inactive, On-hold).
* **Notes 1-8** (`notes_1`, `notes_2`, `notes_3`, `notes_4`, `notes_5`, `notes_6`, `notes_7`, `notes_8`, text, optional): Enter any additional information or notes about your subscription.
