# Social Media Survey - Help Guide
## Purpose
This guide is meant to help you understand the purpose and structure of the Social Media Survey form. The form is designed to collect detailed information about your social media habits, demographics, and online behavior to help researchers understand user preferences and behavior.

## How To Complete This Form
To complete this form, follow these steps:

1. Choose your category of interest from the "Category" section.
2. Provide a brief description of your interest in the "Description" field.
3. Select your preferred social media channel from the "What are you trying to learn about?" section.
4. Enter your email address, phone number, and date of birth in the relevant fields.
5. Choose your age range and gender from the respective sections.
6. Select your country of residence from the list of available options.
7. Choose the social media channels you use from the "Social Media Channels" section.
8. Describe your marketing strategy and approximate marketing budget in the "Marketing Strategy" and "Marketing Budget" fields.
9. Select how often you post on social media and how long you have been active on it.
10. Explain why you participate in social media in the "Why do you participate in social media?" field.
11. Choose your primary device and browser from the respective sections.
12. Select your operating system from the list of options.

## Field-by-Field Explanation

* **Category** (`category`, `select_one`, required: false): Select the category of interest from the provided options.
* **Description** (`description`, `text`, required: false): Provide a brief description of your interest in the selected category.
* **What are you trying to learn about?** (`category`, `select_one`, required: false): Select the social media channel you are most interested in learning about.
* **Email Address** (`email_address`, `email`, required: false): Enter your email address for contact purposes.
* **Phone Number** (`phone_number`, `text`, required: false): Enter your phone number for contact purposes.
* **Date of Birth** (`date_of_birth`, `date`, required: false): Enter your date of birth for demographic purposes.
* **Time of Day** (`time_of_day`, `time`, required: false): This field is likely meant to understand your time of active use on social media. However, this field has a limited range of options and may not be clear in its intent. Select the time of day that best describes when you are most active on social media.
* **Age Range** (`age_range`, `select_one`, required: false): Select your age range from the provided options.
* **Gender** (`gender`, `select_one`, required: false): Select your gender from the available options.
* **Country of Residence** (`country_of_residence`, `select_one`, required: false): Select your country of residence from the list of options.
* **Social Media Channels** (`social_media_channels`, `select_multiple`, required: false): Choose the social media channels you are most active on.
* **Marketing Strategy** (`marketing_strategy`, `text`, required: false): Describe your current marketing strategy in the provided text field.
* **Marketing Budget** (`marketing_budget`, `number`, required: false): Enter an approximate budget range for your marketing efforts.
* **How often do you post on social media?** (`frequency`, `select_one`, required: false): Select how often you post on social media from the given options.
* **How long have you been active on social media?** (`duration`, `select_one`, required: false): Select the length of time you have been active on social media from the options.
* **Why do you participate in social media?** (`reasons_for_participation`, `text`, required: false): Explain why you participate in social media in the provided text field.
* **Primary Device** (`primary_device`, `select_one`, required: false): Select the device you primarily use to access social media.
* **Browser** (`browser`, `select_one`, required: false): Choose your primary browser from the list of options.
* **Operating System** (`operating_system`, `select_one`, required: false): Select your operating system from the provided options.
