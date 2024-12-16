import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <div style={{ display: "flex", gap: "12px" }}>
        <Link
          to="/"
          activeProps={{ className: "font-bold" }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
        <Link to="/about" activeProps={{ className: "font-bold" }}>
          About
        </Link>
        <Link to="/countries" activeProps={{ className: "font-bold" }}>
          Countries
        </Link>
        <Link to="/suspense" activeProps={{ className: "font-bold" }}>
          Suspense
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
