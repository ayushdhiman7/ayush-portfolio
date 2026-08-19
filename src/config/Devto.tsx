/**
 * Dev.to blog sync configuration
 * New published articles appear automatically via the Dev.to API.
 */
export const devtoConfig = {
  username: 'saurabh_singh_86cdc588e85',
  apiUrl: 'https://dev.to/api',
  /** Revalidate listing/content every hour so new posts show up without a redeploy */
  revalidateSeconds: 3600,
  fallbackImage: '/meta/blogs.png',
};
