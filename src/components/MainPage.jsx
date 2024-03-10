import React from "react";

function MainPage() {
  return (
    <div className="bg-[#f3f5f7] h-[78vh] rounded-lg px-10 py-4">
      {/* header */}
      <section className="flex justify-between">
        <h1 className="text-xl font-bold">Project</h1>
        {/* Button Create project */}
        <button
          type="button"
          class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Add New Project
        </button>
      </section>
    </div>
  );
}

export default MainPage;
