# restaurant_compliance_software_order_form - Help Guide
## Purpose
This form is used to collect information for restaurant compliance software orders. It should only be used for existing customers or those referred by a partner.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the order details in the first field.
2. Provide contact details, including contact name, email, and phone numbers.
3. Select the software packages required by the restaurant.
4. Enter any additional notes or comments.

## Field-by-Field Explanation
- **Order Details** (`order_details`, text, required: false): Enter the order details in this field.
- **Contact Details** (`contact_details`, text, required: false): Provide contact information for the person placing the order.
- **Required Fields** (`required_fields`, text, required: false): This field is currently not in use.
- **Software Packages** (`software_packages`, select_multiple, required: true): Select the software packages required by the restaurant.
  * Select from: Package A, Package B, Package C
- **Software Package 2** (`software_packages_2`, select_one, required: true): Select one of the following software packages: Package D, Package E
- **Date Ordered** (`date_ordered`, date, required: false): Enter the date the order was placed. This field is currently not used.
- **Date** (`date_ordered_2`, date, required: false): Enter the date the order is due.
- **Time Ordered** (`time_ordered`, time, required: false): Enter the time the order was placed. This field is currently not used.
- **Time** (`time_ordered_2`, time, required: false): Enter the time the order is due.
- **Notes** (`notes`, note, required: false): Enter any additional comments or notes.
- **Notes 2** (`notes_2`, note, required: false): Enter any additional comments or notes.
- **Contact Name** (`contact_name`, text, required: false): Enter the contact name.
- **Contact Email** (`contact_email`, email, required: false): Enter the contact email.
- **Contact Phone** (`contact_phone`, text, required: false): Enter the contact phone number.
- **Contact Phone 2** (`contact_phone_2`, text, required: false): Enter another contact phone number.
- **Contact Phone 3** (`contact_phone_3`, text, required: false): Enter another contact phone number.
- **Contact Phone 4** (`contact_phone_4`, text, required: false): Enter another contact phone number.
- **Restaurant Name** (`restaurant_name`, text, required: false): Enter the restaurant name.
- **Restaurant Name 2** (`restaurant_name_2`, text, required: false): Enter the restaurant name.
- **Restaurant Phone** (`restaurant_phone`, text, required: false): Enter the restaurant phone number.
- **Restaurant Phone 2** (`restaurant_phone_2`, text, required: false): Enter another restaurant phone number.
- **Restaurant Phone 3** (`restaurant_phone_3`, text, required: false): Enter another restaurant phone number.
- **Restaurant Phone 4** (`restaurant_phone_4`, text, required: false): Enter another restaurant phone number.
- **Restaurant Email** (`restaurant_email`, email, required: false): Enter the restaurant email.

# Tips
* Make sure to select the correct software packages and enter the relevant contact information.
* Enter any additional notes or comments if necessary.
* Review the form before submitting to ensure all required fields are filled out.
