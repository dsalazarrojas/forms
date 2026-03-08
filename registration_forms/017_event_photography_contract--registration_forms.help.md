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
