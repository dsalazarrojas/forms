# Investment Service Complaint Form - Help Guide
## Purpose
This form is designed to help customers report and document their complaints or issues related to investment services provided by the company. It will be used by the company to gather information and take corrective action.

## How To Complete This Form
To complete this form, follow these steps:

* Please answer all the questions thoroughly and accurately.
* Select the complaint type that best describes your issue.
* Provide your contact information so that we can get in touch with you to discuss your complaint.
* Describe the issue you are experiencing in detail.
* If possible, provide the date you first noticed the issue.
* Explain the resolution you expect from us.
* If applicable, describe the actual resolution you received.
* Sign and date the form to confirm that you have completed it.

## Field-by-Field Explanation
### Complaint Type
* **Complaint Type** (`complaint_type`, select_one, required: false): This is where you choose the type of complaint you are experiencing. Please select the option that best describes your issue. The options are:
	+ 'Yes'
	+ 'No'

### Contact Information
* **Contact Information** (`contact_info`, select_multiple, required: false): This is where you enter your contact information so that we can get in touch with you to discuss your complaint. Please select 'Yes' if you want us to contact you, and provide your phone number and email address if applicable.

### Issue Description
* **Issue Description** (`issue_description`, note, required: false): This is where you describe the issue you are experiencing in as much detail as possible. Please be as thorough as you can so that we can understand your concern.

### Complaint Date
* **Complaint Date** (`complaint_date`, date, required: false): If possible, please provide the date you first noticed the issue.

### Expected Resolution
* **Expected Resolution** (`expected_resolution`, text, required: false): Explain the resolution you expect from us to resolve your issue.

### Actual Resolution
* **Actual Resolution** (`actual_resolution`, text, required: false): If applicable, describe the actual resolution you received.

### Client Signature
* **Client Signature** (`client_signature`, text, required: false): Please sign and date the form to confirm that you have completed it.
