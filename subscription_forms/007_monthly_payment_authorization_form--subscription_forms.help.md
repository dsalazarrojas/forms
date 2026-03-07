<thinking>

This form is for managing subscription information for a company. It is used to create, edit, and manage existing subscriptions. 

The purpose of this form is to collect and record subscription details for a specific period and payment schedule. The form is divided into several sections, each with its own set of fields.

The form is used by administrators to create new subscriptions, update existing ones, and track the status of subscriptions.

The form should only be used by authorized users with access to the subscription management system.

</thinking>

# <string> - Help Guide

## Purpose
This form is for managing subscription information for a company. It is used to create, edit, and manage existing subscriptions.

## How To Complete This Form
1. To start a new subscription, click on the "Create New Subscription" button.
2. Fill in the required fields, such as form name, payment frequency, start date, end date, amount, payment method, and status.
3. Select the payment cycle (e.g. monthly, quarterly) and payment method (e.g. cash, bank transfer).
4. Enter the created and updated dates to track when the subscription was created and last updated.
5. Optional: Add any additional notes for the subscription.

## Field-by-Field Explanation
* **Form Details** (`form_name`, text, required): Enter the name of the subscription.
* **Payment Frequency** (`payment_frequency`, select_one, required): Select the payment frequency (e.g. monthly, quarterly).
* **Payment Start Date** (`payment_start_date`, date, required): Enter the start date of the subscription.
* **Payment End Date** (`payment_end_date`, date, required): Enter the end date of the subscription.
* **Amount** (`amount`, number, required): Enter the amount of the subscription.
* **Payment Method** (`payment_method`, select_one, required): Select the payment method (e.g. cash, bank transfer).
* **Payment Status** (`payment_status`, select_multiple, required): Select the status of the subscription (e.g. active, inactive, pending, failed).
* **Subscription Status** (`subscription_status`, select_multiple, required): Select the status of the subscription (e.g. active, inactive, pending, failed).
* **Created At** (`created_at`, date, required): Display the created date of the subscription.
* **Updated At** (`updated_at`, date, required): Display the updated date of the subscription.
* **Deleted At** (`deleted_at`, date, optional): Display the deleted date of the subscription.
* **User ID** (`user_id`, select_one, required): Select the user ID associated with the subscription.
* **Company ID** (`company_id`, select_one, required): Select the company ID associated with the subscription.
* **Notes** (`notes`, note, optional): Enter any additional notes for the subscription.

## Tips
* Make sure to enter all required fields.
* Select the correct payment frequency and method.
* Enter the correct start and end dates.
* Select the correct status and subscription status.
* Enter any additional notes if necessary.
