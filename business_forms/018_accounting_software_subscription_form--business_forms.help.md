# Accounting Software Subscription Form - Help Guide
## Purpose
This form is designed to help users subscribe to our accounting software. It collects necessary information for setting up a subscription, including company details, user information, subscription settings, and payment options.

## How To Complete This Form

1. Please fill out the form with accurate information for your company and users.
2. Select the desired software edition that suits your business needs.
3. Choose the subscription term that works best for your company.
4. If necessary, select optional modules to enhance the software's functionality.
5. Choose a payment gateway that aligns with your business processes.
6. Indicate whether you want to enable auto-renewal for your subscription.
7. Select a desired activation date for your subscription.

## Field-by-Field Explanation
* **Company Name** (`company_name`, `text`, required): Enter the legal name of your entity.
* **Primary Admin Name** (`primary_admin_name`, `text`, required): Fill out the main user's name with administrative rights.
* **Admin Email** (`admin_email`, `email`, required): Enter the main user's email for login and billing notifications.
* **Software Edition** (`software_edition`, `select_one`, required): Select the suitable software edition for your business, such as Basic, Professional, or Enterprise.
* **Number of User Licenses** (`number_of_user_licenses`, `number`, required): Specify the number of users that need access to the software.
* **Subscription Term** (`subscription_term`, `select_one`, required): Choose between monthly or annual subscription terms.
* **Optional Modules** (`optional_modules`, `select_multiple`, optional): Select add-ons like Inventory, Payroll, Multi-currency, Project Tracking, or API Access to enhance the software's features.
* **Payment Info** (`payment_header`, `note`, not required): This section contains notes on payment options. Please refer to your payment gateway's instructions for more information.
* **Payment Gateway** (`payment_gateway`, `select_one`, required): Select your preferred payment gateway, such as Stripe, Square, or Authorize.net.
* **Enable Auto-Renew** (`auto_renew_enabled`, `select_one`, required): Decide whether you want to enable auto-renewal for your subscription.
* **Desired Activation Date** (`activation_date`, `date`, required): Choose the desired date for your subscription activation.
