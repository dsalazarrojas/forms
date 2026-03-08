<thinking>As a form expert, I'll create a user-facing help guide for the Yoga Informed Consent Form, ensuring that end-users understand the form's purpose, how to complete it, and what each field means. I'll review the provided YAML fields and craft a clear, concise, and practical guide in Markdown format.</thinking>

# Yoga Informed Consent Form - Help Guide
## Purpose
The Yoga Informed Consent Form is a document designed to gather essential information from participants before they begin yoga activities. This form helps ensure that participants are aware of the potential risks and benefits of yoga and provide informed consent for their participation. It's essential to fill out this form accurately and honestly to ensure a safe and enjoyable yoga experience.

## How To Complete This Form
1. Please fill out the form completely and accurately, providing the required information.
2. Ensure that you've included all necessary contact information, medical conditions, and other relevant details.
3. Review each field carefully to understand its purpose and relevance to your participation in yoga activities.

## Field-by-Field Explanation

* **Yoga Informed Consent Form** (`form_title`, text, required): This is the title of the form. Please fill out this field with your name as you would like to be addressed.
* **Participant Name** (`participant_name`, text, required): Enter your full name as it appears on your identification.
* **Participant E-mail** (`participant_email`, email, required): Enter your valid email address for communication purposes.
* **Participant Phone** (`participant_phone`, text, optional): If you have a phone number you'd like to be contacted at, please enter it here. This is optional.
* **Participant Address** (`participant_address`, text, optional): Enter your current address for emergency contact purposes.
* **Participant Date of Birth** (`participant_dob`, date, optional): If you're over 18, please enter your date of birth.
* **Participant Age** (`participant_age`, number, optional): Enter your current age.
* **Participant Yoga Experience** (`participant_yoga_experience`, number, optional): Enter the number of years you've practiced yoga.
* **Participant Medical Condition** (`participant_medical_condition`, text, optional): If you have any medical conditions, please describe them here.
* **Participant Medical History** (`participant_medical_history`, text, optional): Provide any relevant medical history.
* **Participant Allergies** (`participant_allergies`, text, optional): If you have any allergies, please list them here.
* **Participant Emergency Contact** (`participant_emergency_contact`, text, optional): Enter the name and contact information of your emergency contact.
* **Participant Relationship** (`participant_relationship`, text, optional): Describe your relationship with the participant (e.g., student, instructor, friend).
* **Yoga Instructor** (`yoga_instructors`, text, required): Enter the name of your yoga instructor or the person leading the session.
* **Yoga Schedule** (`yoga_schedule`, text, required): Describe the specific schedule of the yoga session (e.g., date, time, duration).
* **Yoga Session** (`yoga_session`, text, required): Enter the title or description of the yoga session.
* **Yoga Duration** (`yoga_duration`, number, required): Enter the length of the yoga session (in minutes).
* **Yoga Level** (`yoga_level`, select_one, required): Select your current yoga level (Beginner, Intermediate, Advanced).
* **Yoga Frequency** (`yoga_frequency`, select_multiple, required): Choose how often you practice yoga (Daily, Weekly, Monthly).
* **Participant Signature** (`participant_signature`, note, required): Sign this form to indicate that you've read and understood the information provided.
* **Date** (`participant_date`, date, required): Enter the date you're signing the form.
* **Yoga Center** (`yoga_center`, text, required): Enter the name or location of the yoga center or studio.
* **Participant Gender** (`participant_gender`, text, optional): If you're comfortable sharing your gender, please enter it.
* **Participant Height** (`participant_height`, number, required): Enter your height (in inches or centimeters).
* **Participant Weight** (`participant_weight`, number, required): Enter your weight (in pounds or kilograms).
