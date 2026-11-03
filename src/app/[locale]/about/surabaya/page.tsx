import { redirectPage } from "@/lib/redirect-page";

// Moved to /international-students/surabaya (KUI's new menu, WEBSITE IO "NEW UPDATED").
const r = redirectPage("/international-students/surabaya");
export const generateStaticParams = r.generateStaticParams;
export const generateMetadata = r.generateMetadata;
export default r.Page;
