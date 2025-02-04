export default function BlogCard({ blog }) {
  const { title, body } = blog;
  return (
    <div className="border-2 border-gray-500 p-4 rounded-md">
      <h2 className="mb-4">{title}</h2>
      <div className="border-b-2  border-black"></div>
      <p className="mt-4">{body}</p>
    </div>
  );
}
