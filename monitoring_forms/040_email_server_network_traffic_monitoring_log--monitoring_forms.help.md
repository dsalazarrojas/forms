# email_server_network_traffic_monitoring_log - Help Guide

## Purpose
This form is used to collect and log information about email server network traffic. It helps administrators identify potential issues with email servers or networks.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the **Email Server Name** field with the name of the email server you are monitoring.
2. Enter the **Server IP** address of the email server.
3. Enter your **Username** for the email server.
4. Select the **Port** number used by the email server.
5. Choose the **Protocol** used by the email server from the dropdown menu (e.g., HTTP, SMTP, POP3, IMAP, or other).
6. Enter the date and time when the **Timestamp** occurred.
7. Enter the **Message ID** associated with the email server event.
8. Select the **Event Type** from the dropdown menu (e.g., Connect, Disconnect, Receive, Send, or other).
9. If available, enter the **Email ID** of the email being monitored.
10. Enter the **Subject** of the email being monitored.
11. Enter the **Message Subject ID** if available.
12. Enter the **Content** of the email being monitored.
13. Enter the **Recipient Email** address.
14. Enter the **Sender Email** address.
15. Enter the **Recipient IP** address.
16. Enter the **Sender IP** address.
17. Enter the size of the **Message Size**.
18. Enter the **Message Body** of the email being monitored.

## Field-by-Field Explanation
* **Email Server Name** (`email_server_name`, text, optional): Enter the name of the email server being monitored.
* **Server IP** (`server_ip`, text, optional): Enter the IP address of the email server.
* **Username** (`username`, text, optional): Enter your username for the email server.
* **Port** (`port`, number, optional): Enter the port number used by the email server.
* **Protocol** (`protocol`, select_one, required): Choose the protocol used by the email server (e.g., HTTP, SMTP, POP3, IMAP, or other).
* **Timestamp** (`timestamp`, date, optional): Enter the date and time when the email server event occurred.
* **Message ID** (`message_id`, text, optional): Enter the Message ID associated with the email server event.
* **Event Type** (`event_type`, select_one, optional): Choose the event type (e.g., Connect, Disconnect, Receive, Send, or other).
* **Email ID** (`email_id`, text, optional): Enter the Email ID if available.
* **Subject** (`subject`, text, optional): Enter the subject of the email being monitored.
* **Message Subject ID** (`message_subject_id`, text, optional): Enter the Message Subject ID if available.
* **Content** (`content`, text, optional): Enter the content of the email being monitored.
* **Recipient Email** (`recipient_email`, email, optional): Enter the recipient's email address.
* **Sender Email** (`sender_email`, email, optional): Enter the sender's email address.
* **Recipient IP** (`recipient_ip`, text, optional): Enter the recipient's IP address.
* **Sender IP** (`sender_ip`, text, optional): Enter the sender's IP address.
* **Message Size** (`message_size`, text, optional): Enter the size of the email being monitored.
* **Message Body** (`message_body`, text, optional): Enter the message body of the email being monitored.

## Tips
* Make sure to fill in all relevant fields to provide a complete and accurate picture of email server network traffic.
* If a field is not applicable or not available, leave it blank.
* Double-check your entries for accuracy to ensure correct data is being collected.
