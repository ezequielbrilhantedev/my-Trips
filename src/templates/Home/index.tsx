import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import dynamic from 'next/dynamic'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informartions and photos when clicked"
        canonical="https://my-trips.ezequielbrilhante.com.br"
        openGraph={{
          url: 'https://my-trips.ezequielbrilhante.com.br',
          title: 'My Trips',
          images: [
            {
              url: 'https://my-trips.ezequielbrilhante.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} arial-label="about" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
