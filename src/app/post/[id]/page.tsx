// src/app/post/[id]/page.tsx
import ClientPostPage from "./ClientPostPage";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;  // ✅ Correct way to unwrap in Next.js 16+

  return <ClientPostPage id={id} />;
}
