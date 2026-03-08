# Photo Collage Upload Form - Help Guide
## Purpose
This form is designed to collect user input for a photo collage contest. Users will be asked to provide information about their submission, including their input, uploaded photo, collage, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Select whether you are a "Yes" or "No" user.
2. Enter a brief description of your uploaded photo.
3. Upload your collage.
4. Enter any relevant tags for your submission.
5. Confirm your email address.
6. Enter your email address again to ensure accuracy.
7. Select the time zone you are in.
8. Choose the country you are from.
9. Select your state (if applicable).
10. Enter your city.
11. Enter your zip code.
12. Choose your country (again, to confirm).
13. Click "Agree" to confirm you have read and agreed to the terms of service.
14. Select "I agree" to confirm you have read and agreed to the terms of service.

## Field-by-Field Explanation

* **User Input** (`user_input`, select_multiple, optional): Select "Yes" if you are a user who has uploaded a photo. This field is used to determine the type of user you are.
* **Photo** (`uploaded_photo`, text, optional): Enter a brief description of the uploaded photo.
* **Collage** (`uploaded_collage`, text, optional): Upload your photo collage.
* **Tags** (`uploaded_tags`, text, optional): Enter any relevant tags for your submission.
* **E-mail Address** (`email_address`, text, optional): Enter your email address.
* **Confirm E-mail** (`email_address_confirmation`, select_one, optional): Confirm your email address again to ensure accuracy.
* **Submitted By** (`submitted_by`, text, optional): Enter a description of yourself.
* **E-mail Address Confirmation** (`email_address_confirmation`, select_one, optional): Confirm your email address again to ensure accuracy.
* **Submitted At** (`submitted_at`, date, optional): Enter the date you submitted your entry.
* **Time** (`submitted_time`, time, optional): Enter the time you submitted your entry.
* **Time Zone** (`submitted_time_zone`, select_one, optional): Select the time zone you are in.
* **Country** (`submitted_country`, select_one, optional): Choose the country you are from.
* **State** (`submitted_state`, select_one, optional): Choose the state you are from (if applicable).
* **City** (`submitted_city`, text, optional): Enter your city.
* **Zip** (`submitted_zip`, text, optional): Enter your zip code.
* **Your Country** (`submitted_country`, select_one, optional): Choose the country you are from (again, for confirmation).
* **Upload** (`uploaded_file`, text, optional): Upload your photo collage.
* **Agree** (`submitted_agree`, select_one, optional): Select "I agree" to confirm you have read and agreed to the terms of service.
* **Terms of Service** (`submitted_terms`, select_one, optional): Select "I agree" to confirm you have read and agreed to the terms of service.
