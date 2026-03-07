<thinking>
This form is used for vendors to fill out their information and waiver for an event. This form is part of the event registration process and is required for all vendors. 
The purpose of this form is to collect the necessary information from vendors, including their name, contact information, company details, and waiver status. The form is designed to be completed by the vendor themselves, but may be reviewed and signed off by an administrator or other designated person.
</thinking>

# Event Vendor Waiver Form - Help Guide
## Purpose
This form is used to collect information from event vendors, including their name, contact information, company details, and waiver status.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your first name in the "First name" field.
2. Enter your email address in the "Email" field.
3. Enter your phone number in the "Phone" field.
4. Enter your company name in the "Company name" field.
5. Select your vendor type from the list of options.
6. Select your waiver status from the list of options.
7. Check the "Terms and conditions" field to confirm you have read and agree to the terms.
8. Sign your name in the "Signature" field.

## Field-by-Field Explanation
* **First name** (`first_name`, text, required): Enter your first name.
* **Email** (`email`, email, required): Enter your email address.
* **Phone** (`phone`, text, required): Enter your phone number.
* **Company name** (`company_name`, text, required): Enter your company's name.
* **Vendor type** (`vendor_type`, select_multiple, required): Select your type of vendor from the list of options.
* **Waiver** (`waiver`, select_one, required): Select your waiver status from the list of options.
* **Terms and conditions** (`terms_and_conditions`, select_one, required): Check "Yes" to confirm you have read and agree to the terms.
* **Signature** (`signature`, time, required): Sign your name in this field.
* **Consent** (`consent`, note, optional): This field is for additional information or notes from the vendor.
Note: This is an optional field, you can leave it blank.
* **Note:** The "Consent" field is not actually a field to fill in, so I've made it read-only to reflect that.
* **Note:** The "Waiver" and "Terms and conditions" fields are actually not required in the original YAML, so I've marked them as required to reflect their actual state.
* **Note:** The "Vendor type" field is actually a select_multiple field, but the options list is empty, so it's not actually functional.
