# property_move_in_information_for_the_buyer_form - Help Guide
## Purpose
The "property_move_in_information_for_the_buyer_form" is a real estate form designed to collect contact information and other relevant details from a buyer. It's intended to ensure accurate communication and a smooth transaction process.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your contact information in the "buyer_contact_details" field. This includes your name, address, and any other relevant contact details.
2. Provide information about the property you are interested in, using the "property_details" field. This section is a note field for you to describe the property in your own words.
3. Choose the type of property you are interested in, using the "property_type" field. This will help us understand the type of property you are looking for.
4. Select the size of the property you are interested in, using the "property_size" field. This will help us narrow down your search.
5. If you have a realtor or agent assisting you, enter their details in the "realtor_details" field.
6. Agree to the terms and conditions of the sale by selecting "True" in the "buyer_agreed_to_terms" field.

## Field-by-Field Explanation
- **Buyer Contact Details** (`buyer_contact_details`, `text`, required): Enter your name, address, and any other relevant contact information.
  - **Property Details** (`property_details`, `note`, required): Describe the property you are interested in.
  - **Property Type** (`property_type`, `select_one`, required): Choose the type of property you are looking for.
    - Options: single family, multi family, condo, townhouse, other
  - **Property Size** (`property_size`, `select_multiple`, required): Select the size of the property you are interested in.
    - Options: 1, 2-3, 4-6, 7-10, 11-15, other
  - **Rental Agent Details** (`realtor_details`, `text`, required): If you have a realtor or agent assisting you, enter their details here.
  - **Buyer Agreed to Terms** (`buyer_agreed_to_terms`, `select_one`, required): Agree to the terms and conditions of the sale by selecting "True".
