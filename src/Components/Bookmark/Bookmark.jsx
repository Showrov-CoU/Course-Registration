export default function Bookmark() {
  return (
    <div className="h-fit w-80 md:w-1/4 mx-auto bg-[#FFF] rounded-lg px-4">
      <h1 className="py-4 font-bold text-[#2F80ED]">
        Credit Hour Remaining _ hr
      </h1>
      <hr />
      <div className="py-4">
        <h1 className="font-bold text-[18px]">Course Name</h1>
      </div>
      <hr />
      <h1 className="py-4 text-sm font-semibold">Total Credit Hour : _</h1>
      <hr />
      <h1 className="py-4 text-sm font-semibold">Total Price : __ USD</h1>
    </div>
  );
}
