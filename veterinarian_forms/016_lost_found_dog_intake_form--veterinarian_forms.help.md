<thinking>
This form is used to report a lost and found dog. The purpose of this form is to gather information about a dog that has been lost, including its breed, name, location where it was last seen, and description of the dog. The goal is to aid in reuniting the dog with its owner.
</thinking>

# lost_and_found_dog_intake_form - Help Guide
## Purpose
The lost and found dog intake form is used to collect information about a lost dog in order to assist in reuniting it with its owner. 

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the dog's breed in the "Dog Breed" field.
2. Enter the dog's name in the "dog_name" field.
3. Enter the name of the dog's owner in the "owner_name" field.
4. Enter the location where the dog was last seen in the "lost_location" field.
5. Enter the location where the dog was found in the "found_location" field (if applicable).
6. Provide a brief description of the dog in the "description" field.
7. Check the "dog_type" field to indicate if the dog is a stray.
8. Enter the color of the dog in the "color" field.
9. Enter the date the dog was found in the "date_found" field.
10. Enter the date the dog was lost in the "date_lost" field.
11. Enter the URL of a photo of the dog in the "photo_url" field (if available).
12. Check the "veterinary_clinics" field to indicate if the dog has been taken to a veterinary clinic.
13. Enter any additional information about the dog in the "other_info" field.

## Field-by-Field Explanation
- **Dog Breed** (`dog_breed`, `text`, required/optional): Enter the breed of the dog.
- **Dog Name** (`dog_name`, `text`, required/optional): Enter the name of the dog.
- **Owner Name** (`owner_name`, `text`, required/optional): Enter the name of the dog's owner.
- **Lost Location** (`lost_location`, `text`, required): Enter the location where the dog was last seen.
- **Found Location** (`found_location`, `text`, required/optional): Enter the location where the dog was found (if known).
- **Description** (`description`, `text`, required/optional): Provide a brief description of the dog.
- **Dog Type** (`dog_type`, `select_one`, required): Check "Yes" if the dog is a stray.
- **Color** (`color`, `text`, required/optional): Enter the color of the dog.
- **Date Found** (`date_found`, `date`, required): Enter the date the dog was found.
- **Date Lost** (`date_lost`, `date`, required): Enter the date the dog was lost.
- **Photo URL** (`photo_url`, `text`, required/optional): Enter a URL of a photo of the dog (if available).
- **Veterinary Clinics** (`veterinary_clinics`, `select_multiple`, required/optional): Check "Yes" if the dog has been taken to a veterinary clinic.
- **Other Information** (`other_info`, `note`, required/optional): Enter any additional information about the dog.
