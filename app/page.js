import Image from "next/image";
import { Button } from "@/components/ui/button"
import Header from "./dashboard/_components/Header";
import Link from "next/link";


export default function Home() {
  return (
   <div>
          <div className="main-container relative bg-black w-screen h-screen overflow-hidden">
      <div className="blur-circle1 absolute left-[10%] top-[20%] w-[200px] h-[200px] bg-gradient-to-b from-white to-pink rounded-full blur-[120px]"></div>
      <div className="blur-circle2 absolute right-[10%] top-[20%] w-[200px] h-[200px] bg-gradient-to-b from-white to-pink rounded-full blur-[100px]"></div>
      
      {/* Start Landing Page */}
      <div className="landing-page">
        <Header/>
       
        
        <div className="content flex items-center justify-between min-h-[calc(100vh-80px)] p-4 container mx-auto md:flex-row flex-col gap-[140px] md:gap-0 md:justify-between">
          <div className="info w- md:text-left text-center mb-4 md:mb-0">
            <h1 className="text-[44px] text-gray-400">Prepare for Your Next Interview</h1>
            <p className="text-[15px] leading-[1.6] text-gray-400">Practice with mock interviews and receive detailed feedback to understand where you stand.</p>
            <Link href={"/dashboard"}>
            
            <Button className="mt-4 px-6 py-6 bg-primary text-white rounded-xl">Get Started</Button>
            </Link>
          </div>
          <div className="image">
            <img className="main-image w-[600px] h-[400px] object-contain" src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp" alt="Main"/>
          </div>
        </div>
      
        
      </div>
      {/* End Landing Page */}
    </div>
   

   </div>
  );
}
