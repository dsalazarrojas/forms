# Server Application Registration - Help Guide
## Purpose
The "Server Application Registration" form is used to collect information about a new server application. This form helps to store and track the characteristics and requirements of the server application, making it easier to manage and monitor its resources.

## How To Complete This Form
1. Ensure you have all the necessary information about the new server application ready.
2. Enter the new application name in the "New Application Name" field.
3. Select the type of server application from the "Server Type" dropdown list.
4. Choose the requirements of the server application by selecting one or more from the "Server Requirements" list.
5. Choose the deployment environment for the server application from the "Deployment Environment" list.
6. Enter the specific CPU requirements for the server application (if applicable).
7. Enter the specific disk space requirements for the server application (if applicable).
8. Enter the specific memory requirements for the server application (if applicable).
9. Select the network interface for the server application from the "Network Interface" dropdown list.
10. Enter any additional notes about the server application in the "Notes" field.

## Field-by-Field Explanation
- **New Application Name** (`title`, text): Enter a unique and descriptive name for the new server application.
- **Server Type** (`server_type`, select_one): Select one of the options to indicate the type of server application (e.g., Application Server, Load Balancer, Database Server).
- **Server Requirements** (`server_requirements`, select_multiple): Select one or more requirements that the server application needs to function (e.g., CPU, Disk Space, Memory, Network Interface).
- **Deployment Environment** (`deployment_environment`, select_multiple): Select one or more deployment environments where the server application will be running (e.g., Cloud, On-Premises, Hybrid).
- **CPU** (`cpu`, number): Enter the specific CPU requirements for the server application (if applicable).
- **Disk Space** (`disk_space`, number): Enter the specific disk space requirements for the server application (if applicable).
- **Memory** (`memory`, number): Enter the specific memory requirements for the server application (if applicable).
- **Network Interface** (`network_interface`, select_one): Select one of the options to indicate the network interface for the server application (e.g., 1000Mbit, 10000Mbit, 100000Mbit).
- **Database** (`database`, text): Enter any database-related information for the server application (if applicable).
- **Notes** (`notes`, note): Enter any additional notes about the server application (if applicable).
