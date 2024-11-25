import { sleep } from "~/utils";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Home page" },
  ];
}

export async function clientLoader() {
  await sleep(1000);
  console.log("Home clientLoader");
  return { name: "Home" };
}

console.log("HomeRoute");

export default function HomeRoute() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
