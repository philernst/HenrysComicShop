export const SITE_URL = 'https://henryscomicshop.com';
export const SITE_NAME = "Henry's Comic Shop";
export const SITE_DEFAULT_DESCRIPTION =
  "A free vault of original comics drawn by Henry, age 8 \u2014 dragons, space pirates, lightsaber duels, and more. Read every issue online or download to read offline.";
export const SITE_DEFAULT_IMAGE = '/henry-avatar.png';

export function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return SITE_URL;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}
