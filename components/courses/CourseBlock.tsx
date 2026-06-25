import InlineLink from '@/components/ui/InlineLink'
import type { Course } from '@/content/courses'

type Props = {
  course: Course
}

export default function CourseBlock({ course }: Props) {
  return (
    <section className="py-12 first:pt-0 border-t first:border-t-0 border-gray-200 dark:border-gray-800">
      <h1 className="text-h1 font-bold font-serif text-[#0A0A0A] dark:text-[#FAFAF8] mb-2">
        {course.title}
      </h1>

      <div className="text-body mb-5">
        <InlineLink href={course.href} external>
          {course.linkLabel}
        </InlineLink>
      </div>

      <p className="text-body text-[#6B6B6B] dark:text-gray-400 mb-6">
        {course.description}
      </p>

      {course.videos && course.videos.length > 0 && !course.studentWork && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {course.videos.map((video) => (
            <div key={video.src}>
              <h3 className="text-body font-semibold text-[#0A0A0A] dark:text-[#FAFAF8] mb-1">
                {video.title}
              </h3>
              {video.projectBy && (
                <p className="text-body text-[#6B6B6B] dark:text-gray-400 mb-1">
                  Project by: {video.projectBy}
                </p>
              )}
              {video.note && (
                <p className="text-body text-[#6B6B6B] dark:text-gray-400 mb-3">
                  {video.note}
                </p>
              )}
              <iframe
                src={video.src}
                title={video.title}
                className="w-full aspect-video bg-gray-200 dark:bg-gray-800"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      )}

      {course.studentWork && (
        <div className="mt-8">
          <h2 className="text-h2 font-bold font-serif text-[#0A0A0A] dark:text-[#FAFAF8] mb-3">
            Student Work
          </h2>
          <p className="text-body text-[#6B6B6B] dark:text-gray-400">
            {course.studentWork}
          </p>
          {course.videos && course.videos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {course.videos.map((video) => (
                <div key={video.src}>
                  <h3 className="text-body font-semibold text-[#0A0A0A] dark:text-[#FAFAF8] mb-1">
                    {video.title}
                  </h3>
                  {video.projectBy && (
                    <p className="text-body text-[#6B6B6B] dark:text-gray-400 mb-1">
                      Project by: {video.projectBy}
                    </p>
                  )}
                  {video.note && (
                    <p className="text-body text-[#6B6B6B] dark:text-gray-400 mb-3">
                      {video.note}
                    </p>
                  )}
                  <iframe
                    src={video.src}
                    title={video.title}
                    className="w-full aspect-video bg-gray-200 dark:bg-gray-800"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
