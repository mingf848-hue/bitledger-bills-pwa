import type { Profile } from "@/lib/types/profile";

export async function getProfile(): Promise<Profile> {
  return {
    id: "profile-1",
    userId: "user-1",
    displayName: "Mina Chen",
    avatarUrl: null,
    defaultCurrency: "AED",
    locale: "zh-CN",
    timezone: "Asia/Manila",
    createdAt: "2026-04-01T10:00:00.000Z",
    updatedAt: "2026-04-23T10:00:00.000Z",
  };
}
