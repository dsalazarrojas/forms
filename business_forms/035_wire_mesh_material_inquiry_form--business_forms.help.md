# wire_mesh_material_inquiry_form - Help Guide
## Purpose
The purpose of this form is to gather information about wire mesh materials from users. This form will help our team provide accurate and relevant information to the user's inquiry.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the User Input field with a brief description of your inquiry.
2. Select the Material Type that you are inquiring about (Wire Mesh, Aluminum, or Copper).
3. Choose the specifications of the wire mesh material you are inquiring about (Wire Thickness, Mesh Opening, or both).
4. Enter your desired price range for the wire mesh material.
5. Provide your contact information, including your Email and Phone number.
6. Select the type of inquiry you are making (Material Inquiry or Price Inquiry).
7. Choose a date and time when the wire mesh material will be available at your desired price range.

## Field-by-Field Explanation

* **User Input** (`user_input`, text, required: false): Please fill in a brief description of your inquiry.
* **Material Type** (`material_type`, select_one, required: false): Select the type of wire mesh material you are inquiring about. Options: Wire Mesh, Aluminum, or Copper.
* **Specifications** (`specifications`, select_multiple, required: false): Choose the specifications of the wire mesh material you are inquiring about. Options: Wire Thickness, Mesh Opening, or both.
* **Price Range** (`price_range`, number, required: false): Enter your desired price range for the wire mesh material.
* **Contact Information** (`contact_info`, text, required: false): Please provide your Email and Phone number so we can get in touch with you.
* **Inquiry Type** (`inquiry_type`, select_one, required: false): Select the type of inquiry you are making. Options: Material Inquiry or Price Inquiry.
* **Available At** (`available_at`, time, required: false): Choose a date and time when the wire mesh material will be available at your desired price range.
* **Email** (`email`, email, required: false): Enter your Email address so we can get in touch with you.
* **Phone** (`phone`, text, required: false): Enter your Phone number so we can get in touch with you.
* **Comments** (`comments`, note, required: false): If you have any additional comments or questions, please enter them here.
