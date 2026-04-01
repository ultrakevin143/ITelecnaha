import React from "react";

// 2. Catch-all segment: /blog/category/tech/react
export default async function CategoryPage(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;
  const slugArray = params.slug;
  
  // We use a simple if statement to check if there are any categories in the URL
  let categoryPath = "Root Category";
  if (slugArray && slugArray.length > 0) {
    categoryPath = slugArray.join(" > ");
  }

  return (
    <div className="container md:mx-auto p-10 mt-10 border rounded shadow-sm bg-card">
      <h1 className="text-3xl font-bold mb-4">Category Archive</h1>
      
      <p className="text-lg mb-4">
        Current category path: <b>{categoryPath}</b>
      </p>
      
      <p className="text-muted-foreground">
        (This uses a catch-all segment so it can handle deep nesting like /blog/category/web/frontend/react).
      </p>
    </div>
  );
}
