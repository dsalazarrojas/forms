# Installation Check Form - Help Guide
## Purpose
The Installation Check Form is used to collect information about equipment installations, including their condition, location, systems and services involved, and installation status.

## How To Complete This Form
To complete this form, please follow the steps below:

1.  Select the condition of the equipment using the "Check Equipment" field.
2.  Enter the location where the equipment is to be installed.
3.  Select the systems and services required for the installation.
4.  Enter the number of systems and services that need to be installed.
5.  Record the number of pieces of equipment installed.
6.  Select the system and service installed.
7.  Enter the date and time of installation.
8.  Select the status of the installation.

## Field-by-Field Explanation

### Check Equipment (ID 1)
**Check Equipment** (`check_equipment`, select_one, required: false): This field allows you to assess the condition of the equipment to be installed, which can be "good", "fair", or "bad".

### Installation Location (ID 2)
**Installation Location** (`installation_location`, text, required: false): Enter the exact location where the equipment is to be installed.

### Installation Notes (ID 3)
**Installation Notes** (`installation_notes`, text, required: false): Record any additional notes about the installation.

### Check Systems (ID 4)
**Check Systems** (`check_systems`, select_multiple, required: false): Select the systems that need to be installed.

### Check Services (ID 5)
**Check Services** (`check_services`, select_multiple, required: false): Select the services that need to be installed.

### System Requirements (ID 6)
**System Requirements** (`system_requirements`, number, required: false): Enter the number of systems that need to be installed.

### Service Requirements (ID 7)
**Service Requirements** (`service_requirements`, number, required: false): Enter the number of services that need to be installed.

### Equipment Installed (ID 8)
**Equipment Installed** (`equipment_installed`, number, required: false): Enter the number of pieces of equipment installed.

### System Installed (ID 9)
**System Installed** (`system_installed`, select_one, required: false): Select the system installed.

### Service Installed (ID 10)
**Service Installed** (`service_installed`, select_one, required: false): Select the service installed.

### Date Installed (ID 11)
**Date Installed** (`date_installed`, date, required: false): Enter the date of installation.

### Time Installed (ID 12)
**Time Installed** (`time_installed`, time, required: false): Enter the time of installation.

### Check Date (ID 13)
**Check Date** (`check_date`, date, required: false): This field is not used in the provided information, it might be used to set a due date for checking.

### Check Time (ID 14)
**Check Time** (`check_time`, time, required: false): This field is not used in the provided information, it might be used to set a due time for checking.

### Installation Status (ID 15)
**Installation Status** (`installation_status`, select_one, required: false): Select the status of the installation, which can be "active", "inactive", or "pending".

### Check Status (ID 16)
**Check Status** (`check_status`, select_one, required: false): Select the status of the check, which can be "active", "inactive", or "pending".

### Check Date Status (ID 17)
**Check Date Status** (`check_date_status`, select_one, required: false): Select the status of the check date, which can be "active", "inactive", or "pending".

### Installation Check Notes (ID 18)
**Installation Check Notes** (`installation_check_notes`, text, required: false): Record any additional notes about the check.

### Equipment Installed Notes (ID 19)
**Equipment Installed Notes** (`equipment_installed_notes`, text, required: false): Record any additional notes about the equipment installed.

Note to end-users: Please fill out this form as accurately and thoroughly as possible to ensure that the installation information is recorded correctly. If you have any questions or concerns about filling out this form, please consult a supervisor or technical expert for assistance.
