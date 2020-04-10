# README

This is a demo bank where users can check his balance and send money to recipients.

# Ruby version
2.7

# Node version
12

# Deployment instructions

1. Install gems

```
bundle install
```

2. Run migration and seed

```
rails db:migrate
rails db:seed
```

It will set up 3 users as following:

| Email | Password | Amount($) |
| --- | --- | --- |
| tim@example.com | password | 300 |
| john@example.com | password | 200 |
| jane@example.com | password | 100 |

3. Start app

```
foreman start
```

It will start the app at http://localhost:3000.

Enjoy!
