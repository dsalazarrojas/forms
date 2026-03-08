<thinking>
We need to ensure that the form is correctly configured and that the user understands what is expected of them. Let's review the form and create a user-facing help guide.

Upon reviewing the form, the "non_profit_donation_template_worldpay_us" form appears to be designed for non-profit donation collection, possibly for fundraising purposes. The form asks for various information about the donation, including the donor's choice to donate, their contact information, and the donation amount. 

Before proceeding, let's ensure that we are not duplicating any existing forms or processes, and that the form's purpose aligns with our organization's goals. If this form is for a one-time event or a specific non-profit organization, we should be cautious not to overlap with other forms or processes that might be more general or widely applicable.

Assuming that the form is properly configured and its purpose is clear, let's create the user-facing help guide.

</thinking>

# non_profit_donation_template_worldpay_us - Help Guide
## Purpose
This form is designed to collect donations for non-profit organizations. It gathers information about the donor's intention to donate, their contact details, and the amount they wish to donate.

## How To Complete This Form
To complete this form, follow these steps:

1. Select whether or not you would like to donate (Donation Info).
2. If you would like to donate, provide your email address and phone number for communication and follow-up.
3. Enter the amount you would like to donate (Non Profit Donation Amount).
4. Choose how you would like to make the payment (Payment Method).
5. Optionally, provide more information about the donor by selecting other relevant fields.

## Field-by-Field Explanation
* **Donation Info** (`donation_info`, select_one, required: false): This field allows you to indicate if you would like to donate.
	+ Select 'Yes' if you are willing to donate.
	+ Select 'No' if you are not.
* **Donor Information** (`donor_info`, select_multiple, required: false): This field provides more information about the donor.
	+ Select 'Yes' if you would like to provide additional information.
	+ Select 'No' if you do not want to provide extra details.
* **Donation Amount** (`donation_amount`, number, required: false): Enter the amount you would like to donate.
* **Payment Method** (`payment_method`, select_one, required: false): Choose your preferred payment method.
	+ Select 'Yes' if you would like to specify the payment method.
	+ Select 'No' if you do not want to.
* **Email** (`email`, email, required: false): Enter your email address for follow-up and communication purposes.
* **Phone Number** (`phone_number`, text, required: false): Enter your phone number for contact purposes.
* **Non Profit Donation Amount** (`non_profit_donation_amount`, number, required: false): Enter the amount you would like to donate.

## Tips
* Please ensure that the information provided is accurate and up-to-date.
* If you have any questions or need assistance, contact the form administrator.
* Thank you for supporting our non-profit organization!
