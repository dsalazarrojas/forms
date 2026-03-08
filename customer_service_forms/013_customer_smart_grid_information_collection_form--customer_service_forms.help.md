# Customer Smart Grid Information Collection Form - Help Guide

## Purpose
The Customer Smart Grid Information Collection Form is designed to collect essential information from customers about their smart grid usage. This information helps us improve our services and understand customer needs better.

## How To Complete This Form
To complete the form, follow these steps:

1. Fill in your **First Name** and **Last Name** to identify yourself as a customer.
2. Enter your **Phone number** for us to contact you if needed.
3. Provide your **Email** address to enable us to send you updates or notifications.
4. Enter your **Address** where we can find you.
5. Choose the correct **Utility Metering** option that applies to your usage.
6. Enter your **Account Number**, which helps us identify your account with our system.
7. Provide the total **Meter Reading** for the period specified.
8. Select the **Usage Period** that reflects when you took your meter readings.
9. Choose the start and end dates of the **Usage Period** for accurate calculations.
10. Enter any **Notes** regarding your usage or account.
11. Select the customer or representative this account is assigned to, using the **Assigned To** option.
12. Enter the **Assigned To ID** (optional).
13. Choose the correct **Utility** that applies to your account.
14. Select the **Utility Type** that corresponds to your usage.
15. Choose the current **Account Status** of your account.

## Field-by-Field Explanation
- **Customer First Name** (`customer_first_name`, text, optional): Enter your first name as it appears on your identification documents.
- **Customer Last Name** (`customer_last_name`, text, optional): Enter your last name as it appears on your identification documents.
- **Phone** (`phone`, text, optional): Enter your contact phone number for easy communication.
- **Email** (`email`, email, optional): Enter a valid email address that we can use to send updates or notifications.
- **Address** (`address`, text, optional): Enter the address associated with your account.
- **Utility Metering** (`utility_metering`, select_one, optional): Choose the correct metering option for your account.
- **Account Number** (`account_number`, text, optional): Enter your account number for identification purposes.
- **Meter Reading** (`meter_reading`, number, optional): Enter the total meter reading for the specified period.
- **Usage Period** (`usage_period`, select_multiple, optional): Select the period during which you took your meter readings.
- **Start Date** (`start_date`, date, optional): Enter the start date of the usage period.
- **End Date** (`end_date`, date, optional): Enter the end date of the usage period.
- **Notes** (`notes`, note, optional): Provide any additional information regarding your usage or account.
- **Assigned To** (`assigned_to`, select_one, required): Select the person or representative this account is assigned to.
- **Assigned To ID** (`assigned_to_id`, number, optional): Enter the ID of the person or representative assigned to this account (optional).
- **Utility** (`utility`, select_one, optional): Choose the correct utility that applies to your account.
- **Utility Type** (`utility_type`, select_one, optional): Select the type of utility that corresponds to your usage.
- **Account Status** (`account_status`, select_one, optional): Choose the current status of your account.
