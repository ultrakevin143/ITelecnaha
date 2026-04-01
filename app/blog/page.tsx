import { BlogList } from "@/components/features/blog/BlogList";

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-5xl font-bold tracking-tighter mb-10">My Blog</h1>
      <BlogList />
    </div>
  );
}
