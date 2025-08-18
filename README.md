# **Saldo**

## A platform for managing personal finances

## Project Todos

- [ ] Change the authentication system from Clerk to JWT or, in the future, AWS Cognito.

  Motivation:

  - Switch to a secure system where only I have the user registry for my app.

- [ ] Change the transaction request and sampling system: from showing only those that occurred in the last 30 days to using a sampling system with pagination.

  Motivation:

  - Prevent users from losing track of their transactions prior to those 30 days
  - Prevent users from accidentally entering a date in the future when recording a new transaction, which would prevent it from being displayed in the registry
