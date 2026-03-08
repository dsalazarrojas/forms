# email_server_network_traffic_monitoring_log - Help Guide
## Purpose
This form is designed to collect and monitor email server network traffic data. It is intended to aid IT staff or administrators in troubleshooting and analyzing issues related to email servers.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the **server_ip** field and enter the IP address of the email server you wish to monitor.
2. In the **port_number** field, enter the port number associated with the email server.
3. From the **protocol** dropdown list, choose the type of email protocol being monitored (e.g., HTTP, FTP, SMTP, etc.).
4. Select one or more **email_client** from the list to specify which email client(s) are using the email server.
5. If applicable, enter the **date** and **time** of the event being monitored.
6. Enter the **username** and **password** associated with the email server.
7. Enter the **ip_address** associated with the email server.
8. Select the **event_type** of the event being monitored (e.g., connection, disconnection, error, warning, or critical).
9. Enter any relevant information about the **email_server_version** being monitored.
10. Finally, enter a detailed description of the **event_message**.

## Field-by-Field Explanation
* **email_server_network_traffic_monitoring_log**:
  * `email_server_network_traffic_monitoring_log` (title): This is the title of the form.
  * `note` (type): This is a note field, not a required field.
* **server_ip** (`server_ip`, text, required): Enter the IP address of the email server.
* **port_number** (`port_number`, number, required): Enter the port number associated with the email server.
* **protocol** (`protocol`, select_one, required): Choose the email protocol being monitored (e.g., HTTP, FTP, SMTP, etc.).
* **email_client** (`email_client`, select_multiple, required): Select one or more email clients using the email server.
* **date** (`date`, date, required): Enter the date of the event being monitored.
* **time** (`time`, time, required): Enter the time of the event being monitored.
* **username** (`username`, text, required): Enter the username associated with the email server.
* **password** (`password`, text, required): Enter the password associated with the email server.
* **ip_address** (`ip_address`, text, required): Enter the IP address associated with the email server.
* **event_type** (`event_type`, select_one, required): Select the type of event being monitored (e.g., connection, disconnection, error, warning, or critical).
* **email_server_version** (`email_server_version`, text, required): Enter any relevant information about the email server version being monitored.
* **event_message** (`event_message`, text, required): Enter a detailed description of the event being monitored.
