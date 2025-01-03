"use client";

import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt ? alt : "Background of beautiful view"}
        loading="lazy"
        decoding="async"
        blurDataURL={typeof src === "string" ? src : undefined}
        onLoad={() => setLoading(false)}
        className={cn(
          "transition duration-300",
          loading ? "blur-sm" : "blur-0",
          className
        )}
        {...rest}
      />
    </>
  );
};
