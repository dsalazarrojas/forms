# vaccine_distribution_quotation_form - Help Guide
## Purpose
This form is used to collect information for vaccine distribution quotations from suppliers and patients.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the supplier's name, email, and phone number on the first page.
2. On the next page, fill in the patient's name, age, birthday, and address.
3. Move on to the next page, where you'll input the vaccine details: name, dosage, and price.
4. On the final page, select the patient's gender and choose the date and time of the vaccine administration.

## Field-by-Field Explanation
### Supplier Information
* **Supplier Name** (`Supplier Name`, text, required): Enter the name of the supplier providing the vaccine.
* **Supplier Location** (`supplier_location`, text, required): Enter the supplier's location.
* **Supplier Email** (`Supplier Email`, email, required): Enter the supplier's email address.
* **Supplier Phone** (`Supplier Phone`, text, required): Enter the supplier's phone number.

### Patient Information
* **Patient Name** (`patient_name`, text, required): Enter the patient's name.
* **Patient Age** (`patient_age`, number, required): Enter the patient's age.
* **Patient Birthday** (`patient_birthday`, date, required): Enter the patient's birthday (date).
* **Patient Address** (`patient_address`, text, required): Enter the patient's address.
* **Patient Gender** (`patient_gender`, select_one, required): Select the patient's gender (Male, Female, Other).
* **Note** (`note`, note, required): Enter any additional notes about the order.

### Vaccine Information
* **Vaccine Name** (`vaccine_name`, text, required): Enter the name of the vaccine to be administered.
* **Vaccine Dosage** (`vaccine_dosage`, text, required): Enter the dosage of the vaccine.
* **Vaccine Price** (`vaccine_price`, number, required): Enter the price of the vaccine.
* **Vaccine Date** (`vaccine_date`, time, required): Enter the date and time of the vaccine administration.
* **Vaccine Time** (`vaccine_time`, time, required): Enter the time of the vaccine administration.
* **Assigned Tool** (`assigned_tool`, text, required): Enter the tool used for the vaccine administration.

### Additional Information
* **Form ID** (`form_ids`, text, required): Enter the unique ID of the form.
