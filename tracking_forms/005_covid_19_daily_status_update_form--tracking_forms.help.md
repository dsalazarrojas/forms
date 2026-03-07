<thinking>
This form is used by healthcare professionals to track the daily status of COVID-19 patients, including their personal details, medical history, and vaccination status. The form helps the healthcare team to quickly and accurately update patient information in real-time, ensuring that critical data is up to date and readily available for reference and reporting purposes.
</thinking>

# Covid 19 Daily Status Update Form - Help Guide
## Purpose
The Covid 19 Daily Status Update Form is used to track the daily status of COVID-19 patients. It captures essential details such as patient name, date of birth, address, COVID-19 vaccine status, and vaccination dates. This form is essential for healthcare professionals to maintain accurate and up-to-date records.

## How To Complete This Form

1.  To complete this form, please enter the following information:
	* Patient First Name in the field labeled "First Name"
	* Patient Last Name in the field labeled "Last Name"
	* Patient Date of Birth in the field labeled "Date of Birth" in the format MM/DD/YYYY
	* Patient Address in the field labeled "Address"
2.  If the patient has received the COVID-19 vaccine, select "Received" in the field labeled "COVID-19 Vaccine Received"
3.  If you selected "Received" in the previous step, enter the date of vaccination in the field labeled "Vaccination Date" in the format MM/DD/YYYY
4.  If you selected "Received" in the previous step, enter the number of doses received in the field labeled "Number of Doses"

## Field-by-Field Explanation
* **First Name** (`patient_first_name`, text, required): Enter the patient's first name.
* **Last Name** (`patient_last_name`, text, required): Enter the patient's last name.
* **Date of Birth** (`patient_dob`, date, required): Enter the patient's date of birth in MM/DD/YYYY format.
* **Address** (`patient_address`, text, required): Enter the patient's address.
* **COVID-19 Vaccine Received** (`covid_19_vaccine_received`, select_one, required): Select "Received" if the patient has received the COVID-19 vaccine, "Not Received" otherwise.
* **Vaccination Date** (`vaccination_date`, date, optional): If you selected "Received" in the previous field, enter the vaccination date in MM/DD/YYYY format.
* **Number of Doses** (`vaccine_dose_number`, number, optional): If you selected "Received" in the previous field, enter the number of doses received.

## Tips
* Always ensure that the patient's name, date of birth, and address are accurate and up-to-date.
* If you are unsure about any of the patient's details, please contact the healthcare team for verification.
* Please note that the vaccination date and dose number are optional fields and should only be filled in if the patient has received the COVID-19 vaccine.
