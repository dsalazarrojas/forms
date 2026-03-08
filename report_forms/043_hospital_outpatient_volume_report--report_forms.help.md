# Hospital Outpatient Volume Report - Help Guide
## Purpose
The Hospital Outpatient Volume Report is a tool used to collect and monitor data on outpatients visiting a hospital. This report helps in understanding the volumes of visits, wait times, and cancellations, providing insights for quality control, administrative reporting, or other related purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. **Select the type of visits**: On "visits" page, select the type of visit from the options provided (Urgent Care, Surgery, Cardiology, Dermatology, etc.)
2. **Enter wait times**: On "wait_times" page, select the wait time from the options provided (Less than 15 minutes, 15-30 minutes, 30-60 minutes, More than 60 minutes).
3. **Report cancellations**: On "cancellations" page, select the number of cancellations (No Cancellations, One Cancellation, Multiple Cancellations).
4. **Enter notes**: On "notes" pages, enter your notes related to the outpatients visits, including dates, time, and any other relevant information.

## Field-by-Field Explanation
* **Visits**: <code>visits</code> (`visits`, `select_multiple`, required): Select the type(s) of visit(s) that occurred.
* **Wait Times**: <code>wait_times</code> (`wait_times`, `select_one`, required): Choose the wait time category.
* **Cancellations**: <code>cancellations</code> (`cancellations`, `select_multiple`, required): Report the number of cancellations that occurred.
* **Notes**: <code>notes</code> (`notes`, `text`, required): Enter any notes related to the outpatients visits.

**Tips**

* Please provide accurate and detailed information for each field to ensure the report is helpful for analysis.
* If a field is optional, enter relevant information if available; otherwise, leave it blank.
* Review and revise your answers before submitting the report to ensure accuracy and clarity.
