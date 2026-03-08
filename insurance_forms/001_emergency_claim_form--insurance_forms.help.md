# Emergency Claim Form - Help Guide
## Purpose
The Emergency Claim Form is used to collect information about emergency claims and to provide a structured way of documenting and tracking these claims.

## How To Complete This Form
1. Fill out the form with the required contact information, including the claimant's full name, email address, and phone number.
2. Select the type of claim being made.
3. Enter the date and time of the incident.
4. Provide detailed information about the incident.
5. Specify the current status of the claim.
6. If necessary, add any additional comments about the claim status.
7. Upload any supporting documentation, if required.
8. Add any additional notes about the claim.

## Field-by-Field Explanation
* **Emergency Claim Form Input** (`emergency_claim_form_input`, text, required): 
	+ Enter a brief description of the claim.
* **Contact Name** (`contact_name`, text, required): 
	+ Enter the full name of the person making the claim.
* **Contact Email** (`contact_email`, email, required): 
	+ Enter the email address of the person making the claim.
* **Contact Phone** (`contact_phone`, text, required): 
	+ Enter the phone number of the person making the claim.
* **Claim Type** (`claim_type`, select_one, required): 
	+ Select the type of claim being made (health or auto).
* **Incident Date** (`incident_date`, date, required): 
	+ Enter the date of the incident in YYYY-MM-DD format.
* **Incident Time** (`incident_time`, time, required): 
	+ Enter the time of the incident in 12-hour format.
* **Incident Details** (`incident_details`, text, required): 
	+ Provide a detailed description of what happened.
* **Claim Status** (`claim_status`, select_one, required): 
	+ Specify the current status of the claim (open, closed, or pending).
* **Claim Status Comments** (`claim_status_comments`, text, optional): 
	+ Add any additional comments about the claim status.
* **Upload File** (`upload_file`, text, optional): 
	+ Upload any supporting documentation, if required.
* **Claim Notes** (`claim_notes`, text, optional): 
	+ Add any additional notes about the claim.

Tips:
* Please ensure that all fields are completed accurately and thoroughly.
* If you are unsure about any field, please consult with an authorized personnel.
* This form is for emergency claims only, and any non-emergency claims should be submitted through the regular claim process.
