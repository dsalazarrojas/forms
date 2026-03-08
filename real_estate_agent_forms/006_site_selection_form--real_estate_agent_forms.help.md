# site_selection_form - Help Guide
## Purpose
This form is used to collect location-related information from users, helping in the selection and management of sites.

## How To Complete This Form
To complete this form, follow these steps:

1. Ensure you have filled in all required fields (marked as "required" in the form).
2. Enter your location details in the "location" field.
3. Provide the site's address in the "address" field.
4. Enter the city of the site.
5. Enter the state of the site.
6. Enter the zip code of the site.
7. If applicable, select "Yes" or "No" for the "country" field, which is optional.
8. If you wish to provide additional contact information, enter your phone number in the "phone" field.
9. Enter your email address in the "email" field, following the standard email format (e.g., `example@email.com`).
10. Optionally, you can provide a description of the site in the "description" field.

## Field-by-Field Explanation
* **location** (`location`, text, required): Enter the name or description of the location you want to select.
* **address** (`address`, text, required): Enter the physical address of the site, including the number and street name.
* **city** (`city`, text, required): Enter the city where the site is located.
* **state** (`state`, text, required): Enter the state where the site is located.
* **zip** (`zip`, number, required): Enter the zip code of the site.
* **country** (`country`, select_one, optional): If applicable, select "Yes" or "No" to indicate the country associated with the site.
* **phone** (`phone`, text, optional): Enter your phone number for contact purposes.
* **email** (`email`, email, required): Enter your email address in the standard format (`example@email.com`).
* **description** (`description`, note, optional): Enter a brief description of the site, if desired.
