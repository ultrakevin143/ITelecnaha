import React from "react";

// 1. Single dynamic segment: /blog/my-first-post
export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  // We wait for the params to load first
  const params = await props.params;
  const slug = params.slug;
  
  return (
    <div className="container md:mx-auto p-10 mt-10 border rounded shadow-sm bg-card">
      <h1 className="text-3xl font-bold mb-4">Blog Post Title</h1>
      <p className="text-lg">
        You are currently reading the blog post with the slug: <b>{slug}</b>
      </p>
      <br />
      <p className="text-muted-foreground">
        (This is a simple example of a single dynamic route for beginners.)
      </p>
    </div>
  );
}
