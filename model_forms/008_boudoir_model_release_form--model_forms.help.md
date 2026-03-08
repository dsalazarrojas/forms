<thinking>
We should consider adding validation rules for the date of birth field to ensure the model is at least 18 years old.
Additionally, we should think about adding a checkbox for consent to use images for commercial purposes.
The form seems to be designed for a photography studio or agency, so it's likely that they want to make sure the model is aware of and consents to their usage rights.
</thinking>

# Boudoir Model Release Form - Help Guide
## Purpose
This form is used by the photographer to collect information and permissions from the model to use their images for various purposes such as portfolio display, social media, website, marketing materials, print publications, and advertising. The form also asks for the model's consent to use their images without modification, and to specify the duration of usage rights. Additionally, the form asks for the model's address, phone number, and email address for communication and records.

## How To Complete This Form

1. Enter your full name as it appears on your official government-issued identification.
2. Provide your date of birth in MM/DD/YYYY format.
3. Enter your email address and phone number for communication and records.
4. Fill out the session date and location where the photo shoot took place.
5. Select all the uses you grant permission for the photographer to use your images.
6. Indicate whether you grant permission for the photographer to modify or edit your images.
7. Choose the duration of usage rights for your images.
8. Select any restrictions on the usage of your images.
9. Indicate if you want to be credited when your images are used.
10. Confirm that you acknowledge limited confidentiality of the images.
11. Finally, confirm that you agree to this model release.

## Field-by-Field Explanation

* **Model Full Name** (`model_full_name`, text, required): Enter your full name as it appears on your official government-issued identification.
* **Date of Birth** (`date_of_birth`, date, required): Provide your date of birth in MM/DD/YYYY format.
* **Email Address** (`model_email`, email, required): Enter your email address for communication and records.
* **Phone Number** (`model_phone`, text, required): Enter your phone number for communication and records.
* **Current Address** (`model_address`, text, optional): Provide your full street address.
* **Session Date** (`session_date`, date, required): Fill out the date of the photo shoot.
* **Photographer Name** (`photographer_name`, text, required): Enter the name of the photographer.
* **Session Location** (`location`, text, optional): Where the photo shoot took place.
* **Usage Rights and Permissions** (`usage_consent`, select_multiple, required): Select all the uses you grant permission for the photographer to use your images.
* **Modify or Edit Images** (`modification_consent`, select_one, required): Indicate whether you grant permission for the photographer to modify or edit your images.
* **Duration of Usage Rights** (`duration_usage`, select_one, required): Choose the duration of usage rights for your images.
* **Usage Exclusions** (`prohibited_use`, select_multiple, optional): Select any restrictions on the usage of your images.
* **Credited When Used** (`credit_requirement`, select_one, optional): Indicate if you want to be credited when your images are used.
* **Acknowledgment of Confidentiality** (`confidentiality`, select_one, required): Confirm that you acknowledge limited confidentiality of the images.
* **Final Consent** (`final_consent`, select_one, required): Confirm that you agree to this model release.
