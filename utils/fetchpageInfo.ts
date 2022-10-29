import { PageInfo } from "../typings";

export const fetchpageInfo = async() =>{
   const baseUrl = process.env.NODE_ENV === "production" ? "https://mohitkrsuman.vercel.app" : "http://localhost:3000";
   const res = await fetch(`${baseUrl}/api/getPageInfo`);
   const data = await res.json();
   const pageInfo : PageInfo = data.pageInfo;

   return pageInfo;
}