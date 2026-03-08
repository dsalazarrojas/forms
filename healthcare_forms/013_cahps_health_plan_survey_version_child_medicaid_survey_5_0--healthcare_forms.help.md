<figure>
  <thinking> 
  Before creating content for this help guide, I'll ensure it adheres to the provided YAML structure. I will provide a clear and concise explanation for each field, following the specified structure and guidelines.
  </thinking>
  # CAHPS Health Plan Survey - Child Medicaid 5.0 - Help Guide
  ## Purpose
  The CAHPS Health Plan Survey - Child Medicaid 5.0 is designed to gather information from parents or guardians about their child's experience with their health insurance plan. This survey aims to help health plans identify areas for improvement in customer satisfaction, care coordination, and overall quality of care.
  ## How To Complete This Form
  To complete this form, please follow these steps:
  1. Provide your full name and relationship to the child as the parent or guardian.
  2. Enter the child's age in years.
  3. Answer questions about your child's experience with their health plan, including ease of access to primary care doctors, specialists, customer service, and care coordination.
  4. Rate your child's overall health and the health plan's performance in several areas, such as dental benefits, plan information clarity, and overall satisfaction.
  5. Add any additional comments or feedback about your child's health plan experience.
  6. Finally, date and time of form completion.

  ## Field-by-Field Explanation
  * **Your Full Name** (`respondent_name`, `text`, required): Enter your full name as the parent or guardian.
  * **Age of the child covered by the plan** (`child_age`, `number`, required): Enter the age of the child in years.
  * **Relationship to the child** (`relationship_to_child`, `select_one`, required): Choose your relationship to the child (Mother, Father, Legal Guardian, or Other).
  * **How often was it easy to get an appointment for your child with a primary care doctor?** (`access_to_pediatrician`, `select_one`, required): Choose how often you found it easy to get an appointment for your child with a primary care doctor (Never, Sometimes, Usually, Always).
  * **How often was it easy to get appointments for your child with specialists?** (`pediatric_specialist_access`, `select_one`, required): Choose how often you found it easy to get appointments for your child with specialists (Never, Sometimes, Usually, Always).
  * **How often did customer service staff show respect for what you had to say?** (`plan_customer_service_child`, `select_one`, required): Choose how often you found customer service staff showing respect for your concerns (Never, Sometimes, Usually, Always).
  * **How often did your child's health plan help you coordinate care?** (`care_coordination_child`, `select_one`, optional): If you have experience with care coordination, choose how often the plan's help was useful (Never, Sometimes, Usually, Always). If not, please answer 'Not Applicable'.
  * **How would you rate your child's dental benefits in this plan?** (`dental_benefits_rating`, `select_one`, required): Rate your child's dental benefits as Poor, Fair, Good, Very Good, Excellent, or Not Covered.
  * **How easy was it to find information about which doctors are in the plan?** (`plan_info_clarity_parent`, `select_one`, required): Choose how easy or difficult it was to find information about which doctors are in the plan (Very Difficult, Difficult, Easy, Very Easy).
  * **In general, how would you rate your child's overall health?** (`child_health_rating`, `select_one`, required): Rate your child's overall health as Poor, Fair, Good, Very Good, or Excellent.
  * **Overall rating of your child's health plan** (`child_plan_rating`, `select_one`, required): Rate your child's health plan as 0 (worst) to 10 (best).
  * **Any additional comments about your child's health plan?** (`additional_comments_parent`, `text`, optional): Provide any additional comments or feedback about your child's health plan experience.
  * **Today's Date** (`survey_completion_date`, `date`, required): Please fill in the date and time of form completion in standard date format (YYYY-MM-DD).
