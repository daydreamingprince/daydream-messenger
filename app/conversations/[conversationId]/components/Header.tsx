"use client";

import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import { useMemo } from "react";

interface HeaderProps {
  conversation: Conversation & {
    users: User[]
  }
};

const Header: React.FC<HeaderProps> = ({
  conversation
}) => {
  const otherUser = useOtherUser(conversation);

  const statusText = useMemo(() => {

  }, []);

  return ( 
    <div>
      Daydream Header
    </div>
   );
}
 
export default Header;