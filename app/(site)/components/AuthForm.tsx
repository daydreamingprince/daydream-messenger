'use client';

import { useState } from "react";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div>Daydream Auth Form</div>
   );
}
 
export default AuthForm;