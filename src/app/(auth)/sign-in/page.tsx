import GithubButton from "@/components/shared/github-button";
import GoogleButton from "@/components/shared/google-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignIn() {
  return (
    <Card className="w-full max-w-sm gap-8">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">
          Continue to <span className="text-primary">SnipOS</span>
        </CardTitle>
        <CardDescription>
          Sign in or create your account using Github or Google.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <GithubButton />
          <GoogleButton />
        </div>
        <p className="text-muted-foreground text-center text-xs">
          New to SnipOS? Your account is created automatically on first sign in.
        </p>
      </CardContent>
      <CardFooter className="text-muted-foreground text-center text-xs">
        Authentication is securely handled by GitHub and Google. SnipOS never
        sees your password.
      </CardFooter>
    </Card>
  );
}
