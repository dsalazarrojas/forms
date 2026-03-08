# software_deployment_check_in_form - Help Guide
## Purpose
This form is used to track and manage software deployments for the software development team.

## How To Complete This Form
To complete this form, follow the steps outlined above.

## Field-by-Field Explanation

* **Deployment Date** (`deployment_date`, date, required): Enter the date when the software was deployed.
* **Software Name** (`software_name`, text, optional): Enter the name of the software being deployed.
* **Deployment Status** (`deployment_status`, select_one, optional): Choose the status of the deployment.
	+ Select from: Active, Pending, Completed
* **Notes** (`notes`, note, optional): Enter any additional comments or notes about the deployment.
* **Email** (`email`, email, optional): Enter the email address of the person who deployed the software.
* **Phone** (`phone`, text, optional): Enter the phone number of the person who deployed the software.
* **Software Version** (`software_version`, text, optional): Enter the version of the software being deployed.
* **Deployment Time** (`deployment_time`, time, optional): Enter the time when the software was deployed.
* **Assigned Tool** (`assigned_tool`, select_one, optional): Choose the tool used for the deployment.
	+ Select from: chatjimmy, other
* **Deployment Team** (`deployment_team`, select_multiple, optional): Select the team responsible for the deployment.
	+ Select from: dev, qa, support
* **Deployment Manager** (`deployment_manager`, select_one, optional): Choose the person who managed the deployment.
	+ Select from: user1, user2, user3
* **Deployment Location** (`deployment_location`, text, optional): Enter the location where the software was deployed.
* **Deployed By** (`deployed_by`, select_one, optional): Choose the person who deployed the software.
	+ Select from: user1, user2, user3
* **Deployment Notes** (`deployment_notes`, note, optional): Enter additional notes about the deployment.
* **Deployment Comments** (`deployment_comments`, note, optional): Enter any comments about the deployment.
* **Deployed To** (`deployed_to`, select_multiple, optional): Select the person or groups to whom the software was deployed.
	+ Select from: user1, user2, user3, group1, group2, group3
* **Deployed To Group** (`deployed_to_group`, select_multiple, optional): Select the groups to whom the software was deployed.
	+ Select from: group1, group2, group3
* **Deployment Type** (`deployment_type`, select_multiple, optional): Select the type of software being deployed.
	+ Select from: windows, macos, linux
