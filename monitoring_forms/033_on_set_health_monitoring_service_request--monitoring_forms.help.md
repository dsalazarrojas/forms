# on_set_health_monitoring_service_request - Help Guide
## Purpose
This form is used to request on-set health monitoring services for production or equipment monitoring.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter a title for your request in the **On Set Health Monitoring Service Request** field.
2. Select the **Category** that best describes your request: "Monitoring Forms", "Production Request", or "Equipment Request".
3. Provide a brief **Description** of the services you need.
4. Choose the **Location** where the service will be required (e.g., "Los Angeles", "New York", "Chicago").
5. Select the **Start Time** and **End Time** for the service.
6. Enter the **Start Date** and **End Date** for the service.
7. Choose the **Service Type**: "Health" or "Equipment".
8. Enter the number of **Equipment Count** required.
9. Select the types of **Equipment Type** needed (e.g., "Dolly", "Grip", "Lighting").
10. Choose the **Crew Size** required for the service.

## Field-by-Field Explanation
- **On Set Health Monitoring Service Request** (`title`, text, required/optional): A brief title for your request.
  - This is the title of your request, which will help the production team identify the purpose of your service request.
- **Category** (`category`, select_one, required/optional): A category for your request.
  - This field helps the production team understand the type of service you're requesting (e.g., production or equipment monitoring).
- **Description** (`description`, text, required/optional): A brief description of your request.
  - Please provide a short description of the services you need.
- **Location** (`location`, select_multiple, required/optional): The locations where the service will be needed.
  - Select one or more locations where the service will be required (e.g., "Los Angeles", "New York", "Chicago").
- **Start Time** (`start_time`, time, required/optional): The start time of the service.
  - Enter the start time for the service in 24-hour format (e.g., "08:00").
- **End Time** (`end_time`, time, required/optional): The end time of the service.
  - Enter the end time for the service in 24-hour format (e.g., "18:00").
- **Start Date** (`start_date`, date, required/optional): The start date of the service.
  - Enter the start date for the service (e.g., "2023-02-15").
- **End Date** (`end_date`, date, required/optional): The end date of the service.
  - Enter the end date for the service (e.g., "2023-02-17").
- **Service Type** (`service_type`, select_one, required/optional): A type of service.
  - Choose between "Health" or "Equipment" for the type of service you're requesting.
- **Equipment Count** (`equipment_count`, number, required/optional): The number of equipment needed.
  - Enter the number of equipment required for the service.
- **Equipment Type** (`equipment_type`, select_multiple, required/optional): The types of equipment needed.
  - Select one or more types of equipment required (e.g., "Dolly", "Grip", "Lighting").
- **Crew Size** (`crew_size`, select_one, required/optional): A size of the crew.
  - Choose the size of the crew required for the service (e.g., "Less than 10", "10 to 20", "More than 20").
