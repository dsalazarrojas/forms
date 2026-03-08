# Telehealth Intake And Signature Form - Help Guide
## Purpose
This form is designed to collect essential patient information and obtain consent for telehealth services. It also includes a space for patients to sign and date their consent.

## How To Complete This Form

### Step 1: Patient Information
To complete this form, start by providing your personal details on page 1: Patient Information.

### Step 2: Consent
Please select your consent status from the dropdown menu on page 2. This will confirm your agreement to our telehealth services.

### Step 3: Signature and Date
Move on to page 3, where you will find a space for your signature and date. Please sign and date this page as a formal confirmation of your consent.

### Step 4: Contact Method and Schedule Time
On page 4, select the contact method you prefer (call, email, or text) and specify the schedule time for your telehealth appointment.

## Field-by-Field Explanation

* **Patient Information** (`patient_info`, text, required: false): Please provide your basic contact information, including your name, address, and phone number.
* **Consent** (`consent`, select_one, required: false): Select 'True' if you agree to our telehealth services, or 'False' if you do not. 
* **Signature** (`signature`, note, required: false): Please sign and date this page as a formal confirmation of your consent.
* **Contact Method** (`contact_method`, select_multiple, required: false): Choose how you would like to be contacted (call, email, or text).
* **Schedule Time** (`schedule_time`, time, required: false): Enter the time of your scheduled telehealth appointment.

## Tips
- Make sure to fill out all the fields accurately.
- If you have any questions, ask your healthcare provider.
- Review your information carefully before submitting the form.
