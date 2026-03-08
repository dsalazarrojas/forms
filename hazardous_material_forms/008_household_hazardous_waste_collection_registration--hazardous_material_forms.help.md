<thinking>As a form designer and technical writer, I'll create a user-facing help guide for the "Household Hazardous Waste Collection Registration" form. I'll review the form fields to ensure I understand their purpose and relevance to the task at hand. This form appears to be designed for collecting information about hazardous waste collection from households. It seems reasonable to assume this form is meant to register or schedule a collection of hazardous waste materials. Before proceeding, I'll review the form's fields to ensure I don't duplicate any information or explanations.</thinking>

# Household Hazardous Waste Collection Registration - Help Guide
## Purpose
This form is used to register or schedule a collection of hazardous waste materials from households. Please complete this form to provide information about the materials you'd like to dispose of and arrange for their collection.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your contact information, including your name, address, email, and phone number.
2. Specify the date you're interested in scheduling the collection.
3. Select the type of hazardous waste you'd like to collect, such as Paints/chemicals, Batteries, Electronic Equipment, Light bulbs, or Other.
4. Enter the quantity of each type of hazardous waste you'd like to collect.
5. Choose the container type (Household, Commercial, or Other) and size (Small, Large, or Other) that best describes the collection.
6. If you have any special instructions or requests for the collection, please provide them in the "Special Instructions" field.
7. Select a pickup time that suits your needs.
8. Add any additional notes about the collection in the "Notes" field.

## Field-by-Field Explanation
* **Contact Name** (`contact_name`, text, required: false): Please enter your name so we can contact you about your collection.
* **Address** (`address`, text, required: false): Enter your address to ensure our team can collect your waste at the correct location.
* **Contact Email** (`contact_email`, email, required: false): Enter your email address so we can send you updates about your collection.
* **Contact Phone** (`contact_phone`, text, required: false): Enter your phone number in case we need to contact you with questions or updates.
* **Contact Note** (`contact_note`, note, required: false): Add any additional information about your collection, such as any specific instructions or requests.
* **Date** (`date`, date, required: false): Select the date you're interested in scheduling the collection.
* **Pickup Date** (`pickup_date`, date, required: false): Select the date you're available for pickup.
* **Hazardous Waste** (`hazardous_waste`, select_multiple, required: false): Choose the type of hazardous waste you'd like to collect.
* **Quantity** (`quantity`, number, required: false): Enter the quantity of each type of hazardous waste.
* **Container Type** (`container_type`, select_one, required: false): Select the type of container that best describes your collection, such as Household, Commercial, or Other.
* **Container Size** (`container_size`, select_one, required: false): Select the size of your container, such as Small, Large, or Other.
* **Special Instructions** (`special_instructions`, text, required: false): Add any special instructions or requests for your collection.
* **Pickup Time** (`pickup_time`, time, required: false): Select a pickup time that suits your needs.
* **Notes** (`hazardous_waste_notes`, note, required: false): Add any additional information about your collection.
