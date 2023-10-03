import Image from "next/image";

export default function Home() {
  return (
    <div
      /** Page background */
      className="
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        sm:px-6
        lg:px-8
        bg-gray-100
      "
    >
      {/** Project Logo on Log in */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Project Logo"
          height="70"
          width="70"
          className="mx-auto w-auto"
          src="/images/3.png"
        />
      </div>
    </div>
  )
}