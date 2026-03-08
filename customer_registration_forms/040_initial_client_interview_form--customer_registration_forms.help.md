# Initial Client Interview Form - Help Guide
## Purpose
This form is used to collect information for new clients or updates to client records, ensuring consistency and reducing duplication of effort across interactions.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields to provide accurate and up-to-date information about the client.
2. Review each field carefully to ensure you've included all relevant details.
3. Use the available options for each field to select the most accurate response.

## Field-by-Field Explanation

### New Client (1)
**New Client** (`new_client`, text, optional): Enter the client's name.

### Client Type (2)
**Client Type** (`client_type`, select multiple, optional):
	* Yes: Select this option to indicate this client is of this type.
	* No: Select this option to indicate this client is not of this type.

### Contact Details (3)
**Contact Details** (`contact_details`, note, optional): Enter any relevant contact information or additional comments.

### Date of Birth (4)
**Date of Birth** (`date_of_birth`, date, optional): Enter the client's date of birth.

### Phone Number (5)
**Phone Number** (`phone_number`, text, optional): Enter the client's phone number.

### Email Address (6)
**Email Address** (`email_address`, email, optional): Enter the client's email address.

### Client Address (7)
**Client Address** (`client_address`, text, optional): Enter the client's address.

### Additional Notes (8)
**Additional Notes** (`additional_notes`, note, optional): Enter any additional information or comments about the client.

### Assigned Agent (9)
**Assigned Agent** (`assigned_agent`, select one, optional):
	* Yes: Select this option to indicate this client is assigned to this agent.
	* No: Select this option to indicate this client is not assigned to this agent.

### Assigned Tool (10)
**Assigned Tool** (`assigned_tool`, select one, optional):
	* Yes: Select this option to indicate this client is assigned to this tool.
	* No: Select this option to indicate this client is not assigned to this tool.

### Assigned User (11)
**Assigned User** (`assigned_user`, select one, optional):
	* Yes: Select this option to indicate this client is assigned to this user.
	* No: Select this option to indicate this client is not assigned to this user.

### Assigned Team (12)
**Assigned Team** (`assigned_team`, select one, optional):
	* Yes: Select this option to indicate this client is assigned to this team.
	* No: Select this option to indicate this client is not assigned to this team.

### Status (13)
**Status** (`status`, select one, optional):
	* Active: Select this option to indicate this client is active.
	* Inactive: Select this option to indicate this client is inactive.

### Created At (14)
**Created At** (`created_at`, date, optional): This field displays the date and time the client was created.

### Updated At (15)
**Updated At** (`updated_at`, date, optional): This field displays the date and time the client was last updated.

### Created By (16)
**Created By** (`created_by`, select one, optional):
	* Yes: Select this option to indicate this client was created by this user.
	* No: Select this option to indicate this client was not created by this user.

### Updated By (17)
**Updated By** (`updated_by`, select one, optional):
	* Yes: Select this option to indicate this client was last updated by this user.
	* No: Select this option to indicate this client was not last updated by this user.

### Deleted At (18)
**Deleted At** (`deleted_at`, date, optional): This field displays the date and time the client was deleted.

### Deleted By (19)
**Deleted By** (`deleted_by`, select one, optional):
	* Yes: Select this option to indicate this client was deleted by this user.
	* No: Select this option to indicate this client was not deleted by this user.

### Deleted (20)
**Deleted** (`deleted`, select one, optional):
	* Yes: Select this option to indicate this client is deleted.
	* No: Select this option to indicate this client is not deleted.

### Updated By User (21)
**Updated By User** (`updated_by_user`, select one, optional):
	* Yes: Select this option to indicate this client was last updated by this user.
	* No: Select this option to indicate this client was not last updated by this user.

### Updated By Tool (22)
**Updated By Tool** (`updated_by_tool`, select one, optional):
	* Yes: Select this option to indicate this client was last updated by this tool.
	* No: Select this option to indicate this client was not last updated by this tool.

### Updated At Time (23)
**Updated At Time** (`updated_at_time`, time, optional): This field displays the time the client was last updated.

### Updated At Date (24)
**Updated At Date** (`updated_at_date`, date, optional): This field displays the date the client was last updated.

### Created At Time (25)
**Created At Time** (`created_at_time`, time, optional): This field displays the time the client was created.

Note: Some fields are not applicable for new clients (e.g., Created At, Updated At, Created By, Updated By, Deleted At, Deleted By). For new clients, these fields will automatically be populated with default values once the client is saved.
