import { sleep } from "~/utils";
import type { Route } from "./+types/settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Settigns" },
    { name: "description", content: "Settigns page" },
  ];
}

export async function clientLoader() {
  await sleep(1000);
  console.log("Settings clientLoader");
  return { name: "Settings" };
}

console.log("SettingsRoute");

export default function SettingsRoute() {
  return (
    <div>
      <h1>Settings</h1>
    </div>
  );
}
