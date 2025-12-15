/**
 * Convex Auth Configuration for Clerk
 * 
 * To find your Clerk issuer URL:
 * 1. Go to your Clerk Dashboard (https://dashboard.clerk.com)
 * 2. Navigate to API Keys > Advanced > JWT Templates
 * 3. Or check the main API Keys page
 * 4. Look for the "Issuer" field - it should look like:
 *    https://your-project.clerk.accounts.dev
 * 
 * Make sure the domain matches EXACTLY what Clerk uses in the JWT token's "iss" field.
 * The applicationID "convex" is the standard value for Clerk integrations.
 */
export default {
  providers: [
    {
      domain: "https://sensible-terrapin-70.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
};