import { defineConfig } from "vite";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";

const pwaConfig: Partial<VitePWAOptions> = {
  includeAssets: ["shortcut-icon.png", "icon.png", "icon.svg"],
  manifest: {
    name: "BuzzPay",
    short_name: "BuzzPay",
    description: "Alby's super simple self-custodial PoS",
    scope: "/pos/",
    start_url: "",
    background_color: "#FCE589",
    theme_color: "#FCE589",
    display: "standalone",
    icons: [
      {
        src: "shortcut-icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(pwaConfig)],
  base: "/pos/",
  server: {
    host: "0.0.0.0",
  },
});
