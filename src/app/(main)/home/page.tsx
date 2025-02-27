'use client'

import { useUserProfile } from "@/api/profile/useUserProfile";

export default function Home() {

  const { data } = useUserProfile();

  console.log(data);

  return <div className="text-white">Home</div>
}

