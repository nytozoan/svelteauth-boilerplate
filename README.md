# Basic Auth with Toastsss!

Basic Authentication for svelte with routes and toast notifications.

## Requirements

- Use a writable store to store user data, toast data, and currently logged in user.
- Use `goto` to redirect to a page
- Toast Notification must accept a message and a type
- Use Pick, Omit to create a new type from the given base Types below.
- Additional types are, ToastCreate, UserRegister, UserLogin
- `/dashboard` will redirect users to login if there is no user logged in.
- A `GenericMessage` type, with status and message properties. Should be the default returns from Login,logout,Register

### Data Types

```ts
type User = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	role: 'ADMIN' | 'USER' | 'GUEST';
};

type Toast = {
	id: number;
	text: string;
	dismissible: boolean;
	duration: number;
	type: 'success' | 'error' | 'warning' | 'info';
};
```

- ### Authentication

1.  Login when success directs to dashboard and then the dashboard checks for user role and displays content accordingly
2.  Register when success directs to login page, use `goto('/login', {replaceState: true})` to persist state history.
3.  On dashboard a `Welcome back ${lastName, firstName}` should be shown and a `logout` button.

- ### Toast Notifications

1.  When User is logged in Notification
2.  When User is Registered Notification
3.  When User is Logged out Notification
4.  Invalid Credentials Notification
5.  When Email is already exists Notification
6.  When Password is not the same as confirm password Notification
7.  A demo of toasts with actionable buttons in home page
8.  Toast Notifications will be displayed on the top right corner of the screen.

- ### Authorization

1. All routes once use is logged in must redirect to `/dashboard`;

- ### Notes

- Always use `goto('location', {replaceState: true})` to redirect to a page so we preserve the state of the application.
- We don't have a persistent data yet and must rely on stores

### Pages to read about the requirements

- [Svelte Stores](https://svelte.dev/tutorial/writable-stores)
- [Svelte goto](https://kit.svelte.dev/docs/modules#$app-navigation-goto)
- [Toasts](https://svelte.dev/repl/0091c8b604b74ed88bb7b6d174504f50?version=3.35.0)
- [Pick, Omit](https://www.typescriptlang.org/docs/handbook/utility-types.html)
