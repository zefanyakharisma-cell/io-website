import { redirectPage } from "@/lib/redirect-page";

// Moved to /mobility/outbound (KUI's new menu, WEBSITE IO "NEW UPDATED").
const r = redirectPage("/mobility/outbound");
export const generateStaticParams = r.generateStaticParams;
export const generateMetadata = r.generateMetadata;
export default r.Page;
