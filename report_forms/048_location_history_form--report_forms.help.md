<thinking>
The form is intended for users to provide information about locations they have visited, including whether they have visited specific sites or devices. This information is used to help prevent the spread of infectious diseases. The form is not mandatory and can be completed in multiple parts, as indicated by the 'contact_history_1', 'contact_history_2', and 'contact_history_3' fields.
It's possible that users may be asked to report locations multiple times, and this form is designed to help prevent the spread of infectious diseases by collecting detailed information. It's also possible that users may report different locations and devices in different parts of the form, so this form is designed to be flexible and not require users to fill out all fields.
</thinking>

# Location History Form - Help Guide
## Purpose
The Location History Form is a tool used to collect information about locations visited by users to help prevent the spread of infectious diseases. This form is designed to be flexible and can be completed in multiple parts, allowing users to report different locations and devices as needed.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by filling out the "Contact History 1" field, which is a date field where you can enter the date of your visit.
2. If you have visited other locations or devices since your last visit, you can add additional contact history by clicking the "Add Another Entry" button.
3. For each additional location or device, you can select whether you visited "Yes" or "No" in the "Contact History 2" and "Contact History 3" fields.
4. In the "Infected Individual" field, you can enter any details about individuals you may have come into contact with.
5. The "Form ID" field is a unique identifier for your form submission and is used for tracking purposes.
6. If you have used any synchronization apps, you can select "Yes" or "No" in the "Sync Apps" field.
7. Finally, you can select whether you have customized your devices to be easy to clean and fill in the "Easy Customize" and "Fill Device" fields.

## Field-by-Field Explanation
### Contact History 1
* **Contact History 1** (`contact_history_1`, `date`, required/optional): Enter the date of your visit.

### Contact History 2
* **Contact History 2** (`contact_history_2`, `select_one`, required/optional): Select "Yes" if you visited this location or device, "No" otherwise.

### Contact History 3
* **Contact History 3** (`contact_history_3`, `select_multiple`, required/optional): Select all locations or devices you visited, if any.

### Infected Individual
* **Infected Individual** (`infected_individual`, `text`, required/optional): Enter any details about individuals you may have come into contact with.

### Form ID
* **Form ID** (`form_id`, `number`, required/optional): A unique identifier for your form submission.

### Sync Apps
* **Sync Apps** (`sync_apps`, `select_one`, required/optional): Select "Yes" if you have used any synchronization apps, "No" otherwise.

### Easy Customize
* **Easy Customize** (`easy_customize`, `select_multiple`, required/optional): Select all devices you have customized to be easy to clean and fill.

### Fill Device
* **Fill Device** (`fill_device`, `select_multiple`, required/optional): Select all devices you have filled, if any.

Note: If you are unsure about any of the fields, please ask your administrator for clarification.
