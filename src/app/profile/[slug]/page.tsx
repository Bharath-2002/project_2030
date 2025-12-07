import { notFound } from 'next/navigation';
import { getFriendBySlug, getAllFriends } from '@/lib/data';
import ProfileContent from '@/components/ProfileContent';

interface ProfilePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const friends = getAllFriends();
  return friends.map((friend) => ({
    slug: friend.slug,
  }));
}

export async function generateMetadata({ params }: ProfilePageProps) {
  const { slug } = await params;
  const friend = getFriendBySlug(slug);

  if (!friend) {
    return { title: 'Not Found' };
  }

  return {
    title: `${friend.name} | 2030`,
    description: friend.bio.description,
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const friend = getFriendBySlug(slug);

  if (!friend) {
    notFound();
  }

  return <ProfileContent friend={friend} />;
}
