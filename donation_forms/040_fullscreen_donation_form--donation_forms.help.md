# fullscreen_donation_form - Help Guide
## Purpose
This form is designed to collect donations from users, providing an opportunity for them to contribute to your cause or project. It allows users to choose the amount and type of donation they wish to make, as well as specify any additional details such as phone number, email, and comments.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the "Donation Amount" field with the amount you wish to donate.
2. Select your preferred "Donation Frequency" option (Yes/No) to indicate if you want to make this a recurring donation.
3. If desired, choose "Make this a recurring donation?" from the options, which is another way to confirm whether you want a recurring donation.
4. Enter your "Name", which will be used to identify you.
5. If you have a phone number, enter it in the "Phone" field.
6. Enter your "Email" address.
7. Add any "Comments" you may have in the "Comments" field.
8. Finally, select the "Type of donation" option to specify the type of donation you are making.

## Field-by-Field Explanation
* **Donation Amount** (`donation_amount`, number, optional): Enter the amount you wish to donate.
* **Donation Frequency** (`donation_frequency`, select_multiple, optional): Select "Yes" if you want to make this a recurring donation. "No" will indicate a one-time donation.
* **Make this a recurring donation?** (`recurring_donation`, select_one, optional): Another way to confirm whether you want a recurring donation. If you have already selected "Yes" in the previous field, this field will be redundant.
* **Name** (`name`, text, optional): Enter your name for identification purposes.
* **Phone** (`phone`, text, optional): Enter your phone number (if applicable).
* **Email** (`email`, email, optional): Enter your email address.
* **Comments** (`comment`, note, optional): Add any additional comments about your donation.
* **Type of donation** (`donation_type`, select_one, optional): Select the type of donation you are making.
* **Frequency** (`frequency`, select_one, optional): Not sure how this field is related to the "Donation Frequency" field, but it is another select option field.
