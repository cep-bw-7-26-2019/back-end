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
Clients must provide a value for all properties marked as `required`.
A property marked as `unique` means that the same value cannot be repeated for different records. For example if a record exist with a particular `email` the API will return an error if a client tries to add another record with the same `email`.
### Events
| Property    | Type    | Metadata                                                                |
| :---------- | :------ | :---------------------------------------------------------------------- |
| id          | integer | Primary Key, generated automatically by the database                    |
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
| Property | Type    | Metadata                                             |
| :------- | :------ | :--------------------------------------------------- |
| id       | integer | Primary Key, generated automatically by the database |
| username | string  | Required, Unique. Max length 128 characters          |
| password | string  | Required. Max length 4000 characters                 |
| email    | string  | Required, unique. Max length 128 characters          |
| company  | string  | Optional. Max length 255 characters                  |
| role     | string  | Optional. Max length 255 characters                  |
### Vendors
The vendors are used when making purchases of products or services related to an event.
| Property | Type    | Metadata                                             |
| :------- | :------ | :--------------------------------------------------- |
| id       | integer | Primary Key, generated automatically by the database |
| name     | string  | Required, Unique. Max length 255 characters          |
### Tasks
A `task` is an activity that needs to be completed as part of organizing an event.
| Property    | Type    | Metadata                                             |
| :---------- | :------ | :--------------------------------------------------- |
| id          | integer | Primary Key, generated automatically by the database |
| description | string  | Required. Max length 4000 characters                 |
| event_id    | integer | Must be the id of an existing event                  |
### Purchases
A record of products or services acquired to complete an event.
The `cost` is the total cost of the purchase. If 10 boxes of confetti are bought at $5 each, the cost will be $50.
| Property  | Type    | Metadata                                             |
| :-------- | :------ | :--------------------------------------------------- |
| id        | integer | Primary Key, generated automatically by the database |
| item      | string  | Required. Max length 255 characters                  |
| event_id  | integer | Must be the id of an existing event                  |
| vendor_id | integer | Must be the id of an existing vendor                 |
| quantity  | decimal | Optional. Floating point number                      |
| cost      | decimal | Optional. Floating point number                      |