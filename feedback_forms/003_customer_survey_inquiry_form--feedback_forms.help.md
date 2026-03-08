# Customer Survey Inquiry Form - Help Guide
## Purpose
The form is designed to collect customer feedback and scores related to customer service and satisfaction. This information will help us identify areas of improvement and make data-driven decisions.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your First Name in the first field.
2. Provide your Email address in the second field.
3. Enter your Phone Number in the third field.
4. Rate our Customer Service on a scale of 1-5.
5. Rate your overall Satisfaction on a scale of 1-5.
6. Provide any additional Comments you may have about your interaction with our organization.
7. Select who you believe you spoke to: Jimmy, Bob, or Jim.
8. If you're an admin, select "admin" as the Created By and leave the Created At field blank. If you're a customer, select "customer" and enter the current date and time in the Created At field.
9. If you're an admin, select "admin" as the Updated By and leave the Updated At field blank. If you're a customer, select "customer" and enter the current date and time in the Updated At field.
10. Finally, click submit to send your feedback.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, optional): Enter your first name here. This will help us get a better understanding of who you are and how we can improve our services for you.
* **Email** (`email`, email, optional): Enter your email address here. This will help us get in touch with you if we need more information about your feedback.
* **Phone Number** (`phone_number`, text, optional): Enter your phone number here. This will help us contact you about any issues or to follow up on your feedback.
* **Customer Service Score** (`customer_service_score`, number, optional): Rate our customer service on a scale of 1-5, where 1 is poor and 5 is excellent.
* **Satisfaction Score** (`satisfaction_score`, number, optional): Rate your overall satisfaction on a scale of 1-5, where 1 is poor and 5 is excellent.
* **Comments** (`comments`, text, optional): Add any additional comments or feedback you may have about your interaction with our organization.
* **Assigned To** (`assigned_to`, select_one, optional): Select who you spoke to: Jimmy, Bob, or Jim. This will help us identify who handled your case and how we can improve our processes.
* **Created At** (`created_at`, date, optional): Enter the date and time you created this record (for admins, leave blank).
* **Created By** (`created_by`, select_one, optional): Select who created this record: "admin" or "customer" (for admins, select "admin" and leave the Created At field blank).
* **Updated At** (`updated_at`, time, optional): Enter the date and time you updated this record (for admins, leave blank).
* **Updated By** (`updated_by`, select_one, optional): Select who updated this record: "admin" or "customer" (for admins, select "admin" and leave the Updated At field blank).
