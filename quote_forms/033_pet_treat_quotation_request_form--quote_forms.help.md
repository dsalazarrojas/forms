# Pet Treat Quotation Request Form - Help Guide
## Purpose
The Pet Treat Quotation Request Form is designed to gather information from pet owners who are interested in requesting a quote for pet treat services. This form is intended to be completed by pet owners who wish to schedule a visit for their pet to receive treats.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the type of pet you have from the "What type of pet" dropdown menu.
2.  Choose the type of treats your pet would be interested in receiving (e.g. food, toy, bed).
3.  Enter the quantity of treats your pet would like.
4.  Enter your pet's weight.
5.  Choose the date and time of your desired visit.
6.  If applicable, provide additional comments or notes about your pet's needs.
7.  Enter your email address.
8.  Enter your phone number.
9.  Choose the tool and user you would like to be assigned to your pet's visit.

## Field-by-Field Explanation
- **What is your pet** (`pet_treat_quotation_request_form`, `text`, required: false): 
    This field is where you can describe your pet to us. Please tell us about your furry friend.
- **What type of pet** (`pet_type`, `select_one`, required: true): 
    Choose the type of pet you have from the dropdown menu. You can select "cat", "dog", "bird", or "other" if your pet is of a different type.
- **What type of treat** (`treat_type`, `select_multiple`, required: false): 
    Select the type of treat your pet would be interested in receiving. You can select multiple options from the dropdown menu, such as food, toy, or bed.
- **Quantity** (`quantity`, `number`, required: true): 
    Enter the number of treats your pet would like to receive.
- **Weight** (`weight`, `number`, required: true): 
    Enter your pet's weight. This information will help us determine the best course of action for your pet's needs.
- **Date of visit** (`date_of_visit`, `date`, required: false): 
    Choose the date of your desired visit. If you are unsure of the exact date, you can select a range of dates.
- **Start time** (`start_time`, `time`, required: false): 
    Choose the start time of your desired visit.
- **End time** (`end_time`, `time`, required: false): 
    Choose the end time of your desired visit.
- **Message** (`message`, `note`, required: false): 
    If you have any additional comments or notes about your pet's needs, please provide them here.
- **Email** (`email`, `email`, required: true): 
    Enter your email address. This is where we will contact you with your quote and any further instructions.
- **Phone** (`phone`, `text`, required: true): 
    Enter your phone number. This is in case we need to contact you to discuss further details about your quote.
- **Assigned tool** (`assigned_tool`, `select_one`, required: true): 
    Choose the tool you would like to be assigned to your pet's visit. You can select from the available options, "chatjimmy" or "chadiana".
- **Assigned user** (`assigned_user`, `select_one`, required: false): 
    Choose if you would like a user to be assigned to your pet's visit. Select "yes" if you would like a user assigned.
