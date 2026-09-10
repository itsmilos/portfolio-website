"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { GlobeMethods } from "react-globe.gl";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
});

const BOSNIA = {
  lat: 44.7722,
  lng: 17.191,
};

export default function LocationGlobe() {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);

  const [countries, setCountries] = useState<any[]>([]);
  const [time, setTime] = useState("");
  const [globeSize, setGlobeSize] = useState(700);

  useEffect(() => {
    let mounted = true;

    fetch("/data/countries.geojson")
      .then((res) => res.json())
      .then((data) => {
        if (mounted) {
          setCountries(data.features);
        }
      })
      .catch((error) => {
        console.error("Failed to load countries:", error);
      });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setGlobeSize(430);
      } else if (window.innerWidth < 1024) {
        setGlobeSize(520);
      } else if (window.innerWidth < 1536) {
        setGlobeSize(700);
      } else {
        setGlobeSize(750);
      }
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/Sarajevo",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleGlobeReady = () => {
    const globe = globeRef.current;

    if (!globe) return;

    globe.pointOfView(
      {
        lat: BOSNIA.lat,
        lng: BOSNIA.lng,
        altitude: 1.55,
      },
      0,
    );

    const controls = globe.controls();

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.18;

    controls.enableZoom = false;
    controls.enablePan = false;
  };

  return (
    <section className="relative mt-12 overflow-hidden border-black/[0.08] sm:mt-16 lg:mt-20">
      <div className="mx-auto grid max-w-7xl items-center px-6 sm:px-8 lg:min-h-[620px] lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="relative z-10 py-16 sm:py-20 lg:py-0">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Location
          </div>

          <h2 className="mt-7 max-w-xl text-5xl font-semibold tracking-[-0.055em] sm:mt-8 sm:text-6xl lg:text-7xl">
            Available
            <br />
            <span className="text-accent">globally.</span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-6 text-black/45 sm:mt-8 sm:text-base sm:leading-7">
            Based in Banja Luka, Bosnia &amp; Herzegovina but working with
            clients and teams from anywhere in the world.
          </p>

          <div className="mt-9 flex items-center gap-4 sm:mt-12">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/30 sm:text-[10px]">
                Local time
              </p>

              <p className="mt-1.5 font-mono text-xs tabular-nums text-[#09090B] sm:mt-2 sm:text-sm">
                {time}
              </p>
            </div>

            <span className="h-7 w-px bg-black/10 sm:h-8" />

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/30 sm:text-[10px]">
                Location
              </p>

              <p className="mt-1.5 text-xs font-medium text-[#09090B] sm:mt-2 sm:text-sm">
                Banja Luka
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex h-[430px] items-center justify-center sm:h-[540px] lg:h-[700px]">
          <Globe
            ref={globeRef}
            width={globeSize}
            height={globeSize}
            backgroundColor="rgba(0,0,0,0)"
            showAtmosphere={false}
            polygonsData={countries}
            polygonCapColor={() => "transparent"}
            polygonSideColor={() => "transparent"}
            polygonStrokeColor={() => "rgba(9,9,11,0.16)"}
            polygonAltitude={0.001}
            pointsData={[BOSNIA]}
            pointLat="lat"
            pointLng="lng"
            pointColor={() => "#EE7B30"}
            pointAltitude={0.04}
            pointRadius={0.5}
            pointLabel={() => "Banja Luka"}
            onGlobeReady={handleGlobeReady}
          />
        </div>
      </div>
    </section>
  );
}
