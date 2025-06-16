# API List

## User Module

### Authenticaion

`signup`

#### POST /api/auth/signup
- **Description**: Register user
- **Request Body**:
```json
{
    "username": "user1301",
    "email": "user@example.com",
    "password": "secret123"
}
```
- **Response Body**:
```json
{
    "id": "7a231009-4020-4423-a055-798bba0b8986",
    "username": "user1",
    "email": "first1@gmail.com",
    "role": "explorer",
    "token": "..."
}
```
- **Status Code:**   
On Success: 201 (created)  
On Failure: 500 (internal server error)




`signin`

#### POST /api/auth/signin
- **Description**: Authenticate user
- **Request Body**:
```json
{
    "username": "user1",
    "email": "first1@gmail.com",
    "password": "first"
}
```

- **Response Body**:
```json
{
    "username": "user1",
    "email": "first1@gmail.com",
    "role": "explorer",
    "token": "..."
}
```

- **Status Code:**  
On Success: 200 (ok)   
On Failure: 500 (internal server error)


`signout`

#### POST /api/auth/signout
- **Description**: Signout user
- **Request Headers**:
```json
{
    Cookie:token=eyJhbGc...
}
```

- **Response Body**:
```json
{
    "message": "signed out successfully"
}
```

- **Status Code:**  
On Success: 200 (ok)   
On Failure: 404 (user)


`reset password`

### User Handling

`user`
`updateProfile`





## Post Module

`image upload`

#### POST /api/posts/upload/image
External API call:
```http
POST https://api.cloudinary.com/v1_1/<cloud_name>/image/upload
``` 
