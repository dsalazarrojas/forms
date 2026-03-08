# rental_background_check_authorization_form - Help Guide
## Purpose
The rental background check authorization form is used to confirm the authorization of a rental property unit. Fill out this form to provide background check authorization for the rental of a unit in a rental property.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Answer the questions in sections 2-8 to indicate whether the rental background check is authorized or not for each of the following:
	* applicant_info
	* tenant_info
	* background_check
	* authorization_type
	* authorization_issuer
	* rental_unit_info
	* authorized_by
2. Enter the dates in sections 9-10 to indicate the authorized date and expiration date for the rental background check.
3. Enter any additional information you would like to include in the form.

## Field-by-Field Explanation

* **applicant_info** (`applicant_info`, select_multiple, required: false):
	+ This field is to select whether the rental background check is authorized for the applicant or not. Select 'Yes' to indicate that the background check is authorized, and 'No' to indicate that it is not.
* **tenant_info** (`tenant_info`, select_one, required: false):
	+ This field is to select whether the rental background check is authorized for the tenant or not. Select 'Yes' to indicate that the background check is authorized, and 'No' to indicate that it is not.
* **rental_property** (`rental_property`, select_one, required: false):
	+ This field is to select whether the rental background check is authorized for the rental property or not. Select 'Yes' to indicate that the background check is authorized, and 'No' to indicate that it is not.
* **rental_background_check** (`background_check`, select_one, required: false):
	+ This field is to select whether the rental background check is authorized or not. Select 'Yes' to indicate that the background check is authorized, and 'No' to indicate that it is not.
* **authorization_type** (`authorization_type`, select_multiple, required: false):
	+ This field is to select the types of authorization that are allowed for the rental background check. Select the types that apply.
* **authorization_issuer** (`authorization_issuer`, select_multiple, required: false):
	+ This field is to select the issuers of the authorization for the rental background check. Select the issuers that apply.
* **rental_unit_info** (`rental_unit_info`, select_one, required: false):
	+ This field is to select the information about the rental unit that the background check is authorized for.
* **authorized_by** (`authorized_by`, select_one, required: false):
	+ This field is to select who authorized the background check. Select 'Yes' to indicate that it was authorized by the rental property owner or their representative, and 'No' to indicate that it was not.
* **authorized_date** (`authorized_date`, date, required: false):
	+ Enter the date on which the background check was authorized.
* **expiration_date** (`expiration_date`, date, required: false):
	+ Enter the date on which the background check will expire.
* **form_id** (`form_id`, text, required: false):
	+ This field is for the rental property owner or their representative to enter a unique ID for the form.
* **form_version** (`form_version`, text, required: false):
	+ This field is for the rental property owner or their representative to enter the version of the form.
* **form_status** (`form_status`, select_one, required: false):
	+ This field is to select the status of the form. Select 'Active' to indicate that the form is active, and 'Inactive' to indicate that it is not.
* **created_by** (`created_by`, select_one, required: false):
	+ This field is to select whether the form was created by the rental property owner or their representative or not. Select 'Yes' to indicate that it was, and 'No' to indicate that it was not.
* **created_date** (`created_date`, date, required: false):
	+ Enter the date on which the form was created.
* **updated_by** (`updated_by`, select_one, required: false):
	+ This field is to select whether the form was updated by the rental property owner or their representative or not. Select 'Yes' to indicate that it was, and 'No' to indicate that it was not.
* **updated_date** (`updated_date`, date, required: false):
	+ Enter the date on which the form was last updated.
* **assigned_user** (`assigned_user`, select_one, required: false):
	+ This field is to select whether the form was assigned to a user or not. Select 'Yes' to indicate that it was, and 'No' to indicate that it was not.
