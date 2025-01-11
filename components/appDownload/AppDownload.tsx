import Image from 'next/image';
import PlayStore from "@/public/play_store.png"
import AppStore from "@/public/app_store.png"

export default function AppDownload() {

  return (
    <div className="my-16 space-y-7">

        <h1 className='text-36-medium text-center'>For Better Experience Download Tomato App</h1>

        <div className="flex-center gap-x-6">

            <Image src={PlayStore} alt="download" className='hover-scale cursor-pointer' />

            <Image src={AppStore} alt="download" className='hover-scale cursor-pointer' />

        </div>
      
    </div>
  )
}
