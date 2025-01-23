import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function UserMenu() {
    const user = false
    
  return (
    <div>
        {user ? (
            <div>
                <Avatar>
                    <AvatarImage src={`https://avatar.vercel.sh/rauchg?rounded=60`}/>
                    <AvatarFallback>HRS</AvatarFallback>
                </Avatar>
            </div>
        ):(
            <div className="flex gap-2">
                <Button asChild><LoginLink>Log In</LoginLink></Button>
                <Button asChild variant={'outline'} className="hover:bg-primary hover:text-white"><RegisterLink>Register</RegisterLink></Button>
            </div>
        )}
    </div>
  )
}
