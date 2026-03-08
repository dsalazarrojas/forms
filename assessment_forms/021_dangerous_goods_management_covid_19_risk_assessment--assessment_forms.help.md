# Dangerous Goods Management COVID-19 Risk Assessment - Help Guide
## Purpose
This form is used to collect information about the arrival of hazardous materials, their description, weight, and other relevant details to assess the risks associated with their management during the COVID-19 pandemic.

## How To Complete This Form
1. Fill in the arrival information: Provide the arrival date and time of the hazardous materials.
2. Describe the goods: Enter a detailed description of the hazardous materials being managed.
3. Specify the weight of the goods: Enter the weight of the hazardous materials being managed.
4. Identify the type of dangerous goods: Select the type of hazardous material from the options provided.
5. Assess the risks: Provide a brief written assessment of the risks associated with managing these goods.
6. Specify any special equipment required: Select any special equipment required for the safe management of the goods.
7. Provide staff information: Enter the names and contact numbers of staff members involved in the management of the goods.
8. Enter contact information: Enter the name and contact number of the person responsible for managing the goods.

## Field-by-Field Explanation
* **arrival** (`arrival`, text, required: false): Enter the arrival date and time of the hazardous materials.
* **arrival_date** (`arrival_date`, date, required: false): Enter the date of arrival of the hazardous materials.
* **arrival_time** (`arrival_time`, time, required: false): Enter the time of arrival of the hazardous materials.
* **goods_description** (`goods_description`, text, required: false): Enter a detailed description of the hazardous materials being managed.
* **goods_weight** (`goods_weight`, number, required: false): Enter the weight of the hazardous materials being managed.
* **dangerous_goods** (`dangerous_goods`, select_one, required: false): Select the type of hazardous material from the options provided.
	+ Option 1: Chemicals
	+ Option 2: Biological agents
	+ Option 3: Other (please specify)
* **risk_assessment** (`risk_assessment`, text, required: false): Provide a brief written assessment of the risks associated with managing these goods.
* **special_equipment** (`special_equipment`, select_multiple, required: false): Select any special equipment required for the safe management of the goods.
	+ Option 1: PPE (Personal Protective Equipment)
	+ Option 2: Ventilation system
	+ Option 3: Fire suppression system
* **staff_information** (`staff_information`, text, required: false): Enter the names and contact numbers of staff members involved in the management of the goods.
* **contact_name** (`contact_name`, text, required: false): Enter the name of the person responsible for managing the goods.
* **contact_number** (`contact_number`, text, required: false): Enter the contact number of the person responsible for managing the goods.
