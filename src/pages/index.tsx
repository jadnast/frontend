import useEmblaCarousel from 'embla-carousel-react';
import { Hero } from '@widgets/hero';

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  return (
      <>
        <Hero/>
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