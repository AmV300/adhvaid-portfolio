import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#181817",
          color: "#F5F3EC",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          fontSize: 19,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-1px",
          width: "100%",
        }}
      >
        AMV.
      </div>
    ),
    size,
  );
}
