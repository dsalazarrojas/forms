# Animal Science Lab Access Application Form - Help Guide
## Purpose
This form is used to request access to the Animal Science Lab. It collects information about the applicant's identity, research goals, and lab access requirements.

## How To Complete This Form
To complete this form, follow these steps:

* Fill in your full name, email address, phone number, and institutional affiliation.
* Choose the type of access you are requesting (One-Time Visit, Short-Term Access, Medium-Term Access, Long-Term Access, or Regular Collaborator).
* Specify the start and end dates of your requested access period.
* Describe the purpose of your visit and the area of research you will be conducting.
* Select the animal species you will be working with and the lab areas or equipment you require.
* Provide the name and email of your lab supervisor or principal investigator.
* Confirm that you have IACUC or ethics approval (if applicable) and provide the approval number.
* Indicate your biosafety training status and animal handling certification status.
* If applicable, describe your previous lab experience and provide emergency contact information.
* Confirm that you agree to follow all lab safety protocols and maintain confidentiality of lab data.
* If necessary, provide additional information about your application.

## Field-by-Field Explanation

* **Full Name** (`applicant_name`, text, required): Please enter your first and last name.
* **Email Address** (`applicant_email`, email, required): Enter your institutional email address.
* **Phone Number** (`applicant_phone`, text, required): Enter your contact number.
* **Institution or Organization** (`institution`, text, required): Enter your institution's name.
* **Department** (`department`, text, required): Enter your department or division.
* **Position Title** (`position_title`, text, required): Enter your job title or academic rank.
* **Type of Access Requested** (`access_type`, select_one, required): Choose the type of access you are requesting:
	+ One-Time Visit
	+ Short-Term Access (1-7 days)
	+ Medium-Term Access (1-4 weeks)
	+ Long-Term Access (1+ months)
	+ Regular Collaborator
* **Requested Start Date** (`requested_start_date`, date, required): Enter the start date of your requested access period.
* **Requested End Date** (`requested_end_date`, date, required): Enter the end date of your requested access period.
* **Purpose of Lab Access** (`purpose_of_visit`, text, required): Describe the purpose of your visit and research goals.
* **Research Area** (`research_area`, select_one, required): Choose your primary research area:
	+ Animal Behavior
	+ Animal Physiology
	+ Veterinary Medicine
	+ Animal Nutrition
	+ Wildlife Biology
	+ Conservation Science
	+ Genetics
	+ Other
* **Animal Species You Will Work With** (`animal_species`, select_multiple, required): Select all the animal species you will be working with:
	+ Rodents (Mice Rats)
	+ Rabbits
	+ Dogs
	+ Cats
	+ Farm Animals
	+ Primates
	+ Birds
	+ Fish
	+ Reptiles
	+ None - Observation Only
	+ Other
* **Lab Areas or Equipment Needed** (`lab_areas_needed`, select_multiple, required): Select all the lab areas or equipment you require:
	+ General Lab Space
	+ Surgical Suite
	+ Imaging Equipment
	+ Behavioral Testing Rooms
	+ Housing Facilities
	+ Necropsy Lab
	+ Sample Analysis Lab
	+ Office Space
	+ Other
* **Lab Supervisor or PI Name** (`supervisor_name`, text, required): Enter the name of your lab supervisor or principal investigator.
* **Lab Supervisor or PI Email** (`supervisor_email`, email, required): Enter the email address of your lab supervisor or principal investigator.
* **Do You Have IACUC or Ethics Approval** (`iacuc_approval`, select_one, required): Confirm that you have IACUC or ethics approval:
	+ Yes - Approval Number Available
	+ Yes - Pending
	+ No - Not Required for This Work
	+ No - Will Apply
* **Approval Number** (`approval_number`, text, optional): If applicable, enter the approval number.
* **Biosafety Training Status** (`biosafety_training`, select_one, required): Confirm your biosafety training status:
	+ Current - Certificate Available
	+ Expired - Will Renew
	+ Not Yet Completed
	+ Not Required
* **Animal Handling Certification** (`animal_handling_certification`, select_one, required): Confirm your animal handling certification status:
	+ Certified - Current
	+ Certified - Expired
	+ Not Yet Certified
	+ Not Required for This Work
* **Previous Lab Experience** (`previous_lab_experience`, text, optional): If applicable, describe your previous lab experience briefly.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the full name of the emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the phone number of the emergency contact.
* **I Agree to Follow All Lab Safety Protocols** (`safety_agreement`, select_one, required): Confirm that you agree to follow all lab safety protocols:
	+ Yes I Agree
	+ No I Do Not Agree
* **I Agree to Maintain Confidentiality of Lab Data** (`confidentiality_agreement`, select_one, required): Confirm that you agree to maintain confidentiality of lab data:
	+ Yes I Agree
	+ No I Do Not Agree
* **Additional Information** (`additional_information`, text, optional): If necessary, provide additional information about your application.
