import React from "react";

// 3. Optional Catch-all segment: /blog/filter or /blog/filter/2023/10
export default async function FilterPage(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const slugArray = params.slug;

  // Simple if-else statement to check if parameters exist
  if (!slugArray || slugArray.length === 0) {
    return (
      <div className="container md:mx-auto p-10 mt-10 border rounded shadow-sm bg-card">
        <h1 className="text-3xl font-bold mb-4">Date Filter</h1>
        <p className="text-lg text-emerald-500">
          Showing all results (No date filter applied).
        </p>
        <p className="text-muted-foreground mt-4">
          (Optional catch-all lets this page load even without a slug).
        </p>
      </div>
    );
  }

  return (
    <div className="container md:mx-auto p-10 mt-10 border rounded shadow-sm bg-card">
      <h1 className="text-3xl font-bold mb-4">Date Filter</h1>
      <p className="text-lg mb-2">You have selected these filters from the URL:</p>
      
      <ul className="list-disc pl-5 mb-4">
        {slugArray.map((item, index) => (
          <li key={index} className="text-lg font-mono text-primary">{item}</li>
        ))}
      </ul>

      <p className="text-muted-foreground">
        (This is great for creating URL filters like /blog/filter/2024/05).
      </p>
    </div>
  );
}
