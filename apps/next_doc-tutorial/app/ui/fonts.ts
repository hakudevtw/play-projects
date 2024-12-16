// Next downloads font files at build time and hosts them with your other static assets when using next/font.

import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({ subsets: ["latin"], weight: ["400", "700"] });
