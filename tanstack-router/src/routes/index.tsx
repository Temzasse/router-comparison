import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div>
      <h3>Home</h3>
    </div>
  );
}
