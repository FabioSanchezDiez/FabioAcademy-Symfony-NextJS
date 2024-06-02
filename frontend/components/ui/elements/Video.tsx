export default function Video() {
  return (
    <div className="border-4 border-slate-600 border-solid w-[1000px]">
      <video
        controls
        width={1000}
        controlsList="nodownload"
        disablePictureInPicture
      >
        <source src="https://firebasestorage.googleapis.com/v0/b/fabiocodeacademy.appspot.com/o/CoursesImages%2FVideo%20de%20Presentacion.mp4?alt=media&token=0ab1007e-008f-42e2-86d9-2f50f3c5ba55" />
        Your browser does not support the video tag...
      </video>
    </div>
  );
}
