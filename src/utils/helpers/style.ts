export const getLinkClassName = (href: string) => {
  return location.pathname === href
    ? "text-purple-500 font-bold"
    : "text-gray-700 hover:text-purple-500";
};
