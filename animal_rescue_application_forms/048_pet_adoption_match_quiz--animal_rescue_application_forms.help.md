# Pet Adoption Match Quiz - Help Guide

## Purpose
The Pet Adoption Match Quiz form is designed to help potential adopters find the best match for a pet that suits their lifestyle, preferences, and circumstances.

## How To Complete This Form
1. Please answer each question carefully and honestly.
2. Select all applicable options for multi-select questions.
3. Provide as much detail as possible for text input fields.
4. If a question does not apply to you, you can answer "Not Applicable" or "None of the above."

## Field-by-Field Explanation

- **What type of pet do you have experience with?** (`pet_type`, select_multiple, required: false)
  * This question helps us understand your familiarity with different types of pets. Please select all pet types you have previous experience with, such as "Dogs," "Cats," "Fish," or "Other ( specify)."

- **What size of pet do you prefer?** (`pet_size`, select_one, required: false)
  * This question will help us determine the ideal size of pet for your lifestyle. Please select one of the following options: Small, Medium, Large, or All (indicating you're open to any size)."

- **What is your family status?** (`family_status`, select_one, required: false)
  * This question helps us understand your family dynamics and how they might impact pet care. Please select one of the following options: Single, Married, Both (indicating a couple), or Other (please specify)."

- **What is your typical weekly schedule like?** (`lifestyle`, text, required: false)
  * This question helps us gauge your ability to care for a pet. Please describe your average weekly schedule, including work hours, travel, or other regular activities. Be as specific as possible, but don't worry if you're unsure – we'll use this information to guide our recommendations."

- **What is your living space like?** (`living_space`, text, required: false)
  * This question helps us understand your home environment and whether it's suitable for a pet. Please describe your living space, including the square footage, number of people in the household, and any relevant features like yards or balconies."

- **What is your energy level like?** (`energy_level`, text, required: false)
  * This question is intended to gauge your overall energy level and how you'll interact with your pet. Please describe your energy level, such as high, medium, or low, and any activities that give you energy or help you relax."

- **Do you have pet experience?** (`pet_experience`, select_one, required: false)
  * This question is crucial for understanding your level of pet care knowledge. Please select "True" if you have previous experience with pets, or "False" if you're new to pet care."

- **Do you have any pet allergies?** (`pet_allergies`, select_one, required: false)
  * This question helps us ensure the pet you adopt won't trigger allergies or health issues. Please select "True" if you have allergies, specifying the type of allergies you have, or "False" if you're allergy-free."

- **What is your budget for pet care?** (`budget`, select_one, required: false)
  * This question helps us understand your financial commitment to pet care. Please select one of the following options: Low, Medium, or High, indicating your budget for pet-related expenses and care."

- **What activities do you and your pet enjoy most?** (`preferred_activities`, text, required: false)
  * This question is an opportunity for you to share your favorite activities with your pet. Please describe the activities you and your pet enjoy doing together, such as walks, playtime, or simply cuddling."



Note: This help guide is based on the provided YAML, and any further questions or concerns will be addressed upon review.
