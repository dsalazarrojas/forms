# distributor_registration_form - Help Guide
## Purpose
This form is used to register a new distributor.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in your representative's name in the "Representative Name" field.
2. Enter your company's name in the "Company Name" field.
3. Enter your address in the "Address Line 1", "Address Line 2", "City", "State", and "Zip" fields.
4. If applicable, enter your recruiter's name in the "Recruiter Name" field.
5. Enter your phone number in the "Phone" field.
6. Enter your email address in the "Email" field.
7. Add any additional order details in the "Order Details" field.
8. Read and agree to the terms and conditions by typing your name in the "Terms and Conditions" field.

## Field-by-Field Explanation
- **Representative Name** (`representative_name`, text, required): Enter the name of the person registering this account.
  - **Company Name** (`company_name`, text, required): Enter the name of the company associated with this account.
    - **Address Line 1** (`address_line_1`, text, required): Enter the street address of your location.
      - **Address Line 2** (`address_line_2`, text, optional): Enter the apartment or suite number (if applicable).
        - **City** (`city`, text, required): Enter the city of your location.
          - **State** (`state`, text, required): Enter the state or province of your location.
            - **Zip** (`zip`, text, required): Enter the zip or postal code of your location.
              - **Recruiter Name** (`recruiter_name`, text, optional): Enter the name of the recruiter (if applicable).
                - **Phone** (`phone`, text, required): Enter your phone number.
                  - **Email** (`email`, email, required): Enter your email address.
                    - **Order Details** (`order_details`, note, optional): Enter any additional information about the order.
                      - **Terms and Conditions** (`terms_and_conditions`, text, required): Read and agree to the terms and conditions by typing your name.
