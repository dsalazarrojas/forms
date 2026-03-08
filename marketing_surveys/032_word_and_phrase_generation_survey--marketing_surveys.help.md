<thinking>
This form is designed to collect information about the user's preferences and demographics for the purpose of providing personalized word and phrase generation services. The goal is to understand what type of word and phrase generation the user is interested in learning, how they prefer their output, and what their characteristics are as a user. This information will be used to tailor the generation process to their needs and interests.
</thinking>

# Word And Phrase Generation Survey - Help Guide
## Purpose
This survey aims to gather information about your preferences and demographics for the purpose of providing you with tailored word and phrase generation services.

## How To Complete This Form
1. Please select your preferred type of word generation from the options provided.
2. Choose how you prefer your words to be generated on the preference scale.
3. Select the number of words you would like to generate.
4. Select your preferred language for the word generation.
5. Select your gender.
6. Enter your age.
7. Choose your job role.
8. Select the size of the company you work for.
9. Select the type of work you do.
10. Choose the location where you work.
11. Select the industry you are in.
12. Select multiple job types you are familiar with.
13. Enter the number of years you have been in your industry.
14. Click the "Submit" button to complete the survey.

## Field-by-Field Explanation
* **What type of word generation would you like to learn?** (`word_generation`, select_one, required: false): This field asks you to select the type of word generation that interests you the most. You can choose from options like "Basic", "Intermediate", and "Advanced".
* **How do you prefer words to be generated?** (`preference_scale`, select_multiple, required: false): This field asks you to select how you prefer your words to be generated, on a scale of "None", "Basic", "Intermediate", and "Advanced".
* **How many words would you like to generate?** (`phrase_length`, select_one, required: false): This field asks you to select the number of words you would like to generate, from options like "1-10", "11-20", "21-50", and "51-100".
* **What is your preferred language to use in the word generation?** (`language`, select_one, required: false): This field asks you to select the language you prefer to use for the word generation, from options like "English", "Spanish", and "Mandarin".
* **What is your gender?** (`gender`, select_one, required: false): This field asks you to select your gender, from options like "Female", "Male", and "Other".
* **What is your age?** (`age`, number, required: false): This field asks you to enter your age.
* **What is your job role?** (`job_role`, select_multiple, required: false): This field asks you to select multiple job roles you are familiar with, from options like "Manager", "Developer", "Customer Service Representative", and others.
* **What is the company size?** (`company_size`, select_one, required: false): This field asks you to select the size of the company you work for, from options like "Less than 10", "10-50", "50-200", and "200 or more".
* **What kind of work do you do?** (`job_type`, select_multiple, required: false): This field asks you to select multiple types of work you do, from options like "Management", "Development", "Customer Service", and "Marketing".
* **Where do you work?** (`work_location`, select_one, required: false): This field asks you to select the location where you work, from options like "Office", "Home", and "Both".
* **What is your industry?** (`industry`, select_multiple, required: false): This field asks you to select multiple industries you are in, from options like "Healthcare", "Finance", and "Marketing".
* **What are your years in industry?** (`years_in_industry`, number, required: false): This field asks you to enter the number of years you have been in your industry.

Note: Please keep in mind that the required fields are actually not required, as all fields are set to be optional in the original YAML.
