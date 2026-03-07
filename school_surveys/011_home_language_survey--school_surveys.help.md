<thinking>
This form is meant to collect data about the language proficiency of a student, including their mother tongue, father's language, and other related information from their family background. To avoid duplication and ensure accuracy, please review the fields carefully before submitting the form. Ensure you have all necessary information before starting, and try to fill in the form in one session to minimize errors. If you are unsure about any field, please refer to the explanations below.
</thinking>

# Home Language Survey - Help Guide
## Purpose
This form is designed to collect information about your language background, including your mother tongue and language proficiency. Please answer the questions accurately to help us better understand your language situation.

## How To Complete This Form
1. Review the form carefully before starting to ensure you have all necessary information.
2. Fill in the form one page at a time, as each page is a separate section.
3. Use the options provided in the select fields to choose your answers.
4. Leave any required fields blank if you are unsure or unable to answer.
5. Use the "Home language survey comments" and "Home language survey additional comments" fields for any additional information or explanations.

## Field-by-Field Explanation

* **Student Language Proficiency** (`student_language_proficiency`, `text`, required/optional): This field is where you can provide a brief description of your language proficiency in a specific language.
* **Mother Tongue** (`mother_tongue`, `select_one`, required): This field asks whether you speak your mother tongue as your primary language. Please select "Yes" if you do, and "No" if you do not.
* **Family Background** (`family_background`, `text`, optional): This field is for any additional information about your family background that may be relevant to your language proficiency.
* **Language Proficiency Scale** (`language_proficiency_scale`, `select_multiple`, required): This field asks you to select all languages that you are proficient in, using the provided options.
* **Mother Language** (`mother_language`, `select_one`, required): This field asks whether your mother speaks the same language as you. Please select "Yes" if your mother speaks the same language as you, and "No" if she does not.
* **Father Language** (`father_language`, `select_one`, required): This field asks whether your father speaks the same language as you. Please select "Yes" if your father speaks the same language as you, and "No" if he does not.
* **Siblings Languages** (`siblings_languages`, `select_multiple`, optional): This field is for selecting all languages spoken by your siblings. You can choose multiple languages.
* **Parents Languages** (`parents_languages`, `select_multiple`, required): This field asks you to select all languages spoken by your parents. Please select all languages that apply.
* **Home Language Survey Comments** (`home_language_survey_comments`, `note`, optional): This is an open-ended field where you can provide any additional comments or information about your language background.
* **Home Language Survey Additional Comments** (`home_language_survey_additional_comments`, `note`, optional): This field is for any further information or explanations you may have about your language background.
* **Student Language Proficiency Scale** (this field is actually the same as `language_proficiency_scale`): This field is not actually present in the yaml form, but I assume it was a mistake in the yaml file. Please disregard.
