# Corneal Tissue Custody Record - Help Guide
## Purpose
The Corneal Tissue Custody Record is a document used to track and store information regarding the custody of corneal tissue samples. This record is essential for maintaining the integrity and chain of custody of the samples, ensuring that they are handled and stored properly.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the patient information on page 1.
2. Provide sample information on page 2.
3. Document collection information on page 3.
4. Record the chain of custody on page 4.
5. Provide storage information on page 5.
6. Document handling information on page 6.
7. Select the storage facility and location on page 7.
8. Enter storage temperature and storage date on page 8.
9. Identify the storage user and return date on page 9.
10. Enter notes and finalize the form on page 10.

## Field-by-Field Explanation

* **Patient Information** (`patient_info`, text, required: false): Enter the patient's name, date of birth, and other relevant identifying information.
* **Sample Information** (`sample_info`, text, required: false): Describe the sample's type, quantity, and other relevant details.
* **Collection Information** (`collection_info`, text, required: false): Document the date, time, and personnel involved in the collection of the sample.
* **Chain of Custody** (`chain_of_custody`, text, required: false): Record the custody history of the sample, including date, time, and personnel involved.
* **Storage Facility** (`storage_facility`, select_one, required: false): Choose one of the following options: Tissue Bank, Lab, Biorepository, or Other.
* **Storage Location** (`storage_location`, select_multiple, required: false): Select multiple rooms or locations where the sample is to be stored.
* **Storage Temperature** (`storage_temp`, number, required: false): Enter the storage temperature in degrees Celsius.
* **Storage Date** (`storage_date`, date, required: false): Enter the date the sample is stored.
* **Storage User** (`storage_user`, text, required: false): Enter the name of the user who is responsible for storing the sample.
* **Return Date** (`return_date`, date, required: false): Enter the date the sample is due to be returned.
* **Return User** (`return_user`, text, required: false): Enter the name of the user responsible for returning the sample.
* **Handling User** (`handling_user`, text, required: false): Enter the name of the user who handled the sample.
* **Notes** (`notes`, note, required: false): Add any additional notes or comments about the sample's custody.
