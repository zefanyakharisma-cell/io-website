import { redirectPage } from "@/lib/redirect-page";

// Moved to /international-students (KUI's new menu, WEBSITE IO "NEW UPDATED").
const r = redirectPage("/international-students");
export const generateStaticParams = r.generateStaticParams;
export const generateMetadata = r.generateMetadata;
export default r.Page;
