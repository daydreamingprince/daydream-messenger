"use client";

import { User } from "@prisma/client";
import { useRouter } from "next/navigation";

interface UserBoxProps {
  data: User
}

const UserBox:React.FC<UserBoxProps> = ({
  data
}) => {
const router = useRouter();

  return ( 
    <div>User</div>
   );
}
 
export default UserBox;