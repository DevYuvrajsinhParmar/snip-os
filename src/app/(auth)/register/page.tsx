import CustomInput from "@/components/shared/custom-input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

// Images
import GoogleLogo from "@/app/assets/images/google-g-logo.svg";
import GithubLogoWhite from "@/app/assets/images/github-logo-white.svg";
import GithubLogoBlack from "@/app/assets/images/github-logo-black.svg";

export default function Register() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-primary text-2xl">Snip - OS</CardTitle>
        <CardDescription>The Developer&apos;s Everything Vault</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <CustomInput label="Full Name" placeholder="Linus Torvald" required />
          <CustomInput
            label="Email Address"
            placeholder="linustorvald@example.com"
            required
          />
          <CustomInput label="Password" placeholder="••••••••" required />
          <CustomInput
            label="Confirm Password"
            placeholder="••••••••"
            required
          />
          <Button>Create Account</Button>
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
        <div className="text-muted-foreground text-center">
          By creating an account you agree to our{" "}
          <Button variant={"link"}>Terms of Service</Button> and{" "}
          <Button variant={"link"}>Privacy Policy</Button>
        </div>
      </CardContent>
    </Card>
  );
}
