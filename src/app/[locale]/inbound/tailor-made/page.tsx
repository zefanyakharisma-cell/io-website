import { redirectPage } from "@/lib/redirect-page";

// Moved to /collaboration (KUI's new menu, WEBSITE IO "NEW UPDATED").
const r = redirectPage("/collaboration");
export const generateStaticParams = r.generateStaticParams;
export const generateMetadata = r.generateMetadata;
export default r.Page;
