 Eventr
## Back end
### API
| Method | Endpoint              | Description                                 | Data |
| :----: | :-------------------- | :------------------------------------------ | :--- |
|  GET   | /events               | List of active events                       |      |
|  GET   | /events/:id           | View event details                          |      |
|  POST  | /events               | Create a new Event                          |      |
|  PUT   | /events/:id           | Update event details                        |      |
| DELETE | /events/:id           | Inactivate and event                        |      |
|  GET   | /events/:id/tasks     | List event tasks                            |      |
|  POST  | /events/:id/tasks     | Add task to event                           |      |
|  PUT   | /tasks/:id            | Update task details                         |      |
| DELETE | /tasks/:id            | Remove task                                 |      |
|  GET   | /events/:id/purchases | Event completed purchases                   |      |
|  POST  | /events/:id/purchases | Add item to shopping cart                   |      |
|  PUT   | /purchases/:id        | Update purchase (used to mark as completed) |      |
| DELETE | /purchases/:id        | Delete purchase                             |      |
|  GET   | /events/:id/cart      | Shopping List for the Event                 |      |
|  POST  | /auth/register        | Register new user                           |      |
|  POST  | /auth/login           | Login                                       |      |
|  GET   | /vendors              | List of active vendors                      |      |
|  GET   | /vendors/:id          | Vendor details                              |      |
|  POST  | /vendors              | Create a vendor                             |      |
|  PUT   | /vendors/:id          | Update vendor information                   |      |
| DELETE | /vendors/:id          | Inactivate a vendor                         |      |
