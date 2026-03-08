# Model Waiver & Release Form - Help Guide

## Purpose
This form is used to obtain a model's waiver and release for photo usage. The model will be asked to provide their information and make selections about the release and usage of their photos.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the model's information, including their name and address (if applicable).
2. Select the release type and photo usage.
3. Enter the signature date and time.
4. Enter the photographer's information, including their name and address (if applicable).
5. Select the contact method and enter the contact information.
6. Enter the photo credit name and URL (if applicable).
7. Enter the waiver date and time.
8. Enter the number of photos.
9. Optionally, enter any other photo usage or count descriptions.
10. Click the "Submit" button to complete the form.

## Field-by-Field Explanation

* **Model's Information**: `model_info`
  (`model_info`, text, required): Enter the model's full name and address (if applicable).
* **Photographer's Information**: `photographer_info`
  (`photographer_info`, text, required): Enter the photographer's name and address (if applicable).
* **Release Type**: `release`
  (`release`, select_multiple, required): Select the type of release, either "Full release", "Limited release", or "No release".
* **Photo Usage**: `photo_usage`
  (`photo_usage`, select_multiple, required): Select the purpose of the photo usage, either "Editorial purposes", "Commercial purposes", or "Other".
* **Signature Date**: `signature_date`
  (`signature_date`, date, required): Enter the date of the signature in MM/DD/YYYY format.
* **Signature Time**: `signature_time`
  (`signature_time`, time, required): Enter the time of the signature in HH:MM AM/PM format.
* **Model's Name**: `model_name`
  (`model_name`, text, required): Enter the model's full name.
* **Photographer's Name**: `photographer_name`
  (`photographer_name`, text, required): Enter the photographer's full name.
* **Location**: `location`
  (`location`, text, required): Enter the location where the photo was taken.
* **Contact Method**: `contact_method`
  (`contact_method`, select_multiple, required): Select the contact method, either "Phone", "Email", or "Mail".
* **Contact Information**: `contact_info`
  (`contact_info`, text, required): Enter the contact information for the model.
* **Photo Credit Name**: `photo_credit`
  (`photo_credit`, text, required): Enter the name to be credited as the photo credit.
* **Photo Credit URL**: `photo_credit_url`
  (`photo_credit_url`, text, required): Enter the URL for the photo credit.
* **Waiver Date**: `waiver_date`
  (`waiver_date`, date, required): Enter the date of the waiver in MM/DD/YYYY format.
* **Waiver Time**: `waiver_time`
  (`waiver_time`, time, required): Enter the time of the waiver in HH:MM AM/PM format.
* **Number of Photos**: `photo_count`
  (`photo_count`, number, required): Enter the number of photos.
* **Other Photo Usage**: `photo_usage_other`
  (`photo_usage_other`, text, optional): If not selecting the standard photo usage, enter a description for other purposes.
* **Other Photo Count**: `photo_count_other`
  (`photo_count_other`, text, optional): If not selecting the standard photo count, enter a description for other counts.
* **Model's Address**: `model_address`
  (`model_address`, text, optional): Enter the model's address (if not already provided).
* **Photographer's Address**: `photographer_address`
  (`photographer_address`, text, optional): Enter the photographer's address (if not already provided).
* **Photo Expiration Date**: `photo_expiration_date`
  (`photo_expiration_date`, date, optional): Enter the photo expiration date in MM/DD/YYYY format (if applicable).
* **Photo Expiration Time**: `photo_expiration_time`
  (`photo_expiration_time`, time, optional): Enter the photo expiration time in HH:MM AM/PM format (if applicable).
* **Photo Expiration Note**: `photo_expiration_note`
  (`photo_expiration_note`, text, optional): Enter a note for the photo expiration (if applicable).
* **Photographer's Notes**: `photographer_notes`
  (`photographer_notes`, text, optional): Enter any notes from the photographer.
* **Submit**: `submit`
  (`submit`, text, optional): Enter any information about the submission.
* **Submission Information**: `submit_info`
  (`submit_info`, text, optional): Enter any additional information about the submission.

## Tips

* Please ensure that you have read and understood the terms of the waiver before signing.
* If you have any questions or concerns, please contact the photographer or model.
* This form is for informational purposes only and is not intended to be a substitute for a legal document.
