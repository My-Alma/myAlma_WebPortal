import Link from 'next/link';
import { useCallback } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import cardData from '../data/jobs.json';
import cards from '../data/jobsScroll.json';

const Index = () => {
  const onCardClick = useCallback(() => {
    // Add your code here
  }, []);

  const onFrameContainer45Click = useCallback(() => {
    // Add your code here
  }, []);

  const renderedCards = cardData.map((card) => {
    return (
      <div
        key={card.id}
        className="flex w-44 flex-col gap-1 rounded-lg bg-primary p-4 text-white"
      >
        <Link href={`/job-details/${card.company}`} className="text-white">
          <div className="flex items-center gap-3">
            <img className="h-6 w-6 rounded-full" src={card.logo} alt="" />
            <div className="font-semibold">{card.company}</div>
          </div>
          <div className="font-medium">{card.role}</div>
          <div className="text-sm">{card.location}</div>
        </Link>
      </div>
    );
  });

  const iCard = cards.map((card) => {
    return (
      <Link href={`/job-details/${card.company}`} className="text-primary">
        <div className="bg-grey rounded-lg border p-4  hover:shadow">
          <div className="flex items-center gap-4">
            <img className="h-10 w-10 rounded-lg" src={card.logo} alt="" />
            <div>
              <div className="bold font-small capitalize ">{card.company}</div>
              <div className="text-lg font-medium capitalize">{card.role}</div>
              <div className="text-sm capitalize text-gray-500">
                {card.salary}
              </div>
            </div>

            {/* <img
              className=" right-4 top-4 h-6 w-6"
              src="/assets/images/Guide (1).svg"
              alt=""
            /> */}
          </div>
        </div>
      </Link>
    );
  });

  return (
    <Main meta={<Meta title="My Alma" description="My Alma NIT W Job Page" />}>
      <div className="font-poppins flex flex-col gap-1 bg-white text-left text-base text-black">
        <div className="bg-white shadow-sm">
          <div className="h-88 w-full bg-white" />
          {/* <img
            className="absolute bottom-2 right-5 h-8 w-7"
            src="/assets/images/Round.svg"
            alt=""
          /> */}
        </div>

        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <div className="text-lg font-semibold">
              Find NITW your dream job
            </div>
          </div>
          <img
            className="h-10 w-10 rounded-full"
            src="/assets/images/Round.svg"
            alt=""
          />
        </div>

        <div className="px-6 py-4 text-sm text-gray-500">
          <div className="flex items-start gap-3">
            <div className="flex flex-1 items-center gap-2.5 rounded-lg bg-white p-4">
              <img
                className="h-4 w-4"
                src="/assets/images/Icon (1).svg"
                alt=""
              />
              <div>Find Company, Job, people</div>
            </div>
            <img className="h-12 w-12" src="/assets/images/filter.svg" alt="" />
          </div>
        </div>
        <div className=" px-6 py-4 text-lg">
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
          >
            <div className="flex flex-wrap gap-3 overflow-x-auto">
              {renderedCards.map((card, index) => (
                <div key={index} className="flex">
                  {card}
                </div>
              ))}
            </div>
          </Carousel>
        </div>

        <div className="flex flex-col gap-6 px-6 py-4 text-xl">
          <div className="flex justify-between">
            <div>Recent Job List</div>
            {/* <div className="text-lg text-orange-500">See all</div> */}
          </div>
          <div
            className="flex flex-col gap-3 rounded-lg bg-white p-4"
            onClick={onCardClick}
          >
            {iCard}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
