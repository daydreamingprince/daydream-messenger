"use client";

import useConversation from "@/app/hooks/useConversation";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ConfirmModalProps {
  isOpen?: boolean;
  onClose:  () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose
}) => {
  const router = useRouter();
  const { conversationId } = useConversation();
  const [isLoading, setIsLoading] = useState(false);

  return ( 
    <div>Confirm Modal</div>
   );
}
 
export default ConfirmModal;