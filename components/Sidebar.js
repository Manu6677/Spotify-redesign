import Image from "next/image";
import { AiFillHome, AiFillCompass, AiFillClockCircle } from "react-icons/ai";
import { FaMicrophoneAlt } from "react-icons/fa";
import { BsFillBarChartFill, BsThreeDots } from "react-icons/bs";

function Sidebar() {
  return (
    <section
      className="fixed top-0 z-40 flex flex-col p-4 items-center
     bg-black w-90 h-screen space-y-8"
    >
      <Image
        src="https://rb.gy/xkacau"
        width={56}
        height={56}
        objectFit="contain"
      />
      <div className="space-y-8">
        <AiFillHome className="sidebarIcon text-white" />
        <AiFillCompass className="sidebarIcon" />
        <FaMicrophoneAlt className="sidebarIcon" />
        <AiFillClockCircle className="sidebarIcon" />
        <BsFillBarChartFill className="sidebarIcon" />
        <BsThreeDots className="sidebarIcon" />
      </div>
    </section>
  );
}

export default Sidebar;
