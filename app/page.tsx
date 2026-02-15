"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");

  const billValidated = Number(bill);
  const tipValidated = Number(tip);
  const peopleValidated = Number(people);
  // const canCalc =
  //   !isNaN(billValidated) &&
  //   !isNaN(tipValidated) &&
  //   !isNaN(peopleValidated) &&
  //   peopleValidated > 0;

  const canCalc = !isNaN(billValidated);

  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="flex flex-col gap-16 justify-center items-center">
        {/* Logo */}
        <Image src={"/logo.svg"} alt="Splitter Logo" width={87} height={54} />

        <div className="grid grid-cols-2 gap-12 bg-white px-16 py-12 rounded-3xl">
          {/* Left column */}
          <form className="flex flex-col justify-center items-start gap-8">
            {/* Bill */}
            <label className="flex flex-col gap-1">
              <h2>Bill</h2>
              <input
                type="text"
                inputMode="numeric"
                className="input--text"
                placeholder="0"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
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
                  <span className="calculator-label">5%</span>
                </label>

                <label htmlFor="tip-10" className="block">
                  <input
                    type="radio"
                    name="tipAmount"
                    id="tip-10"
                    value={10}
                    className="peer sr-only"
                  />
                  <span className="calculator-label">10%</span>
                </label>

                <label htmlFor="tip-15" className="block">
                  <input
                    type="radio"
                    name="tipAmount"
                    id="tip-15"
                    value={15}
                    className="peer sr-only"
                  />
                  <span className="calculator-label">15%</span>
                </label>

                <label htmlFor="tip-25" className="block">
                  <input
                    type="radio"
                    name="tipAmount"
                    id="tip-25"
                    value={25}
                    className="peer sr-only"
                  />
                  <span className="calculator-label">25%</span>
                </label>

                <label htmlFor="tip-50" className="block">
                  <input
                    type="radio"
                    name="tipAmount"
                    id="tip-50"
                    value={50}
                    className="peer sr-only"
                  />
                  <span className="calculator-label">50%</span>
                </label>

                <label htmlFor="tip-custom" className="block">
                  <input
                    type="radio"
                    name="tipAmount"
                    id="tip-custom"
                    value={"custom"}
                    className="peer sr-only"
                    // onSelect={() => console.log("Custom tip clicked!")}
                  />
                  <input
                    type="text"
                    className="max-w-32 bg-gray-50 rounded-sm text-right py-1 px-2"
                    // onSelect={() => console.log("Text field tip clicked!")}
                    onChange={() => {
                      console.log("Text field changed!");
                    }}
                  />
                </label>
              </div>
            </fieldset>

            {/* Number of People */}
            <p>Number of People</p>
          </form>

          {/* Right Column */}
          <div className="bg-green-900">
            <p>Tip Amount / person</p>
            <p>{canCalc ? "Valid" : "inValid"}</p>

            <p>Total / person</p>

            <p>Reset</p>
          </div>
        </div>
      </div>
    </section>
  );
}
