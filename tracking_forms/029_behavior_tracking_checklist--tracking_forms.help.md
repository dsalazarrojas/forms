<thinking>

To create a comprehensive guide for the "Behavior Tracking Checklist" form, let's first clarify its purpose: this form is designed to track and document observations of student behavior in educational settings. It's intended to help educators collect data on student behavior, identify areas of strength and weakness, and inform instruction to support student learning and development.

Before creating the guide, let's ensure that we cover all the necessary fields and avoid duplication of information. Based on the provided YAML, the form consists of two main sections: Student Data (fields 1-4) and Behavior Observation (fields 5-24).

</thinking>

# Behavior Tracking Checklist - Help Guide
## Purpose
The Behavior Tracking Checklist is designed to track and document observations of student behavior in educational settings. It helps educators collect data on student behavior, identify areas of strength and weakness, and inform instruction to support student learning and development.

## How To Complete This Form
1. **Student Data**: Answer the first four fields (Student Name, Student ID, Grade Level, and Observer Name) to provide basic student information. If applicable, enter the Student ID.
2. **Observation Details**: Enter the date and time of the observation, the setting where it took place, and the type of activity the student was engaged in.
3. **Behavior Observations**: Use the select_one and select_multiple fields to rate the student's behavior during the observation, such as On-Task Behavior, Following Directions, Raising Hand Before Speaking, Staying in Assigned Seat, and so on. Select all applicable options for Disruptive Behavior and Positive Behavior Observed.
4. **Additional Notes**: Enter any additional comments or observations, including antecedent events (happening before notable behaviors), consequence events (happening after notable behaviors), and follow-up actions needed.

## Field-by-Field Explanation

* **Student Name (Field 1)** (`student_name`, text, required): Enter the full name of the student being observed.
* **Student ID (Field 2)** (`student_id`, text, optional): If applicable, enter the student's ID number.
* **Grade Level (Field 3)** (`grade_level`, select_one, required): Select the current grade level of the student.
* **Observer Name (Field 4)** (`observer_name`, text, required): Enter the name of the person observing the student.
* **Observation Date (Field 5)** (`observation_date`, date, required): Enter the date of the observation.
* **Session Time (Field 6)** (`session_time`, time, required): Enter the time of the observation.
* **Setting (Field 7)** (`setting`, select_one, required): Select the location where the observation took place.
* **Activity Type (Field 8)** (`activity_type`, select_one, required): Select the type of activity the student was engaged in during the observation.
* **On-Task Behavior (Field 9)** (`on_task`, select_one, required): Rate the student's on-task behavior during the observation.
* **Following Directions (Field 10)** (`following_directions`, select_one, required): Rate the student's ability to follow directions.
* **Raising Hand Before Speaking (Field 11)** (`raising_hand`, select_one, required): Rate the student's behavior when speaking.
* **Staying in Assigned Seat (Field 12)** (`staying_seated`, select_one, required): Rate the student's ability to stay in their assigned seat.
* **Respectful to Others (Field 13)** (`respectful_behavior`, select_one, required): Rate the student's respectful behavior to peers and adults.
* **Completing Assigned Work (Field 14)** (`completing_work`, select_one, required): Rate the student's completion of assigned work.
* **Disruptive Behavior (Field 15)** (`disruptive_behavior`, select_multiple, required): Select all applicable disruptive behaviors observed.
* **Positive Behavior (Field 16)** (`positive_behavior`, select_multiple, required): Select all observed positive behaviors.
* **Prompts or Redirections Needed (Field 17)** (`prompts_needed`, select_one, required): Rate the number of adult prompts or redirections needed.
* **Type of Prompts Used (Field 18)** (`prompt_type`, select_multiple, optional): Select all applicable types of prompts or redirections used.
* **Peer Interactions (Field 19)** (`peer_interactions`, select_one, required): Rate the student's interactions with peers.
* **Adult Support Provided (Field 20)** (`adult_support`, select_one, required): Rate the level of adult support provided to the student.
* **Antecedent Events (Field 21)** (`antecedent_events`, text, optional): Enter any events that happened before notable behaviors.
* **Consequence Events (Field 22)** (`consequence_events`, text, optional): Enter any events that happened after notable behaviors.
* **Additional Notes (Field 23)** (`additional_notes`, text, optional): Enter any additional comments or observations.
* **Follow-Up Actions Needed (Field 24)** (`follow_up_actions`, text, optional): Enter any follow-up actions needed.

## Tips

* Use the provided options for select_one and select_multiple fields carefully to ensure accurate ratings.
* Provide specific dates and times for observations to ensure accurate records.
* Take notes on antecedent and consequence events to better understand the context of the observation.
* Use additional notes to record any other important details that may not be captured by the other fields.
* Consider consulting with colleagues or supervisors to ensure consistent and fair evaluations.
