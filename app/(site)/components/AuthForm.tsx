'use client';

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
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
         {/** Auth Form Inputs */}
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === 'REGISTER'&& (
            <Input 
              id="name" 
              label="Name" 
              register={register}
              errors={errors}
            />
          )}
          {/** Input for email address */}
          <Input 
            id="email" 
            label="Email address"
            type="email" 
            register={register}
            errors={errors}
          />
          {/** Input for password */}
          <Input 
            id="password" 
            label="Password"
            type="password" 
            register={register}
            errors={errors}
          />
          <div>
            <Button>
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>
      </div>
    </div>
   );
}
 
export default AuthForm;