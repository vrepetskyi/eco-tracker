import { Card, Link, Typography } from "@mui/material";

export default function Article({ image, name, url }) {
  return (
    <Card>
      <Link
        tabIndex={-1}
        href={url}
        sx={{ display: "flex", flexDirection: "column", height: 300 }}
      >
        <img
          src={image}
          alt={name + " article preview"}
          style={{ height: 220, objectFit: "cover", filter: "grayscale(0.75)" }}
        />
        <Typography
          m={2}
          color="primary"
          sx={{
            fontWeight: "400",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": "2",
            "-webkit-box-orient": "vertical",
          }}
        >
          {name}
        </Typography>
      </Link>
    </Card>
  );
}
