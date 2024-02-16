# Blog Admin

This project is the admin frontend for the blog api. It is built with React, Vite, React Router, and styled-components. it'll be used by the admin only to manage the blog posts and comments.

the blog api models are:

1. User
   - username: String
   - password: String
   - email: String
   - type: String
2. Post
   - title: String
   - content: String
   - author: User
   - published: Boolean
   - createdAt: Date
   - likesCount: Number
3. Comment
   - content: String
   - author: User
   - post: Post
   - createdAt: Date
   - likesCount: Number
   - replies: [Comment]

the API Endpoints are:

All routes are prefixed with `/blog` except for the login route.

- `GET /posts`: Get all posts.
- `GET /posts/:id`: Get a specific post.
- `POST /posts`: Create a new post. Requires admin privileges.
- `PUT /posts/:id`: Update a specific post. Requires admin privileges.
- `DELETE /posts/:id`: Delete a specific post. Requires admin privileges.
- `PATCH /posts/:id/like`: Like a specific post.
- `PATCH /posts/:id/unlike`: Unlike a specific post.
- `GET /posts/:id/comments`: Get all comments for a specific post.
- `POST /posts/:id/comments`: Add a comment to a specific post.
- `DELETE /posts/:id/comments/:commentId`: Delete a specific comment. Requires the user to be the author of the comment or an admin.
- `PATCH /comments/:id/like`: Like a specific comment.
- `PATCH /comments/:id/unlike`: Unlike a specific comment.

1. when the user opens the app, they should be met with a login form at the route `blog/admin/login`.
2. after logging in, the system will check if the user type is admin or not, if the user is not an admin, the system will show an error message. if the user is an admin, the system will redirect the user to the dashboard at the route `blog/admin/dashboard`.
3. the dashboard should display a header that ha a title "Blog Dashboard" and a button to add a new post called "Write a new post". and below the header, the system should display 3 horizontal tabs: "Drafts", "Published", "Responses". the default tab should be "Drafts".
4. when the user clicks on the "Write a new post" button, the system should display a Title input, a rich text editor for the post content, and a button to publish the post at route `blog/admin/create`. when the user clicks on the publish button, the system should send a POST request to the server to create a new post and then redirect the user to the "Published" tab.
5. However, if user doesnt click publish, the system should save the post as a draft and redirect the user to the "Drafts" tab.
6. when the user clicks on a post in the "Drafts" tab, the system should redirect the user to the "Edit" page at route `blog/admin/edit/:id` where the user can edit the post and then click on the "Publish" button to publish the post or click on the "Save draft" button to save the post as a draft if the user clicks on back arrow in the browser, the system should automatically save the post as a draft and redirect the user to the "Drafts" tab.
