<thinking>
This form is designed to collect information about a customer's diving experience, including their certification level, date of certification, and hours of diving experience. The form is intended for use by dive shop staff to record and update customer records. The form's fields are designed to be completed by the customer or the customer's representative, and the form's structure is optimized for ease of use and clarity. 

Please ensure that you have the correct information about the customer before completing this form, as the form fields may require specific data points to be filled out to ensure accurate record-keeping. 

This form does not collect redundant or duplicate information; each field is designed to capture a specific piece of information that is necessary for the customer's record. 

This form is meant to be a quick and efficient way to document customer information, while ensuring that all necessary data points are captured. If you are unsure about any field, please reach out to your supervisor or support team for clarification.
</thinking>

# diving_customer_record_form - Help Guide
## Purpose
The Diving Customer Record Form is designed to collect and update customer information for efficient and accurate record-keeping.

## How To Complete This Form

1. To complete this form, start by gathering all necessary information about the customer.
2. Complete each field with the corresponding customer information.
3. Ensure that all required fields are filled out before submitting the form.

## Field-by-Field Explanation

### 1. Customer Name
* **Customer Name** (`customer_name`, text, required: false): Enter the customer's full name as it appears on their identification.
* **Customer Email** (`customer_email`, email, required: false): Enter the customer's email address.
* **Customer Name** (`customer_name`, text, required: false): Enter the customer's full name as it appears on their identification.

### 2. Customer Diving Hours
* **Customer Diving Hours** (`customer_diving_hours`, number, required: false): Enter the customer's total number of hours of diving experience.

### 3. Instructor Experience
* **Instructor Experience** (`instructor_experience`, text, required: false): Enter any additional experience or information about the instructor, if applicable.

### 4. Instructor Diving Hours
* **Instructor Diving Hours** (`instructor_diving_hours`, number, required: false): Enter the instructor's total number of hours of diving experience.

### 5. Training Diving Hours
* **Training Diving Hours** (`training_diving_hours`, number, required: false): Enter any additional training hours the customer has completed.

### 6. Certification Level
* **Certification Level** (`certification_level`, select_one, required: false): Select the customer's certification level: Intermediate, Advanced, or Master.
* **Certification Date** (`certification_date`, date, required: false): Enter the date of the customer's certification.
* **Certification Number** (`certification_number`, text, required: false): Enter any additional certification number or code.

### 7. Certification Type
* **Certification Type** (`certification_type`, text, required: false): Enter any additional certification type or details.

### 8. Dive Master
* **Dive Master** (`dive_master`, select_multiple, required: true): Check if the customer is a certified Dive Master.

### 9. Additional Information
* **Customer Experience** (`customer_experience`, text, required: false): Enter any additional experience or comments about the customer.
* **Instructor Experience** (`instructor_experience`, text, required: false): Enter any additional information or comments about the instructor.
