<thinking>
The backup request form is designed to collect essential information from requesters to ensure that backups are completed efficiently and effectively. This form helps to streamline the backup request process, ensuring that all necessary details are captured, and that backups are performed according to the requester's needs and preferences.

To prevent duplication of efforts and confusion, please do not submit a new backup request if you have an active backup in progress or if you have already submitted a request within the last 24 hours.

The information collected in this form will be reviewed and actioned as per the set backup schedule and priority. Please be as accurate as possible when filling out the form.
</thinking>

# Backup Request Form - Help Guide
## Purpose
The purpose of this form is to collect necessary information from the requester to facilitate the backup process and ensure that backups are completed efficiently and effectively.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Ensure that you have reviewed the purpose and instructions provided and that you are not duplicating a previously submitted backup request.
2. Fill out the form accurately and thoroughly, providing as much detail as possible.
3. Submit the form for processing.

## Field-by-Field Explanation
* **Full Name** (`requester_name`, text, required): Please provide your full name.
* **Email Address** (`requester_email`, email, required): Enter your valid email address.
* **Phone Number** (`requester_phone`, phone, optional): Provide your phone number for further communication.
* **Department** (`department`, text, required): Enter the department that is requesting the backup.
* **Manager Name/Approval** (`manager_approval`, text, optional): If applicable, provide the name of your manager who approved this request.
* **Request Date** (`request_date`, date, required): Specify the date of the request.
* **Type of Backup Needed** (`backup_type`, select_one, required):
	+ Full System Backup
	+ Partial File Backup
	+ Database Backup
	+ Application Backup
	+ Email Backup
	+ Other
* **Description of Files/Data to Backup** (`files_description`, text, required): Describe the specific data/files that need backing up.
* **Current File Location** (`file_location`, text, required): Specify the location of the files/data to be backed up.
* **Estimated Size of Data** (`estimated_size`, text, optional): Estimate the size of the data to be backed up.
* **Priority Level** (`backup_priority`, select_one, required):
	+ Critical - Immediate
	+ High - Within 24 hours
	+ Medium - Within 1 week
	+ Low - Routine
* **Backup Destination Type** (`destination_type`, select_one, required):
	+ External Hard Drive
	+ Network Storage
	+ Cloud Storage
	+ Tape Drive
	+ Multiple Locations
* **Specific Destination Location** (`destination_location`, text, required): Specify the location where the backup will be stored.
* **Retention Period** (`retention_period`, select_one, required):
	+ 1 Month
	+ 3 Months
	+ 6 Months
	+ 1 Year
	+ 2 Years
	+ Indefinite
* **Encryption Required?** (`encryption_required`, select_one, required):
	+ "Yes"
	+ "No"
* **Desired Backup Frequency** (`backup_frequency`, select_one, required):
	+ One-Time
	+ Daily
	+ Weekly
	+ Monthly
	+ As Needed
* **Preferred Backup Time** (`preferred_time`, text, optional): Specify the preferred time for backup.
* **Request Restore Testing After Backup?** (`restore_testing`, select_one, optional):
	+ "Yes"
	+ "No"
* **Special Requirements or Considerations** (`special_requirements`, text, optional): Provide any special requirements or considerations for the backup.
* **Confirm Information is Accurate** (`submit_confirmation`, select_one, required):
	+ I Confirm
	+ I Do Not Confirm
