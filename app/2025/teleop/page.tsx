'use client'

import { useContext } from "react";
import { AppContext } from "../../lib/context";

export default function Page() {
  const context = useContext(AppContext);
  return (
    <div className="flex justify-center">
      <div>
        <p className="text-lg">Teleop</p>
      </div>
      <div>

      </div>
    </div>
  );
}
