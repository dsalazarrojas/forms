<thinking>
The form appears to be a donation form designed to collect information from donors, potentially for a fundraising campaign. It includes fields for basic information such as name, email, phone, and address, as well as credit card details like card number, expiration month and year, and CVC. The form also includes fields for categorization and meta information like created at, updated at, and assigned tool.
</thinking>

# <string> - Help Guide
## Purpose
This form is designed to collect donation information from donors for a fundraising campaign. It includes fields for basic information, credit card details, and categorization and meta information.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields: 
   - **Form ID**: A unique identifier for the form.
   - **Exp Month** and **Exp Year**: The expiration month and year of the credit card.
   - **Name**, **Email**, and **Phone**: Basic contact information.
   - **CVV**: The three-digit code on the back of the credit card.
   - **Zip**: The zip code for the donor's address.
2. Optional fields:
   - **Donation Forms**: Select the purpose of the donation (Yes/No).
   - **Donation Form**: A description of the donation form.
   - **Assigned Tool**: Indicate whether a tool is assigned to the donor.
   - **Category 2** and **Category 3**: Additional categorization information.
   - **Page 2**, **Page 3**, and **Page 4**: Additional meta information.
   - **Created at**, **Updated at**, **Created by**, and **Updated by**: Timestamps and user information.
   - **Address**, **Country**, and **CVV**: Additional information for the donor's address.
   - **CVC**: A security code on the back of the credit card.
   - **Form ID**: A unique identifier for the form.

## Field-by-Field Explanation
- **Donation Forms** (`Donation Forms`, select_multiple, optional): Select the purpose of the donation.
- **Donation Form** (`Donation Form`, text, optional): A description of the donation form.
- **Form ID** (`Form ID`, number, optional): A unique identifier for the form.
- **Assigned Tool** (`Assigned Tool`, select_one, optional): Indicate whether a tool is assigned to the donor.
- **Created at** (`Created at`, date, optional): Timestamp for when the form was created.
- **Updated at** (`Updated at`, date, optional): Timestamp for when the form was last updated.
- **Created by** (`Created by`, text, optional): The user who created the form.
- **Updated by** (`Updated by`, text, optional): The user who last updated the form.
- **Category 2** (`Category 2`, text, optional): Additional categorization information.
- **Category 3** (`Category 3`, text, optional): Additional categorization information.
- **Page 2** (`Page 2`, text, optional): Additional meta information.
- **Page 3** (`Page 3`, text, optional): Additional meta information.
- **Page 4** (`Page 4`, text, optional): Additional meta information.
- **Name** (`Name`, text, optional): The name of the donor.
- **Email** (`Email`, email, optional): The email of the donor.
- **Phone** (`Phone`, text, optional): The phone number of the donor.
- **Card Number** (`Card Number`, text, optional): The credit card number of the donor.
- **Exp Month** (`Exp Month`, select_one, optional): The expiration month of the credit card.
- **Exp Year** (`Exp Year`, select_one, optional): The expiration year of the credit card.
- **CVV** (`CVV`, text, optional): The three-digit code on the back of the credit card.
- **CVC** (`CVC`, text, optional): A security code on the back of the credit card.
- **Address** (`Address`, text, optional): The address of the donor.
- **Country** (`Country`, text, optional): The country of the donor.
- **Zip** (`Zip`, number, optional): The zip code of the donor's address.
