<thinking>
To create a user-facing help guide for the "Event Photography Contract" form, I will first analyze the form's purpose and fields to ensure I understand the context and requirements. The form appears to be for managing contracts between clients and photographers for events such as weddings, parties, or events. The form includes fields for various types of information, including photographer and client details, event information, services offered, payment terms, and contract status.

The fields seem to be focused on the following aspects:

*   **Photographer information**: This field likely collects information about the photographer's status (client, freelance, or both).
*   **Client information**: Similar to the photographer information field, this collects information about the client's status.
*   **Event information**: This field might be used to categorize the type of event (wedding, event, or party).
*   **Services**: This field allows the user to select multiple services offered by the photographer (portrait, event coverage, or both).
*   **Payment Terms**: This field could be used to specify the payment terms, although it's currently set to a number type without options.
*   **Start and End Dates**: These fields are likely used to set the contract's start and end dates.
*   **Agreements**: There are two fields for agreements, one for the client and one for the photographer, which could be used to indicate agreement or disagreement with the contract terms.
*   **Payment Terms Agreed**: This field is similar to the previous one, although it's unclear why it's included as it's not necessary with the existing payment terms field.
*   **Contract Status**: This field is used to track the contract's status (active, inactive, or cancelled).

Considering the form's structure and fields, it seems that the form is designed for event photographers to collaborate with clients and track the terms of their contracts. However, there might be some redundancy between fields, and the payment terms field is currently configured as a number type without any options, which doesn't seem to fit with the other fields.

</thinking>

# Event Photography Contract - Help Guide
## Purpose
The Event Photography Contract form is for managing contracts between clients and photographers for various types of events such as weddings, parties, or events. It includes fields for gathering information about the photographer and client details, event type, services offered, payment terms, and contract status.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the type of photographer (Client, Freelance, or Both)
2.  Choose the type of event (Wedding, Event, or Party)
3.  Select the services you would like the photographer to provide (Portrait, Event Coverage, or Both)
4.  Set the start and end dates of the contract
5.  Indicate your agreement with the contract terms and payment terms
6.  Track the contract's status (Active, Inactive, or Cancelled)

## Field-by-Field Explanation

* **Event Photography Contract** (`event_photography_contract_form`, text, required: false): Enter the title of the contract.
* **Photographer Information** (`photographer_info`, select_one, required: false): Select the type of photographer: Client, Freelance, or Both.
*   •  Choose the type of photographer that best describes you.
* **Client Information** (`client_info`, select_one, required: false): Select the type of client: Client, Freelance, or Both.
*   •  Choose the type of client that best describes the person or organization you are collaborating with.
* **Event Information** (`event_info`, select_one, required: false): Select the type of event: Wedding, Event, or Party.
*   •  Choose the type of event you are hiring the photographer for.
* **Photography Services** (`services`, select_multiple, required: false): Select the services you would like the photographer to provide: Portrait, Event Coverage, or Both.
*   •  Choose the services you need for your event.
* **Payment Terms** (`payment_terms`, number, required: false): This field is currently not used as it's a number type without any options. You can ignore it for now.
* **Start Date of Contract** (`contract_start`, date, required: false): Enter the start date of the contract.
*   •  Set the start date of the contract.
* **End Date of Contract** (`contract_end`, date, required: false): Enter the end date of the contract.
*   •  Set the end date of the contract.
* **Client Agreement** (`client_agreement`, select_one, required: false): Indicate your agreement with the client contract terms: True or False.
*   •  Choose True if you agree with the contract terms, False if you don't.
* **Photographer Agreement** (`photographer_agreement`, select_one, required: false): Indicate your agreement with the photographer contract terms: True or False.
*   •  Choose True if you agree with the photographer contract terms, False if you don't.
* **Payment Terms Agreed** (`payment_terms_agreed`, select_one, required: false): This field is currently not used as it's redundant with the payment terms field. You can ignore it for now.
*   •  Choose True if you agree with the payment terms, False if you don't.
* **Contract Status** (`contract_status`, select_one, required: false): Set the contract status (Active, Inactive, or Cancelled).
*   •  Choose Active if the contract is active, Inactive if it's not, and Cancelled if it's cancelled.
