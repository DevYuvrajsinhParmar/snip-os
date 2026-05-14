import Image from "next/image";
import { Button } from "../ui/button";

// Images
import GoogleLogo from "@/app/assets/images/google-g-logo.svg";

function GoogleButton() {
  return (
    <Button variant={"outline"} className={"flex items-center gap-2"}>
      <Image src={GoogleLogo} alt="Google Logo" height={16} width={16} />
      Google
    </Button>
  );
}

export default GoogleButton;
