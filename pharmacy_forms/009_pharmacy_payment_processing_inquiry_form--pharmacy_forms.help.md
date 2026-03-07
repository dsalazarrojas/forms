<thinking>
This form is for processing pharmacy payment inquiries. To prevent duplication, we will check for any open or in progress payments for the same customer and issue. This is to prevent over-processing of similar issues.
</thinking>

# pharmacy payment processing inquiry form - Help Guide
## Purpose
This form is used to document and track pharmacy payment inquiries. It captures details of payments and issues that need to be resolved, making it easier for teams to follow up on customer queries.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the Payment Details page with the relevant information about the payment.
2. Select the Issue Type and describe the issue in detail in the Issue Description field.
3. Enter the Payment Amount and choose the Payment Method used.
4. Enter the Issue Date and Due Date of the payment.
5. Assign a Team to handle the issue.
6. Decide if you want to follow up with the customer and select a status for the issue.
7. Add any additional notes if necessary.

## Field-by-Field Explanation
### Payment Details
* **Payment Details** (`payment_details`, `text`, not required): Enter a brief description of the payment, such as "Payment for medication" or "Payment for delivery of medication".

### Issue Type
* **Issue Type** (`issue_type`, `select_one`, not required): Select the type of issue that occurred with the payment, such as "Payment Issue" or "Other".

### Issue Description
* **Issue Description** (`issue_description`, `text`, not required): Describe the issue in detail, including any specific details about what happened.

### Payment Amount
* **Payment Amount** (`payment_amount`, `number`, not required): Enter the amount of the payment, such as 100.00.

### Payment Method
* **Payment Method** (`payment_method`, `select_one`, not required): Choose the method used to make the payment, such as "Credit Card", "EFT", or "Cheque".

### Issue Date
* **Issue Date** (`issue_date`, `date`, not required): Enter the date the payment issue occurred.

### Due Date
* **Due Date** (`due_date`, `date`, not required): Enter the expected due date for the payment.

### Assigned Team
* **Assigned Team** (`assigned_team`, `select_one`, not required): Select the team that will handle the issue, such as "Team A", "Team B", or "Team C".

### Follow-up
* **Follow-up** (`follow_up`, `select_one`, not required): Decide if you want to follow up with the customer after the issue is resolved, such as "True" or "False".

### Status
* **Status** (`status`, `select_one`, not required): Select the status of the issue, such as "Open", "In Progress", or "Resolved".

### Notes
* **Notes** (`notes`, `note`, not required): Add any additional notes about the issue, such as explanations or reminders.

### Email
* **Email** (`email`, `email`, not required): Enter the customer's email address if you want to contact them.

### Phone
* **Phone** (`phone`, `text`, not required): Enter the customer's phone number if you want to contact them.

### Customer Name
* **Customer Name** (`customer_name`, `text`, not required): Enter the customer's name, such as "John Doe".
