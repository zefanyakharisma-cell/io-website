import { redirectPage } from "@/lib/redirect-page";

// Moved to /mobility/inbound (KUI's new menu, WEBSITE IO "NEW UPDATED").
const r = redirectPage("/mobility/inbound");
export const generateStaticParams = r.generateStaticParams;
export const generateMetadata = r.generateMetadata;
export default r.Page;
