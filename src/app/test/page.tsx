// Pages cannot do this ---> export const Page = () => {}
// you need default export

"use client";
// import { useQuery } from "convex/react";
// import { api } from "../../../convex/_generated/api";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Test
      {/* {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)} */}
    </main>
  );
};

export default Page;
