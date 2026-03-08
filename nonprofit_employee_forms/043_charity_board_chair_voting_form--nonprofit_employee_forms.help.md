# Charity Board Chair Voting Form - Help Guide
## Purpose
The purpose of this form is to collect votes for the board chair position from eligible members of the organization. This form ensures that each voter's identity and role within the organization are verified before casting their vote.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required information for each field.
2. Ensure that you meet the eligibility requirements by confirming that you are eligible to vote.

## Field-by-Field Explanation

* **-- Board Chair Voting --** (`header`, `note`, required: false)
	+ This is an informational heading for the form.
* **voter name** (`voter_name`, `text`, required: true)
	+ Please enter your name as it appears on your membership or ID card.
* **voter email** (`voter_email`, `email`, required: true)
	+ Enter your email address used to confirm your identity.
* **voter role** (`voter_role`, `select_one`, required: true)
	+ Select your role within the organization (Board member, Staff, Volunteer, or Other).
* **candidate choice** (`candidate_choice`, `select_one`, required: true)
	+ Select one of the candidates running for board chair.
* **proxy vote** (`proxy_vote`, `select_one`, required: false)
	+ If you are voting by proxy for another member, select "True".
* **eligibility confirmed** (`eligibility_confirmed`, `select_one`, required: true)
	+ Confirm that you meet the voting eligibility requirements.
* **comments** (`comments`, `text`, required: false)
	+ If desired, provide optional comments about your candidate choice.
* **signature name** (`signature`, `text`, required: true)
	+ Sign your name to confirm your vote.
* **submission date** (`submission_date`, `date`, required: true)
	+ The date you submitted your vote.
* **proxy vote** (`proxy_vote`, `select_one`, required: false)
	+ If you are voting by proxy for another member, select "True" or "False" accordingly.
