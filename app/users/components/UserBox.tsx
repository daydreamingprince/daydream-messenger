"use client";

import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

interface UserBoxProps {
  data: User
}

const UserBox:React.FC<UserBoxProps> = ({
  data
}) => {
const router = useRouter();
const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {

  }, [])

  return ( 
    <div>User</div>
   );
}
 
export default UserBox;