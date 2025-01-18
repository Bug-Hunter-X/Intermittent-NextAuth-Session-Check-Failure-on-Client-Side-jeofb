```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session: session,
    },
  };
}
export default function AboutPage({ session }) {
  if (!session) {
    return (
      <div>
        <h1>Please sign in to view this page.</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Welcome to the About Page, {session.user.name}!</h1>
    </div>
  );
}
```