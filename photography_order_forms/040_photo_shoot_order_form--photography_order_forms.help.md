<thinking> 

The form "photo_shoot_order_form" is designed to collect information from clients for a photography shoot. It is used to gather details about the client's preferences, schedule, and other relevant information to confirm the shoot. This form should only be used for photography shoots, and users should not use it for other purposes. 

Please note that this form includes fields for both client information and shoot details. Each field has a specific type and purpose, which should be understood by the end-users to ensure accurate and complete information.

</thinking>

# photo_shoot_order_form - Help Guide
## Purpose
The photo shoot order form is a crucial document for photography shoots. It ensures that all necessary information is gathered from clients to confirm the shoot details.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the client's personal information (client name, email, phone number, and address).
2. Choose the shoot schedule (Monday to Sunday).
3. Select the shoot time.
4. Choose the photo packages.
5. Select the payment method.
6. Fill in the shoot location.
7. Fill in the shoot date.
8. Fill in the shoot time.
9. Specify the photo credit (Left, Right, Top, or Bottom).
10. (Optional) Specify the photo orientation (Portrait, Landscape, or Square).
11. Provide notes for shooting.
12. Confirm the payment terms and status.
13. Add any additional notes if needed.

## Field-by-Field Explanation
* **Client Info** (`client_info`, `text`, required): Please fill in the client's name, email, phone number, and address.
* **Shoot Info** (`shoot_info`, `text`, required): Enter a brief description of the shoot.
* **Shoot Details** (`shoot_details`, `text`, optional): Add any additional information about the shoot.
* **Photo Info** (`photo_info`, `text`, optional): Enter any specific photo-related details.
* **Shoot Schedule** (`shoot_schedule`, `select_one`, required): Choose a day of the week for the shoot.
* **Shoot Time** (`shoot_time`, `time`, required): Select the start and end time for the shoot.
* **Photo Packages** (`photo_packages`, `select_multiple`, required): Choose one or more packages for the photo shoot.
* **Payment Method** (`payment_method`, `select_one`, required): Select the payment method (Card, PayPal, or Bank Transfer).
* **Client Name** (`client_name`, `text`, required): Fill in the client's name.
* **Client Email** (`client_email`, `email`, required): Enter the client's email address.
* **Client Phone** (`client_phone`, `text`, required): Enter the client's phone number.
* **Client Address** (`client_address`, `text`, required): Enter the client's address.
* **Notes** (`notes`, `text`, optional): Add any additional information for the shoot.
* **Package Price** (`package_price`, `number`, required): Enter the package price.
* **Total Price** (`total_price`, `number`, required): Enter the total price.
* **Payment Terms** (`payment_terms`, `text`, required): Specify the payment terms (e.g., deposit, balance due).
* **Payment Status** (`payment_status`, `text`, required): Confirm the payment status (e.g., paid, unpaid).
* **Shoot Date** (`shoot_date`, `date`, required): Choose a date for the shoot.
* **Shoot Time** (`shoot_time`, `time`, required): Select the start and end time for the shoot.
* **Client Signature** (`client_signature`, `note`, optional): Add the client's signature.
* **Client Photo** (`client_photo`, `note`, optional): Add a photo of the client.
* **Photo Credit** (`photo_credit`, `select_one`, required): Choose the photo credit (Left, Right, Top, or Bottom).
* **Photo Orientation** (`photo_orientation`, `select_multiple`, optional): Choose the photo orientation (Portrait, Landscape, or Square).
* **Shoot Location** (`shoot_location`, `text`, required): Enter the shoot location.
* **Notes For Shooting** (`notes_for_shooting`, `text`, optional): Add any notes for the shoot.
