# event_content_creator_agreement - Help Guide
## Purpose
This form is designed to collect information for event organizers to create agreements with content creators. It captures details about event organizers, agreement dates, content types, content owners, contract start and end dates, content delivery terms, content rights, contract status, tools assigned to the content, and event names.

## How To Complete This Form
To complete this form, follow these steps:

* Select the event organizer from the dropdown list.
* Choose the agreement date, if applicable.
* Select the type of content to be created (e.g., Video, Image, Audio, Text).
* Choose the content owner from the dropdown list.
* Select the contract start and end dates, if applicable.
* Enter the content delivery terms and content rights.
* Select the contract status (e.g., Draft, In Progress, Signed).
* Choose the tools assigned to the content (e.g., chatjimmy, Other).
* Enter a brief description of the content (optional).
* Enter any additional notes about the contract (optional).
* Enter the contract version number (optional).
* Enter the event name.

## Field-by-Field Explanation

* **event_organizer** (`event_organizer`, select_one, required): Select the event organizer from the list. 
* **agreement_date** (`agreement_date`, date, required): Enter the date of the agreement.
* **content_type** (`content_type`, select_one, required): Choose the type of content to be created (e.g., Video, Image, Audio, Text).
* **content_owner** (`content_owner`, select_one, required): Select the content owner from the list.
* **contract_start** (`contract_start`, date, required): Enter the start date of the contract, if applicable.
* **contract_end** (`contract_end`, date, required): Enter the end date of the contract, if applicable.
* **content_delivery_terms** (`content_delivery_terms`, text, required): Enter the terms of content delivery.
* **content_rights** (`content_rights`, text, required): Enter the rights associated with the content.
* **contract_status** (`contract_status`, select_one, required): Choose the status of the contract (e.g., Draft, In Progress, Signed).
* **assigned_tool** (`assigned_tool`, select_multiple, required): Choose the tools assigned to the content (e.g., chatjimmy, Other).
* **content_description** (`content_description`, note, optional): Enter a brief description of the content.
* **contract_notes** (`contract_notes`, note, optional): Enter any additional notes about the contract.
* **contract_version** (`contract_version`, number, optional): Enter the contract version number.
* **event_name** (`event_name`, text, required): Enter the name of the event.
