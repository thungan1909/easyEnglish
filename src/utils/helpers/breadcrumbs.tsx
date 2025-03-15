import { FaHome } from "react-icons/fa";
import { JSX } from "react";
import { ROUTES_CONSTANTS } from "../../routers/constants";

export type TBreadcrumbItem = {
  href: string;
  label: string;
  icon?: JSX.Element;
};

/**
 * Tạo breadcrumbs động dựa trên loại trang.
 * @param pageType Loại trang (lesson, listenLesson, profile, settings)
 * @param options Các tùy chọn bổ sung như id, title, type, v.v.
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
        label: options?.type ? `Listen (${options.type})` : "Listen",
      });
      break;

    case "profile":
      breadcrumbs.push({
        href: ROUTES_CONSTANTS.PROFILE.BASE,
        label: "Profile",
      });
      break;

    case "settings":
      breadcrumbs.push({
        href: ROUTES_CONSTANTS.SETTINGS.BASE,
        label: "Settings",
      });
      break;
  }

  return breadcrumbs;
};
