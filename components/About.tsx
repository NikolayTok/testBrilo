import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section
      className='justify-between py-[5rem] items-center flex flex-col-reverse mobile:flex-row mobile:py-[7rem]'
      id='about'
    >
      <div className='max-w-[100%] mobile:max-w-[50%]'>
        <h1 className='text-5xl	title'>Mykola Tokarskyi</h1>
        <div className='mt-10 mb-10'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            incidunt culpa commodi temporibus adipisci ea, officiis aliquid
            cumque facilis. Ab a aut ipsum officia eligendi cum esse amet saepe
            accusamus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Soluta, tempore repellat quo enim laborum, quas doloribus molestiae
            illum deleniti quae saepe repellendus, ipsa eligendi asperiores
            dolore temporibus! Earum, officia quibusdam? Lorem
          </p>
        </div>
        <Link href={'/'}>
          <a className='uppercase font-extralight pt-1 pb-1 pl-10 pr-10 bg-teal-600 text-sm	hover:bg-slate-500'>
            Learn more
          </a>
        </Link>
      </div>
      <div className='relative before:top-0 before:left-0 before:right-0 before:bottom-[6px] before:bg-slate-500 before:z-10 before:absolute before:opacity-30 mb-4 mobile:mb-0'>
        <Image src={'/images/LazyCat.jpeg'} width={300} height={410} objectFit='cover' alt='Mykola Tokarskyi developer'/>
      </div>
    </section>
  );
};

export default About;
