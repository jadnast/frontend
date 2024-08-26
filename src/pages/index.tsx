import { Header } from "@/widgets/header"

export default function Home() {
    return (
        <>
            <Header/>
            <div id="hero" className="w-full h-[962px] justify-center items-center inline-flex">
                <div className="grow shrink basis-0 self-stretch flex-col justify-center items-center gap-3.5 inline-flex">
                  <div className="self-stretch lg:h-6 h-4 text-center text-neutral-400 font-normal leading-snug">ДЕСЯТКИ ТЫСЯЧ АНИМЕ В ОДНОМ МЕСТЕ</div>
                  <div className="self-stretch h-32 flex-col justify-start items-center gap-1 flex">
                    <div className="self-stretch text-center text-white lg:text-4xl text-2xl font-bold uppercase tracking-widest">Привнесите аниме</div>
                    <div className="w-80 h-16 py-2.5 bg-gradient-to-b from-rose-500 to-rose-600 shadow justify-center items-center gap-2.5 inline-flex" style={{ boxShadow: "0px 0px 50px rgba(235, 0, 82, 0.30)" }}>
                        <div className="text-center text-white text-4xl font-bold uppercase tracking-widest italic">В СВОЙ МИР</div>
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
        </>
    )
}