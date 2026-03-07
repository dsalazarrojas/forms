<thinking>...To create the user-facing help guide for the "Fashion International Campaign Image Consent Form", I will first analyze the provided YAML fields. The form appears to be a consent form for image releases, primarily targeting the fashion industry. It asks for various details related to the campaign, model, photographer, and image usage. The form seems to be designed for both model and photographer consent, and also for agency and photographer agreements. The form fields are quite comprehensive, covering different aspects such as image location, release version, and image count. The form's structure suggests that it is intended for both internal and external use, possibly for official documentation and record-keeping purposes.

... </thinking>

# Fashion International Campaign Image Consent Form - Help Guide
## Purpose
This form is for obtaining consent from models and photographers for image releases used in fashion campaigns. It captures important details about the campaign, model, photographer, and image usage.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the campaign details section with the relevant information about the campaign.
2. Provide the model's name, email, and contact information.
3. Specify the agency details, if applicable.
4. Choose the intended use of the campaign image (promotional or editorial).
5. Indicate if the image is for commercial use or not.
6. Specify the image location and count.
7. Choose the release version and version number.
8. Enter the photographer's name, contact information, and address.
9. Indicate if the photographer has a license and agreement.
10. Get the photographer and model signatures.

## Field-by-Field Explanation
### Campaign Details
* **Campaign Details** (`campaign_details`, `note`, required: false): This section is for providing general information about the campaign. Enter the name, location, and any other relevant details.

### Model Information
* **Model Name** (`model_name`, `text`, required: false): Enter the name of the model appearing in the image.
* **Model Email** (`model_email`, `email`, required: false): Enter the model's email address.
* **Model Contact** (`model_contact`, `text`, required: false): Enter the model's contact information.

### Agency Details
* **Agency Details** (`agency_details`, `text`, required: false): If applicable, enter the agency information.

### Image Information
* **Campaign Image Use** (`campaign_image_use`, `select_one`, required: false): Choose the intended use of the campaign image (promotional or editorial).
* **Image Location** (`image_location`, `text`, required: false): Specify the location where the image was taken.
* **Image Count** (`image_count`, `number`, required: false): Enter the number of images released.
* **Release Prophets** (`release_prophets`, `select_multiple`, required: false): Indicate if the release is for commercial or non-commercial use.
* **Release Date** (`release_date`, `date`, required: false): Enter the release date.

### Photographer Information
* **Photographer Name** (`photographer_name`, `text`, required: false): Enter the name of the photographer.
* **Photographer Contact** (`photographer_contact`, `text`, required: false): Enter the photographer's contact information.
* **Photographer Address** (`photographer_address`, `text`, required: false): Enter the photographer's address.
* **Photographer License** (`photographer_license`, `select_one`, required: false): Indicate if the photographer has a license.
* **Prophets** (`photographer_license_no`, `text`, required: false): Enter the photographer's license number, if applicable.

### Agreements
* **Photographer Agreement** (`photographer_agreement`, `select_one`, required: false): Indicate if the photographer has an agreement.
* **Agreement** (`photographer_agreement_no`, `text`, required: false): Enter the photographer's agreement information.
* **Model Release** (`model_release`, `select_one`, required: false): Indicate if the model has given a release.
* **Model Signature** (`model_signature`, `text`, required: false): Get the model's signature.
* **Agency Signature** (`agency_signature`, `text`, required: false): Get the agency's signature.
* **Photographer Signature** (`photographer_signature`, `text`, required: false): Get the photographer's signature.

### Release Version
* **Release Version** (`release_version`, `select_multiple`, required: false): Choose the release version and number.
* **Release Notes** (`release_notes`, `text`, required: false): Enter any additional notes about the release.
