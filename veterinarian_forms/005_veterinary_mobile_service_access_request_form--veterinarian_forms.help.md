# Veterinary Mobile Service Access Request Form - Help Guide
## Purpose
This form is used to request access to veterinary mobile service, which allows pet owners to request on-site visits or house calls from veterinarians.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields with accurate information.
2. Provide your contact details, including your name, phone number, and email address.
3. Select the type of service you require (On-Site Visit or House Call).
4. Add any special instructions or comments about your visit.
5. Review your information for accuracy before submitting the form.

## Field-by-Field Explanation
### Client Information
• **Client Information** (`client_info`, `text`, required): This field is where you can provide any relevant information about yourself as the pet owner.

### Visit Details
• **Visit Date** (`visit_date`, `date`, required): Please enter the date of your desired visit in MM/dd/yy format.
• **Visit Time** (`visit_time`, `time`, required): Please enter the time of your desired visit in 12-hour format (e.g., 09:00 AM).
• **Pet Information** (`pet_info`, `text`, required): Provide detailed information about your pet, including its species, breed, age, and health condition.

### Owner Information
• **Owner Name** (`owner_name`, `text`, required): This is your name.
• **Owner Phone** (`owner_phone`, `text`, required): Your phone number where we can reach you.
• **Owner Email** (`owner_email`, `email`, required): Your email address where we can contact you.

### Veterinary Information
• **Veterinary Information** (`veterinary_info`, `text`, required): Provide any relevant information about your pet's current vet or medical history.

### Service Type
• **Service Type** (`service_type`, `select_multiple`, required): Choose between On-Site Visit or House Call to specify the type of service you require.

### Special Instructions
• **Special Instructions** (`special_instructions`, `text`, optional): If there are any additional instructions or information you would like to provide, use this field.

### Comments
• **Comments** (`comments`, `text`, optional): You can add any comments or questions you have about your visit here.

Note: All fields marked as required must be filled out before submitting the form.
