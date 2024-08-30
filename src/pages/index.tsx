import { Hero } from '@widgets/hero';
import { AnimeList } from '@widgets/animeList'

export default function Home() {
  const animeCards = [
    { type: 'TV', status: 'Выпускается', age: '13+', title: 'Title 1' },
    { type: 'TV', status: 'Выпускается', age: '13+', title: 'Title 2' },
    { type: 'TV', status: 'Выпускается', age: '13+', title: 'Title 3' },
    { type: 'TV', status: 'Выпускается', age: '13+', title: 'Title 4' },
    { type: 'TV', status: 'Выпускается', age: '13+', title: 'Title 5' },
    { type: 'TV', status: 'Выпускается', age: '13+', title: 'Title 6' },
    { type: 'TV', status: 'Выпускается', age: '13+', title: 'Title 7' },
    { type: 'TV', status: 'Выпускается', age: '13+', title: 'Title 8' },
    { type: 'TV', status: 'Выпускается', age: '13+', title: 'Title 9' },
    { type: 'TV', status: 'Выпускается', age: '13+', title: 'Title 10' },
    { type: 'TV', status: 'Выпускается', age: '13+', title: 'Title 11' },
    { type: 'TV', status: 'Выпускается', age: '13+', title: 'Title 12' },
    { type: 'TV', status: 'Выпускается', age: '13+', title: 'Title 13' },
  ];

  return (
    <>
      <Hero />
      <AnimeList title="Новинки" id="new_anime" cards={animeCards} />
      <AnimeList title="Популярное" id="popular_anime" cards={animeCards} />
    </>
  );
}