import { FaHome } from "react-icons/fa";
import { JSX } from "react";
import { ROUTES_CONSTANTS } from "../../routers/constants";

export type TBreadcrumbItem = {
  href: string;
  label: string;
  icon?: JSX.Element;
};

/**
 * Generate dynamic breadcrumbs based on page type.
 * @param pageType Page type (lesson, listenLesson, profile, settings)
 * @param options Additional options like id, title, type, etc.
 */
export const generateBreadcrumbs = (
  pageType: "lesson" | "listenLesson" | "profile" | "settings",
  options?: { id?: string; title?: string; type?: string }
): TBreadcrumbItem[] => {
  const breadcrumbs: TBreadcrumbItem[] = [
    { href: ROUTES_CONSTANTS.DASHBOARD, label: "Home", icon: <FaHome /> },
  ];

  switch (pageType) {
    case "lesson":
      breadcrumbs.push({ href: ROUTES_CONSTANTS.LESSON.BASE, label: "Lesson" });
      if (options?.id) {
        breadcrumbs.push({
          href: ROUTES_CONSTANTS.LESSON.DETAIL.replace(":id", options.id),
          label: options.title || "Lesson Details",
        });
      }
      break;

    case "listenLesson":
      breadcrumbs.push({ href: ROUTES_CONSTANTS.LESSON.BASE, label: "Lesson" });
      if (options?.id) {
        breadcrumbs.push({
          href: ROUTES_CONSTANTS.LESSON.DETAIL.replace(":id", options.id),
          label: options.title || "Lesson Details",
        });
      }
      breadcrumbs.push({
        href: `${ROUTES_CONSTANTS.LESSON.LISTEN.TYPE.BASE}?id=${options?.id}`,
        label: options?.type
          ? `Listen (${
              options.type === "withoutHint" ? "Without Hint" : "Hint"
            })`
          : "Listen",
      });
      break;

    case "settings":
      breadcrumbs.push({
        href: ROUTES_CONSTANTS.USER.SETTINGS,
        label: "Settings",
      });
      break;
  }

  return breadcrumbs;
};
