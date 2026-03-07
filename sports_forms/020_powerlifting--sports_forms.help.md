<thinking>
Is the form being used to track powerlifting progress or data for lifters? Is it meant for individual lifters or teams? Are there any specific fields that require unique formatting or calculations? Is the "form_data" field supposed to be a free text field for general notes or is it more structured, perhaps for specific data types (e.g., weight, reps, etc.)? How are "Lifter List" and "Lifters" fields related? Are they mutually exclusive? Are the "weight_class" and "weight" fields used for different purposes? Are "max_weight", "reps", and "sets" fields meant for tracking workout data or competition data? Are "notes" and "form_data_notes" fields meant for different types of comments or notes? Are "phone" and "email" fields for contact information? Are "time" and "form_data_time" fields for timing data or scheduling information? How do the different fields interact with each other, and are they mutually exclusive? Are there any specific instructions or warnings for filling out certain fields?
</thinking>

# Powerlifting - Help Guide
## Purpose
This form is designed to collect and track powerlifting data for individual lifters. It is meant to be a comprehensive tool to record and analyze lifters' progress.

## How To Complete This Form
To complete this form, follow these steps:

1. Select "Lifter List" to indicate if the form is for a team or individual lifter.
2. Choose the "Weight Class" of the lifter (e.g., lightweight, heavyweight, etc.).
3. Indicate if the form is for a specific lifter ("Lifters" field).
4. Provide the date of the form completion (if applicable).
5. Enter the lifter's weight (in pounds or kilograms).
6. Record the maximum weight lifted (if applicable).
7. Record the number of reps completed (if applicable).
8. Record the number of sets completed (if applicable).
9. Enter any additional comments or notes in the "Notes" field.
10. Optionally, include any additional information in the "Form Data" field.
11. Enter phone number and email contact information (if applicable).
12. Record the time spent on the form completion (if applicable).

## Field-by-Field Explanation

* **Form Data** (`form_data`, text, optional): A free text field for general notes or comments.
* **Lifter List** (`lifter_list`, select multiple, optional): Select "Yes" if the form is for a team, "No" if it's for an individual lifter.
* **Lifters** (`lifter`, select one, optional): Choose "Yes" if the form is for a specific lifter, "No" if it's not for a specific lifter.
* **Weight Class** (`weight_class`, select one, optional): Choose the weight class of the lifter (e.g., lightweight, heavyweight, etc.).
* **Date** (`date`, date, optional): Enter the date of the form completion (if applicable).
* **Weight** (`weight`, number, optional): Enter the lifter's weight (in pounds or kilograms).
* **Max Weight** (`max_weight`, number, optional): Record the maximum weight lifted (if applicable).
* **Reps** (`reps`, number, optional): Record the number of reps completed (if applicable).
* **Sets** (`sets`, number, optional): Record the number of sets completed (if applicable).
* **Notes** (`notes`, note, optional): Enter any additional comments or notes for the lifter.
* **Form Data Notes** (`form_data_notes`, note, optional): Enter any additional information specific to the form data.
* **Phone** (`phone`, text, optional): Enter the lifter's phone number (if applicable).
* **Email** (`email`, email, optional): Enter the lifter's email address (if applicable).
* **Time** (`time`, time, optional): Record the time spent on the form completion (if applicable).
