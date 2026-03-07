<thinking> 
This form is used to register new clients for a hair salon. The form is intended to collect contact information and preferences of the client for future appointments. 

</thinking>

# hair_salon_new_client_registration_form - Help Guide
## Purpose
This form is used to register new clients for a hair salon. Fill out the form with your contact information and preferred services to help our team better serve you for future appointments.

## How To Complete This Form
To complete this form, simply fill out each field with your information. You can skip any field that is not relevant to you.

## Field-by-Field Explanation
* **New Client** (`new_client`, text, required: false): Enter your name as you would like to be addressed in our records.
* **Contact Info** (`contact_info`, text, required: false): Enter your contact information, including address and any other relevant details.
* **Phone** (`phone`, number, required: false): Enter your phone number so we can reach you to confirm appointments.
* **Email** (`email`, email, required: false): Enter your email address so we can communicate with you about your appointments.
* **Date** (`date`, date, required: false): Select a date for your appointment. If you're not sure, you can leave this field blank.
* **Time** (`time`, time, required: false): Select a time for your appointment. If you're not sure, you can leave this field blank.
* **Address** (`address`, text, required: false): Enter your current address so we can reach you.
* **Services** (`services`, select_multiple, required: false): Select the services you're interested in receiving from us. You can choose one or multiple options.
	+ Hair Cutting: Hair cutting services, including trims, cuts, and styles.
	+ Hair Color: Hair coloring services, including dyeing, highlighting, and color correction.
	+ Hair Styling: Hair styling services, including updo's, blowouts, and hair straightening.
	+ Nails: Nail services, including nail polish, nail art, and nail repair.
	+ Makeup: Makeup services, including makeup application and makeup lessons.
	+ Waxing: Waxing services, including eyebrow waxing and full-body waxing.
	+ Massage: Massage services, including massage therapy and aromatherapy.
	+ Facials: Facials, including cleansing, exfoliating, and moisturizing.
* **Note** (`note`, note, required: false): Enter any additional note about your appointment or preferences.
* **Form ID** (`form_id`, text, required: false): Enter a unique ID for this form submission. This is for internal use only.
* **Category** (`category`, text, required: false): Enter a category for this form submission. This is for internal use only.
