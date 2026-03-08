<thinking>
We need to create a user-facing help guide for the "Observation And Input Survey" form. This form is used to collect user information, date and time of observation, location of observation, observation type, ratings, and notes from users. To ensure that the form is completed accurately and efficiently, we need to clearly explain each field's purpose and requirements. Before we begin, let's review the form structure:
- The form is divided into 8 fields.
- Each field has a unique id, name, label, hint, type, and options.
- The required field is not used in this form as it's always set to false.
</thinking>

# Observation And Input Survey - Help Guide
## Purpose
This form is designed to collect information and feedback from users. It's used to gather specific details about their observations, ratings, and comments related to a particular event or situation.

## How To Complete This Form
To complete this form, follow these steps:
1. Provide your user information in the first field.
2. Enter the date you observed the event in the second field.
3. Enter the time you observed the event in the third field.
4. Type the location where the observation took place in the fourth field.
5. Select the type of observation you made from the options provided in the fifth field.
6. Choose multiple ratings that apply to your observation from the options in the sixth field.
7. Provide any additional notes or comments about your observation in the seventh field.
8. If you have any files related to your observation, you can upload them in the last field.

## Field-by-Field Explanation
### 1. User Information
* **User Information** (`user_info`, text, required: false): This field is where you enter your personal details such as your name and contact information.

### 2. Date Observed
* **Date Observed** (`date_observed`, date, required: false): Enter the date you observed the event. Use the standard date format (MM/DD/YY).

### 3. Time Observed
* **Time Observed** (`time_observed`, time, required: false): Enter the time you observed the event. Use the 24-hour clock format.

### 4. Location Observed
* **Location Observed** (`location_observed`, text, required: false): Type the location where you observed the event.

### 5. Observation Type
* **Observation Type** (`observation_type`, select_one, required: false): Choose the type of observation you made from the options: Option 1, Option 2, or Option 3.

### 6. Ratings
* **Ratings** (`ratings`, select_multiple, required: false): Select multiple ratings that apply to your observation from the options: rating1, rating2, or rating3.

### 7. Notes Observed
* **Notes Observed** (`notes_observed`, note, required: false): Provide any additional comments or notes about your observation.

### 8. Uploaded Files
* **Uploaded Files** (`uploaded_files`, text, required: false): If you have any files related to your observation, you can upload them here.
