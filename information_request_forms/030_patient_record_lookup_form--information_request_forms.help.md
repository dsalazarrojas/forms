<thinking>
We have to create a user-facing help guide for a "Patient Record Lookup Form" that is used to retrieve patient information. This form is used to gather specific details about a patient's record, and it is likely used by healthcare professionals to verify patient data. The form has multiple fields that allow users to input various types of information, including text, dates, times, and selections. To ensure that the form is used correctly, we need to clearly explain each field and its purpose.

To prevent duplication of patient records, the form should be used only for looking up existing patient records. If a patient record does not exist, the user should not attempt to create a new one using this form.

The form has a mix of required and optional fields, which is normal for a lookup form. Users should fill in all the required fields and select from the options for the fields that are not required.

Before we begin, please make sure you understand that this form is intended for existing patient records lookup. If you need to create a new patient record, you should use the "Create Patient Record Form".
</thinking>

# Patient Record Lookup Form - Help Guide
## Purpose
This form is designed for healthcare professionals to quickly look up patient information, including dates, times, and selection options. It is not intended for creating new patient records. Please use it only for retrieving existing records.

## How To Complete This Form
1. Fill in the required fields with the patient's information.
2. Select the options for the fields that are not required.
3. Click submit to display the patient's record.

## Field-by-Field Explanation

* **Form 1** (`text`, `text`, optional): Enter any identifying information about the patient. This can be any text that helps us find their record.
* **Select 1** (`select_multiple`, `text`, optional): Choose multiple selection options to narrow down your search. Select one of the options below: `Yes` or `No`.
* **Select 2** (`select_one`, `text`, optional): Choose one of the options to narrow down your search. Select one of the following: `option 1`, `option 2`, or `option 3`.
* **Date** (`date`, `date`, optional): Enter the patient's date of birth or any other date that is relevant to their record.
* **Time** (`time`, `time`, optional): Enter the patient's time of birth or any other time that is relevant to their record.
* **Text** (`text`, `text`, optional): Enter any additional text information that you would like to search for in the patient's record.
* **Note** (`note`, `note`, optional): Enter any additional notes that you would like to search for in the patient's record. This can be free-form text.
* **Email** (`email`, `email`, optional): Enter the patient's email address if you know it. This can help us to narrow down your search.
* **Phone** (`text`, `text`, optional): Enter the patient's phone number if you know it. This can help us to narrow down your search.
* **Number** (`number`, `number`, optional): Enter any numerical information that you would like to search for in the patient's record.
* **Decimal** (`number`, `number`, optional): Enter decimal information that you would like to search for in the patient's record.
* **Text Area** (`text`, `text`, optional): Enter any additional text information that you would like to search for in the patient's record.
* **File** (`text`, `text`, optional): Upload a file that is related to the patient's record. This can be a document or any other type of file.
* **Date** (`date`, `date`, optional): Enter the patient's date of birth or any other date that is relevant to their record.
* **Time** (`time`, `time`, optional): Enter the patient's time of birth or any other time that is relevant to their record.
