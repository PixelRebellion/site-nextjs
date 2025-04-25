import { createSlug } from '@/utils/helper';
import React from 'react';

// Assuming you have a way to get your works data, e.g., from an API or local file
// Replace this with your actual data fetching logic
const getWorksData = async () => {
  // Example data
  return [
    { slug: 'work-1' },
    { slug: 'work-2' },
    { slug: 'work-3' },
    { slug: 'work-4' },
  ];
};

export async function generateStaticParams() {
  const works = await getWorksData();

  // generateStaticParams should return an array of objects,
  // where each object represents a single path.
  // The key of the object should match the dynamic segment name (e.g., `works`).
  return works.map((work) => ({
    works: createSlug(work.slug),
  }));
}

// Define the shape of the resolved params object
interface PageParams {
  works: string;
}

// In the Next.js App Router, the `params` prop is a Promise.
// Type the component's props to reflect this.
const RebelWorksPageShowcase = async ({ params }: { params: Promise<PageParams> }) => {
  // Await the params Promise to get the resolved parameter object
  const resolvedParams = await params;
  const { works } = resolvedParams; // Extract the specific work slug

  return (
    // Example: Display the current work slug
    <div>Showcasing work: {works}</div>
  );
};

export default RebelWorksPageShowcase;