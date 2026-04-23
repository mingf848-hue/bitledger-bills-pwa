export type Category = {
  id: string;
  userId: string;
  name: string;
  type: "expense" | "income" | "wealth" | "transfer";
  icon: string;
  color: string;
  parentId: string | null;
  isSystem: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};
