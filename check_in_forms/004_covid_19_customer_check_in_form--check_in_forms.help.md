# Covid 19 Customer Check In Form - Help Guide
## Purpose
The form is used to collect information about customers who have received or will receive COVID-19 vaccinations.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form sections and ensure you have all necessary information before filling it out.
2. Enter your information into each field, making sure to select the correct options where applicable.
3. Double-check your selections and entries to ensure accuracy.

## Field-by-Field Explanation
### 1. Checkin Form 
* **Checkin Form** (`checkin_form`, text, required/optional): Please provide a brief description of your reason for visiting the vaccination site. This field is optional.

### 2. customer_info 
* **customer_info** (`customer_info`, text, required/optional): Please provide your personal details, including your name, address, or any other relevant information about yourself.

### 3. vaccination_info 
* **vaccination_info** (`vaccination_info`, text, required/optional): Please provide information about your vaccination, including the date and type of vaccine you received.

### 4. medical_history 
* **medical_history** (`medical_history`, text, required/optional): Please provide any medical history or allergies you may have, which may be relevant to your vaccination experience.

### 5. contact_tracing 
* **contact_tracing** (`contact_tracing`, text, required/optional): Please provide information about how you will be contact traced, such as your phone number or email.

### 6. signature 
* **signature** (`signature`, select_multiple, required/optional): Please select your signature status:
	+ None: You have not signed.
	+ Other: Other (Please specify in the 'Note' field)

### 7. staff_signature 
* **staff_signature** (`staff_signature`, select_multiple, required/optional): Please select your staff signature status:
	+ None: Your staff has not signed.
	+ Other: Other (Please specify in the 'Note' field)

### 8. date_of_vaccination 
* **date_of_vaccination** (`date_of_vaccination`, date, required/optional): Please enter the date of your vaccination.

### 9. vaccination_site 
* **vaccination_site** (`vaccination_site`, text, required/optional): Please enter the name of the vaccination site where you received your vaccine.

### 10. vaccination_provider 
* **vaccination_provider** (`vaccination_provider`, text, required/optional): Please enter the name of your vaccination provider.

### 11. phone_number 
* **phone_number** (`phone_number`, text, required/optional): Please enter your phone number for contact tracing.

### 12. email 
* **email** (`email`, email, required/optional): Please enter your email address for contact tracing.

### 13. note 
* **note** (`note`, note, required/optional): Please enter any additional notes or comments about your vaccination experience.

### 14. date_of_birth 
* **date_of_birth** (`date_of_birth`, date, required/optional): Please enter your date of birth.

### 15. time_of_day 
* **time_of_day** (`time_of_day`, time, required/optional): Please enter the time of day when you received your vaccination.

### 16. time_of_day_end 
* **time_of_day_end** (`time_of_day_end`, time, required/optional): Please enter the time of day when your vaccination was completed.

### 17. time_of_vaccination 
* **time_of_vaccination** (`time_of_vaccination`, time, required/optional): Please enter the time of vaccination.

### 18. date_of_vaccination_end 
* **date_of_vaccination_end** (`date_of_vaccination_end`, date, required/optional): Please enter the date of vaccination completion.

### 19. vaccination_type 
* **vaccination_type** (`vaccination_type`, select_one, required/true): Please select the type of vaccine you received:
	+ Option 1: Vaccine 1
	+ Option 2: Vaccine 2
	+ Option 3: Vaccine 3

### 20. customer_info_type 
* **customer_info_type** (`customer_info_type`, select_one, required/true): Please select the type of information you provided:
	+ Option 1: Option 1
	+ Option 2: Option 2

### 21. contact_tracing_method 
* **contact_tracing_method** (`contact_tracing_method`, select_one, required/true): Please select the method of contact tracing:
	+ Option 1: Option 1
	+ Option 2: Option 2

### 22. vaccination_site_type 
* **vaccination_site_type** (`vaccination_site_type`, select_one, required/true): Please select the type of vaccination site:
	+ Option 1: Option 1
	+ Option 2: Option 2

### 23. vaccination_provider_type 
* **vaccination_provider_type** (`vaccination_provider_type`, select_one, required/true): Please select the type of vaccination provider:
	+ Option 1: Option 1
	+ Option 2: Option 2

### 24. phone_number_type 
* **phone_number_type** (`phone_number_type`, select_one, required/true): Please select the type of phone number:
	+ Option 1: Option 1
	+ Option 2: Option 2

### 25. email_type 
* **email_type** (`email_type`, select_one, required/true): Please select the type of email:
	+ Option 1: Option 1
	+ Option 2: Option 2
