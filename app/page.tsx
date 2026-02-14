"use client";

import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="flex flex-col gap-16 justify-center items-center">
        {/* Logo */}
        <Image src={"/logo.svg"} alt="Splitter Logo" width={87} height={54} />

        <div className="grid grid-cols-2 gap-12 bg-white text-green-500 px-16 py-12 rounded-3xl">
          {/* Left column */}
          <div className="flex flex-col justify-center items-start gap-8">
            {/* Bill */}
            <label className="flex flex-col gap-1">
              <h2>Bill</h2>
              <input
                type="text"
                inputMode="decimal"
                className="input--text"
                placeholder="0"
              />
            </label>

            {/* Tip Percent */}
            <fieldset>
              <legend>Select Tip %</legend>
              <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full">
                <label htmlFor="tip-5" className="block">
                  <input
                    type="radio"
                    name="tipAmount"
                    id="tip-5"
                    value={5}
                    className="peer sr-only"
                  />
                  <span className="calculcator__button">5%</span>
                </label>

                <label htmlFor="tip-10">
                  <input
                    type="radio"
                    name="tipAmount"
                    id="tip-10"
                    value={10}
                    className="peer sr-only"
                  />
                  <span className="calculcator__button">10%</span>
                </label>

                <label htmlFor="tip-15">
                  <input
                    type="radio"
                    name="tipAmount"
                    id="tip-15"
                    value={15}
                    className="peer sr-only"
                  />
                  <span className="calculcator__button">15%</span>
                </label>

                <label htmlFor="tip-25">
                  <input
                    type="radio"
                    name="tipAmount"
                    id="tip-25"
                    value={25}
                    className="peer sr-only"
                  />
                  <span className="calculcator__button">25%</span>
                </label>

                <label htmlFor="tip-50">
                  <input
                    type="radio"
                    name="tipAmount"
                    id="tip-50"
                    value={50}
                    className="peer sr-only"
                  />
                  <span className="calculcator__button">50%</span>
                </label>

                <p>Custom</p>
              </div>
            </fieldset>

            {/* Number of People */}
            <p>Number of People</p>
          </div>

          {/* Right Column */}
          <div className="bg-green-900">
            <p>Tip Amount / person</p>

            <p>Total / person</p>

            <p>Reset</p>
          </div>
        </div>
      </div>
    </section>
  );
}
