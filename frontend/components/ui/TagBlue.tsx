export type TagProps = {
  text: string | number;
};

//From https://uiverse.io/ArnavK-09/modern-insect-46
export default function TagBlue({ text }: TagProps) {
  return (
    <button className="invert hover:rotate-2 brightness-150 dark:brightness-100 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out hover:scale-105 p-1 rounded-xl bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700 hover:via-yellow-800 hover:to-yellow-600">
      <div className="px-6 py-2 backdrop-blur-xl bg-black/80 rounded-xl font-bold w-full h-full">
        <div className="group-hover:scale-100 flex group-hover:text-yellow-500 text-yellow-600 gap-1">
          <svg
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 stroke-yellow-600 group-hover:stroke-yellow-500 group-hover:stroke-{1.99}"
          >
            <path
              id="primary"
              d="M15.0778418,12.9406987 L18.5345074,14.5119103 C19.4269931,14.9175857 20,15.8074678 20,16.7878265 L20,17.5 C20,18.8807119 18.8807119,20 17.5,20 L6.5,20 C5.11928813,20 4,18.8807119 4,17.5 L4,16.7878265 C4,15.8074678 4.57300693,14.9175857 5.46549264,14.5119103 L8.92215823,12.9406987 C7.75209123,12.0255364 7,10.6005984 7,9 C7,6.23857625 9.23857625,4 12,4 C14.7614237,4 17,6.23857625 17,9 C17,10.6005984 16.2479088,12.0255364 15.0778418,12.9406987 L15.0778418,12.9406987 Z M9.96126583,13.5668358 L5.87929558,15.4222768 C5.34380416,15.665682 5,16.1996113 5,16.7878265 L5,17.5 C5,18.3284271 5.67157288,19 6.5,19 L17.5,19 C18.3284271,19 19,18.3284271 19,17.5 L19,16.7878265 C19,16.1996113 18.6561958,15.665682 18.1207044,15.4222768 L14.0387342,13.5668358 C13.4161054,13.8452135 12.7261289,14 12,14 C11.2738711,14 10.5838946,13.8452135 9.96126583,13.5668358 L9.96126583,13.5668358 Z M12,13 C14.209139,13 16,11.209139 16,9 C16,6.790861 14.209139,5 12,5 C9.790861,5 8,6.790861 8,9 C8,11.209139 9.790861,13 12,13 Z"
            ></path>
          </svg>
          {text}
        </div>
      </div>
    </button>
  );
}
