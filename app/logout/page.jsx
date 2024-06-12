"use client";
import { logOut } from "@/lib/actions";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";


export default function Page() {
  const router = useRouter();

  const [logoutStatus, setLogoutStatus] = useState({
    success: false,
    error: null,
    loading: false,
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLogoutStatus({ success: false, error: null, loading: true });
    const result = await logOut();
    if (!result) {
      setLogoutStatus({ success: true, error: null, loading: false });
    } else {
      setLogoutStatus({ success: false, error: result, loading: false });
    }
  };
  useEffect(() => {
    if (logoutStatus.success) {
      // router.push("/home");
      location.href = "/login";
    }
  }, [logoutStatus]);
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <p>Confirm Logout？</p>
        <form onSubmit={handleSubmit}>
          <Button color="primary" type="submit" className="w-full" disabled={logoutStatus.loading}>
            Logout
          </Button>
          <Button color="default" className="w-full mt-4" onClick={() => router.back()}>Cancel</Button>
        </form>
      </div>
    </main>
  );
}
