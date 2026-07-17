import { useState } from "react";

type LogoTone = "light" | "dark";

export function useLogoTone(_src: string): {
  tone: LogoTone;
  imgProps: { onLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void };
} {
  // Default to "dark" (white chip) so the chip is white before analysis
  // completes, avoiding a black flash on first load.
  const [tone, setTone] = useState<LogoTone>("dark");

  const onLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    try {
      const img = e.currentTarget;
      const canvas = document.createElement("canvas");
      const size = 16;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, size, size);
      const { data } = ctx.getImageData(0, 0, size, size);
      let total = 0;
      let count = 0;
      for (let i = 0; i < data.length; i += 4) {
        const alpha = data[i + 3];
        if (alpha < 16) continue;
        const luminance =
          0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        total += luminance;
        count += 1;
      }
      if (count === 0) return;
      const avg = total / count;
      setTone(avg > 186 ? "light" : "dark");
    } catch {
      // Canvas read can fail (e.g. tainted canvas); keep the default tone.
    }
  };

  return { tone, imgProps: { onLoad } };
}
