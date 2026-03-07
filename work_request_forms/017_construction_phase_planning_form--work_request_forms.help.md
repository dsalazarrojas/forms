<thinking>
To create a user-facing help guide for the "Construction Phase Planning Form", I need to understand the purpose and requirements of this form. From the provided YAML, it appears that this form is used for construction project planning, specifically for the planning phase of a construction project. The form seems to gather information on various aspects such as project identification, resource and labor planning, material logistics, risk management, and coordination and communication.

The purpose of this form is likely to ensure that all necessary information is collected and documented for a thorough construction phase planning process. This includes identifying the project phase, gathering data on required resources and materials, planning for logistics and risk mitigation, and coordinating and communicating with stakeholders. The form seems to be required for the submission of this information, indicated by the "required: true" attribute for multiple fields.

Before creating the guide, I need to clarify some points:

*   The form seems to have two "section" fields with "note" type, which implies that they are more like headings or sections, rather than fields that need to be completed.
*   The "options" attribute is not consistently used across the form, some fields have options, while others do not. I will assume that the options are used to limit the input to the user, but it's not clear what happens when the user selects an option.
*   The "required: true" attribute is applied to multiple fields, but it's not clear if these fields are required for all types of projects or if there are specific requirements for certain types of projects.
*   The form seems to be missing some information on how to complete it, for example, there is no clear indication on how to format dates or what the format of the submission date should be.

</thinking>

# Construction Phase Planning Form - Help Guide
## Purpose
The Construction Phase Planning Form is used to gather and document the necessary information for the planning phase of a construction project. This includes project identification, resource and labor planning, material logistics, risk management, and coordination and communication.

## How To Complete This Form
1.  Start by selecting the project phase from the options provided. This will help in understanding the specific requirements and challenges of the project.
2.  Enter the name of the project.
3.  Provide the estimated start and completion dates for the project phase.
4.  List the required trades for this phase (e.g., Excavation, Concrete/Masonry, etc.) 
5.  Enter the estimated average daily worker count for all trades on site.
6.  Specify major equipment required for the phase.
7.  For risk and safety planning, identify the primary hazard for the phase and describe the specific measures to be taken for mitigation.
8.  Schedule coordination and communication meetings as necessary for the phase, taking into account the options provided (e.g., daily, weekly, etc.)
9.  If any additional planning considerations are necessary, provide them in the additional planning considerations field.
10. Enter the name of the planning officer/manager responsible for this phase.
11. Specify the date of submission for this phase.

## Field-by-Field Explanation
*   **Project Name** (project_name, text, required): Enter the name of the project.
*   **Planning Phase** (current_phase, select_one, required): Select the phase of the project from the options provided.
*   **Estimated Phase Start Date** (phase_start_date, date, required): Enter the estimated start date of the project phase in the format mm/dd/yyyy.
*   **Estimated Phase Completion Date** (phase_end_date, date, required): Enter the estimated completion date of the project phase in the format mm/dd/yyyy.
*   **Required Trades for this Phase** (required_trades_checklist, select_multiple, required): List all required trades for this phase (e.g., Excavation, Concrete/Masonry, etc.).
*   **Estimated Average Daily Worker Count** (labor_count_estimate, number, required): Enter the estimated average daily worker count for all trades on site.
*   **Major Equipment Required** (equipment_needs_summary, text, required): Specify major equipment required for this phase.
*   **Primary Hazard for this Phase** (primary_safety_hazard, select_one, required): Select the primary hazard for this phase from the options provided.
*   **Specific Hazard Mitigation Measures** (hazard_mitigation_plan, text, required): Describe the specific measures to be taken for hazard mitigation.
*   **Coordination Meeting Frequency** (coordination_meeting_freq, select_one, required): Schedule coordination and communication meetings as necessary for this phase.
*   **Additional Planning Considerations** (additional_planning_notes, text, required): If any additional planning considerations are necessary, enter them here.
*   **Name of Planning Officer/Manager** (planning_officer_name, text, required): Enter the name of the planning officer/manager responsible for this phase.
*   **Date of Submission** (submission_date, date, required): Enter the date of submission for this phase in the format mm/dd/yyyy.

Note that the guide is based on the provided information and has been created with the assumption that the "options" attribute in the YAML file are for limiting user input. If the actual purpose or requirement of these options differs, the guide will need to be updated accordingly.
