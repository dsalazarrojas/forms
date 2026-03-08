# mental_health_billing_form - Help Guide
## Purpose
The mental_health_billing_form is used to process and report payment information related to client services.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the client's name in the **Client Name** field.
2. Enter the date of the billing in the **Billing Date** field.
3. Enter the client's ID in the **Client ID** field.
4. Select the payment method used in the **Payment Method** field. Options include:
	* Client Credit Card
	* Electronic Funds Transfer
	* Check
	* Insurance
5. Select the payment status in the **Payment Status** field. Options include:
	* Pending
	* Approved
	* Denied
	* Refunded
6. Enter the total amount paid in the **Payment Total** field.
7. Select the payment frequency in the **Payment Frequency** field. Options include:
	* One-time
	* Recurring
8. Enter the name of the billing provider in the **Billing Provider Name** field.
9. Enter the address of the billing provider in the **Billing Provider Address** field.
10. Enter the phone number of the billing provider in the **Billing Provider Phone** field.

## Field-by-Field Explanation
* **Client Name** (`client_name`, text, required: false): The client's name is required for accurate billing purposes.
* **Billing Date** (`billing_date`, date, required: false): The date of the billing is necessary for record-keeping and payment tracking.
* **Client ID** (`client_id`, text, required: false): The client's ID is required for identification purposes.
* **Payment Method** (`payment_method`, select_one, required: false): Select the payment method used by the client.
* **Payment Status** (`payment_status`, select_multiple, required: false): Select the status of the payment to track its progress.
* **Payment Total** (`payment_total`, number, required: false): Enter the total amount paid by the client.
* **Payment Frequency** (`payment_frequency`, select_one, required: false): Select the frequency of the payment to determine billing schedules.
* **Billing Provider Name** (`billing_provider_name`, text, required: false): Enter the name of the billing provider.
* **Billing Provider Address** (`billing_provider_address`, text, required: false): Enter the address of the billing provider.
* **Billing Provider Phone** (`billing_provider_phone`, text, required: false): Enter the phone number of the billing provider.
