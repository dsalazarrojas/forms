# Coastal Property Conservation Registration - Help Guide
## Purpose
The Coastal Property Conservation Registration form is a tool for coastal property owners to provide information about their property and conservation efforts. By filling out this form, you'll help coastal conservation organizations and agencies understand your conservation goals and management practices.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the property owner information, including your full name, email address, and phone number.
2. Provide your property address, county, and state.
3. Describe the size of your property, including the total acreage and the coastal acreage.
4. Identify the dominant coastal feature of your property.
5. Select your primary conservation goal and describe your detailed conservation plan.
6. Provide information about any endangered or protected species present on your property.
7. Describe your current management practices and plans for conservation.
8. Specify when you plan to start and complete your conservation efforts.
9. Choose how you plan to fund your conservation efforts.
10. Provide contact information for your project coordinator.

## Field-by-Field Explanation

* **Owner Full Name** (`owner_name`, text, required): This is your full name and will be used to contact you about your conservation efforts.
* **Email Address** (`owner_email`, email, required): This is your primary contact email address.
* **Phone Number** (`owner_phone`, text, required): This is your phone number for further communication.
* **Owner Mailing Address** (`owner_address`, text, required): This is the full street address where you can be contacted.
* **Owner Type** (`owner_type`, select_one, required): Please select the category that best describes your ownership type (Individual, Family, Corporation, Non-profit, Government, or Other).
* **Property Address** (`property_address`, text, required): This is the full address of your coastal property.
* **County** (`property_county`, text, required): This is the county where your property is located.
* **State** (`property_state`, text, required): This is the state where your property is located.
* **Total Acreage** (`total_acreage`, number, required): This is the size of your property.
* **Coastal Acreage** (`coastal_acreage`, number, required): This is the acreage of your property along the coast.
* **Dominant Coastal Feature** (`property_characteristics`, select_one, required): Please select the main coastal characteristic of your property (Beach, Wetlands, Bluffs, Salt Marsh, Mangroves, Rocky Shore, or Other).
* **Primary Conservation Goal** (`primary_conservation_goal`, select_one, required): Select your main conservation goal (Habitat restoration, Erosion prevention, Water quality improvement, Public access preservation, Species protection, Carbon sequestration, or Multiple goals).
* **Detailed Conservation Plan** (`conservation_details`, text, required): Describe your conservation goals and objectives.
* **Endangered or Protected Species Present** (`species_presence`, text, optional): If you know of any endangered or protected species on your property, please list them.
* **Current Property Use** (`current_use`, select_one, required): Please select how your property is currently used (Residential, Agricultural, Commercial, Recreation, Natural habitat, Mixed use, or Vacant).
* **Management Practices** (`management_practices`, text, optional): Describe your existing conservation or management efforts.
* **Planned Start Date** (`implementation_start`, date, required): Specify when you plan to begin your conservation efforts.
* **Implementation Duration** (`implementation_duration`, number, required): This is the expected timeframe for your conservation project.
* **Funding Status** (`funding_status`, select_one, optional): Choose how your conservation project is funded (Fully funded, Partially funded, Seeking funding, Grant pending, or Other).
* **Project Coordinator** (`project_coordinator`, text, optional): This is the name and contact information of your project coordinator.
* **Coordinator Phone** (`coordinator_phone`, text, optional): This is the phone number of your project coordinator.
* **Funding Status** (`funding_status`, select_one, optional): If not fully funded, describe your current funding arrangement.
* **Conservation Goals** (`conservation_goals`, note, optional): This is a note field for you to describe your conservation goals and objectives.
* **Management** (`management`, note, optional): This is a note field for you to describe your current management practices and plans for conservation.
* **Implementation Timeline** (`implementation_timeline`, note, optional): This is a note field for you to describe your plan and timeline for implementation.
* **Species Presence** (`species_presence`, text, optional): If you know of any endangered or protected species on your property, please list them.

Note: This guide is based on the provided YAML fields and attempts to provide a clear and concise explanation of each field.
