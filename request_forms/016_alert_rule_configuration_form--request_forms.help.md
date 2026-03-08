# Alert Rule Configuration Form - Help Guide
## Purpose
This form is used to create and configure custom alert rules for monitoring and management of systems, services, and business critical processes.

## How To Complete This Form

Fill out each field as follows:

### **Request ID**
 * **Request ID** (`request_id`, text): A unique identifier for this request.

### **Request Date**
 * **Request Date** (`request_date`, date): The date and time of this request.

### **Requester Name**
 * **Requester Name** (`requester_name`, text): The name of the person or team making the request.

### **Requester Email**
 * **Requester Email** (`requester_email`, email): The contact email of the person or team making the request.

### **Department**
 * **Department** (`department`, select_one): The department responsible for managing this alert.

### **Alert Name**
 * **Alert Name** (`alert_name`, text): A descriptive name for this alert.

### **Alert Description**
 * **Alert Description** (`alert_description`, text): A brief description of what this alert monitors.

### **Alert Category**
 * **Alert Category** (`alert_category`, select_one): The category of the alert (e.g., Infrastructure, Application, Security, etc.).

### **Alert Priority**
 * **Alert Priority** (`alert_priority`, select_one): The severity level of the alert (e.g., Critical, High, Medium, Low).

### **Monitored System**
 * **Monitored System** (`monitored_system`, text): The system or service being monitored.

### **Metric Name**
 * **Metric Name** (`metric_name`, text): The specific metric being monitored.

### **Threshold Type**
 * **Threshold Type** (`threshold_type`, select_one): The condition for triggering the alert (e.g., greater than, less than, equals, etc.).

### **Threshold Value**
 * **Threshold Value** (`threshold_value`, text): The value that triggers the alert.

### **Evaluation Period**
 * **Evaluation Period** (`evaluation_period`, select_one): The time window for evaluating the metric.

### **Alert Frequency**
 * **Alert Frequency** (`alert_frequency`, select_one): How often to notify (e.g., once per incident, every 5 minutes, etc.).

### **Notification Channels**
 * **Notification Channels** (`notification_channels`, select_multiple): The channels through which notifications will be sent.

### **Escalation Policy**
 * **Escalation Policy** (`escalation_policy`, select_one): The escalation rules for this alert.

### **Escalation Target**
 * **Escalation Target** (`escalation_target`, text): The person or team to escalate to (only required if escalation policy is set).

### **On-Call Schedule**
 * **On-Call Schedule** (`on_call_schedule`, select_one): The on-call schedule to use for this alert.

### **Primary Responders**
 * **Primary Responders** (`primary_responders`, text): The team members to notify first.

### **Secondary Responders**
 * **Secondary Responders** (`secondary_responders`, text): Backup team members (only required if escalation policy is set).

### **Auto-Remediation**
 * **Auto-Remediation** (`auto_remediation`, select_one): Whether this alert should trigger auto-fix.

### **Runbook URL**
 * **Runbook URL** (`runbook_url`, text): A link to the troubleshooting guide for this alert.

### **Alert Status**
 * **Alert Status** (`alert_enabled`, select_one): Whether this alert is active or not.

### **Maintenance Windows**
 * **Maintenance Windows** (`maintenance_windows`, select_multiple): Times when this alert should be suppressed (e.g., weekends, nights, etc.).

### **Tags**
 * **Tags** (`tags`, text): Labels for categorization.

### **Additional Notes**
 * **Additional Notes** (`additional_notes`, text): Any other relevant information.

### **Approval Required**
 * **Approval Required** (`approval_required`, select_one): Whether this alert needs approval from a manager or change board.

## Tips
* Please ensure that all required fields are filled out before submitting the form.
* Use the dropdown menus to select the correct options for each field.
* You can add or edit fields by clicking the plus or edit icons.
* The on-call schedule and escalation policy fields are only required if you choose to use them.
* The secondary responders field is only required if the escalation policy is set to escalate to them.
