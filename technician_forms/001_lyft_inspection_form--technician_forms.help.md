# Lyft Inspection Form - Help Guide

## Purpose

This form is designed for technicians to collect information about a vehicle's inspection status. It's used to gather data on the vehicle's condition, maintenance needs, and other relevant details.

## How To Complete This Form

1. Fill out the form with the following information:
	* Vehicle information (name, make, model, color)
	* Current vehicle status (Good, Bad)
	* Maintenance needs (Good, Fair, Bad)
	* Condition (Good, Bad)
	* Vehicle year
	* Vehicle year made
	* Vehicle license plate number
	* Vehicle mileage
	* Vehicle engine number
	* Vehicle VIN (Vehicle Identification Number)
	* Year purchased
	* Last inspection date
	* Status notes (optional)
	* Status notes photo URL (optional)
	* Status notes video URL (optional)
	* Status notes audio URL (optional)
	* Status notes file URL (optional)
	* Status notes comments (optional)

## Field-by-Field Explanation

* **Vehicle Info** (`vehicle_info`, `text`, required): Enter the vehicle's name, make, and model.
* **Vehicle Status** (`vehicle_status`, `select_one`, required): Select the current status of the vehicle (Good or Bad).
* **Maintenance Needs** (`vehicle_maintenance`, `select_multiple`, required): Select the maintenance needs of the vehicle (Good, Fair, Bad).
* **Vehicle Condition** (`vehicle_condition`, `select_one`, required): Select the condition of the vehicle (Good or Bad).
* **Vehicle Year** (`vehicle_year`, `number`, required): Enter the year of the vehicle.
* **Vehicle Make** (`vehicle_make`, `text`, optional): Enter the vehicle's make (optional).
* **Vehicle Model** (`vehicle_model`, `text`, optional): Enter the vehicle's model (optional).
* **Vehicle Color** (`vehicle_color`, `text`, optional): Enter the vehicle's color (optional).
* **Vehicle Year Made** (`vehicle_year_made`, `date`, required): Enter the year the vehicle was made.
* **Vehicle License** (`vehicle_license`, `date`, required): Enter the vehicle's license plate number.
* **Vehicle Mileage** (`vehicle_mileage`, `number`, required): Enter the vehicle's mileage.
* **Vehicle Engine Number** (`vehicle_engine_number`, `text`, optional): Enter the vehicle's engine number (optional).
* **Vehicle VIN** (`vehicle_vin`, `text`, optional): Enter the vehicle's VIN (Vehicle Identification Number) (optional).
* **Year Purchased** (`vehicle_year_purchased`, `date`, required): Enter the year the vehicle was purchased.
* **Last Inspection** (`vehicle_last_inspection`, `date`, required): Enter the date of the last inspection.
* **Status Notes** (`vehicle_status_notes`, `note`, optional): Enter any additional notes about the vehicle's status (optional).
* **Status Notes Photo URL** (`vehicle_status_notes_photo_url`, `text`, optional): Enter a URL of a photo related to the vehicle's status (optional).
* **Status Notes Video URL** (`vehicle_status_notes_video_url`, `text`, optional): Enter a URL of a video related to the vehicle's status (optional).
* **Status Notes Audio URL** (`vehicle_status_notes_audio_url`, `text`, optional): Enter a URL of an audio file related to the vehicle's status (optional).
* **Status Notes File URL** (`vehicle_status_notes_file_url`, `text`, optional): Enter a URL of a file related to the vehicle's status (optional).
* **Status Notes Comments** (`vehicle_status_notes_comments`, `text`, optional): Enter any additional comments about the vehicle's status (optional).
