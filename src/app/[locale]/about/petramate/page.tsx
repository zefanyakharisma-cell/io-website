import { redirectPage } from "@/lib/redirect-page";

// Moved to /international-students/petramate (KUI's new menu, WEBSITE IO "NEW UPDATED").
const r = redirectPage("/international-students/petramate");
export const generateStaticParams = r.generateStaticParams;
export const generateMetadata = r.generateMetadata;
export default r.Page;
