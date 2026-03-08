DevOps Phase Details Form - Help Guide
=====================================

### Purpose
The DevOps Phase Details Form is designed to gather information about a specific phase of your DevOps process. This form helps to standardize and document phase-related data, ensuring consistency and accuracy across teams and projects.

### How To Complete This Form
To complete this form, follow these steps:

1. Fill in the `Phase Name` field with a concise and descriptive name for the phase you are working on.
2. Select a valid `Start Date` and `End Date` for the phase, using the date picker or entering a date in the format `YYYY-MM-DD`.
3. Indicate whether your team participates in `Team Rituals` and `Resource Management`, choosing the relevant option from the dropdown menu.
4. Provide any relevant information about the `Resources` and `Key Tools` used during the phase in the text fields.
5. Optionally, add `Phase Notes` and `Resource Notes` to provide additional context and details about the phase.

### Field-by-Field Explanation

* **Phase Name** (`phase_name`, text, required): Enter a concise and descriptive name for the phase you are working on. For example, "DevOps Phase 1: Setup and Configuration".
* **Start Date** (`phase_start_date`, date, required): Select the start date of the phase using the date picker or enter a date in the format `YYYY-MM-DD`, e.g., "2022-01-01".
* **End Date** (`phase_end_date`, date, required): Select the end date of the phase using the date picker or enter a date in the format `YYYY-MM-DD`, e.g., "2022-01-31".
* **Team Rituals** (`team_rituals`, select_one, optional): Choose one of the options to indicate whether your team participates in team rituals during this phase.
* **Resources** (`resources`, text, optional): Provide a list of resources used during this phase, e.g., "Servers, Databases, Network switches".
* **Key Tools** (`key_tools`, text, optional): Enter the key tools used during this phase, e.g., "Ansible, Jenkins, Docker".
* **Resource Management** (`resource_management`, select_one, optional): Choose one of the options to indicate whether your team manages resources during this phase.
* **Phase Notes** (`phase_notes`, note, optional): Add any additional notes or comments about the phase, e.g., "Phase 1 was a success, but we encountered some issues with the database."
* **Resource Notes** (`resource_notes`, note, optional): Add any additional notes or comments about the resources used during this phase, e.g., "We had some difficulties with the network switches."
