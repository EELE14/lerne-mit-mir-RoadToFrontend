import Navbar from "../components/Navbar";
import Prism from "../components/Prism";
import TiltedCard from "../components/TiltedCard";

export default function Info() {
  return (
    <div className="min-h-screen relative">
      <Navbar />

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Prism animationType="rotate" timeScale={0.5} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          <TiltedCard
            imageSrc="https://api.cephie.app/images/snap/AA7rgs73.webp"
            altText="Project Flight Calculator"
            captionText="Project Flight Calculator"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={40}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="w-full h-full flex items-center justify-center translate-x-4">
                <div className="bg-white/90 dark:bg-black/70 backdrop-blur-sm rounded-lg px-6 py-3 shadow-2xl border-2 border-white/50 dark:border-gray-600">
                  <p className="text-center font-semibold text-gray-900 dark:text-gray-100 text-sm">
                    Project Flight Calculator
                  </p>
                </div>
              </div>
            }
          />
          <TiltedCard
            imageSrc="https://api.cephie.app/images/snap/GB9lM5Fg.webp"
            altText="TWW Faction Community"
            captionText="TWW Faction Community"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={40}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="w-full h-full flex items-center justify-center translate-x-4">
                <div className="bg-white/90 dark:bg-black/70 backdrop-blur-sm rounded-lg px-6 py-3 shadow-2xl border-2 border-white/50 dark:border-gray-600">
                  <p className="text-center font-semibold text-gray-900 dark:text-gray-100 text-sm">
                    TWW Faction Community
                  </p>
                </div>
              </div>
            }
          />
          <TiltedCard
            imageSrc="https://api.cephie.app/images/snap/43WWjvEi.webp"
            altText="VSCode Extension"
            captionText="VSCode Extension"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={40}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="w-full h-full flex items-center justify-center translate-x-4">
                <div className="bg-white/90 dark:bg-black/70 backdrop-blur-sm rounded-lg px-6 py-3 shadow-2xl border-2 border-white/50 dark:border-gray-600">
                  <p className="text-center font-semibold text-gray-900 dark:text-gray-100 text-sm">
                    VSCode Extension
                  </p>
                </div>
              </div>
            }
          />
          <TiltedCard
            imageSrc="https://api.cephie.app/images/snap/zemP7e9F.webp"
            altText="Gold Rush Trading"
            captionText="Gold Rush Trading"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={40}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="w-full h-full flex items-center justify-center translate-x-4">
                <div className="bg-white/90 dark:bg-black/70 backdrop-blur-sm rounded-lg px-6 py-3 shadow-2xl border-2 border-white/50 dark:border-gray-600">
                  <p className="text-center font-semibold text-gray-900 dark:text-gray-100 text-sm">
                    Gold Rush Trading
                  </p>
                </div>
              </div>
            }
          />
          <TiltedCard
            imageSrc="https://api.cephie.app/images/snap/B3G2g10V.webp"
            altText="File Size Changer"
            captionText="File Size Changer"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={40}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="w-full h-full flex items-center justify-center translate-x-4">
                <div className="bg-white/90 dark:bg-black/70 backdrop-blur-sm rounded-lg px-6 py-3 shadow-2xl border-2 border-white/50 dark:border-gray-600">
                  <p className="text-center font-semibold text-gray-900 dark:text-gray-100 text-sm">
                    File Size Changer
                  </p>
                </div>
              </div>
            }
          />
          <TiltedCard
            imageSrc="https://api.cephie.app/images/snap/43WWjvEi.webp"
            altText="Mobile App Design"
            captionText="Mobile App Design"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={40}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="w-full h-full flex items-center justify-center translate-x-4">
                <div className="bg-white/90 dark:bg-black/70 backdrop-blur-sm rounded-lg px-6 py-3 shadow-2xl border-2 border-white/50 dark:border-gray-600">
                  <p className="text-center font-semibold text-gray-900 dark:text-gray-100 text-sm">
                    Mobile App Design
                  </p>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
