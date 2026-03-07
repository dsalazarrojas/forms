<thinking>

The real_estate_deed_records_release_form is used to collect and store information related to real estate transactions, including user contact details, address, and file upload metadata. The form is likely used in conjunction with other forms or systems that manage real estate records and transactions. This form may be part of a larger application or database used to track and manage real estate transactions, such as a property management system or a record-keeping system for real estate agents or attorneys.</thinking>

# real_estate_deed_records_release_form - Help Guide
## Purpose
This form is used to collect and store information related to real estate transactions, including user contact details and file upload metadata.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields:
	* User Name
	* Contact Phone
	* Address
	* Date of Birth
	* Deed Number
	* Date of Execution
	* Zip
	* Notes
	* Output File
	* File Name
	* Upload Date
	* Upload Time
	* File Path
	* File Size
	* Upload Server
	* Upload User
	* Upload IP
2. Select from the options:
	* County (choose one from the dropdown list)
	* State (choose one from the dropdown list)
	* Assigned Tool (choose all that apply from the dropdown list)
	* Form Assigned To (choose all that apply from the dropdown list)
	* File Type (choose one from the dropdown list)
3. Optionally, you can add any additional information in the Notes and Notes2 fields.

## Field-by-Field Explanation

* **User Name** (`user_name`, text, required): Enter your name as it should be displayed on the real estate record.
* **Contact Phone** (`contact_phone`, text, required): Enter your contact phone number.
* **Address** (`address`, text, required): Enter your address.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in MM/DD/YYYY format.
* **Deed Number** (`deed_number`, text, required): Enter the deed number associated with the real estate record.
* **Date of Execution** (`date_of_execution`, date, required): Enter the date the deed was executed.
* **County** (`county`, select_one, optional): Choose the county related to the real estate record. (Choose from: Option 1, Option 2, Option 3)
* **State** (`state`, select_one, optional): Choose the state related to the real estate record. (Choose from: Option 1, Option 2, Option 3, Option 4)
* **Zip** (`zip`, text, required): Enter the zip code of the real estate location.
* **Notes** (`notes`, note, required): Add any additional comments or information related to the real estate record.
* **Notes2** (`notes2`, note, optional): Add any additional comments or information related to the real estate record. (Optional field for additional notes)
* **Assigned Tool** (`assigned_tool`, select_multiple, optional): Choose all tools that apply to the real estate record. (Choose from: Option 1, Option 2)
* **Form Assigned To** (`form_assigned_to`, select_multiple, optional): Choose all individuals or groups that should be assigned to the real estate record. (Choose from: Option 1, Option 2, Option 3)
* **Output File** (`output_file`, text, required): Enter the path and name of the output file.
* **File Type** (`file_type`, select_one, optional): Choose the type of file. (Choose from: Option 1, Option 2)
* **File Name** (`file_name`, text, required): Enter the name of the file.
* **Upload Date** (`upload_date`, date, required): Enter the date the file was uploaded.
* **Upload Time** (`upload_time`, time, required): Enter the time the file was uploaded.
* **File Path** (`file_path`, text, required): Enter the path where the file is uploaded.
* **File Size** (`file_size`, number, required): Enter the size of the file.
* **Upload Server** (`upload_server`, text, required): Enter the server that uploaded the file.
* **Upload User** (`upload_user`, text, required): Enter the username of the user who uploaded the file.
* **Upload IP** (`upload_ip`, text, required): Enter the IP address of the user who uploaded the file.
* **Upload Browser** (`upload_browser`, text, optional): Enter the browser used to upload the file. (Optional field)
