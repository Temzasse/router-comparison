import { rootRoute, route, index, layout } from "@tanstack/virtual-file-routes";

export const routeConfig = rootRoute("root.tsx", [
  layout("layout.tsx", [
    index("index.tsx"),
    route("/about", "about.tsx"),
    route("/profile", "profile.tsx"),
    route("/countries", "country-list/country-list.route.tsx"),
    route("/countries_/$id", "country-details/country-details.route.tsx"),
  ]),
]);
