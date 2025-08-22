import Link from "next/link";
import Image from "next/image";
const HeaderLogo = () => {
  const companyName: string = process.env.NEXT_PUBLIC_BUSINESS_NAME!;
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        {/* TODO: Replace this logo with a custom one */}
        <Image
          src="/saldo-logo.svg"
          width={28}
          height={28}
          alt="Company Logo"
        />
        <p className="font-semibold text-white text-2xl ml-2.5">
          {companyName}
        </p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
