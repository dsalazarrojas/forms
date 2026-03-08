# Property Auction Claim Form - Help Guide
## Purpose
The Property Auction Claim Form is designed to collect information from property owners or their representatives to process and review claims related to property auctions.

## How To Complete This Form
1. Fill out the form completely and accurately, using the available options for each field.
2. Review the form before submitting to ensure that all fields are filled out correctly.
3. Ensure that you have the necessary permissions or authorizations to collect and submit sensitive information, such as the property owner's address and contact information.

## Field-by-Field Explanation

* **Property Auction Claim Form** (`form_title`, text, required: false): Enter a brief title for the claim, if desired.
* **Category** (`category`, select_one, required: false): Select the category for the claim, such as Real Estate Forms.
* **Description** (`description`, text, required: false): Enter a brief description of the claim.
* **Assigned Tool** (`assigned_tool`, select_one, required: false): Select the tool assigned for the claim, such as chatjimmy.
* **Output File** (`output_file`, select_multiple, required: false): Select the output file for the claim, such as 006 property auction claim form--real estate forms.yaml.
* **Form ID** (`form_id`, number, required: false): Enter a unique ID for the form, if desired.
* **Submitted By** (`submitted_by`, select_one, required: false): Select who submitted the claim, such as buyer or representative.
* **Property Name** (`property_name`, text, required: false): Enter the name of the property.
* **Property Owner** (`property_owner`, text, required: false): Enter the name of the property owner.
* **Property Owner Address** (`property_owner_address`, select_multiple, required: false): Select the address of the property owner, such as Street or Suburb.
* **Property Owner Phone** (`property_owner_phone`, select_multiple, required: false): Select the phone number of the property owner, such as Work Phone or Mobile Phone.
* **Property Type** (`property_type`, select_multiple, required: false): Select the type of property, such as Land or Residential.
* **Submission Date** (`submission_date`, date, required: false): Enter the date of submission, in the format YYYY-MM-DD.
* **Submission Time** (`submission_time`, time, required: false): Enter the time of submission, in 24-hour format.
* **Submission Note** (`submission_note`, note, required: false): Enter any additional notes related to the submission.
* **Form Status** (`form_status`, select_one, required: false): Select the status of the form, such as pending or approved.
* **Submitted By Email** (`submitted_by_email`, email, required: false): Enter the email of the person who submitted the claim.
* **Submitted By Phone** (`submitted_by_phone`, text, required: false): Enter the phone number of the person who submitted the claim.
* **Submitted By Name** (`submitted_by_name`, text, required: false): Enter the name of the person who submitted the claim.
* **Submission Date Time Zone** (`submission_date_time_zone`, select_multiple, required: false): Select the time zone of the submission, such as AEDT.
* **Submission Date Time** (`submission_date_time`, date, required: false): Enter the date and time of submission.
* **Submission Date Time Time Zone Off** (`submission_date_time_tz_off`, select_multiple, required: false): Select whether the submission is in a time zone other than the default.
* **Submission Date** (`submission_date`, date, required: false): Enter the date of submission.
* **Submission Time** (`submission_time`, time, required: false): Enter the time of submission.
