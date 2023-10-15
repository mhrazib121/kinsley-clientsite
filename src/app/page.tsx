import PublicHeader from "@/components/view/Header/PublicHeader/PublicHeader";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/AuthOptions";
import { Header } from "@/components/Shared/Header";
import Support from "@/Container/Home/Support";
import Services from "@/Container/Home/Services";
import Testimonials from "@/Container/Home/Testimonials";

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
      <div className="min-h-[calc(100vh-64px)]"> </div>
    </div>
  );
}
