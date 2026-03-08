# Hotel Amenities Access Form - Help Guide
## Purpose
This form is designed to collect user information for hotel amenities access, allowing guests to register or sign up for various services or perks.

## How To Complete This Form
1. Fill in the required fields marked with an asterisk (*).
2. Select the relevant options for your chosen amenities using the select one or select multiple options.
3. Enter your contact information, such as your phone number and email address.
4. If needed, provide additional comments or notes about your stay.
5. Review your entries carefully before submitting the form.

## Field-by-Field Explanation
* **user_input_1** (id: 1, text, required: false): This field is not required, but it's a good idea to fill it in for any additional information you'd like to provide.
* **guest_name** (id: 2, text, required: false): Enter your name as it appears on your identification document.
* **guest_phone** (id: 4, text, required: false): Enter your phone number, including your area code.
* **guest_email** (id: 5, email, required: false): Enter your email address, which will be used for communication purposes.
* **user_input_6** (id: 6, select_one, required: false): Select one option from the list that best describes your preference.
	+ Option 1: You have stayed at this hotel before.
	+ Option 2: You are a returning guest.
	+ Option 3: Other (please specify in the **user_input_12** field).
* **user_input_7** (id: 7, select_multiple, required: false): Select multiple options that apply to you.
	+ Option 1: Breakfast included.
	+ Option 2: Room with a view.
	+ Option 3: Other (please specify in the **user_input_13** field).
* **user_input_8** (id: 8, time, required: false): Select your preferred arrival time.
* **user_input_9** (id: 9, date, required: false): Select your arrival date.
* **user_input_10** (id: 10, number, required: false): Enter a specific number that corresponds to your stay.
* **user_input_11** (id: 11, number, required: false): Enter another specific number that corresponds to your stay.
* **user_input_12** (id: 12, note, required: false): If you selected Option 3 in the **user_input_6** field, provide additional information about your previous stay.
* **user_input_13** (id: 13, text, required: false): If you selected Option 3 in the **user_input_7** field, provide additional information about your preferred room amenities.
* **user_input_14** (id: 14, text, required: false): Enter any additional comments or notes about your stay.
* **user_input_15** (id: 15, text, required: false): Provide any other relevant information about your stay.
* **user_input_16** (id: 16, text, required: false): This field is likely not used, but it's included for completeness.
* **user_input_17** (id: 17, text, required: false): This field is likely not used, but it's included for completeness.
* **user_input_18** (id: 18, text, required: false): This field is likely not used, but it's included for completeness.
