<thinking>
The internal reasoning block is here to help clarify the purpose and requirements of the form. This form is designed to gather information about cleaning services provided to clients. To prevent duplication of data and ensure consistency, it is recommended that each client has only one entry in the database. This form is meant for documenting the details of each cleaning service, including the date it was provided, the service address, client name, crew leader, and a comprehensive checklist of tasks completed during the service. The checklist covers vacuuming, mopping, dusting, bathroom cleaning, kitchen cleaning, window cleaning, mirror cleaning, trash removal, bedroom cleaning, living area cleaning, restocking of supplies, and any special tasks requested by the client. The final section is for client feedback and quality assurance.
</thinking>

# Cleaning Service Checklist - Help Guide

## Purpose
This guide will walk you through the completion of the Cleaning Service Checklist form, ensuring you understand each field and how to fill it out correctly.

## How To Complete This Form
- Ensure you have all required information ready before starting the form.
- Fill in the Service Date field with the date the cleaning service was provided.
- Enter the Property Address in the Service Address field.
- Enter the Client Name as requested.
- Identify the Cleaning Crew Leader in the corresponding field.
- Select the completion status for each task listed in the checklist, using the options provided.
- In the Special Tasks section, describe any specific tasks requested by the client.
- For the client's overall satisfaction, select the appropriate option for "Is the client satisfied with the service?"
- Record any client feedback or comments in the Client Feedback or Complaints field.
- Check off any issues or damages reported during the service.
- Set the Service Completion Time, ensuring accuracy.
- If follow-up is required, select the corresponding option.

## Field-by-Field Explanation

* **Service Date** (`service_date`, date, required): Enter the date the cleaning service was provided.
* **Property Address** (`service_address`, text, required): Enter the address of the property cleaned.
* **Client Name** (`client_name`, text, required): Enter the name of the property owner as requested.
* **Cleaning Crew Leader** (`crew_leader`, text, required): Identify the supervisor who led the cleaning crew.
* **Vacuuming and Sweeping** (`task_vacuuming`, select_one, required): Select how the vacuuming and sweeping task was completed (Complete, Partial, Not Done).
* **Mopping and Floor Cleaning** (`task_mopping`, select_one, required): Select the status of mopping and floor cleaning (Complete, Partial, Not Done).
* **Dusting Surfaces and Furniture** (`task_dusting`, select_one, required): Select the status of dusting (Complete, Partial, Not Done).
* **Bathroom Cleaning and Sanitizing** (`task_bathroom`, select_one, required): Select the status of bathroom cleaning and sanitizing (Complete, Partial, Not Done).
* **Kitchen Cleaning and Sanitizing** (`task_kitchen`, select_one, required): Select the status of kitchen cleaning and sanitizing (Complete, Partial, Not Done).
* **Window and Glass Cleaning** (`task_windows`, select_one, required): Select the status of window and glass cleaning (Complete, Partial, Not Done).
* **Mirror Cleaning** (`task_mirrors`, select_one, required): Select the status of mirror cleaning (Complete, Partial, Not Done).
* **Trash Removal and Replacement** (`task_trash`, select_one, required): Select the status of trash removal and replacement (Complete, Partial, Not Done).
* **Bedroom Cleaning** (`task_bedrooms`, select_one, required): Select the status of bedroom cleaning (Complete, Partial, Not Done).
* **Living Area and Common Space Cleaning** (`task_living_areas`, select_one, required): Select the status of living area and common space cleaning (Complete, Partial, Not Done).
* **Restocking Supplies** (`task_supplies`, select_one, required): Select the status of restocking supplies (Complete, Partial, Not Done).
* **Special Tasks** (`special_task_1`, text, optional): Describe any special tasks requested by the client.
* **Special Task 1 - Completed** (`special_task_1_completed`, select_one, optional): Check if the special task was completed.
* **Special Task 2** (`special_task_2`, text, optional): Describe any other special tasks requested.
* **Special Task 2 - Completed** (`special_task_2_completed`, select_one, optional): Check if the special task was completed.
* **Overall Quality of Work** (`overall_quality`, select_one, required): Select the quality of work done (Excellence, Very Good, Good, Fair, Poor).
* **Quality Inspection Notes** (`inspection_notes`, text, optional): Note any areas where improvement is needed.
* **Is the client satisfied with the service?** (`client_satisfied`, select_one, required): Select the level of the client's satisfaction (Very Satisfied, Satisfied, Neutral, Dissatisfied, Very Dissatisfied).
* **Client Feedback or Complaints** (`client_feedback`, text, optional): Record any comments or complaints from the client.
* **Client Signature/Approval Received** (`client_signature_received`, select_one, required): Check if the client signed and approved the service.
* **Any Issues or Damages Reported** (`issues_or_damages`, text, optional): Record any issues or damages reported during the service.
* **Follow-up Required** (`follow_up_required`, select_one, required): Determine if a follow-up visit is necessary.
* **Service Completion Time** (`completion_time`, time, required): Enter the time the service was completed.
