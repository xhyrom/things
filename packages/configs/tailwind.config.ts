import type { Config } from "tailwindcss";
import colors from "@xhyrom/colour-palette/colors.json" assert { type: "json" };

export default (
  options: Partial<{
    colors?: Record<string, string>;
  }> &
    Config,
): Config => ({
  theme: {
    extend: {
      colors: {
        ...colors,
        ...(options.colors ?? {}),
      },
    },
  },
  ...options,
});
