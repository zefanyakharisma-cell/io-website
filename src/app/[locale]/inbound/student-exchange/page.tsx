import { redirectPage } from "@/lib/redirect-page";

// Moved to /mobility/inbound/student-exchange (KUI's new menu, WEBSITE IO "NEW UPDATED").
const r = redirectPage("/mobility/inbound/student-exchange");
export const generateStaticParams = r.generateStaticParams;
export const generateMetadata = r.generateMetadata;
export default r.Page;
