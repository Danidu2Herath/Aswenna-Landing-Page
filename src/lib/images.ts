/**
 * Images that still need real artwork live under /images/placeholders/.
 * Components key the small "placeholder" badge off this, so the badge
 * disappears on its own the moment a real photograph is dropped in.
 */
export const PLACEHOLDER_DIR = "/images/placeholders/";

export const isPlaceholder = (src: string) => src.startsWith(PLACEHOLDER_DIR);
