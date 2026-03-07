<thinking>
The form is designed to collect donations and information from donors for the Mountain Rescue organization. It will allow donors to specify their donation amount, payment type (Donations, Donation, or Payment), frequency of donation (One-Time, Recurring, or Other), payment method (Bank Transfer, PayPal, Credit, or Cash), and other details such as the donation date, donor's personal details, and contact information. This form is a crucial tool for the organization to manage donations and interactions with donors efficiently.

</thinking>
# Mountain Rescue Donation Form - Help Guide
## Purpose
The Mountain Rescue Donation Form is designed to collect donations and information from donors for the Mountain Rescue organization. This form helps us understand your contribution and provides a platform to interact with our team.

## How To Complete This Form
To complete this form, please follow these steps:

1. Choose the donation amount you wish to donate.
2. Select the type of payment you would like to make (Donations, Donation, or Payment).
3. Specify the frequency of your donation (One-Time, Recurring, or Other).
4. Choose your preferred payment method (Bank Transfer, PayPal, Credit, or Cash).
5. Provide your donation date, if applicable.
6. Enter your donor details in the dedicated field.
7. Enter your name and contact information (email and phone number), if applicable.

## Field-by-Field Explanation
### Donatable Amount
* **Donatable Amount** (`donatable_amount`, `number`, required: false): This field allows you to specify the amount you would like to donate. Please enter a valid numerical value.

### Payment Type
* **Payment Type** (`payment_type`, `select_one`, required: true): Choose between Donations, Donation, or Payment to specify the type of transaction you would like to make. Donations are for general use, Donation is a one-time gift, and Payment is for a specific reason.

### Donation Frequency
* **Donation Frequency** (`donation_frequency`, `select_multiple`, required: false): Select One-Time, Recurring, or Other to specify how often you would like to donate. If you select Other, please provide more details in the Donor Details field.

### Payment Method
* **Payment Method** (`payment_method`, `select_one`, required: true): Choose between Bank Transfer, PayPal, Credit, or Cash to specify how you would like to make the payment. We accept all major payment methods for your convenience.

### Donation Date
* **Donation Date** (`donation_date`, `date`, required: false): If your donation is not a one-time gift, please specify the date you would like it to be processed.

### Donor Details
* **Donor Details** (`donor_details`, `note`, required: false): This field is for any additional comments or details about your donation. Please feel free to include any information you think we should know.

### Donor Name
* **Donor Name** (`donor_name`, `text`, required: false): If you would like to identify yourself as the donor, please enter your name.

### Donor Email
* **Donor Email** (`donor_email`, `email`, required: false): If you have an email address where you can be contacted, please enter it here for our records.

### Donor Phone
* **Donor Phone** (`donor_phone`, `text`, required: false): If you have a phone number where you can be reached, please provide it for our follow-up calls or messages. 

Note: The fields marked as "required: false" are optional and can be filled in or left blank if not applicable.
