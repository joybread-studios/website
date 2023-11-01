import { Carousel } from "../lib/Carousel";
export default function ProjectSection () {
    const slides1 = [
        { title: "Landlord Utility Tool", description: "A utility calculator tool specifically made for a client.", photo: "/landlordutilitytool-sample.png", url: "https://landlord-utility-tool.vercel.app/" },
    ];
    
    const slides2 = [

    ];
    
    const slides3 = [
        { title: "Landlord Utility Tool", description: "A utility calculator tool specifically made for a client.", photo: "/landlordutilitytool-sample.png", url: "https://landlord-utility-tool.vercel.app/" },
    ];

    return (
        <div className="h-screen w-full flex flex-col" id="projects">
        <p className="p-8 text-4xl font-bold text-yellow-300">PROJECTS</p>
        <div className="mx-8 p-8 h-full border-t flex justify-between">
          <div className="flex flex-col w-2/3 h-full">
            <p className="text-2xl font-bold text-yellow-300">HIGHLIGHTS</p>
            <Carousel slides={slides1} />
          </div>
          <div className="flex flex-col w-2/5">
            {([['GAMES', slides2], ['APPLICATIONS', slides3]]).map(([title, slide]) => (
                <div className="flex flex-col w-full h-full">
                    <p className="text-2xl font-bold text-yellow-300">{title}</p>
                    <Carousel slides={slide} />
                </div>
            ))}
          </div>
        </div>
      </div>
    )
}