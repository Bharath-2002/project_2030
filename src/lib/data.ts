import data from '@/data/data.json';

export interface Friend {
  id: string;
  name: string;
  slug: string;
  images: {
    homeCard: string;
    profileHero: string;
    profileSquare: string;
  };
  bio: {
    title: string;
    description: string;
    instagramUrl: string;
  };
}

export interface SiteMeta {
  logo: string;
  contactEmail: string;
  aboutText: string;
}

export interface SiteData {
  siteMeta: SiteMeta;
  friends: Friend[];
}

export function getSiteData(): SiteData {
  return data as SiteData;
}

export function getAllFriends(): Friend[] {
  return data.friends as Friend[];
}

export function getFriendBySlug(slug: string): Friend | undefined {
  return data.friends.find((friend) => friend.slug === slug) as Friend | undefined;
}

export function getSiteMeta(): SiteMeta {
  return data.siteMeta as SiteMeta;
}
