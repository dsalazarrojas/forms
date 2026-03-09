# Ocean Freight Booking Tracking Form - Help Guide
## Purpose
The Ocean Freight Booking Tracking Form is a tool used to track and update the status of ocean freight bookings. It captures essential information from both shippers and freight forwarders to ensure smooth communication and efficient tracking of shipments.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Booking Number**, a unique identifier for the shipment.
2. Enter the **Shipper Name**, **Shipper Phone**, and **Shipper Email** to capture the shipper's contact information.
3. Enter the **Shipment Date** to record the date of the shipment.
4. Indicate whether **Freight Forwarder** and **Freight Forwarder Company** are used.
5. Choose the **Container Status** as either **Yes** or **No**.
6. Select one or multiple **Freight Status** options (e.g., **Active**, **Inactive**).
7. Enter the **Container Number** and **Tracking Number** to record the shipment's tracking information.
8. Add any additional **Shipper Notes** or **Freight Notes** as needed.
9. Sign and date the **Shipper Signature** and **Shipper Signature Date** if required.

## Field-by-Field Explanation
### 1. Booking Number
* **Booking Number** (`id: 1`, `type: number`, `required: true`): A unique identifier for the shipment.
*   Enter the booking number of the shipment.

### 2. Shipper Name
*   **Shipper Name** (`id: 2`, `type: text`, `required: true`): The shipper's name.
*   Enter the shipper's name.

### 3. Shipper Company
*   **Shipper Company** (`id: 3`, `type: text`, `required: false`): The shipper's company.
*   Enter the shipper's company name.

### 4. Shipment Date
*   **Shipment Date** (`id: 4`, `type: date`, `required: true`): The date of the shipment.
*   Enter the date of the shipment in the correct format.

### 5. Shipper Phone
*   **Shipper Phone** (`id: 5`, `type: text`, `required: true`): The shipper's phone number.
*   Enter the shipper's phone number.

### 6. Shipper Address
*   **Shipper Address** (`id: 6`, `type: text`, `required: false`): The shipper's address.
*   Enter the shipper's address.

### 7. Freight Forwarder
*   **Freight Forwarder** (`id: 7`, `type: text`, `required: false`): The freight forwarder's name.
*   Enter the freight forwarder's name.

### 8. Freight Forwarder Company
*   **Freight Forwarder Company** (`id: 8`, `type: text`, `required: false`): The freight forwarder's company.
*   Enter the freight forwarder's company name.

### 9. Freight Container
*   **Freight Container** (`id: 9`, `type: select_one`, `required: true`): The status of the freight container.
*   Choose "Yes" or "No" to indicate the container status.

### 10. Freight Status
*   **Freight Status** (`id: 10`, `type: select_multiple`, `required: true`): Select one or multiple status options for the freight.
*   Choose from the options: "Active" or "Inactive".

### 11. Container Number
*   **Container Number** (`id: 11`, `type: text`, `required: true`): The number of the container.
*   Enter the container number.

### 12. Shipper Email
*   **Shipper Email** (`id: 12`, `type: email`, `required: true`): The shipper's email address.
*   Enter the shipper's email address.

### 13. Shipper Notes
*   **Shipper Notes** (`id: 13`, `type: note`, `required: false`): Additional notes from the shipper.
*   Add any notes from the shipper.

### 14. Freight Notes
*   **Freight Notes** (`id: 14`, `type: note`, `required: false`): Additional notes from the freight forwarder.
*   Add any notes from the freight forwarder.

### 15. Tracking Number
*   **Tracking Number** (`id: 15`, `type: text`, `required: true`): The tracking number for the shipment.
*   Enter the tracking number.

### 16. Shipper Signature
*   **Shipper Signature** (`id: 16`, `type: date`, `required: false`): The shipper's signature.
*   Sign the form, if required.

### 17. Shipper Signature Date
*   **Shipper Signature Date** (`id: 17`, `type: date`, `required: false`): The date of the shipper's signature.
*   Date the shipper's signature, if required.

## Tips
*   Always ensure that all required fields are filled in before submitting the form.
*   Use the correct format for dates and email addresses.
*   Enter accurate and up-to-date information for all fields.
*   Review the form carefully before submission to ensure all information is correct.
