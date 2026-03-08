# Refund Receipt Form - Help Guide
## Purpose
The Refund Receipt Form is used to record refund transactions, capturing essential details about the customer, refund amount, reason, and status. This form is crucial for maintaining accurate records and ensuring transparency in refund processing.
## How To Complete This Form

To fill out the Refund Receipt Form, please follow these steps:

1. Enter the customer's name in the "Customer Name" field.
2. Fill out the "Refund Amount" field with the total refund amount.
3. Enter the customer's email address in the "Customer Email" field.
4. Provide a reason for the refund in the "Reason for Refund" field.
5. Select the "Refund Date" when the refund was processed.
6. Indicate whether the refund was assigned to a specific individual by selecting "Yes" or "No" in the "Assigned To" field.
7. Enter any additional comments about the refund in the "Comments" field.
8. Update the "Status" field to reflect the current status of the refund, either "Active" or "Inactive".

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required/optional): Enter the customer's name.
* **Refund Amount** (`refund_amount`, number, required): Enter the total refund amount.
* **Customer Email** (`customer_email`, email, required): Enter the customer's email address.
* **Reason for Refund** (`reason_for_refund`, text, required/optional): Provide a brief description of the reason for the refund.
* **Refund Date** (`refund_date`, date, required): Enter the date when the refund was processed.
* **Assigned To** (`assigned_to`, select_one, required): Select "Yes" if the refund was assigned to a specific individual, "No" otherwise.
* **Comments** (`comments`, note, required/optional): Enter any additional comments about the refund.
* **Status** (`status`, select_one, required): Select the current status of the refund, either "Active" or "Inactive".
* **Customer Phone** (`customer_phone`, text, required/optional): Enter the customer's phone number (if available).

## Tips

* Double-check the "Status" field to ensure it accurately reflects the current status of the refund.
* If the refund has been assigned to someone, enter "Yes" in the "Assigned To" field.
