# Hair Salon Waiver Form - Help Guide
## Purpose
The Hair Salon Waiver Form is a necessary document that clients must fill out before receiving any hair salon services. This form collects important information about the client, such as their name, contact details, and emergency contact information. It also includes a field for the waiver agreement, which ensures that the client understands and agrees to the salon's policies and procedures.

## How To Complete This Form
To complete the form, follow these steps:

1. Start by filling in your **Client Name** in the first field.
2. Provide your **Contact Information**, including your address, phone number, and email.
3. Select the type of service you would like to receive from the **Service Type** dropdown menu.
4. If you have an emergency contact, fill in their **Emergency Contact** information.
5. Indicate your relationship with the emergency contact in the **Relationship** field.
6. Enter the emergency contact's **Emergency Address**.
7. Sign the **Signature** field to confirm that you have read and understand the waiver agreement.
8. Enter the **Date** and **Time** of your appointment.
9. Enter your **Email** and **Phone** contact information.
10. Optionally, enter any additional **Notes** about your appointment.

## Field-by-Field Explanation
### Client Name
* **Client Name** (`client_name`, `text`, required): This is the first field of the form where you should enter your name as a client.

### Contact Information
* **Contact Information** (`contact_info`, `text`, optional): If you would like to provide us with your contact information, please fill in your address, phone number, and email here.

### Service Type
* **Service Type** (`service_type`, `select_one`, required): Select the service type you would like to receive from the following options:
	+ Hair Cut
	+ Chemical Treatment
	+ Color and Style
	+ Chemical Straightening
	+ Hair Relaxing
	+ Hair Straightening
	+ Hair Coloring
	+ Hair Bleach
	+ Hair Perms

### Waiver Agreement
* **Waiver Agreement** (`waiver_agreement`, `note`, optional): This field is a note section for you to read and agree to the salon's policies and procedures. Please review it carefully before signing the form.

### Emergency Contact
* **Emergency Contact** (`emergency_contact`, `text`, optional): If you have an emergency contact, please fill in their name and information here.

### Relationship
* **Relationship** (`emergency_relationship`, `select_one`, required): If you have an emergency contact, please indicate your relationship with them:
	+ Mother
	+ Father
	+ Brother
	+ Sister
	+ Friend
	+ Spouse

### Emergency Address
* **Emergency Address** (`emergency_address`, `text`, required): If you have an emergency contact, please enter their address here.

### Signature
* **Signature** (`signature`, `text`, required): Please sign this field to confirm that you have read and understand the waiver agreement.

### Date
* **Date** (`date`, `date`, required): Enter the date of your appointment.

### Time
* **Time** (`time`, `time`, required): Enter the time of your appointment.

### Email
* **Email** (`email`, `email`, required): Enter your email address.

### Phone
* **Phone** (`phone`, `text`, required): Enter your phone number.

### Fax
* **Fax** (`fax`, `text`, optional): If you have a fax number, you can enter it here.

### Notes
* **Notes** (`notes`, `text`, optional): If you have any additional comments or notes about your appointment, you can enter them here.
