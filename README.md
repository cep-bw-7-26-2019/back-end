# Eventr API
This API accepts and returns JSON.
### Endpoints
| Method | Endpoint    | Description          | Notes                                                                     |
| :----: | :---------- | :------------------- | :------------------------------------------------------------------------ |
|  GET   | /events     | List of events.      | If the client provides a user Id, only events for that user are returned. |
|  GET   | /events/:id | View event details   | Returns the event or a 404 if one is not found for the provided id        |
|  POST  | /events     | Create a new Event   | The client must send a valid JSON body with the event information.        |
|  PUT   | /events/:id | Update event details | Send an object with the changes that will be applied to the event         |
| DELETE | /events/:id | Inactivate and event | Delete an event and all it's tasks and purchases                          |
## Schemas
The properties for the resources manage through the API are listed below.
### Events
| Property    | Type    | Metadata                                                                |
| :---------- | :------ | :---------------------------------------------------------------------- |
| id          | integer | Primary Key, generated automatically by database                        |
| name        | string  | Required. Max length 255 characters                                     |
| description | string  | Optional. Max length 4000 characters                                    |
| location    | string  | Optional. Max length 4000 characters                                    |
| date        | date    | Optional. Can pass a string formatted as YYYY-MM-DD or a JS date object |
| time        | string  | Optional. Formatted as HH:MM                                            |
| budget      | decimal | Optional. Floating point number                                         |
| user_id     | integer | Must be the id of an existing user                                      |
#### Sample Event Object for a POST
```json
{
  "name": "Showcase Eventr",
  "description": "Present Eventr for Build Weeks",
  "date": "2019-08-02",
  "time": "02:00 PM",
  "budget": 1000.0,
  "user_id": 1,
  "location": "Utah"
}
```
### Users
| Property | Type    | Metadata                                         |
| :------- | :------ | :----------------------------------------------- |
| id       | integer | Primary Key, generated automatically by database |
| username | string  | Required. Max length 128 characters              |
| password | string  | Required. Max length 4000 characters             |
| email    | string  | Optional. Max length 128 characters              |
| company  | string  | Optional. Max length 255 characters              |
| role     | string  | Optional. Max length 255 characters              |