# NextAuth Session Check Bug in Next.js 15

This repository demonstrates a bug encountered when checking for a NextAuth session on the client-side in a Next.js 15 application.  The issue involves the `unstable_getServerSession` function, which sometimes fails to correctly identify an active session, resulting in the display of an unexpected sign-in message.

## Bug Description
The client-side session check using `unstable_getServerSession` in the `AboutPage` component intermittently shows the "Please sign in" message even when the user is authenticated.  This is inconsistent and disrupts the user experience.

## Setup
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Steps to Reproduce
1. Log in to the application.
2. Navigate to the About page.
3. Refresh the About page multiple times.  You will occasionally see the "Please sign in" message, even though you are logged in.

## Solution
The provided `aboutSolution.js` file showcases a more robust approach to handling authentication, employing server-side props to fetch the session data.

## License
MIT