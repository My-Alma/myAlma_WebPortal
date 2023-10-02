// import { useRouter } from 'next/router';
import { useState } from 'react';

import jobData from '../../data/jobsScroll.json';

export default function JobDetail({company} : any) {
  // const router = useRouter();
  // const company = router.query.slug;
  const job = jobData.find((job) => job.company === company);


  const [isDescriptionSelected, setDes] = useState<boolean>(true);

  return (
    <div>
      <div className="font-poppins mx-auto flex min-h-screen max-w-screen-md flex-col bg-white text-base text-black shadow">
        <div className="h-161 flex flex-col gap-6 p-6">
          <div className="flex flex-1 items-center justify-between">
            <div className="flex items-center gap-4">
              <img className="h-54 w-54 rounded-full" src={job?.logo} />
              <div>
                <div className="font-medium capitalize">{job?.company}</div>
                <div className="text-lg font-semibold capitalize">
                  {job?.role}
                </div>
                <div className="text-sm capitalize text-gray-500">
                  {job?.location}
                </div>
              </div>
            </div>
            <img className="h-6 w-6" src="/assets/images/Guide (1).svg" />
          </div>

          <div className="flex gap-3 text-xs text-black">
            <div className="rounded-md bg-gray-200 p-2 capitalize">
              {job?.location}
            </div>
            <div className="rounded-md bg-gray-200 p-2 capitalize">
              {job?.joining}
            </div>
            <div className="rounded-md bg-gray-200 p-2 capitalize">
              {job?.type}
            </div>
          </div>
        </div>

        <div className="flex gap-4 p-4 text-white">
          <div
            className={`cursor-pointer items-center justify-center rounded-lg p-3 ${
              isDescriptionSelected
                ? 'bg-primary shadow-md'
                : 'bg-white text-black hover:shadow-md'
            }`}
            onClick={() => setDes(!isDescriptionSelected)}
          >
            Description
          </div>
          <div
            className={`cursor-pointer items-center justify-center rounded-lg p-3 ${
              !isDescriptionSelected
                ? 'bg-primary shadow-md'
                : 'bg-white text-black  hover:shadow-md'
            }`}
            onClick={() => setDes(!isDescriptionSelected)}
          >
            Company
          </div>
        </div>
        <div className="flex flex-col gap-6 p-6">
          {/* Description */}
          {isDescriptionSelected && (
            <div className="flex flex-col gap-2">
              <div className="font-semibold capitalize">Job Description</div>
              <div className="text-base text-gray-700">{job?.description}</div>

              <div className="font-semibold capitalize">Qualification</div>
              <div className="text-base text-gray-700">
                {job?.qualifications}{' '}
              </div>
              <div className="font-semibold capitalize">Responsibilities</div>
              <div className="text-base text-gray-700" />
            </div>
          )}

          {/* Company Info */}
          {!isDescriptionSelected && (
            <div className="flex flex-col gap-2">
              <div className="font-semibold capitalize">Company Info</div>
              <div className="text-base text-gray-700">
                Protonull is a leading cybersecurity company dedicated to
                protecting businesses and individuals from cyber threats. With
                our cutting-edge technology and a team of passionate
                professionals, we work tirelessly to secure digital environments
                and keep data safe. If you're ready to make a difference in the
                world of cybersecurity, join us in our mission to build a safer
                digital future.
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-1 items-center justify-center  p-6">
          <button className="w-full rounded  bg-primary px-4 py-2 text-white">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
