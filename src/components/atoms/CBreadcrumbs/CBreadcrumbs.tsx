import { Breadcrumbs, Link, Typography } from "@mui/material";
import { IBreadcrumbs } from "./types";

const CBreadcrumbs = ({ menuItem, className }: IBreadcrumbs) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" className={className}>
      {menuItem.map((item, index) =>
        menuItem.length === 1 || index !== menuItem.length - 1 ? (
          <Link
            key={index}
            href={item.href}
            underline="hover"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: "var(--main-color)",
            }}
          >
            {item.icon} {item.label}
          </Link>
        ) : (
          <Typography
            key={index}
            // color="text.primary"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: "var(--main-color)",
            }}
          >
            {item.icon} {item.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
};
export default CBreadcrumbs;
