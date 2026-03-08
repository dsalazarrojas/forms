# Stripe Online Food Order Form - Help Guide
## Purpose
This form is designed to allow restaurant managers to configure settings for online food orders using Stripe as a payment gateway.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the category for your online food order form from the list of options. You can choose from "Restaurant Manager Forms" and "Other" or "Default".
2. Enter a unique form ID to identify your form.
3. Choose how you want to connect with Stripe by selecting "Connect" or "Disconnect" from the options.
4. Fill in the description fields with a brief description of your form and its purpose.
5. Select the output file settings to determine how you want the form to output the data.

## Field-by-Field Explanation

* **Restaurant Manager Forms** (`category`, select_one): Select the category for your online food order form. This will help determine the type of form you are creating.
* **Form Title** (`form_title`, text): Enter a title for your form to help identify it. This field is not required, but it's a good practice to provide a descriptive title.
* **Description** (`description_10`, text): Provide a brief description of your form and its purpose. This field is required.
* **Description 2** (`description_2`, text): Enter a description of your form. This field is required.
* **Description 3** (`description_3`, text): Enter an optional description of your form, if needed.
* **Description 4** (`description_4`, text): Enter an optional description of your form, if needed.
* **Description 5** (`description_5`, text): Enter an optional description of your form, if needed.
* **Description 6** (`description_6`, text): Enter an optional description of your form, if needed.
* **Description 7** (`description_7`, text): Enter an optional description of your form, if needed.
* **Description 8** (`description_8`, text): Enter an optional description of your form, if needed.
* **Description 9** (`description_9`, text): Enter an optional description of your form, if needed.
* **Output File Name** (`output_filename`, text): Enter the name of the output file for your form.
* **Output File Name 2** (`output_filename_2`, text): Enter an optional output file name for your form, if needed.
* **Output File Name 3** (`output_filename_3`, text): Enter an optional output file name for your form, if needed.
* **Public Key** (`stripe_public_key`, select_one): Choose how you want to connect with Stripe, selecting "Public Key".
* **Secret Key** (`stripe_secret_key`, text): Enter your Stripe secret key for connecting with Stripe. This field is not required, but it's recommended for secure connection.
* **Connect with Stripe** (`stripe_connect`, select_one): Choose how you want to connect with Stripe, selecting "Connect" or "Disconnect".
* **Connect with Stripe** (`stripe_connect`, select_one, not required): This option allows you to choose how you want to connect with Stripe. Select "Connect" to connect with Stripe or "Disconnect" to disconnect.
* **Categories** (`categories`, select_multiple): Select multiple categories for your form, if needed.
* **Connect with Stripe** (`stripe_connect`, select_one): Choose how you want to connect with Stripe, selecting "Connect" or "Disconnect".
* **Description 2** (`description_2`, text, required): This field is required and should not be confused with the field of the same name on the general settings section.
* **Description 3** (`description_3`, text): Enter an optional description of your form, if needed.
* **Description 4** (`description_4`, text): Enter an optional description of your form, if needed.
* **Description 5** (`description_5`, text): Enter an optional description of your form, if needed.
* **Description 6** (`description_6`, text): Enter an optional description of your form, if needed.
* **Description 7** (`description_7`, text): Enter an optional description of your form, if needed.
* **Description 8** (`description_8`, text): Enter an optional description of your form, if needed.
* **Description 9** (`description_9`, text): Enter an optional description of your form, if needed.
* **Description 10** (`description_10`, text): Enter a description of your form and its purpose. This field is required.
* **Output File Name** (`output_filename`, text): Enter the name of the output file for your form.
* **Output File Name 2** (`output_filename_2`, text): Enter an optional output file name for your form, if needed.
* **Output File Name 3** (`output_filename_3`, text): Enter an optional output file name for your form, if needed.
* **Public Key** (`stripe_public_key`, select_one): Choose how you want to connect with Stripe, selecting "Public Key".
* **Secret Key** (`stripe_secret_key`, text): Enter your Stripe secret key for connecting with Stripe. This field is not required, but it's recommended for secure connection.
* **Disconnect with Stripe** (`stripe_connect`, select_one): Choose how you want to connect with Stripe, selecting "Connect" or "Disconnect".
* **Categories** (`categories`, select_multiple): Select multiple categories for your form, if needed.
* **Description** (`description`, text): Enter a description of your form and its purpose. This field is not required, but it's recommended.
* **Assigned Tool** (`assigned_tool`, text): Enter the tool you want to use with your form.
* **Output File** (`output_file`, text): Enter the name of the output file for your form.
* **Form IDs** (`form_ids`, text): Enter your unique form ID to identify your form.
* **Stripe Public Key** (`stripe_public_key`, select_one): Choose how you want to connect with Stripe, selecting "Public Key".
* **Stripe Secret Key** (`stripe_secret_key`, text): Enter your Stripe secret key for connecting with Stripe. This field is not required, but it's recommended for secure connection.
* **Stripe Public Key** (`public_key`, select_one): Select "Public Key" to connect with Stripe.
* **Stripe Secret Key** (`secret_key`, text): Enter your Stripe secret key. This field is not required.
* **Stripe Connect with** (`stripe_connect`, select_one): Choose how you want to connect with Stripe, selecting "Connect" or "Disconnect".
* **Description 2** (`description_2`, text, required): This field is required and should not be confused with the field of the same name on the general settings section. 

Note: Some fields have the same name or description but are not marked as required or optional which may confuse the end user. Please ensure to follow the provided description and required fields strictly. 

## Tips
* Make sure to fill in all required fields to ensure your form is properly configured.
* If you are unsure about any field, please refer to the form's documentation or contact the support team for assistance.
