<thinking>
We should check if the form purpose is clear to us before proceeding to explain it to the end-users. This form is likely used for pet sitting pet-related purposes, such as keeping track of pet information for a vet clinic or pet boarding service. We should also ensure that we don't create a redundant form that already exists in the system.
</thinking>

# Pet Sitting Pet Form - Help Guide
## Purpose
This form is used to collect information about a pet for pet sitting purposes, such as keeping track of pet's identity, owner's details, and other relevant information.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the pet's ID in the "pet id" field.
2. Select the owner's ID from the dropdown menu in the "owner id" field.
3. Choose the pet's type (e.g., dog, cat, etc.) from the "pet type" field.
4. Enter the pet's name in the "pet name" field.
5. Enter the pet's species (e.g., breed) in the "pet species" field.
6. Enter the owner's name in the "owner name" field.
7. Enter the pet's address in the "address" field.
8. Enter the pet's date of birth in the "date of birth" field.

## Field-by-Field Explanation
* **pet id** (`pet_id`, number, optional): Enter the unique identification number of the pet.
* **owner id** (`owner_id`, select_one, optional): Select the owner's ID from the dropdown menu. This is likely used to connect the pet to its owner's account.
* **pet type** (`pet_type`, select_multiple, optional): Choose the type of pet (e.g., dog, cat, etc.).
* **pet name** (`pet_name`, text, optional): Enter the name of the pet.
* **pet species** (`pet_species`, text, optional): Enter the species or breed of the pet (e.g., Labrador, Persian, etc.).
* **owner name** (`owner_name`, text, optional): Enter the name of the pet's owner.
* **address** (`address`, text, optional): Enter the pet's address.
* **date of birth** (`date of birth`, date, optional): Enter the pet's date of birth.
