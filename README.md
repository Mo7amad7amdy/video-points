# Project

For score a points for watching videos and answer a quiz.

## Installation

First clone the project.

```bash
git clone https://github.com/Mo7amad7amdy/video-points.git
```

Then we’ll create a MySQL database and set up environment variables to give the application access to the database.

Let’s copy env.example to .env and update the database related variables and pusher setting

```
cp .env.example .env
```
Than run migrate and Seeds for create DB and Admin User.

```
php artisan migrate --seed
```
Finally, execute the following command

```
php artisan storage:link
```

## Usage
Login as a Admin by following this account:

email: admin@admin.com

password: 12345678

and upload a new video with a question and click on open to see your video and add a options to your question.
