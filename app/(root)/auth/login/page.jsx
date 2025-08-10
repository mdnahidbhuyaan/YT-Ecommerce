import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Logo from "@/public/assets/images/logo-black.png";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div>
      <Card className="w-[450px]">
        <CardContent>
          <div className="flex justify-center">
            <Image
              src={Logo.src}
              width={Logo.width}
              height={Logo.height}
              alt="logo"
              className="max-w-[150px]"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
