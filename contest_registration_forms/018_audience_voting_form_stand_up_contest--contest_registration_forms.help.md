<thinking>As an expert form designer and technical writer, I will create a comprehensive help guide for the Audience Voting Form Stand Up Contest. The purpose of this form is to collect information from individuals who want to register for the contest. This includes their contact details, performance information, and consent for recording and judging. To avoid duplicating efforts, please ensure you are only registered once. If you've already registered, do not attempt to re-register.</thinking>

# Audience Voting Form Stand Up Contest - Help Guide
## Purpose
The Audience Voting Form Stand Up Contest is a platform for individuals to register for the upcoming contest. It is used to collect information from contestants, including their contact details, performance information, and consent for recording and judging.

## How To Complete This Form
To complete this form, follow these steps:

1.  Ensure you have all the required information ready, such as your full legal name, email address, phone number, experience level, preferred set length, and content rating.
2.  Fill in your Stage Name, which is how you want to be introduced.
3.  Enter your Full Legal Name for payment and prize purposes.
4.  Provide your contact information, including Email Address and Phone Number.
5.  Specify your Comedy Style, e.g., Observational, Satire, Physical, Dry.
6.  Choose your Experience Level: Beginner (Under 1 year), Intermediate (1-3 years), or Professional (3+ years).
7.  Select your Preferred Set Length (Minutes): Usual sets are 5, 7, or 10 minutes.
8.  Choose the Content Rating of your set: PG - Clean, PG-13 - Moderate, or R - Adult content.
9.  Confirm you agree to be recorded for promotional purposes and have read the contest rules and judging criteria.

## Field-by-Field Explanation
* **Stage Name** (`contestant_stage_name`, text, required): Enter your stage name, which is how you want to be introduced.
* **Full Legal Name** (`legal_name`, text, required): Enter your full name for payment and prize purposes.
* **Email Address** (`contact_email`, email, required): Enter your email address for contact.
* **Phone Number** (`contact_phone`, text, required): Enter your phone number for contact.
* **Comedy Style** (`comedy_style`, text, optional): Select your comedy style, e.g., Observational, Satire, Physical, Dry.
* **Experience Level** (`experience_level`, select_one, required): Choose your experience level: Beginner (Under 1 year), Intermediate (1-3 years), or Professional (3+ years).
* **Preferred Set Length (Minutes)** (`set_length_requested`, number, required): Select the length of your usual sets (5, 7, or 10 minutes).
* **Content Rating** (`content_rating`, select_one, required): Select the content rating of your set: PG - Clean, PG-13 - Moderate, or R - Adult content.
* **Registration Date** (`registration_date`, date, required): Select the date you are registering for the contest.
* **I Agree** (`release_agreement`, select_one, required): Confirm you agree to be recorded for promotional purposes.
* **I have read the contest rules and judging criteria** (`rules_acknowledgment`, select_one, required): Confirm you have read the contest rules and judging criteria.
