import Image from "next/image";
import { Button } from "../ui/button";

// Images
import GithubLogoWhite from "@/app/assets/images/github-logo-white.svg";
import GithubLogoBlack from "@/app/assets/images/github-logo-black.svg";

function GithubButton() {
  return (
    <Button variant={"outline"} className={"flex items-center gap-2"}>
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
  );
}

export default GithubButton;
