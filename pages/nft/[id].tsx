import React from 'react';
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';

const NftDropPage = () => {
  // authentication
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  console.log(address);
  return (
    <>
      <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
        {/* left */}

        <div className='bg-gradient-to-br from-blue-500 to-orange-500 py-10 lg:col-span-4'>
          <div className='flex-1 lg:justify-center'>
            <img
              className='m-auto w-40 lg:h-96 lg:w-auto object-cover rounded-full border-8 border-cyan-200'
              src='https://links.papareact.com/8sg'
            />
            <div className='text-center m-4 space-y-3'>
              <h1 className='text-5xl font-bold text-white  '>
                Bored ape demo
              </h1>
              <h2 className='text-xl text-gray-200'>
                Bored ape coding club demo
              </h2>
            </div>
          </div>
        </div>

        {/* right */}
        <div className='flex flex-col lg:col-span-6 p-7'>
          {/* header */}
          <header className='flex justify-between items-center '>
            <h1 className='cursor-pointer text-xl font-thin'>
              The demo
              <span className='font-extrabold'> BORED APE </span>
              coding club marketplace
            </h1>
            <button
              type='button'
              onClick={() => (address ? disconnect() : connectWithMetamask())}
              className='text-white uppercase bg-rose-300 py-3 px-8 rounded-full'
            >
              {address ? 'Sign out' : 'Sign in'}
            </button>
          </header>
          <hr className='my-4 border' />

          {address && (
            <p className='mx-auto text-green-500'>
              You're logged in with wallet {address.substring(0, 5)}...
              {address.substring(address.length - 5)}
            </p>
          )}

          <div className='mt-10 flex flex-1 flex-col items-center text-center space-y-4 lg:space-y-4 lg:justify-center  '>
            <img
              className='w-80 object-cover lg:h-40'
              src='https://links.papareact.com/bdy'
            />
            {/* content */}
            <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold mt-10'>
              The Bored Ape demo coding club
            </h1>
            <p className='text-xl text-violet-400'>10/40 NFTs claimed</p>
          </div>

          {/* <div>mint button</div> */}
          <button className='mt-2 px-4 py-2 bg-red-500 rounded-2xl text-white font-bold'>
            Mint NFT(0.1 ETH)
          </button>

          {/* <div>hi</div> */}
        </div>
      </div>
    </>
  );
};

export default NftDropPage;
