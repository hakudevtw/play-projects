## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Rendering Strategies

### Static Rendering

- data fetching and rendering happens on the server at build time (when you deploy) or when revalidating data
- Whenever a user visits your application, the cached result is served. There are a couple of benefits of static rendering:
  - Faster Websites - Prerendered content can be cached and globally distributed. This ensures that users around the world can access your website's content more quickly and reliably.
  - Reduced Server Load - Because the content is cached, your server does not have to dynamically generate content for each user request.
  - SEO - Prerendered content is easier for search engine crawlers to index, as the content is already available when the page loads. This can lead to improved search engine rankings.
- Static rendering is useful for UI with no data or data that is shared across users, such as a static blog post or a product page. It might not be a good fit for a dashboard that has personalized data which is regularly updated
- The opposite of static rendering is dynamic rendering
- When your data updates, you want to show the latest changes in your dashboard. Static Rendering is not a good fit for this use case

### Dynamic Rendering

- content is rendered on the server for each user at request time (when the user visits the page)
- There are a couple of benefits of dynamic rendering:
  - Real-Time Data - Dynamic rendering allows your application to display real-time or frequently updated data. This is ideal for applications where data changes often.
  - User-Specific Content - It's easier to serve personalized content, such as dashboards or user profiles, and update the data based on user interaction.
  - Request Time Information - Dynamic rendering allows you to access information that can only be known at request time, such as cookies or the URL search parameters.
- With dynamic rendering, your application is only as fast as your slowest data fetch, which can lead to slower page load times

## Streaming

- Streaming is a data transfer technique that allows you to break down a route into smaller "chunks" and progressively stream them from the server to the client as they become ready
- By streaming, you can prevent slow data requests from blocking your whole page. This allows the user to see and interact with parts of the page without waiting for all the data to load before any UI can be shown to the user
- There are two ways you implement streaming in Next.js:
  - At the page level, with the loading.tsx file
  - or specific components, with <Suspense>

### Suspense Boundary

- Where you place your Suspense boundaries will depend on a few things:
  - How you want the user to experience the page as it streams.
  - What content you want to prioritize.
  - If the components rely on data fetching.
- Different Decisions
  - You could stream the whole page like we did with loading.tsx... but that may lead to a longer loading time if one of the components has a slow data fetch.
  - You could stream every component individually... but that may lead to UI popping into the screen as it becomes ready.
  - You could also create a staggered effect by streaming page sections. But you'll need to create wrapper components.
- In general, it's good practice to move your data fetches down to the components that need it, and then wrap those components in Suspense. But there is nothing wrong with streaming the sections or the whole page if that's what your application needs.

### Partial Pre-rendering

- currently experimental, not recommended for production, install next@canary if you want to try it out
- most routes are not fully static or dynamic. For example, consider an ecommerce site. You might want to statically render the majority of the product information page, but you may want to fetch the user's cart and recommended products dynamically, this allows you show personalized content to your users.
- holes in the context of Partial Prerendering are locations where dynamic content will load asynchonously
- You may not see a difference in your application in development, but you should notice a performance improvement in production. Next.js will prerender the static parts of your route and defer the dynamic parts until the user requests them.

## Search Queries

- benefits of implementing search with URL params:
  - Bookmarkable and Shareable URLs: Since the search parameters are in the URL, users can bookmark the current state of the application, including their search queries and filters, for future reference or sharing
  - Server-Side Rendering and Initial Load: URL parameters can be directly consumed on the server to render the initial state, making it easier to handle server rendering
  - Analytics and Tracking: Having search queries and filters directly in the URL makes it easier to track user behavior without requiring additional client-side logic
- As a general rule, if you want to read the params from the client, use the useSearchParams() hook as this avoids having to go back to the server.

### pagination

- you can fetch the data on the server, and pass it to the component as a prop
  - Authentication is about making sure the user is who they say they are. You're proving your identity with something you have like a username and password.
  - Authorization is the next step. Once a user's identity is confirmed, authorization decides what parts of the application they are allowed to use.

### Authentication

- In web development, authentication and authorization serve different roles:

### Others

- UUIDs vs. Auto-incrementing Keys
  - UUIDs eliminate the risk of ID collision, are globally unique, and reduce the risk of enumeration attacks - making them ideal for large databases.
- Form Validation
  - Server-Side validation
    - Ensure your data is in the expected format before sending it to your database.
    - Reduce the risk of malicious users bypassing client-side validation.
    - Have one source of truth for what is considered valid data.
