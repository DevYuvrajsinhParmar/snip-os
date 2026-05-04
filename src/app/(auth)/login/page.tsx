import CustomInput from "@/components/shared/custom-input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

// Images
import GoogleLogo from "@/app/assets/images/google-g-logo.svg";
import GithubLogoWhite from "@/app/assets/images/github-logo-white.svg";
import GithubLogoBlack from "@/app/assets/images/github-logo-black.svg";

export default function Login() {
  return (
    <Card className="w-full max-w-md gap-8">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Welcome Back!</CardTitle>
        <CardDescription>Sign it to your vault</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <CustomInput
            label="Email Address"
            placeholder="linustorvald@example.com"
            required
          />
          <CustomInput label="Password" placeholder="••••••••" required />
          <Button>Sign In</Button>
        </div>
        <div className="flex items-center gap-4">
          <Separator className="flex-1" />
          <span className="text-muted-foreground">or continue with</span>
          <Separator className="flex-1" />
        </div>
        <div className="flex justify-center gap-4">
          <Button
            variant={"outline"}
            className={"flex flex-1 items-center gap-2"}
          >
            <Image
              src={GithubLogoBlack}
              alt="Github Logo"
              height={16}
              width={16}
              className="dark:hidden"
            />
            <Image
              src={GithubLogoWhite}
              alt="Github Logo"
              height={16}
              width={16}
              className="hidden dark:block"
            />
            Github
          </Button>
          <Button
            variant={"outline"}
            className={"flex flex-1 items-center gap-2"}
          >
            <Image src={GoogleLogo} alt="Google Logo" height={16} width={16} />
            Google
          </Button>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        Don&apos;t have an account?
        <Link href={"/register"}>
          <Button variant={"link"}>Sign Up</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
