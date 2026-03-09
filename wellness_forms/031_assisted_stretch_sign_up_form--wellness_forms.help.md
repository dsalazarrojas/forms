# Assisted Stretch Sign Up Form - Help Guide
## Purpose
The Assisted Stretch Sign Up Form is designed to collect information about you to create a customized class schedule that suits your needs and preferences. This form will guide you through the necessary fields to provide accurate and relevant information.

## How To Complete This Form
1. Fill out the form in a step-by-step manner, ensuring you complete each field before moving on to the next.
2. Ensure all required fields are filled out, indicated by a red asterisk (\*) next to the field label.
3. If a field is optional, you may leave it blank or provide additional information if you feel it is necessary.
4. Review your answers carefully before submitting the form.

## Field-by-Field Explanation

* **First Name (1)** (`participant_first_name`, text, \*): Please enter your first name.
* **Last Name (2)** (`participant_last_name`, text, \*): Please enter your last name.
* **Email Address (3)** (`email_address`, email, \*): Enter your contact email address.
* **Phone Number (4)** (`phone_number`, text, \*): Enter your contact phone number.
* **Age Group (5)** (`age_group`, select_one, \*): Select your age range.
	+ 18-25: You are between 18 and 25 years old.
	+ 26-35: You are between 26 and 35 years old.
	+ 36-45: You are between 36 and 45 years old.
	+ 46-55: You are between 46 and 55 years old.
	+ 56-65: You are between 56 and 65 years old.
	+ 65+: You are 65 years old or older.
* **Current Fitness Level (6)** (`fitness_level`, select_one, \*): Select how active you are.
	+ Sedentary: You are relatively inactive.
	+ Lightly Active: You are lightly active.
	+ Moderately Active: You are moderately active.
	+ Very Active: You are very active.
	+ Extremely Active: You are extremely active.
* **Prior Stretching Experience (7)** (`stretch_experience`, select_one, \*): Select your prior experience with stretching.
	+ Never: You have no experience with stretching.
	+ Rarely: You have rarely participated in stretching.
	+ Occasionally: You have occasionally participated in stretching.
	+ Regularly: You have regularly participated in stretching.
	+ Very Familiar: You have a lot of experience with stretching.
* **Flexibility Goals (8)** (`flexibility_goals`, select_multiple, \*): Select what you want to achieve through the class.
	+ Increase flexibility: You want to increase your flexibility.
	+ Reduce muscle tension: You want to reduce muscle tension.
	+ Pain relief: You want to relieve pain.
	+ Injury recovery: You want to recover from an injury.
	+ Stress relief: You want to relieve stress.
	+ General wellness: You want to improve overall wellness.
* **Preferred Class Day (9)** (`class_preference_day`, select_one, \*): Select the day of the week you prefer for the class.
	+ Monday: You prefer to take the class on Monday.
	+ Tuesday: You prefer to take the class on Tuesday.
	+ Wednesday: You prefer to take the class on Wednesday.
	+ Thursday: You prefer to take the class on Thursday.
	+ Friday: You prefer to take the class on Friday.
	+ Saturday: You prefer to take the class on Saturday.
	+ Sunday: You prefer to take the class on Sunday.
* **Preferred Class Time (10)** (`class_preference_time`, select_one, \*): Select the time of the day you prefer for the class.
	+ Morning 6am - 9am: You prefer to take the class between 6am and 9am.
	+ Mid-morning 9am - 12pm: You prefer to take the class between 9am and 12pm.
	+ Afternoon 12pm - 3pm: You prefer to take the class between 12pm and 3pm.
	+ Late afternoon 3pm - 6pm: You prefer to take the class between 3pm and 6pm.
	+ Evening 6pm - 9pm: You prefer to take the class between 6pm and 9pm.
* **Preferred Session Duration (11)** (`session_duration`, select_one, \*): Select the length of the session you prefer.
	+ 30 minutes: The session will be 30 minutes long.
	+ 45 minutes: The session will be 45 minutes long.
	+ 60 minutes: The session will be 60 minutes long.
	+ 90 minutes: The session will be 90 minutes long.
* **Preferred Class Environment (12)** (`class_environment`, select_one, \*): Select how you prefer to take the class.
	+ In-Person: You prefer to take the class in-person.
	+ Online: You prefer to take the class online.
	+ No Preference: You have no preference.
* **Current Injuries or Conditions (13)** (`injury_or_condition`, text, ): If you have any physical limitations, please enter them here.
* **Any Medical Restrictions (14)** (`medical_restrictions`, text, ): If you have any doctor-recommended limitations, please enter them here.
* **Current Medications Affecting Movement (15)** (`medications`, text, ): If you have any medications that limit your activity, please enter them here.
* **Allergies (16)** (`allergies`, text, ): If you have any allergies, please enter them here.
* **Areas of Problem or Tightness (17)** (`problem_areas`, select_multiple, \*): Select areas you have flexibility issues with.
	+ Neck: You experience tightness in your neck.
	+ Shoulders: You experience tightness in your shoulders.
	+ Upper Back: You experience tightness in your upper back.
	+ Lower Back: You experience tightness in your lower back.
	+ Hips: You experience tightness in your hips.
	+ Hamstrings: You experience tightness in your hamstrings.
	+ Calves: You experience tightness in your calves.
	+ Full Body: You experience tightness throughout your body.
* **How Did You Hear About This Class (18)** (`how_heard_about_class`, select_one, \*): Select where you heard about the class.
	+ Friend or Family: You heard about the class from a friend or family member.
	+ Social Media: You heard about the class through social media.
	+ Website: You heard about the class through the website.
	+ Google Search: You searched for the class on Google.
	+ Flyer or Advertisement: You saw a class advertisement.
	+ Email Newsletter: You saw an email newsletter.
	+ Other: You heard about the class through other means.
* **How Many Classes Per Month (19)** (`commitment_level`, select_one, \*): Select how often you will attend classes.
	+ Once a Month: You will attend class once a month.
	+ 2-3 Times a Month: You will attend class 2-3 times a month.
	+ 1-2 Times a Week: You will attend class 1-2 times a week.
	+ 3+ Times a Week: You will attend class 3 or more times a week.
	+ Daily: You will attend class daily.
* **Preferred Payment Method (20)** (`payment_preference`, select_one, \*): Select how you want to pay for the class.
	+ Class Pass: You want to pay for a class pass.
	+ Monthly Membership: You want to pay for a monthly membership.
	+ Pay Per Class: You want to pay per class.
	+ Annual Membership: You want to pay for an annual membership.
* **I Agree to the Liability Waiver (21)** (`waiver_acknowledgement`, select_one, \*): Select whether you agree to the class terms and conditions.
	+ I Agree: You agree to the class terms and conditions.
	+ I Do Not Agree: You do not agree to the class terms and conditions.
* **Medical Clearance from Doctor (if needed) (22)** (`health_clearance`, select_one, \*): If necessary, select whether you have medical clearance from your doctor.
	+ Not Needed: You do not need medical clearance.
	+ Yes, Have Clearance: You have medical clearance.
	+ No Clearance Yet: You do not have medical clearance yet.
* **Emergency Contact Name (23)** (`emergency_contact`, text, \*): Enter the name of your emergency contact.
* **Emergency Contact Phone (24)** (`emergency_contact_phone`, text, \*): Enter the phone number of your emergency contact.
* **Sign-Up Date (25)** (`signup_date`, date, \*): Enter the date you are signing up for the class.

## Tips

* Please complete the form carefully, ensuring accurate information is provided for your customized class schedule.
* If you are unsure about any field, feel free to ask a member of our team for assistance.
* We will follow up with you to confirm your class schedule once this form is completed.
