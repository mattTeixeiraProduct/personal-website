import type { WritingPost } from "@/types";

import introducingCapitalclimb from "./introducing-capitalclimb";
import productiveProductDesigner from "./productive-product-designer";
import learningsFromGreatestBooks from "./learnings-from-greatest-books";
import startupJuniorProductDesigner from "./startup-junior-product-designer";
import aiOutputTrap from "./ai-output-trap";
import mvpsBiggestScam from "./mvps-biggest-scam";

const posts: Record<string, WritingPost> = {
  "introducing-capitalclimb": introducingCapitalclimb,
  "productive-product-designer": productiveProductDesigner,
  "learnings-from-greatest-books": learningsFromGreatestBooks,
  "startup-junior-product-designer": startupJuniorProductDesigner,
  "ai-output-trap": aiOutputTrap,
  "mvps-biggest-scam": mvpsBiggestScam,
};

export default posts;
