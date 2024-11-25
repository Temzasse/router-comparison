import { sleep } from "~/utils";
import type { Route } from "./+types/profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Profile" },
    { name: "description", content: "Profile page" },
  ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  await sleep(1000);
  console.log("Profile clientLoader");
  return { name: "Profile" };
}

console.log("ProfileRoute");

export default function ProfileRoute() {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}
