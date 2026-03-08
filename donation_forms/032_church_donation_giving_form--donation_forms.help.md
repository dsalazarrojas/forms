<thinking>
This is a form for users to make donations to the church. The form is designed to collect personal and donation information from the user, allowing them to specify the amount and purpose of their donation. The form includes fields for the donor's name, email, gift amount, and designation of the gift purpose. The form also asks if the user would like to cover the processing fee, cover the fee with their gift, and includes fields for billing information (address, city, state, zip, and phone number) and employer matching information. The form is required to be completed in its entirety, as the fields are all marked as required except for a few optional fields.
</thinking>

# Church Donation Giving Form - Help Guide
## Purpose
This form is designed for users to make donations to the church. It collects personal and donation information to process the gift accurately.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Enter your full name and email address.
2.  Enter the amount you would like to give.
3.  Designate the purpose of your gift from the options provided.
4.  Choose if you would like to make this a recurring gift.
5.  Cover the 2.9% processing fee with your gift.
6.  Enter your billing address and city, state, and zip code.
7.  Optionally, enter your phone number.
8.  If your employer offers gift matching, select yes or no.
9.  Enter any notes or special instructions for your gift.
10.  Confirm that you authorize this transaction.

## Field-by-Field Explanation
*   **Donor Name** (`donor_full_name`, `text`, required): Please enter your full name.
*   **Email** (`donor_email`, `email`, required): Enter your email address.
*   **-- My Gift --** (`header_gift_info`, `note`, required): This section serves as a header for the next field.
*   **Gift Amount** (`gift_amount`, `number`, required): Enter the amount you would like to give.
*   **Designate My Gift To** (`fund_selection`, `select_one`, required): Choose the purpose of your gift from the provided options.
*   **I would like to set this up as a recurring gift** (`recursive_gift_agreement`, `select_one`, required): Choose if you would like to make this a recurring gift.
*   **Would you like to cover the 2.9% processing fee?** (`cover_fees`, `select_one`, required): Choose if you want to cover the processing fee with your gift.
*   **-- Billing Information --** (`header_billing`, `note`, required): This section serves as a header for the next fields.
*   **Billing Address** (`billing_address`, `text`, required): Enter your billing address.
*   **City, State, and Zip Code** (`city_state_zip`, `text`, required): Enter your city, state, and zip code.
*   **Phone Number** (`phone_number`, `text`, optional): Optionally, enter your phone number.
*   **Does your employer offer gift matching?** (`employer_matching`, `select_one`, optional): Choose yes or no.
*   **Notes or Special Designation Instructions** (`gift_notes`, `text`, optional): Optionally, enter notes or special instructions for your gift.
*   **I authorize this transaction** (`final_submission_consent`, `select_one`, required): Confirm that you authorize this transaction.
*   **Today's Date** (`donation_timestamp`, `date`, required): This is automatically populated with the current date.
