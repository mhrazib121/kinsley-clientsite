import AdditionalServices from "@/Container/Home/AdditionalServices";
import Services from "@/Container/Home/Services";
import Support from "@/Container/Home/Support";
import Testimonials from "@/Container/Home/Testimonials";
import { Header } from "@/components/Shared/Header";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/AuthOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session, "session");
  return (
    <div>
      {/* <PublicHeader /> */}
      <Header />
      <Support />
      <Services />
      <Testimonials />
      <AdditionalServices />
      <div className="min-h-[calc(100vh-64px)]"> </div>
    </div>
  );
}
