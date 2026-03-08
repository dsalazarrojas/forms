# TSD transfer - Help Guide

## Purpose
This form is used to facilitate the transfer of assets or tasks between nodes in a network. It is essential to provide accurate and complete information to ensure a smooth and successful transfer process.

## How To Complete This Form

1. Select the "transfer node id" field to identify the node from which the asset or task will be transferred.
2. Choose "from node" and "to node" options to indicate the source and destination nodes of the transfer.
3. If applicable, specify the "start date" and "end date" for the transfer.
4. Select "transfer type" to indicate the nature of the transfer.
5. Optionally, enter a "transfer amount" if the transfer involves a specific quantity or amount.
6. Add any additional comments or details in the "note" field.

## Field-by-Field Explanation

* **transfer node id** (`transfer_node_id`, `number`, required):
	+ Enter the ID of the node from which the asset or task will be transferred.
* **from node** (`from_node_id`, `select_one`, required: false):
	+ Choose the node from which the asset or task is being transferred.
* **to node** (`to_node_id`, `select_one`, required: false):
	+ Choose the node to which the asset or task is being transferred.
* **start date** (`start_date`, `date`, required: false):
	+ Enter the date when the transfer process begins.
* **end date** (`end_date`, `date`, required: false):
	+ Enter the date when the transfer process completes.
* **transfer type** (`transfer_type`, `select_one`, required: false):
	+ Select the type of transfer, for example, "Yes" for an asset transfer or "No" for a task transfer.
* **transfer amount** (`transfer_amount`, `number`, required: false):
	+ Enter the quantity or amount being transferred, if applicable.
* **note** (`note`, `note`, required: false):
	+ Provide any additional comments or details about the transfer.

## Tips
- Make sure to select the correct "from node" and "to node" options to ensure accurate transfer routing.
- If applicable, provide detailed information in the "note" field to aid in tracking and processing the transfer.
- Double-check the "start date" and "end date" for accuracy, especially if the transfer involves deadlines or schedules.
