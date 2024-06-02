import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";

const UserProfile = () => {
  const { data, status } = useSession();

  return (
    <div className="flex flex-col items-center gap-4  bg-[#03071E]">
      {status === "authenticated" && (
        <>
          <div className="relative pt-4">
            <Image
              src={data?.user.image ?? ""}
              alt="imagen usuario"
              title="user name"
              width={70}
              height={70}
              className="rounded-full mt-40" />
            <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full  bg-emerald-500 p-1 text-sm text-white">
              <span className="sr-only"> online </span>
            </span>
          </div>
          <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center">
            <h4 className="w-full truncate text-base text-slate-400">
              {data?.user.name}
            </h4>
            <p className="w-full truncate text-sm text-slate-500 lowercase">
              {data?.user.role?.name}{" "}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
export { UserProfile };
