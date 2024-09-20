"use client";

import Link from "next/link";
import CardSubHeader from "../card/card-sub-header";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Courses {
  course_link: string;
  course_code: string;
  course_name: string;
}

interface CoursesTaken {
  semester: string;
  courses: Courses[];
}

interface AcademicContainerProps {
  degree: React.ReactNode;
  institution_name: React.ReactNode;
  location: React.ReactNode;
  graduation_time: React.ReactNode;
  has_courses: React.ReactNode;
  courses_taken?: CoursesTaken[];
}

const AcademicContainer = ({
  degree,
  institution_name,
  location,
  graduation_time,
  has_courses,
  courses_taken = [],
}: AcademicContainerProps) => {
  const [showCourseDetails, setShowCourseDetails] = useState(false);

  return (
    <div
      className="grid gap-2"
      onClick={() => setShowCourseDetails(!showCourseDetails)}
    >
      <CardSubHeader
        primary_header1={institution_name}
        primary_header2={degree}
        secondary_header1={location}
        secondary_header2={graduation_time}
        className="cursor-pointer"
      />
      {has_courses && (
        <div className={cn("gap-2", showCourseDetails ? "grid" : "hidden")}>
          {courses_taken.map((course_taken) => (
            <div key={course_taken.semester} className="transition">
              <div>
                <CardSubHeader secondary_header1={course_taken.semester} />
              </div>
              <div>
                {course_taken.courses.map((course) => (
                  <div
                    key={course.course_code}
                    className="grid grid-cols-2 divide-y"
                  >
                    <div>
                      <Link
                        href={course.course_link}
                        target="_blank"
                        className="text-blue-600"
                      >
                        {course.course_code}
                      </Link>
                    </div>
                    <div className="pl-2">{course.course_name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AcademicContainer;
