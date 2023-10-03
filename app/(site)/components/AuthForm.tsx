'use client';

import { useCallback, useState } from "react";
import { 
  FieldValues, 
  SubmitHandler, 
  useForm 
} from "react-hook-form";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN')
    }
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER') {
      {/** Axios Register goes here */}
    }

    if (variant === 'LOGIN') {
      {/** NextAuth SignIn Goes here */}
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true);

    {/** NextAuth Social Sign In Goes Here */}
  }

  return (
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
      "
    >
      <div
        /** AuthForm Box */
        className="
          bg-white
          px-4
          py-8
          shadow
          sm:rounded-lg
          sm:px-10
        "
      >

      </div>
    </div>
   );
}
 
export default AuthForm;