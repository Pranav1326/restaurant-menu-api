# restaurant-menu-api

In the project's root directory, run the command `npm i`.

The project won't run without environment variables. Create an file `.env` and put the following content init.

```
MONGODB_PROFILE=WebTechUser
MONGODB_PASSWORD=WebTechIsSecured
TOKEN_KEY=ENCRYPTED-TOKEN
```

Now to start the API run `npm start`. This message should appear on the console 

```
Server started on port: 7080
MongoDB Connected!
```