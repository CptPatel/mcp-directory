import { SignUp } from "@clerk/nextjs";

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-16 flex justify-center">
      <SignUp />
    </div>
  );
}

