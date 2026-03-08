# Backup Request Form - Help Guide
## Purpose
This form is used to request a backup of a file or data.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of file you are requesting backup for (e.g., Document, Image).
2. Provide the size of the file (e.g., in MB).
3. Choose the location where the backup should be stored (e.g., Server, Cloud).
4. Enter your contact email and phone number so we can reach out to you.
5. Specify the date you requested the backup.
6. Optionally, provide additional information about the request.

## Field-by-Field Explanation
* **Backup Request Form** (`backup_request_form`, text, required): This field is the title of the form, which should be filled out as it is.
* **File Type** (`file_type`, select_one, required): Select the type of file you are requesting backup for (e.g., Document, Image).
* **File Size** (`file_size`, number, required): Enter the size of the file in MB.
* **Backup Location** (`backup_location`, select_multiple, required): Choose the location where the backup should be stored (e.g., Server, Cloud).
* **File Name** (`file_name`, text, required): Enter the name of the file you are requesting backup for.
* **Contact Email** (`contact_email`, email, required): Enter your contact email so we can reach out to you.
* **Contact Phone** (`contact_phone`, text, required): Enter your contact phone number so we can reach out to you.
* **Date Requested** (`date_requested`, date, required): Enter the date you requested the backup.
* **Time Requested** (`time_requested`, time, required): Enter the time you requested the backup.
* **Additional Info** (`note`, note, required): Provide any additional information about the request.
* **File Status** (`file_status`, select_one, optional): Specify the status of the file (e.g., Pending, Completed, In Progress).
* **Backup Status** (`backup_status`, select_one, optional): Specify the status of the backup (e.g., In Progress, Completed, Not Started).
* **Request Type** (`request_type`, select_one, required): Select the type of request you are making (e.g., Backup, Restore).
* **Reason for Backup** (`reason_for_backup`, text, optional): Provide a reason for the backup request.
* **Request Date** (`request_date`, date, optional): Enter the date you requested the backup (if different from the date requested field).

Note that some fields are marked as "required" but do not necessarily need to be filled out in every case. The "required" designation is used to indicate that the field is essential for the form to be considered complete.
