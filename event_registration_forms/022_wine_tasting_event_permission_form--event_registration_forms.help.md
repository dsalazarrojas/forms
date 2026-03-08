# Wine Tasting Event Permission Form - Help Guide
## Purpose
This form is used to collect information from participants in a wine tasting event.

## How To Complete This Form
1. Fill in your name, email, phone number, and address in the corresponding fields.
2. Select your participant consent options from the list provided (I accept the terms and conditions or Decline).
3. Enter your participant information in the text box, if any additional details need to be included.
4. Choose your participant T-Shirt size.
5. Select any dietary restrictions you may have (Vegetarian, Vegan, or None).
6. Enter any special requests you may have in the text box.
7. Select your agreement to participate in the wine tasting event (I accept or I decline).

## Field-by-Field Explanation

* **Event Organizer Name** (`event_organizer_name`, text, required): Enter the name of the event organizer.
* **Participant Consent** (`participant_consent`, select_multiple, required): Select "I accept the terms and conditions" or "Decline" to indicate your agreement or disagreement to participate in the event.
* **Event Organizer Email** (`event_organizer_email`, email, required): Enter the email address of the event organizer in the format "name@example.com".
* **Participant Information** (`participant_info`, note, optional): Enter any additional information about yourself that will help the event organizer.
* **Participant Name** (`participant_name`, text, required): Enter your name.
* **Participant Email** (`participant_email`, email, required): Enter your email address in the format "name@example.com".
* **Participant Phone** (`participant_phone`, text, required): Enter your phone number.
* **Participant Address** (`participant_address`, text, required): Enter your address.
* **Participant Date of Birth** (`participant_dob`, date, required): Enter your date of birth in the format "mm/dd/yyyy".
* **Participant T-Shirt Size** (`participant_tshirt_size`, select_one, required): Choose your participant T-Shirt size from the available options (Small, Medium, Large, XL).
* **Participant Dietary Restrictions** (`participant_dietary_restrictions`, select_multiple, optional): Select any dietary restrictions you have (Vegetarian, Vegan, None).
* **Participant Special Requests** (`participant_special_requests`, text, optional): Enter any special requests you may have.
* **Participant Agreement** (`participant_agreement`, select_one, required): Select "I accept" to indicate your agreement to participate in the wine tasting event.
