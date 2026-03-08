# Fire Investigation Report Form - Help Guide
## Purpose
The Fire Investigation Report Form is used to gather detailed information about a fire incident, including the date and time, location, cause, and response details.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter the date and time of the fire incident in the **Investigation Date** field.
2.  Enter your name and title in the **Investigator** field.
3.  Provide the location of the fire incident in the **Location** field.
4.  Select the **Cause of Fire** from the available options, which include Arson, Accident, Electrical, or Other.
5.  If you have used a fire extinguishing agent, choose the **Fire Extinguishing Agent** option from the list and select the correct type and size from the provided text fields.
6.  If the fire extinguishing agent was not used, select the corresponding option for **Fire Extinguishing Agent Not Used**.
7.  In the **Fire Investigation Report Form Comments** field, provide any additional comments or details about the fire incident.

## Field-by-Field Explanation
- **Investigation Date (id: 1)**:
  - **type: date**
  - **label: Investigation Date**
  - **hint: null**
  - **required: false**
  - Enter the date and time of the fire incident.

*   **Investigator (id: 2)**:
    - **type: text**
    - **label: Investigator**
    - **hint: null**
    - **required: false**
    - This field is for your name and title as the person completing the form.

*   **Location (id: 3)**:
    - **type: text**
    - **label: Location**
    - **hint: null**
    - **required: false**
    - Enter the location of the fire incident.

*   **Cause of Fire (id: 4)**:
    - **type: select_multiple**
    - **label: Cause of Fire**
    - **hint: null**
    - **required: false**
    - Select one or more of the available options: Arson, Accident, Electrical, or Other.

*   **Fire Extinguishing Agent (id: 5)**:
    - **type: select_one**
    - **label: Fire Extinguishing Agent**
    - **hint: null**
    - **required: false**
    - Choose the fire extinguishing agent used during the incident.

*   **Fire Extinguishing Agent Used (id: 6)**:
    - **type: select_one**
    - **label: Fire Extinguishing Agent Used**
    - **hint: null**
    - **required: false**
    - Select True or False if the fire extinguishing agent was or was not used during the incident.

*   **Fire Extinguishing Agent Not Used (id: 7)**:
    - **type: select_multiple**
    - **label: Fire Extinguishing Agent Not Used**
    - **hint: null**
    - **required: false**
    - Select Yes or No if the fire extinguishing agent was not used during the incident.

*   **Fire Extinguishing Agent Type (id: 8)**:
    - **type: text**
    - **label: Fire Extinguishing Agent Type**
    - **hint: null**
    - **required: false**
    - Enter the type of fire extinguishing agent used, if applicable.

*   **Fire Extinguishing Agent Size (id: 9)**:
    - **type: text**
    - **label: Fire Extinguishing Agent Size**
    - **hint: null**
    - **required: false**
    - Enter the size of the fire extinguishing agent used, if applicable.

*   **Fire Investigation Report Form Comments (id: 10)**:
    - **type: text**
    - **label: Fire Investigation Report Form Comments**
    - **hint: null**
    - **required: false**
    - Provide any additional comments or details about the fire incident.
