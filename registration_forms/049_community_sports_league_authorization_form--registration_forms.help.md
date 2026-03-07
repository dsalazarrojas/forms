<thinking>...</thinking>

# Community Sports League Authorization Form - Help Guide

## Purpose

This form is used to collect information about players in a community sports league, including contact details, medical information, and agreement to league rules. It is a required step in the registration process for joining the league.

## How To Complete This Form

To complete this form, follow these steps:

1. **Provide Player Information**
	* First Name: Enter the player's first name.
	* Last Name: Enter the player's last name.
	* Date of Birth: Enter the player's date of birth in the format MM/DD/YYYY.
	* Email Address: Enter the player's email address.
	* Phone Number: Enter the player's phone number.
	* Street Address: Enter the player's home address.
	* City: Enter the city of the player's home address.
	* State: Enter the state of the player's home address.
	* ZIP Code: Enter the player's zip code.
2. **Medical Information**
	* Height: Enter the player's height in feet and inches.
	* Weight: Enter the player's weight in pounds.
	* Medical Conditions or Allergies: If applicable, enter any medical conditions or allergies the player has.
	* Current Medications: If applicable, enter any current medications the player is taking.
	* Health Insurance Provider: If applicable, enter the player's health insurance provider.
	* Policy Number: If applicable, enter the player's policy number.
3. **Guardian Information (if under 18)**
	* Name of Guardian: If the player is under 18, enter the name of the guardian.
	* Guardian's Email Address: Enter the guardian's email address.
	* Guardian's Phone Number: Enter the guardian's phone number.
4. **Team and League Information**
	* Sport: Select the sport the player wishes to participate in.
	* League Name: Enter the name of the league the player wishes to join.
	* Season: Select the season the player wishes to join (Spring, Summer, Fall, Winter).
	* Division or Level: Select the division or level of play the player wishes to join (Recreational, Competitive, Elite, All-Star).
5. **Authorization and Consent**
	* Participation Consent: Select "Yes" if the player consents to participation in the league.
	* Understand Risks: Select "Yes" if the player understands there are risks involved in participating in the league.
	* Release Liability: Select "Yes" if the player agrees to release the organization from liability.
	* Emergency Medical Treatment: Select "Yes" if the player authorizes emergency medical treatment if needed.
	* Photo and Video Consent: Select "Yes" if the player consents to photos and videos being taken.
	* Transportation Authorization: Select "Yes" if the player authorizes transportation for away games.
	* Agree to Follow League Rules: Select "Yes" if the player agrees to follow the league's code of conduct.
6. **Signature and Date**

**Signature and Date** fields are required. If the player is under 18, both the player and guardian must sign and date the form.

## Field-by-Field Explanation

* **Participant Information** (`participant_info`, note, not required):
	+ This section is for additional information that may be relevant to the player's participation in the league.
* **First Name** (`first_name`, text, required):
	+ Enter the player's first name.
* **Last Name** (`last_name`, text, required):
	+ Enter the player's last name.
* **Date of Birth** (`date_of_birth`, date, required):
	+ Enter the player's date of birth in the format MM/DD/YYYY.
* **Gender** (`gender`, select_one, optional):
	+ Select the player's gender.
* **Height** (`height`, text, optional):
	+ Enter the player's height in feet and inches.
* **Weight** (`weight`, number, optional):
	+ Enter the player's weight in pounds.
* **Email Address** (`email`, email, required):
	+ Enter the player's email address.
* **Phone Number** (`phone`, text, required):
	+ Enter the player's phone number.
* **Street Address** (`address`, text, required):
	+ Enter the player's home address.
* **City** (`city`, text, required):
	+ Enter the city of the player's home address.
* **State** (`state`, text, required):
	+ Enter the state of the player's home address.
* **ZIP Code** (`zip_code`, text, required):
	+ Enter the player's zip code.
* **Emergency Contact Name and Phone** (`emergency_contact`, text, required):
	+ Enter the name and phone number of the player's emergency contact.
* **Parent or Guardian Information** (`guardian_info`, note, not required):
	+ If the player is under 18, enter information about the guardian or parent.
* **Is Participant Under 18** (`is_minor`, select_one, required):
	+ Select "True" if the player is under 18.
* **Guardian First Name** (`guardian_first_name`, text, optional):
	+ Enter the guardian's first name if the player is under 18.
* **Guardian Last Name** (`guardian_last_name`, text, optional):
	+ Enter the guardian's last name if the player is under 18.
* **Guardian Email** (`guardian_email`, email, optional):
	+ Enter the guardian's email address if the player is under 18.
* **Guardian Phone** (`guardian_phone`, text, optional):
	+ Enter the guardian's phone number if the player is under 18.
* **League Information** (`league_info`, note, not required):
	+ Enter any relevant information about the league.
* **Sport** (`sport`, select_one, required):
	+ Select the sport the player wishes to participate in.
* **League Name** (`league_name`, text, required):
	+ Enter the name of the league the player wishes to join.
* **Season** (`season`, select_one, required):
	+ Select the season the player wishes to join (Spring, Summer, Fall, Winter).
* **Division or Level** (`division`, select_one, required):
	+ Select the division or level of play the player wishes to join (Recreational, Competitive, Elite, All-Star).
* **Team Preference** (`team_preference`, select_one, optional):
	+ Select the player's team preference (No Preference, Request Specific Team, Request to Play with Friend, Request Specific Coach).
* **Team or Coach Request** (`team_request`, text, optional):
	+ Enter any specific team or coach request if applicable.
* **Medical Information** (`medical_info`, note, not required):
	+ Enter any additional information about the player's medical history.
* **Medical Conditions or Allergies** (`medical_conditions`, text, optional):
	+ Enter any medical conditions or allergies the player has.
* **Current Medications** (`medications`, text, optional):
	+ Enter any current medications the player is taking.
* **Health Insurance Provider** (`insurance_provider`, text, optional):
	+ Enter the player's health insurance provider if applicable.
* **Policy Number** (`policy_number`, text, optional):
	+ Enter the player's policy number if applicable.
* **Authorization and Consent** (`authorization_section`, note, not required):
	+ Read and understand the player's authorization and consent agreement.
* **I Consent to Participation** (`participation_consent`, select_one, required):
	+ Select "Yes" if the player consents to participation in the league.
* **I Understand There Are Risks** (`risk_acknowledgment`, select_one, required):
	+ Select "Yes" if the player understands there are risks involved in participating in the league.
* **I Release the Organization from Liability** (`liability_release`, select_one, required):
	+ Select "Yes" if the player agrees to release the organization from liability.
* **I Authorize Emergency Medical Treatment** (`medical_treatment`, select_one, required):
	+ Select "Yes" if the player authorizes emergency medical treatment if needed.
* **Photo and Video Consent** (`photo_consent`, select_one, required):
	+ Select "Yes" if the player consents to photos and videos being taken.
* **Transportation Authorization** (`transportation`, select_one, optional):
	+ Select "Yes" if the player authorizes transportation for away games.
* **Agree to Follow League Rules** (`rules_agreement`, select_one, required):
	+ Select "Yes" if the player agrees to follow the league's code of conduct.
* **Participant Signature** (`participant_signature`, text, required):
	+ Type full name and date.
* **Guardian Signature** (`guardian_signature`, text, optional):
	+ Type full name and date if the player is under 18.
* **Guardian Date** (`guardian_date`, date, optional):
	+ Enter the date if the player is under 18.
* **Authorization and Consent** (`authorization`, note, not required):
	+ A note summarizing the player's authorization and consent agreements.

## Tips

* Ensure all fields are complete and accurate to avoid delays in processing the registration.
* If the player is under 18, both the player and guardian must sign and date the form.
* Ensure the player understands the risks involved in participating in the league and agrees to follow the league's code of conduct.
