<thinking>... This form will help you gather information about cartographic production requirements. It is intended for internal use within the organization, and it is not for external sharing or publication. It's recommended that you only submit this form if you are authorized to do so. Before proceeding, please make sure you have reviewed and are comfortable with the information provided, and that it matches your organization's policies and guidelines... </thinking>

# Cartographic Production Requirements Survey - Help Guide
## Purpose
The Cartographic Production Requirements Survey is designed to gather essential information needed to produce a map. Please fill out this form to provide details about your project, such as its title, purpose, and required features.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your project title and contact information.
2. Select the primary purpose of your map.
3. Choose the target audience for your map.
4. Describe the geographic area covered by your map.
5. Specify the coordinate system or projection used for your map.
6. Indicate the data sources you will be using.
7. Select the essential features to be included in your map.
8. Choose the final output format of your map.
9. Determine the priority level of your project.
10. Set a desired delivery date.
11. Select the required map elements.
12. Specify any known limitations or constraints of your project.
13. If applicable, add any additional comments or requirements.

## Field-by-Field Explanation

* **Map Project Title** (`project_title`, `text`, **required**: true): Enter the title of your project.
* **Requestor Name** (`requestor_name`, `text`, **required**: true): Enter your name as the requestor or author of the project.
* **Requestor Email** (`requestor_email`, `email`, **required**: true): Enter your email address as the requestor or author of the project.
* **Department or Agency Name** (`department_agency`, `text`, **required**: true): Enter the name of the department or agency associated with your project.
* **Primary Purpose of the Map** (`map_purpose`, `select_one`, **required**: true): Select the primary purpose of your map.
	+ **Strategic Planning**: The map is intended for strategic planning purposes.
	+ **Public Display**: The map is for public display or educational purposes.
	+ **Technical Analysis**: The map is for technical analysis or reference.
	+ **Navigation**: The map is for navigation or navigation-related purposes.
	+ **Educational**: The map is for educational purposes.
	+ **Legal or Property**: The map is for legal or property-related purposes.
* **Target Audience** (`target_audience`, `select_one`, **required**: true): Choose the target audience for your map.
	+ **Internal Staff**: The map is intended for internal staff.
	+ **General Public**: The map is for the general public.
	+ **Executive Leadership**: The map is for executive leadership.
	+ **Technical Experts**: The map is for technical experts.
* **Geographic Area of Coverage** (`geographic_scope`, `text`, **required**: true): Describe the boundaries or extent of your map.
* **Preferred Coordinate System or Projection** (`coordinate_system`, `text`, **required**: false): If known, specify the coordinate system or projection used for your map.
* **Provided Data Sources** (`data_sources`, `select_multiple`, **required**: true): Select all the data sources you will be using.
	+ **Shapefiles**: The map will use shapefiles as data sources.
	+ **Excel or CSV**: The map will use Excel or CSV files as data sources.
	+ **Imagery**: The map will use imagery as data sources.
	+ **Paper Maps**: The map will use paper maps as data sources.
	+ **Database Access**: The map will use database access as data sources.
	+ **GPS Points**: The map will use GPS points as data sources.
* **Layers to be Included** (`required_data_layers`, `select_multiple`, **required**: true): Select the essential features to be included in your map.
	+ **Parcels**: Parelly layers should be included.
	+ **Roads**: Road layers should be included.
	+ **Hydrography**: Hydrography layers should be included.
	+ **Elevation or Contours**: Elevation or contours layers should be included.
	+ **Land Use**: Land use layers should be included.
	+ **Zoning**: Zoning layers should be included.
	+ **Demographics**: Demographics layers should be included.
* **Final Output Format** (`output_format`, `select_one`, **required**: true): Select the final output format of your map.
	+ **Digital (PDF or JPG)**: The map will be output in digital format (PDF or JPG).
	+ **Print (Large Format)**: The map will be output in print format (large scale).
	+ **Interactive Web Map**: The map will be output as an interactive web map.
	+ **GIS Data Only**: The map will only output GIS data.
* **Specific Color Requirements or Branding** (`color_palette_needs`, `text`, **required**: false): Specify any specific color requirements or branding for your map.
* **Priority Level** (`priority_level`, `select_one`, **required**: true): Determine the priority level of your project.
	+ **Critical**: High priority.
	+ **High**: Medium priority.
	+ **Medium**: Low priority.
* **Desired Delivery Date** (`desired_delivery_date`, `date`, **required**: true): Set a desired delivery date for your map.
* **Required Map Elements** (`map_elements`, `select_multiple`, **required**: true): Select the required map elements.
	+ **Legend**: A legend should be included.
	+ **Scale Bar**: A scale bar should be included.
	+ **North Arrow**: A north arrow should be included.
	+ **Data Citations**: Data citations should be included.
	+ **Disclaimer**: A disclaimer should be included.
	+ **Title Block**: A title block should be included.
* **Known Limitations or Constraints** (`project_limitations`, `text`, **required**: false): Describe any known limitations or constraints of your project.
* **I Confirm I have Authorized this Production Request** (`supervisor_approval`, `text`, **required**: true): Type your name as digital signature to confirm you have authorized this production request.
