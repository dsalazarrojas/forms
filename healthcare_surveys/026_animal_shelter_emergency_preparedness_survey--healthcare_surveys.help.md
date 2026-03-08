<thinking>
We will create a comprehensive help guide for the "Animal Shelter Emergency Preparedness Survey" form. This guide will ensure that the end-users understand the purpose of the form, how to complete it, and what each field means. We will also cover all 28 fields that make up the form, making sure that each one is explained clearly and concisely.

The form is part of the "healthcare_surveys" category and is designed to help animal shelter organizations prepare for emergency situations. It covers various aspects of emergency preparedness, including plans, evacuation, resources, communication, and challenges. The guide will be structured around these categories and cover each field in detail.

Before we start, let's review the form fields and their properties to ensure we cover all the essential information. The form is divided into six sections: Shelter Name, Contact Information, Organization Type, Animal Care, Emergency Plan, Evacuation, Resources and Supplies, Communication, and Challenges. Each section is designed to gather specific information about the organization's emergency preparedness.

</thinking>

# Animal Shelter Emergency Preparedness Survey - Help Guide
## Purpose
The Animal Shelter Emergency Preparedness Survey is a tool for animal shelter organizations to assess their emergency preparedness. The survey covers various aspects of emergency preparedness, including plans, evacuation, resources, and communication. This guide will walk you through each field in the survey, ensuring you understand what information is required and how to complete it accurately.

## How To Complete This Form
To complete this form, please follow these steps:

1. Review each section carefully and answer questions truthfully.
2. Make sure to provide as much detail as possible for each field.
3. Use the hints provided to help you understand what information is required.
4. Save your progress and review before submitting.

## Field-by-Field Explanation

### Shelter Name (id: 1)
**Shelter or Rescue Organization Name** (`shelter_name`, text, required)
Your organization's name as it appears on your business cards or license.

### Contact Information (id: 2-4)
**Contact Person Name** (`contact_person`, text, required)
Name of the person completing the survey.

**Contact Email** (`contact_email`, email, required)
Email address of the person completing the survey.

**Contact Phone** (`contact_phone`, text, required)
Phone number of the person completing the survey.

### Organization Type (id: 5)
**Organization Type** (`organization_type`, select_one, required)
Select the type of organization you represent:

*   Animal Shelter
*   Animal Rescue
*   Wildlife Rehabilitation
*   Sanctuary
*   Veterinary Clinic
*   Boarding Facility
*   Other

### Animal Care (id: 6)
**Current Number of Animals in Care** (`current_animals`, number, required)
Approximate count of animals currently in care.

### Emergency Plan (id: 7, 8, 9)
**-- Emergency Plan --** (`section_emergency_plan`, note, required)
A brief description of your current emergency preparedness plan.

**Do You Have a Written Emergency Plan?** (`has_emergency_plan`, select_one, required)
Yes/No or In Progress.

**When Was Plan Last Updated?** (`plan_last_updated`, date, required)
Date of most recent revision.

### Evacuation (id: 11, 12, 13, 14)
**-- Evacuation Preparedness --** (`section_evacuation`, note, required)
A brief description of your emergency evacuation plan.

**Do You Have an Evacuation Plan?** (`evacuation_plan`, select_one, required)
Yes/No or Partial.

**Designated Evacuation Destination** (`evacuation_destination`, text, required)
Location where animals would be evacuated to.

**Evacuation Destination Capacity** (`evacuation_capacity`, number, required)
Number of animals that can be accommodated.

### Resources and Supplies (id: 15-17)
**-- Resources and Supplies --** (`section_resources`, note, required)
A brief description of emergency supplies and resources maintained.

**Emergency Supplies Maintained** (`emergency_supplies`, select_multiple, required)
Select all emergency supplies maintained:

*   Emergency food (30 day supply)
*   Emergency water (30 day supply)
*   Medical supplies and medications
*   First aid kits
*   Flashlights and batteries
*   Portable cages and carriers
*   Generator and fuel
*   Communication equipment

### Communication (id: 18-20)
**-- Communication and Coordination --** (`section_communication`, note, required)
A brief description of your emergency communication plan.

**Updated Emergency Contact List Maintained** (`emergency_contact_list`, select_one, required)
Yes/No.

**Communication Backup Methods** (`communication_backup`, select_multiple, required)
Select all backup communication methods:

*   Phone tree
*   Email list
*   Text alert system
*   Social media
*   Local media partnerships
*   None

### Challenges (id: 21-28)
**-- Challenges and Needs --** (`section_challenges`, note, required)
A brief description of gaps in emergency preparedness.

**Main Emergency Preparedness Challenges** (`main_challenges`, text, required)
What are your biggest gaps in emergency preparedness.

**Greatest Resource Needs** (`resource_needs`, text, required)
What resources would be most helpful.

**Staff Training Needs** (`training_needed`, text, required)
What staff training is needed.

**Additional Comments** (`additional_comments`, text, required)
Any other information.
