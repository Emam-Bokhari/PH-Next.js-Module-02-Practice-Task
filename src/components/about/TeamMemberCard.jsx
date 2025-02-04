export default function TeamMemberCard({ teamMember }) {
  const { name, email, address } = teamMember;
  return (
    <div className="border-2 border-gray-500 rounded-md p-4">
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <p>City: {address.city}</p>
    </div>
  );
}
