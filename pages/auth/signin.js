import { getProviders, useSession, signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../../components/Loader";

const Signin = ({ providers }) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  if (session) return <Loader />;

  return (
    <div className="bg-black h-screen fiex flex-col items-center pl-96 pt-48 space-x-8">
      <Head>
        <title>Login - Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="https://rb.gy/y9mwtb"
        height={250}
        width={500}
        objectFit="contain"
        className="animate-pulse"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button
            className="text-white py-4 px-6
                      bg-green-600 rounded-full uppercase font-bold hover:scale-110 transition duration-300 ease-out md:text-base tracking-wider"
            onClick={() => signIn(provider.id)}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Signin;
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
