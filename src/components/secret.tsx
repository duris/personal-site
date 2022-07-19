function Secret() {
  return (
    <div className="p-10 bg-slate-100 m-2 rounded-sm text-red-300">
      <h2 className=" text-2xl p-2 ">Secret content</h2>
      <span className="inline-grid grid-cols-3 gap-4 intro">
        <span className="p-2 bg-slate-400 rounded">01</span>
        <span className="p-2 bg-slate-400 rounded">02</span>
        <span className="p-2 bg-slate-400 rounded">03</span>
        <span className="p-2 bg-slate-400 rounded">04</span>
        <span className="p-2 bg-slate-400 rounded">05</span>
        <span className="p-2 bg-slate-400 rounded">06</span>
      </span>
      <span className="inline-grid grid-cols-3 gap-4 intro2">
        <span className=" bg-lime-400 p-2">01</span>
        <span className=" bg-lime-400 p-2">02</span>
        <span className=" bg-lime-400 p-2">03</span>
        <span className=" bg-lime-400 p-2">04</span>
        <span className=" bg-lime-400 p-2">05</span>
        <span className=" bg-lime-400 p-2">06</span>
      </span>
    </div>
  )
}

export default Secret