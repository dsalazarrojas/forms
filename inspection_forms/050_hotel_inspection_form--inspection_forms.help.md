# Hotel Inspection Form - Help Guide
## Purpose
The Hotel Inspection Form is used to gather feedback from users about their experience with a hotel. The feedback collected will help the hotel management to identify areas of improvement.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select the relevant options for "hotel facilities", "hotel services", and "overall satisfaction" to provide an honest feedback about your experience.
2. Provide comments or feedback in the "comments" section if you have any additional insights or suggestions.
3. Enter the hotel's name, contact person, contact email, and contact phone number in the "hotel name", "contact person", "contact email", and "contact phone" fields respectively.

## Field-by-Field Explanation

* **Hotel facilities** (`hotel_facilities`, select_multiple, required: false): Select all the amenities that the hotel provided, such as Amenities, Cleanliness, and Safety.
* **Hotel services** (`hotel_services`, text, required: false): Provide a brief description of the services you received from the hotel, such as the quality of service, responsiveness, etc.
* **Hotel cleanliness** (`hotel_cleanliness`, date, required: false): If possible, provide the exact date when you checked out.
* **Hotel staff** (`hotel_staff`, note, required: false): Provide your impression of the hotel staff, including their friendliness, helpfulness, etc.
* **Room quality** (`room_quality`, select_one, required: false): Select the quality of the room you stayed in, such as Very Bad, Bad, Good, Very Good, or Excellent.
* **Overall satisfaction** (`overall_satisfaction`, select_one, required: false): Rate your overall satisfaction with the hotel, from Very Dissatisfied to Very Satisfied.
* **Comments** (`comments`, text, required: false): Provide any additional comments or feedback you have about your experience with the hotel.
* **Hotel name** (`hotel_name`, text, required: false): Enter the name of the hotel.
* **Contact person** (`contact_person`, text, required: false): Enter the name of the contact person.
* **Contact email** (`contact_email`, email, required: false): Enter the email of the contact person.
* **Contact phone** (`contact_phone`, text, required: false): Enter the phone number of the contact person.
* **Assigned tool** (`assigned_tool`, select_one, required: false): Select the tool used for this inspection, such as chatjimmy, chatfrank, or chatjohn.
* **Hotel ID** (`hotel_id`, number, required: false): Enter the unique ID of the hotel.
* **Created by** (`created_by`, text, required: false): This field is automatically populated by the system, do not need to fill this field.

**Tips**

* Be as honest and specific as possible when filling out this form.
* Make sure to provide accurate information about the hotel and your experience.
* If you have any concerns or issues, please contact the hotel management directly.
