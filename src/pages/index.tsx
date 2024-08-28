import useEmblaCarousel from 'embla-carousel-react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'footer',
        'common',
        'header',
        'hero'
      ])),
    },
  }
}

import { useTranslation } from 'next-i18next';

export default function Home() {
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const { t } = useTranslation('hero')

    return (
        <>
            <div id="hero" className="w-full h-[962px] justify-center items-center inline-flex">
                <div className="grow shrink basis-0 self-stretch flex-col justify-center items-center gap-3.5 inline-flex">
                  <h1 className="self-stretch lg:h-6 h-4 text-center text-neutral-400 font-normal leading-snug uppercase">{t('sub')}</h1>
                  <div className="self-stretch h-32 flex-col justify-start items-center gap-1 flex">
                    <div className="self-stretch text-center text-white lg:text-4xl text-2xl font-bold uppercase tracking-widest">{t('title')}</div>
                    <div className="hero_button bg-gradient-to-b from-rose-500 to-rose-600 shadow" style={{ boxShadow: "0px 0px 50px rgba(235, 0, 82, 0.30)" }}>
                        <div className="text-center text-white lg:text-4xl text-3xl font-bold uppercase tracking-widest italic">{t('btn_title')}</div>
                    </div>
                  </div>
                </div>

                <div className="hero_ch1 lg:block hidden" style={{ position: 'absolute', left: '-1%' }}>
                    <img src="/images/main/ch1.png" alt=""/>
                </div>

                <div className="hero_ch2 lg:block hidden" style={{ position: 'absolute', right: '-1%' }}>
                    <img src="/images/main/ch2.png" alt=""/>
                </div>
            </div>

            <section id="new_anime">
                <h2 className="text-3xl uppercase font-bold">Новинки</h2>
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        <div>Slide 1</div>
                        <div>Slide 2</div>
                    </div>
                </div>
            </section>
        </>
    )
}