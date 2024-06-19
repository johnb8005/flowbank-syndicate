const ghUrl = "https://github.com/johnb8005/flowbank-syndicate";

export const version: string = import.meta.env.VITE_VERSION || "unset_version";
export const sha: string = import.meta.env.VITE_GIT_SHA || "unset_sha";
export const basename = import.meta.env.BASE_URL;

export const github = {
  sha: `${ghUrl}/commit/${sha}`,
  version: `${ghUrl}/releases/tag/${version}`,
  url: ghUrl,
};
