import {
  LoginLink,
  RegisterLink,
  LogoutLink
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
    DropdownMenuTrigger,
    DropdownMenu,
    DropdownMenuSeparator,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuGroup,
  } from "./ui/dropdown-menu";
  import Link from "next/link";
  import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";

export default async function UserMenu() {
  const {getUser} = getKindeServerSession();
  const user = await getUser()

  return (
    <div>
      {user ? (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="rounded-full w-fit p-0">
            <Avatar asChild>
              <AvatarImage src={user?.picture ? user.picture : `https://avatar.vercel.sh/rauchg?rounded=60?text=${user?.given_name?.slice(0,2)}`} alt={`${user?.given_name}`} />
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-2" align="end" forceMount>
          <DropdownMenuLabel>
            <div>
              <h3 className="font-medium text-sm">{user.given_name}</h3>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator/>
          <DropdownMenuGroup>
            <DropdownMenuItem><Link href="/profile">Profile</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href="/order">Order</Link></DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator/>
          <DropdownMenuItem><LogoutLink>Logout</LogoutLink></DropdownMenuItem>
        </DropdownMenuContent>
  </DropdownMenu>
      ) : (
        <div className="flex gap-2">
          <Button asChild>
            <LoginLink>Log In</LoginLink>
          </Button>
          <Button
            asChild
            variant={"outline"}
            className="hover:bg-primary hover:text-white"
          >
            <RegisterLink>Register</RegisterLink>
          </Button>
        </div>
      )}
    </div>
  );
}
