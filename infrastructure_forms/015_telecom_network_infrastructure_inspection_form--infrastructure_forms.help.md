<thinking>
This form is designed for inspecting telecom network infrastructure, such as cell towers, distribution points, and switches. It's meant to gather information about the condition, location, and maintenance history of these infrastructure points. The form asks for details about the inspection, including the date and time, inspector's notes, and any issues found. This form is likely used by telecom operations teams to monitor and maintain their infrastructure.
</thinking>

# Telecom Network Infrastructure Inspection Form - Help Guide
## Purpose
The purpose of this form is to gather information about the inspection of telecom network infrastructure, such as cell towers, distribution points, and switches. This information will help the telecom operations team to monitor and maintain their infrastructure.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields with the relevant information.
2. Select the correct options for each field as instructed in the field-by-field explanation below.

## Field-by-Field Explanation

* **Inspection Date** (`id: 3`, `type: date`, `required: true`): Enter the date of the inspection in the format `YYYY-MM-DD`.
* **Inspection Time** (`id: 4`, `type: time`, `required: false`): Enter the time of the inspection in the format `HH:MM AM/PM`.
* **Telecom Equipment** (`id: 18`, `type: text`, `required: true`): Enter the type of telecom equipment being inspected, e.g. cell tower, switch, etc.
* **Inspection Location** (`id: 19`, `type: text`, `required: true`): Enter the location of the inspection, e.g. cell tower 123, distribution point 45, etc.
* **Inspection Status** (`id: 10`, `type: select_one`, `required: true`): Select the inspection status, either `Active` or `Inactive`.
* **Inspection Type** (`id: 12`, `type: select_one`, `required: true`): Select the inspection type, either `Yes` or `No`.
* **Assigned Inspector** (`id: 17`, `type: text`, `required: false`): Enter the name of the inspector assigned to the inspection.
* **Contact Person** (`id: 20`, `type: text`, `required: false`): Enter the contact person's name and contact information.
* **Inspection Area Description** (`id: 14`, `type: text`, `required: false`): Enter a brief description of the inspection area.

## Tips

* Make sure to fill in all required fields with accurate and relevant information.
* Select the correct options for each field as instructed.
* If you have any additional information or comments, use the `Comments` field (id: 24) to record them.
