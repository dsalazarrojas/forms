# Crossfit Membership Survey - Help Guide
## Purpose
This form is used to collect membership information from Crossfit members, including their name, contact details, membership status, type, and payment details.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your First Name and Last Name in the respective fields.
2. Enter your Email address in the Email field.
3. Enter your Phone number in the Phone field.
4. Provide your Date of Birth in the Date of Birth field.
5. Select your current Membership Status from the dropdown options.
6. Choose your Membership Type from the available options.
7. Select your preferred Payment Method from the dropdown options.
8. Update your Payment Status accordingly.
9. Optionally, add any additional comments or notes in the Note field.
10. Finally, enter the Date Completed and Time Completed for your membership status update.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, optional): Enter your first name.
* **Last Name** (`last_name`, text, optional): Enter your last name.
* **Email** (`email`, email, optional): Enter your email address in the format `example@example.com`.
* **Phone** (`phone`, text, optional): Enter your phone number.
* **Date of Birth** (`date_of_birth`, date, optional): Enter your date of birth in the format `YYYY-MM-DD`.
* **Membership Status** (`membership_status`, select_one, optional): Select one of the following:
	+ Active: You are currently a member of Crossfit.
	+ Inactive: You are not currently a member of Crossfit.
	+ Pending: Your membership application is still being reviewed.
* **Membership Type** (`membership_type`, select_multiple, optional): Select one or more of the following:
	+ Individual: You are a solo member.
	+ Couple: You are a member with a partner or spouse.
	+ Family: You are a member with your immediate family.
* **Payment Method** (`payment_method`, select_one, optional): Select one of the following:
	+ Credit Card: You use a credit card for payment.
	+ Debit Card: You use a debit card for payment.
	+ Cash: You make payments in cash.
* **Payment Status** (`payment_status`, select_one, optional): Select one of the following:
	+ Paid: You have completed your payment.
	+ Pending: Your payment is still pending.
	+ Cancelled: Your payment has been cancelled.
* **Note** (`note`, note, optional): Add any additional comments or notes about your membership status.
* **Date Completed** (`date_completed`, date, optional): Enter the date you completed your membership status update.
* **Time Completed** (`time_completed`, time, optional): Enter the time you completed your membership status update.
