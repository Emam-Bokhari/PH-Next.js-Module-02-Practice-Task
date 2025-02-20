import TeamMemberCard from "@/components/modules/about/TeamMemberCard";

export default async function AboutPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache",
  });
  const teamMembers = await response.json();
  return (
    <div className="grid grid-cols-3 gap-4 my-10">
      {teamMembers?.slice(0, 3)?.map((teamMember) => (
        <TeamMemberCard key={teamMember.id} teamMember={teamMember} />
      ))}
    </div>
  );
}
