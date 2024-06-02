import { Lesson } from "@/src/lib/definitions";

export default function Video({ lesson }: { lesson: Lesson }) {
  return (
    <>
      <div className="border-4 border-slate-600 border-solid w-[1000px]">
        <video
          controls
          width={1000}
          controlsList="nodownload"
          disablePictureInPicture
        >
          <source src={lesson.video} />
          Your browser does not support the video tag...
        </video>
      </div>
      <div>
        <p>{lesson.title}</p>
      </div>
    </>
  );
}
