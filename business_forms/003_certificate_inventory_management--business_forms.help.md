<thinking> 
The form "Certificate Inventory Management" is used to manage and track certificates, such as compliance, safety, and professional development certificates, issued to employees or entities. This form helps to maintain a centralized inventory of certificates, ensuring accurate tracking and management of certificate issuances, expiration dates, and status updates. It is essential to prevent expired or revoked certificates from being issued or used. The form also aids in setting reminders for renewals and verifying the authenticity of certificates. By utilizing this form, administrators can efficiently oversee the entire certificate lifecycle and maintain a precise record of certificate holder information, inventory status, and other relevant details.

</thinking>
# Certificate Inventory Management - Help Guide
## Purpose
The Certificate Inventory Management form is used to track and manage certificates, ensuring accurate records and preventing expired or revoked certificates from being issued or used.

## How To Complete This Form
- Please select the relevant options for the certificate details and holder information.
- Ensure accurate dates for issuance, expiration, and inventory checks are entered.
- Choose the correct status for the certificate in the inventory.
- Select the correct department for the certificate holder.
- Enter the verification method used to authenticate the certificate.

## Field-by-Field Explanation
### Certificate Title
* **Certificate Title** (`certificate_title`, text, required): Enter the full name of the certificate, as issued by the authority.

### Certificate Category
* **Certificate Category** (`certificate_category`, select_one, required): Select the type of certificate being managed, such as Compliance, Safety, or Professional Development.

### Certificate Serial Number
* **Certificate Serial Number** (`certificate_serial_number`, text, required): Enter the unique identifier for the certificate.

### Issuance Date
* **Issuance Date** (`issuance_date`, date, required): Enter the date when the certificate was originally issued.

### Expiration Date
* **Expiration Date** (`expiration_date`, date, required): Enter the date when the certificate will no longer be valid.

### Issuance Authority
* **Issuance Authority** (`issuance_authority`, text, required): Enter the organization or body that issued the certificate.

### Certificate Holder Name
* **Certificate Holder Name** (`certificate_holder_name`, text, required): Enter the name of the person or entity to whom the certificate was issued.

### Employee ID Number
* **Employee ID Number** (`employee_id_number`, text, optional): If applicable, enter the ID number of the certificate holder if they are an internal staff member.

### Department Assigned
* **Department Assigned** (`department_assigned`, select_one, required): Choose the department to which this certificate holder belongs, such as Human Resources or Operations.

### Certificate Status
* **Certificate Status** (`certificate_status`, select_one, required): Select the current status of the certificate in the inventory, such as Active, Expired, or Revoked.

### Physical Copy Location
* **Physical Copy Location** (`physical_copy_location`, text, optional): Enter the location where the hard copy of this certificate is stored.

### Digital Copy Available
* **Digital Copy Available** (`digital_copy_available`, select_one, required): Select whether a digital version of the certificate has been scanned and uploaded.

### Next Renewal Reminder Date
* **Next Renewal Reminder Date** (`next_renewal_reminder_date`, date, optional): Set a date to trigger a renewal alert for the certificate.

### Verification Method
* **Verification Method** (`verification_method`, select_one, required): Choose how the certificate was verified for authenticity, such as Online Database Search or Visual Inspection of Original.

### Audit and Inventory Notes
* **Audit and Inventory Notes** (`audit_notes`, text, optional): Enter any additional information or issues found during the inventory check.

### Last Inventory Check Date
* **Last Inventory Check Date** (`last_inventory_check_date`, date, required): Enter the date when this certificate was last verified in the system.

### Administrator Comments
* **Administrator Comments** (`administrator_comments`, text, optional): Enter any relevant comments from the administrator.
