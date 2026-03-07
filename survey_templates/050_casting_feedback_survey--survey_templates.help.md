<thinking>As a user-facing help guide, we need to make sure the end-user understands the purpose and functionality of the form, so let's assume this form is being used by casting directors, producers, or other production staff to gather feedback on auditions. We should also check if this form has been created to avoid duplication, especially considering it's an AI-generated form. Lastly, we'll aim to make this form as user-friendly as possible.</thinking>

# Casting Feedback Survey - Help Guide
## Purpose
This form is designed for casting directors, producers, or other production staff to gather feedback on auditions. It helps them to evaluate a performer's professionalism, acting ability, fit for the requested role, and other essential qualities.

## How To Complete This Form
1. Fill in the required information:
	* Survey Date: Enter the date of the audition.
	* Audition Date: Enter the date of the audition.
	* Production Title: Enter the name of the production (film, show, or project).
	* Performer Name: Enter the name of the performer.
	* Role Auditioned For: Enter the role the performer auditioned for.
2. Evaluate the performer's qualities:
	* Professional Presentation and Appearance: Choose how well the performer presented themselves.
	* Acting Ability and Performance: Evaluate the performer's acting skills.
	* Fit for Requested Role: Choose how well the performer fit the character.
	* Ability to Take Direction: Rate the performer's response to feedback.
	* Range and Versatility: Assess the performer's emotional range.
3. Provide feedback on the performer's personality and collaboration:
	* Professionalism and Demeanor: Evaluate the performer's attitude and behavior.
	* Punctuality and Preparedness: Rate the performer's arrival time and material preparation.
	* Collaboration and Team Potential: Assess the performer's ability to work with others.
4. Make a casting decision:
	* Casting Recommendation: Choose the performer's standing in the casting process.
	* Would you recommend for callback: Decide if the performer should be called back.
5. Optionally, provide additional feedback:
	* Key Strengths Observed: Note any positive attributes of the performer.
	* Areas for Development: Suggest areas where the performer can improve.
	* General Comments or Notes: Share any other observations or comments.

## Field-by-Field Explanation
* **Survey Date** (`survey_date`, `date`, required): Enter the date of the audition.
* **Audition Date** (`audition_date`, `date`, required): Enter the date of the audition.
* **Production Title** (`production_title`, `text`, required): Enter the name of the production (film, show, or project).
* **Performer Name** (`performer_name`, `text`, required): Enter the name of the performer.
* **Role Auditioned For** (`role_auditioned`, `text`, required): Enter the role the performer auditioned for.
* **Professional Presentation and Appearance** (`professional_presentation`, `select_one`, required): Evaluate the performer's presentation and overall appearance.
* **Acting Ability and Performance** (`acting_ability`, `select_one`, required): Assess the performer's acting skills.
* **Fit for Requested Role** (`character_fit`, `select_one`, required): Choose how well the performer fit the character.
* **Ability to Take Direction** (`direction_following`, `select_one`, required): Rate the performer's response to feedback.
* **Range and Versatility** (`range_versatility`, `select_one`, required): Assess the performer's emotional range and versatility.
* **Professionalism and Demeanor** (`professionalism`, `select_one`, required): Evaluate the performer's attitude and behavior.
* **Punctuality and Preparedness** (`punctuality`, `select_one`, required): Rate the performer's arrival time and material preparation.
* **Collaboration and Team Potential** (`collaboration_potential`, `select_one`, required): Assess the performer's ability to work with others.
* **Casting Recommendation** (`casting_recommendation`, `select_one`, required): Choose the performer's standing in the casting process.
* **Would you recommend for callback?** (`callback_interest`, `select_one`, required): Decide if the performer should be called back.
* **Suitable for Alternative Roles?** (`alternative_roles`, `text`, required): Note any other characters the performer could play.
* **Key Strengths Observed** (`strengths`, `text`, optional): Note any positive attributes of the performer.
* **Areas for Development** (`development_areas`, `text`, optional): Suggest areas where the performer can improve.
* **General Comments or Notes** (`general_comments`, `text`, optional): Share any other observations or comments.
