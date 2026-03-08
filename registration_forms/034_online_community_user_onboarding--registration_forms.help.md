# online_community_user_onboarding - Help Guide
## Purpose
The "online_community_user_onboarding" form is a tool used to collect user information and preferences when joining an online community. This form helps to ensure that new members understand the community's rules, guidelines, and expectations, and that they are properly onboarded into the community.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your **Member Details** (Page 1).
	* Fill in the required information about yourself.
2. Review and agree to the **Community Guideline Agreement** (Page 2).
	* Choose all applicable options from the list.
3. Choose the type of **Onboarding** you prefer (Page 3).
	* Select the method for being onboarded into the community.
4. Enter the **Onboarding Date** and **Onboarding Time** (Page 4).
	* Fill in the date and time you wish to be onboarded.
5. Add any **Onboarding Comments** (Page 5).
	* Enter any additional comments or information about your onboarding.
6. Select the type of **Community** you are joining (Page 6).
	* Choose the type of community that best fits your needs.

## Field-by-Field Explanation

* **Member Details (Page 1)** (`member_details`, `text`, required: false)
	+ Enter your name, email address, and any other relevant information about yourself.
* **Community Guideline Agreement (Page 2)** (`community_guideline_agreement`, `select_multiple`, required: false)
	+ Choose all options from the list that reflect the community guidelines you understand and agree to follow.
* **Onboarding Choice (Page 3)** (`onboarding_choice`, `select_multiple`, required: false)
	+ Select one or more options for the onboarding method that suits you best.
* **Onboarding Date (Page 4)** (`onboarding_date`, `date`, required: false)
	+ Enter the date you wish to be onboarded into the community.
* **Onboarding Time (Page 4)** (`onboarding_time`, `time`, required: false)
	+ Enter the time you wish to be onboarded into the community.
* **Onboarding Comments (Page 5)** (`onboarding_comments`, `note`, required: false)
	+ Add any comments or information about your onboarding.
* **Community Type (Page 6)** (`community_type`, `select_one`, required: false)
	+ Choose the type of community that best fits your needs.
