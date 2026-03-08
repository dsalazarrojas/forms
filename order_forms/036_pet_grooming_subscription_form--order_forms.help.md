<thinking>
To ensure that this form serves its purpose effectively, we need to validate that the user is attempting to schedule a pet grooming service. This form should not be used for other purposes or by non-pet owners. The form should also not be used if the user is a pet groomer, as this form is designed to capture information from pet owners.
</thinking>

# Pet Grooming Subscription Form - Help Guide
## Purpose
This form is designed for pet owners to schedule and manage their pet's grooming appointments. It captures essential information about the pet, the appointment, and the services required, allowing us to efficiently process and fulfill their requests.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your pet's information, including its type and name.
2. Fill in your contact information, including your email address and phone number.
3. Select a suitable appointment time that suits you.
4. Choose a subscription plan that meets your needs, such as a full, partial, or quick touch-up service.
5. Select the services you require for your pet.
6. Optionally, provide any additional notes or comments about your pet or the appointment.

## Field-by-Field Explanation

* **Pet Information** (`pet_info`, `text`, required: false): Enter your pet's type, breed, and name.
	+ This field is where you provide information about your pet, such as its type (e.g., cat, dog), breed, and name.
* **Owner Information** (`owner_info`, `text`, required: false): Fill in your contact information, including your email address and phone number.
	+ This field captures your contact information, allowing us to communicate with you about your pet's appointment and any updates.
* **Appointment** (`appointment`, `select_multiple`, required: false): Select a time to schedule the appointment.
	+ Choose a time that works for you and your pet's appointment. We offer options for 10:00 AM, 11:00 AM, 12:00 PM, and 1:00 PM.
* **Subscription** (`subscription`, `select_one`, required: false): Select a subscription plan that suits your needs.
	+ Choose between a full service, partial service, or quick touch-up to keep your pet looking and feeling its best.
* **Services** (`services`, `select_multiple`, required: false): Select the services you require for your pet.
	+ Choose from bathing, nail trimming, and haircut services for your pet.
* **Package Selection** (`package_selection`, `select_multiple`, required: false): Select a package that meets your needs.
	+ Select between a full service, partial service, or quick touch-up package.
* **Owner Email** (`owner_email`, `email`, required: false): Enter your email address.
	+ This field is for your contact email address, allowing us to communicate with you about your appointment.
* **Owner Phone** (`owner_phone`, `text`, required: false): Enter your phone number.
	+ This field is for your contact phone number, allowing us to reach out to you about your appointment.
* **Pet Type** (`pet_type`, `select_one`, required: false): Select the type of pet.
	+ Choose between a cat, dog, or other pet type.
* **Pet Breed** (`pet_breed`, `text`, required: false): Enter the breed of your pet.
	+ This field is for entering your pet's specific breed.
* **Pet Name** (`pet_name`, `text`, required: false): Enter your pet's name.
	+ This field is for your pet's name.
* **Owner Name** (`owner_name`, `text`, required: false): Enter your name.
	+ This field is for your contact name.
* **Owner Address** (`owner_address`, `text`, required: false): Enter your address.
	+ This field is for your contact address.
* **Notes** (`notes`, `text`, required: false): Enter any additional comments or notes about your pet or the appointment.
	+ Use this field to provide any extra information that might be helpful for us to know.
* **Frequency** (`package_frequency`, `select_one`, required: false): Select the frequency of your appointment.
	+ Choose between once a month, twice a month, or three times a month appointments.
