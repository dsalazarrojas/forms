# Breast Pump Prescription Form - Help Guide

## Purpose
This form is designed to collect information from patients and healthcare providers for the purpose of prescribing a breast pump. The form is used to ensure that the patient's medical needs are accurately documented, and the prescribing physician has all necessary information to approve the prescription.

## How To Complete This Form

Before starting, please ensure you have all the necessary information and supporting documents ready. This form requires input from both patients and healthcare providers. If you are a patient, please fill out the form with your personal information and medical details. If you are a healthcare provider, please provide your medical license, address, and signature.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_name`, text, required): Enter the patient's full legal name as it appears on their ID.
* **Patient Date of Birth** (`patient_dob`, date, required): Enter the patient's date of birth in the format MM/DD/YYYY.
* **Patient Address** (`patient_address`, text, required): Enter the patient's full home address.
* **Patient Phone** (`patient_phone`, text, required): Enter the patient's contact phone number.
* **Patient Email** (`patient_email`, email, required): Enter the patient's email address.
* **Insurance Provider** (`insurance_provider`, text, required): Enter the name of the patient's insurance company.
* **Insurance Member ID** (`insurance_member_id`, text, required): Enter the patient's insurance member ID number.
* **Prescription Date** (`prescription_date`, date, required): Enter the date of the prescription.
* **Physician Name** (`physician_name`, text, required): Enter the full name of the prescribing physician.
* **Physician NPI Number** (`physician_npi`, text, required): Enter the physician's National Provider Identifier (NPI) number.
* **Physician Phone** (`physician_phone`, text, required): Enter the physician's contact phone number.
* **Physician Address** (`physician_address`, text, required): Enter the address of the physician's medical practice.
* **Medical Necessity** (`medical_necessity`, select_one, required): Select the reason for the breast pump prescription from the dropdown menu:
	+ Postpartum Breastfeeding Support
	+ Return to Work
	+ Low Milk Supply
	+ Infant Feeding Difficulty
	+ Maternal Separation
	+ Multiple Births
	+ Premature Infant
	+ Other Medical Reason
* **Medical Necessity Details** (`medical_necessity_details`, text, required): Elaborate on the reason for the medical necessity.
* **Breast Pump Type Prescribed** (`pump_type_prescribed`, select_one, required): Select the type of pump being prescribed from the dropdown menu:
	+ Electric Double Breast Pump
	+ Manual Breast Pump
	+ Battery Operated Pump
	+ Hospital Grade Rental
	+ Wearable Pump
* **Expected Pumping Frequency** (`pump_frequency`, select_one, required): Select how often the patient will pump from the dropdown menu:
	+ 1-3 Times Daily
	+ 4-6 Times Daily
	+ 7-10 Times Daily
	+ As Needed
* **Duration of Need** (`duration_of_need`, select_one, required): Select the length of time the pump is needed from the dropdown menu:
	+ 1-3 Months
	+ 3-6 Months
	+ 6-12 Months
	+ Ongoing
* **Accessories Prescribed** (`accessories_prescribed`, select_multiple, required): Select the accessories that are being prescribed from the dropdown menu. You can select multiple items:
	+ Pumping Flanges
	+ Milk Storage Bottles
	+ Milk Storage Bags
	+ Tubing and Connectors
	+ Carrying Case
	+ Cleaning Supplies
	+ Nursing Bras
	+ None
* **Flange Size in Millimeters** (`flange_size_mm`, text, optional): If known, enter the flange size in millimeters.
* **Contraindications** (`contraindications`, text, optional): Enter any contraindications to note.
* **Special Instructions** (`special_instructions`, text, optional): Enter any special instructions.
* **Physician Signature** (`physician_signature`, text, required): Type the physician's full name.
* **Signature Date** (`signature_date`, date, required): Enter the date of signature.
* **DEA Number** (`dea_number`, text, optional): If applicable, enter the DEA number.

Note: The form requires a valid signature and date from the prescribing physician. The form is not complete until it has been signed and dated by the physician.
