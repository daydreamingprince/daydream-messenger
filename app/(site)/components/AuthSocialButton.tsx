import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType,
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick
}) => {
  return (
    /** Social Log in Button */ 
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        w-full
        justify-center
        rounded-md
        bg-white
        px-4
        py-2
        text-orange-500
        shadow-sm
        ring-1
        ring-inset
        ring-orange-300
        hover:bg-orange-50
        focus:outline-offset-0
      "
    >
      <Icon />
    </button>
   );
}
 
export default AuthSocialButton;