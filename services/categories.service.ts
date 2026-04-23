import type { Category } from "@/lib/types/category";

export async function getCategories(): Promise<Category[]> {
  return [
    {
      id: "cat-shopping",
      userId: "user-1",
      name: "购物",
      type: "expense",
      icon: "shopping-bag",
      color: "#FF5A6B",
      parentId: null,
      isSystem: true,
      sortOrder: 1,
      createdAt: "2026-04-01T10:00:00.000Z",
      updatedAt: "2026-04-23T10:00:00.000Z",
    },
  ];
}
