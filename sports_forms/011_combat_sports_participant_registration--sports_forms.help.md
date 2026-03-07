<thinking>
We need to create a help guide that covers the purpose and process of completing the Combat Sports Participant Registration form. This form is designed to gather information from participants registering for combat sports, such as Boxing, Mixed Martial Arts (MMA), Brazilian Jiu-Jitsu, Muay Thai, Kickboxing, Wrestling, Taekwondo, or Karate. The purpose of this form is to collect participant information for age verification, category placement, medical purposes, and registration confirmation.
To avoid duplication of effort, we will only create one instance of the form per participant.
</thinking>

# Combat Sports Participant Registration - Help Guide
## Purpose
This form is designed to collect information from participants registering for combat sports, including age verification, category placement, and medical purposes.

## How To Complete This Form

1.  To start, please enter your participant information, including:
	* Participant Full Name
	* Date of Birth
	* Gender
	* Email Address
	* Phone Number
	* Home Address
	* Relationship to Emergency Contact
2.  If you have an Emergency Contact, please provide their:
	* Name
	* Phone Number
	* Relationship to you (e.g. Spouse, Parent, Sibling, etc.)
3.  Select your:
	* Combat Sport
	* Experience Level (Beginner, Intermediate, Advanced, Professional)
	* Weight Class
	* Registration Type (Competition, Training Only, Both)
4.  Provide medical information, including:
	* Any medical conditions
	* Current injuries or physical limitations
	* List of any medications you are taking
	* Blood Type (if known)
5.  Please confirm your registration by:
	* Accepting the Liability Waiver
	* Authorizing Emergency Medical Treatment
	* Allowing Photos for Promotional Use
6.  Finally, please pay the registration fee and confirm your payment.

## Field-by-Field Explanation

* **Participant Full Name** (`participant_name`, text, required): Enter your legal name as it appears on your ID.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth for age verification and category placement.
* **Gender** (`gender`, select_one, required): Select your gender.
* **Email Address** (`email`, email, required): Enter your email address for registration confirmation and updates.
* **Phone Number** (`phone`, text, required): Enter your contact phone number for emergencies.
* **Home Address** (`address`, text, required): Enter your complete street address.
* **Emergency Contact** (`emergency_contact_name`, text, required): Enter the full name of your emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the phone number of your emergency contact.
* **Relationship to Participant** (`emergency_contact_relationship`, select_one, required): Choose how you are related to your emergency contact (e.g. Spouse, Parent, Sibling, etc.).
* **Combat Sport** (`combat_sport`, select_one, required): Choose which combat sport you are registering for.
* **Experience Level** (`experience_level`, select_one, required): Choose your experience level in the selected combat sport.
* **Weight Class** (`weight_class`, select_one, required): Choose your current weight class.
* **Registration Type** (`competition_or_training`, select_one, required): Choose whether you are registering for competition or training.
* **Medical Conditions** (`medical_conditions`, text, required): List any medical conditions we should be aware of.
* **Current Injuries** (`current_injuries`, text, required): List any current injuries or physical limitations.
* **Medications** (`medications`, text, required): List any medications you are taking.
* **Blood Type** (`blood_type`, select_one, required): Choose your blood type if known.
* **Liability Waiver** (`liability_waiver`, select_one, required): Confirm that you accept the liability waiver.
* **Medical Release** (`medical_release`, select_one, required): Confirm that you authorize emergency medical treatment.
* **Photo Release** (`photo_release`, select_one, required): Choose whether you allow photos for promotional use.
* **Registration Fee** (`registration_fee`, number, required): Enter the amount of the registration fee paid.

## Tips

* Please double-check your information for accuracy before submitting.
* Make sure to provide clear and complete information for each field.
* If you have any doubts or concerns, please contact our support team.
