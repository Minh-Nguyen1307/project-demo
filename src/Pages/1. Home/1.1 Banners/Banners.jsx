import React, {useEffect, useState} from 'react'
import Banner1 from './1.1.1 Banner/Banner1'
import Banner2 from './1.1.1 Banner/Banner2'
import Banner3 from './1.1.1 Banner/Banner3'

export default function Banners() {
    const banners = [<Banner1 />, <Banner2 />, <Banner3 />]
    const [currentBanner, setCurrentBanner] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((banner) => ( banner + 1 ) % banners.length)},3000)
            return () => clearInterval(interval)
        }, [banners.length]);
    
    
  return (
    <div>
        {banners[currentBanner]}

    </div>
  )
}
