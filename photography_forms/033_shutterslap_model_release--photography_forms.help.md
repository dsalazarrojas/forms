<thinking>
To create a help guide for the "shutter_slap_model_release" form, let's break down the form's purpose, how to complete it, and what each field means, based on the provided YAML fields.
</thinking>

# shutter_slap_model_release - Help Guide
## Purpose
The "shutter_slap_model_release" form is used to obtain model releases from individuals or subjects photographed for a specific project. A model release is a legal agreement that confirms the subject's consent to be photographed and allows the photographer or agency to use the images for various purposes, such as commercial use or publication.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide the subject's name.
2. Enter the subject's contact information (phone number and/or email).
3. Enter the subject's email address.
4. Enter the subject's phone number.
5. Select the model release status (Model Release Given, Model Release Not Given, or Not Applicable).
6. (Optional) Enter a date for the model release.
7. (Optional) Sign and date the model release form.
8. Enter any additional information about the photographer or agency.
9. Enter any additional information about the client or commissioning party.

## Field-by-Field Explanation

* **Subject** (`subject`, text, required: false): Enter the name of the subject being photographed.
* **Name** (`name`, text, required: false): Enter the subject's name, which will be used to identify them in the model release.
* **Contact Info** (`contact_info`, text, required: false): Enter the subject's phone number and/or email address.
* **Email** (`email`, email, required: false): Enter the subject's email address.
* **Phone** (`phone`, text, required: false): Enter the subject's phone number.
* **Model Release** (`model_release`, select_one, required: true):
	+ Select "Model Release Given" if the subject has given their consent to be photographed and used in commercial projects.
	+ Select "Model Release Not Given" if the subject has not given their consent.
	+ Select "Not Applicable" if the subject is not applicable (e.g., a child or someone who cannot give consent).
* **Date** (`date`, date, required: false): Enter the date the model release was given.
* **Signature** (`signature`, note, required: false): This is a note field for the subject's signature.
* **Photographer Info** (`photographer_info`, text, required: false): Enter any additional information about the photographer.
* **Agency Info** (`agency_info`, text, required: false): Enter any additional information about the agency or production company.
* **Client Info** (`client_info`, text, required: false): Enter any additional information about the client or commissioning party.

## Tips

* Make sure to obtain the subject's consent before completing this form.
* Ensure that the subject understands the purpose and terms of the model release.
* Keep the model release form up to date and accurate.
* Use this form to obtain model releases for various projects and subjects.
