# Camp Participant Registration Form - Help Guide

## Purpose
The Camp Participant Registration Form is a crucial document that helps the camp staff and organizers to understand each participant's needs, preferences, and medical conditions. This information is vital for providing a safe and enjoyable experience for all participants.

## How To Complete This Form

1. Please carefully review each field and ensure you understand the purpose behind it.
2. Fill out the form completely, making sure to include all required fields.
3. Enter accurate information, especially for medical conditions and contact details.
4. Select the correct options for camp sessions and transportation preferences.
5. Double-check your responses before submitting the form.

## Field-by-Field Explanation

* **Participant First Name** (`participant_first_name`, text, required): Enter the participant's first name.
* **Participant Last Name** (`participant_last_name`, text, required): Enter the participant's last name.
* **Date of Birth** (`date_of_birth`, date, required): Enter the participant's birthdate in the correct format (YYYY-MM-DD).
* **Age** (`age`, number, required): Enter the participant's current age.
* **Gender** (`gender`, select_one, required): Select the participant's gender.
	+ Male
	+ Female
	+ Non-binary
	+ Prefer not to say
	+ Other
* **Current School Grade** (`school_grade`, select_one, required): Select the grade the participant is currently in.
	+ Kindergarten
	+ 1st Grade
	+ 2nd Grade
	+ 3rd Grade
	+ 4th Grade
	+ 5th Grade
	+ 6th Grade
	+ 7th Grade
	+ 8th Grade
	+ 9th Grade
	+ 10th Grade
	+ 11th Grade
	+ 12th Grade
	+ College or above
* **School Name** (`school_name`, text, optional): Enter the name of the participant's school.
* **Parent or Guardian Full Name** (`parent_guardian_name`, text, required): Enter your full name as the parent or guardian.
* **Parent or Guardian Email** (`parent_guardian_email`, email, required): Enter your email address for contact purposes.
* **Parent or Guardian Phone** (`parent_guardian_phone`, text, required): Enter your phone number for contact purposes.
* **Home Address** (`home_address`, text, required): Enter the participant's home address.
* **City** (`city`, text, required): Enter the city or town where the participant lives.
* **State** (`state`, text, required): Enter the state or province where the participant lives.
* **ZIP Code** (`zip_code`, text, required): Enter the participant's zip code.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the full name of the emergency contact person.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the emergency contact person's phone number.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, text, required): Describe the relationship between the participant and the emergency contact person.
* **Medical Conditions** (`medical_conditions`, text, required): List any medical conditions the participant has.
* **Allergies** (`allergies`, text, required): List any allergies the participant has (food, insect, medication).
* **Current Medications** (`current_medications`, text, optional): List any current medications the participant is taking, including dosages.
* **Primary Physician Name** (`physician_name`, text, required): Enter the name of the participant's primary physician.
* **Physician Phone** (`physician_phone`, text, required): Enter the primary physician's phone number.
* **Insurance Provider** (`insurance_provider`, text, optional): Enter the name of the participant's insurance provider.
* **Insurance Policy Number** (`insurance_policy_number`, text, optional): Enter the participant's insurance policy number or member ID.
* **Dietary Restrictions** (`dietary_restrictions`, select_multiple, required): Select all applicable dietary restrictions.
	+ None
	+ Vegetarian
	+ Vegan
	+ Gluten-free
	+ Dairy-free
	+ Nut allergy
	+ Kosher
	+ Halal
	+ Other
* **Does the Participant Have Special Needs?** (`special_needs`, select_one, required): Select if the participant has special needs.
	+ No
	+ Yes - learning disability
	+ Yes - physical disability
	+ Yes - behavioral support
	+ Yes - other
* **Special Needs Details** (`special_needs_details`, text, optional): Describe the participant's special needs if applicable.
* **Camp Session Selection** (`camp_session_selection`, select_one, required): Choose the camp session for the participant.
	+ Session 1 - Week 1
	+ Session 2 - Week 2
	+ Session 3 - Week 3
	+ Session 4 - Week 4
	+ Full summer program
* **Transportation Needed** (`transportation_needed`, select_one, required): Select if transportation is needed for the participant.
	+ No
	+ Yes - morning only
	+ Yes - afternoon only
	+ Yes - both ways
* **T-Shirt Size** (`t_shirt_size`, select_one, required): Select the participant's T-shirt size for the camp shirt.
	+ Youth Small
	+ Youth Medium
	+ Youth Large
	+ Adult Small
	+ Adult Medium
	+ Adult Large
	+ Adult XL
* **How Did You Hear About This Camp** (`how_heard_about_camp`, select_multiple, optional): Select all applicable ways you heard about the camp.
	+ School referral
	+ Friend or family
	+ Social media
	+ Website
	+ Previous attendee
	+ Community flyer
	+ Other
