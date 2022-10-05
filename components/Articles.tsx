import Image from 'next/image';
import Link from 'next/link';

const Articles: React.FC = () => {
  const articles = sampleArticles.map((article) => {
    return (
      <article
        className=' mb-6 transition-all relative overflow-hidden bg-teal-600 group'
        key={article.id}
      >
        <Link href={`/${article.id}`}>
          <a>
            <div className='group-hover:scale-105 relative transition-all before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-slate-500 before:z-10 before:absolute before:opacity-30 group-hover:before:hidden'>
              <Image
                src={article.img}
                width={400}
                height={350}
                alt='image article'
                objectFit='cover'
                layout='responsive'
              />
            </div>
            <div className='p-5 bg-teal-600'>
              <h1 className='title text-xl mb-4'>{article.title}</h1>
              <p>{`${article.content.slice(0, 60)}...`}</p>
            </div>
          </a>
        </Link>
      </article>
    );
  });

  return (
    <section className='pb-[4rem] relative tablet:pb-[6rem]' id='articles'>
      <h2 className='title text-3xl mb-8'>What i did</h2>
      <div className=' block items-center justify-center mobile:flex gap-4'>
        {articles}
      </div>
    </section>
  );
};

const sampleArticles = [
  {
    id: 1,
    title: 'Epic project',
    img: '/images/articlesImg/1.jpeg',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, nesciunt. Reprehenderit obcaecati laudantium facilis, id nulla, rerum recusandae officiis natus vero amet debitis aliquam sed blanditiis esse incidunt. Quo, laudantium?,',
  },
  {
    id: 2,
    title: 'Epic project',
    img: '/images/articlesImg/2.jpeg',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, nesciunt. Reprehenderit obcaecati laudantium facilis, id nulla, rerum recusandae officiis natus vero amet debitis aliquam sed blanditiis esse incidunt. Quo, laudantium?,',
  },
  {
    id: 3,
    title: 'Epic project',
    img: '/images/articlesImg/3.jpeg',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, nesciunt. Reprehenderit obcaecati laudantium facilis, id nulla, rerum recusandae officiis natus vero amet debitis aliquam sed blanditiis esse incidunt. Quo, laudantium?,',
  },
];

export default Articles;
