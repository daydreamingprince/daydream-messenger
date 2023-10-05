import prisma from "@/app/libs/prismadb"

import getSession from "./getSession"

const getUser = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }
}