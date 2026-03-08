<thinking>As an expert form designer and technical writer, I'm thinking about how to help users understand the purpose and use of the "Lighting Control Preferences" form. The form is intended to gather information about the lighting control preferences of facilities, which will be used to inform decisions related to lighting control systems and automation. This form is likely to be used by project leads or facility managers to provide input on their lighting control needs and preferences for a project or facility. The form's purpose is to ensure that the lighting control system is designed and implemented according to the specific needs of the facility, taking into account its unique location and requirements.</thinking>

# Lighting Control Preferences - Help Guide
## Purpose
This form is used to capture lighting control preferences for a facility. Project leads and facility managers will fill out this form to provide input on their lighting control needs and automation requirements.
## How To Complete This Form
- Read the form carefully and ensure you have an understanding of each field's purpose.
- Fill out the form with the relevant information for your project or facility.
- Make sure to answer each field truthfully, as the information provided will inform the design and implementation of the lighting control system.

## Field-by-Field Explanation
* **Project Lead** (`project_lead`, text, optional): Enter your name and contact information to receive updates on this project.
* **Project Name** (`project_name`, text, optional): Enter the name of the project or facility.
* **Facility Location** (`facility_location`, text, optional): Provide the location of the facility, which will be taken into account when designing the lighting control system.
* **Lighting Control Needs** (`lighting_control_needs`, select_multiple, optional): Select all the lighting control needs that apply to your project or facility. Options include:
	+ Needs Assessment: You require a comprehensive assessment of your lighting control needs.
	+ Commissioning: You need assistance with commissioning the lighting control system.
	+ Training: You require training on the use and maintenance of the lighting control system.
	+ Other (please specify): Select this option if none of the above apply, and provide a brief explanation in the `lighting_control_needs_other` field.
* **Automation Preferences** (`automation_preferences`, select_one, optional): Indicate your preference for automation in the lighting control system. Options are:
	+ True: You prefer to have the lighting control system automated.
	+ False: You do not prefer to have the lighting control system automated.
* **Automation Level** (`automation_level`, number, optional): If you prefer automation, select the level of automation you require. This field is not applicable if you do not prefer automation.
* **Automation Type** (`automation_type`, select_one, optional): If you prefer automation, select the type of automation you require. Options are:
	+ Smart: You require smart automation.
	+ Wireless: You require wireless automation.
	+ Wired: You require wired automation.
* **Lighting Control System** (`lighting_control_system`, select_one, optional): Select the type of lighting control system you prefer. Options are:
	+ Philips: You require a Philips lighting control system.
	+ Osram: You require an Osram lighting control system.
	+ Other (please specify): Select this option if none of the above apply, and provide a brief explanation in the `lighting_control_system_other` field.
* **Other Lighting Control System** (`lighting_control_system_other`, text, optional): If you select "Other" in the above field, provide a brief explanation of the type of lighting control system you require.
* **Facility Equipment** (`facility_equipment`, select_multiple, optional): Select all the facility equipment you have or will have in the facility. Options include:
	+ Lighting Panels: You have or will have lighting panels.
	+ Dimmers: You have or will have dimmers.
	+ Ballasts: You have or will have ballasts.
	+ Other (please specify): Select this option if none of the above apply, and provide a brief explanation in the `facility_equipment_other` field.
* **Other Facility Equipment** (`facility_equipment_other`, text, optional): If you select "Other" in the above field, provide a brief explanation of the facility equipment you have or will have.
* **Control System Integration** (`control_system_integration`, select_multiple, optional): Select all the control system integration you require. Options include:
	+ Lighting Control System: You require integration with a lighting control system.
	+ Automation System: You require integration with an automation system.
	+ Other (please specify): Select this option if none of the above apply, and provide a brief explanation in the `control_system_integration_other` field.
* **Other Control System Integration** (`control_system_integration_other`, text, optional): If you select "Other" in the above field, provide a brief explanation of the control system integration you require.
* **Automation Scheduling** (`automation_scheduling`, select_multiple, optional): Select all the automation scheduling you require. Options include:
	+ Realtime: You require real-time automation.
	+ Timed: You require timed automation.
	+ Scheduled: You require scheduled automation.
	+ Other (please specify): Select this option if none of the above apply, and provide a brief explanation in the `automation_scheduling_other` field.
* **Other Automation Scheduling** (`automation_scheduling_other`, text, optional): If you select "Other" in the above field, provide a brief explanation of the automation scheduling you require.

## Tips
* Be as specific as possible when filling out this form, as the information provided will inform the design and implementation of the lighting control system.
* If you are unsure about any field, ask for clarification or guidance.
* Review and revise your answers carefully before submitting the form.
