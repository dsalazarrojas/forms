# supplierQualityReviewRegistrationForm - Help Guide
## Purpose
This form is used to collect quality review registration information from suppliers. It is crucial for maintaining a high level of quality assurance and ensuring that suppliers provide accurate and up-to-date information.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill out the form for each supplier.
2. Make sure to select the correct certification level for the supplier.
3. Choose the relevant certification types for the supplier.
4. Provide a description of the audit details, if applicable.
5. Enter the supplier's contact email and phone number.

## Field-by-Field Explanation
* **supplyer** (`text`, required/optional): This field is for entering the supplier's name or identifier.
* **SupplierCertificationLevel** (`select_one`, required/optional): Select one of the following:
	+ Bronze: Entry-level certification for suppliers.
	+ Silver: Mid-level certification for suppliers.
	+ Gold: High-level certification for suppliers.
* **CertificationType** (`select_multiple`, required/optional): Select one or multiple of the following:
	+ ISO 9001: International Standard for Quality Management Systems.
	+ ISO 9000: International Standard for Quality Management Systems.
	+ AS 9100: Aerospace Standard for Quality Management Systems.
	+ AS 9000: Aerospace Standard for Quality Management Systems.
* **auditDetails** (`note`, required/optional): This field is for describing the audit details, if applicable.
* **contactEmail** (`email`, required/optional): Enter the supplier's email.
* **phone** (`text`, required/optional): Enter the supplier's phone number.
* **additionalNotes** (`note`, required/optional): This field is for entering any additional notes or information about the supplier.
