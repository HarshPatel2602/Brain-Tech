import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url('/loginBg.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div>
        <SignIn />
      </div>
    </div>
  );
}
