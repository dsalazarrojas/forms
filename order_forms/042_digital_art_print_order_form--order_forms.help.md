<thinking>
We will be creating a user-facing help guide for the "Digital Art Print Order Form". This guide will explain the purpose of the form, how to complete it, and provide a detailed explanation of each field. The form's purpose is to collect information from customers for printing their digital artwork, including print type, artwork size, orientation, paper type, quantity, artwork details, payment method, contact information, and upload artwork or proof files. This form ensures that customers can accurately provide their printing preferences and upload required files for the print order.
</thinking>
# Digital Art Print Order Form - Help Guide

## Purpose
The Digital Art Print Order Form is used to collect information from customers for printing their digital artwork. This form helps us understand their printing preferences, upload required files, and ensure a smooth printing process.

## How To Complete This Form
1. Fill in the print type, artwork size, and orientation according to your preferences.
2. Select the quantity of prints you require.
3. Provide artwork details, including any custom fields if necessary.
4. Choose your payment method.
5. Upload your artwork and proof files (if applicable).
6. Fill in your contact information, including email, name, phone number, and address.
7. Review and complete the form carefully to ensure accurate information.

## Field-by-Field Explanation

* **Print Type** (`print_type`, select_one, required: false): Select the type of print you require, which can be giclée print, pigment-based, or other.
* **Artwork Size** (`artwork_size`, number, required: false): Enter the size of your artwork.
* **Orientation** (`orientation`, select_one, required: false): Choose the orientation of your print, whether landscape or portrait.
* **Paper Type** (`paper_type`, select_one, required: false): Select the type of paper you require for your print.
* **Quantity** (`quantity`, select_multiple, required: false): Choose the quantity of prints you require.
* **Artwork Details** (`artwork_details`, note, required: false): Enter any details about your artwork, such as custom fields if necessary.
* **Payment Method** (`payment_method`, select_one, required: false): Select your preferred payment method, which can be bank transfer or PayPal.
* **Email** (`email`, email, required: false): Enter your email address.
* **Contact Name** (`contact_name`, text, required: false): Enter your name.
* **Phone** (`phone`, text, required: false): Enter your phone number.
* **Address** (`address`, text, required: false): Enter your address.
* **File 1** (`file_1`, text, required: false): Upload your artwork file.
* **File 2** (`file_2`, text, required: false): Upload your proof file.
* **File 3** (`file_3`, text, required: false): Upload additional artwork files if necessary.
* **File 4** (`file_4`, text, required: false): Upload more proof files if necessary.
* **Order Notes** (`order_notes`, note, required: false): Enter any order notes or comments.
* **Custom Fields** (`custom_fields`, text, required: false): Enter custom fields if necessary.
* **Proof Image** (`upload_proof_image`, text, required: false): Upload your proof image.
* **Proof Signature** (`proof_signature`, text, required: false): Enter your proof signature.
* **Artwork Name** (`artwork_name`, text, required: false): Enter your artwork name.
* **Custom Field 1** (`custom_field_1`, text, required: false): Enter custom field 1.
* **Custom Field 2** (`custom_field_2`, text, required: false): Enter custom field 2.
