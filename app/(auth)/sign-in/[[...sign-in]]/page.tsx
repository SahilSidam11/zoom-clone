import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="flex h-screen w-full flex-center">
      <SignIn />
    </main>
  );
};

export default SignInPage;
