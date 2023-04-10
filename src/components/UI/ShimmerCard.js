function ShimmerCard() {
  return (
    <article className="flex flex-col gap-4 w-72 p-4 border rounded-lg hover:shadow-lg hover:cursor-pointer">
      <div className="bg-slate-400 w-full h-40 rounded lg"></div>

      <div className="flex flex-col gap-4">
        <h1 className="bg-slate-400 w-1/2 h-3"></h1>
        <p className="bg-slate-400 w-3/4 h-3"></p>
      </div>

      <div className="bg-slate-400 w-2/4 h-3"></div>

      <hr></hr>

      <div className="bg-slate-400 w-2/4 h-3"></div>
    </article>
  );
}

export default ShimmerCard;
