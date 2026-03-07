<thinking>
We're creating a user-facing help guide for the "Pet Owner Data Correction Request Form" to ensure that end-users understand the form's purpose, how to complete it, and what each field means. This form is designed to collect corrections to pet owner data, and the fields are intended to gather essential information for this purpose. It's essential to keep the explanation concise and practical, focusing on the most critical details to help users navigate the form effectively.

The form is divided into several sections, including:

*   Form purpose: The form is used for pet owners to request corrections to their data. This form will help us update and ensure the accuracy of the pet owner's information.
*   How to complete the form: Each section will be explained clearly, and any ambiguous or unclear labels will be clarified for the user's ease of use.
*   Field-by-Field Explanation: A detailed explanation of each field will be provided.

</thinking>

# Pet Owner Data Correction Request Form - Help Guide

## Purpose
The "Pet Owner Data Correction Request Form" is used by pet owners to request updates to their data. This form is designed to help us ensure the accuracy of pet owner information.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Fill in the required fields: `owner_name` and `contact_number` are required fields. Please make sure to enter your correct name and contact number for us to contact you.
2.  Provide your pet's information: Enter your pet's name, date of birth, and species.
3.  Confirm your pet's status: Check if your pet is a species that requires a veterinary clinic visit. If yes, select 'Yes' from the drop-down menu.
4.  Select the type of correction: Select all the types of corrections you need to make to your data.
5.  Explain the reason for the correction: Use the 'reason_for_correction' field to explain why you need to make these corrections.
6.  Select your veterinary clinic: If you are a pet owner, select 'Yes' from the drop-down menu to confirm that you are a pet owner and need to be contacted by our veterinary clinic.

## Field-by-Field Explanation

*   **Pet Name** (`pet_name`, text, required): Enter your pet's name.
*   **Owner Name** (`owner_name`, text, required): Enter your name.
*   **Contact Number** (`contact_number`, text, required): Enter your contact number so we can contact you.
*   **Date of Birth** (`date_of_birth`, date, optional): If you have a specific date of birth, you may enter it here.
*   **Pet Species** (`pet_species`, select_one, optional): If your pet is a specific species, select it here.
*   **Pet Type** (`pet_type`, select_one, optional): If your pet requires a veterinary clinic visit, select 'Yes' here.
*   **Request Type** (`request_type`, select_multiple, optional): Select all the types of corrections you need to make to your data.
*   **Reason for Correction** (`reason_for_correction`, note, optional): Use this field to explain why you need to make these corrections.
*   **Veterinary Clinic** (`veterinary_clinic`, select_one, optional): If you are a pet owner, select 'Yes' here to confirm that you are a pet owner and need to be contacted by our veterinary clinic.
