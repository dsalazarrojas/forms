# Retreat Deposit Commitment Form - Help Guide
## Purpose
The Retreat Deposit Commitment Form is designed to collect information from attendees regarding their retreat deposit commitments. This form helps organizers track and manage commitments, ensuring accurate and up-to-date records.

## How To Complete This Form
1. Fill in your name and email address in the `attendee-name` and `attendee-email` fields, respectively.
2. If you have a title, provide it in the `attendee-title` field.
3. Enter your organization or affiliation in the `attendee-organization` field.
4. Select your role in the retreat from the `attendee-role` dropdown list.
5. Indicate your status (e.g., attending, cancelled, etc.) by selecting multiple options in the `attendee-status` dropdown list.
6. In the `attendee-commitment` field, enter any relevant details or comments about your commitment.
7. Enter the amount of the deposit you've paid in the `attendee-deposit` field.
8. Select the payment method you used (e.g., bank transfer, credit card, etc.) from the `attendee-payment-method` dropdown list.
9. Enter the date and time you paid the deposit.
10. If you've paid the deposit in installments, select the due date and time for each installment in the `attendee-due-date` and `attendee-due-time` fields.
11. Enter the total amount you owe in the `attendee-total-deposit` field.
12. Enter the amount you've already paid in the `attendee-amount-paid` field.
13. Enter the remaining amount you still owe in the `attendee-total-due` field.
14. If you've received a refund, enter the amount refunded in the `attendee-refunded-amount` field.
15. Enter the date and time the refund was made.
16. Finally, include any additional comments about your payment or commitment in the `attendee-comments` field.

## Field-by-Field Explanation

* **attendee-name** (`<name>`, `text`, required): Enter your name as it appears on your identification.
* **attendee-email** (`<email>`, `email`, required): Enter your email address where you can be reached.
* **attendee-title** (`<title>`, `text`, optional): If you have a title or position, enter it here.
* **attendee-organization** (`<organization>`, `text`, optional): Enter your organization or affiliation.
* **attendee-role** (`<role>`, `select_one`, optional): Select your role in the retreat from the provided options.
* **attendee-status** (`<status>`, `select_multiple`, optional): Indicate your status in the retreat by selecting multiple options.
* **attendee-commitment** (`<commitment>`, `note`, optional): Enter any relevant details or comments about your commitment.
* **attendee-deposit** (`<deposit>`, `number`, optional): Enter the amount of the deposit you've paid.
* **attendee-dates** (`<dates>`, `date`, optional): Enter the date and time you paid the deposit.
* **attendee-time** (`<time>`, `time`, optional): Enter the time you paid the deposit.
* **attendee-date-of-deposit** (`<date-of-deposit>`, `date`, optional): Enter the date you paid the deposit.
* **attendee-time-of-deposit** (`<time-of-deposit>`, `time`, optional): Enter the time you paid the deposit.
* **attendee-payment-method** (`<payment-method>`, `select_one`, optional): Select the payment method you used from the provided options.
* **attendee-payment-status** (`<payment-status>`, `select_one`, optional): Select the payment status from the provided options.
* **attendee-total-deposit** (`<total-deposit>`, `number`, optional): Enter the total deposit amount.
* **attendee-amount-paid** (`<amount-paid>`, `number`, optional): Enter the amount you've already paid.
* **attendee-total-due** (`<total-due>`, `number`, optional): Enter the amount still due.
* **attendee-refunded-amount** (`<refunded-amount>`, `number`, optional): Enter the amount refunded.
* **attendee-due-date** (`<due-date>`, `date`, optional): Enter the due date for the payment.
* **attendee-due-time** (`<due-time>`, `time`, optional): Enter the due time for the payment.
* **attendee-due-date-of-deposit** (`<due-date-of-deposit>`, `date`, optional): Enter the due date of the deposit.
* **attendee-due-time-of-deposit** (`<due-time-of-deposit>`, `time`, optional): Enter the due time of the deposit.
* **attendee-comments** (`<comments>`, `note`, optional): Enter any additional comments about your payment or commitment.
