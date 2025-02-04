"use client";
export default function BlogError({ error, rest }) {
  return (
    <div className="text-center">
      <p>Something went wrong!</p>
      <p>{error?.message}</p>
      <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-xl rounded-sm transition-all ">
        Try Again
      </button>
    </div>
  );
}
