import React from "react"
import BlogImg from "../images/blog-1.png"
import BlogImg2 from "../images/blog-2.png"
import BlogImg3 from "../images/blog-3.png"

const FeaturedBlog = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-10">
      <h1 className="text-white font-poppins font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
        The Joy of Fun-Loving Dogs: <br></br> Why They're the Best Companions
      </h1>
      <p className="text-white text-lg mt-5 opacity-50 w-3/4 xxs:w-full lg:w-3/4">
        There is something undeniably magical about a fun-loving dog. From their
        endless energy to their goofy antics, these pups can brighten any day
        and fill your life with joy. Whether you’re out on an adventure or
        lounging at home, a playful dog can bring laughter, happiness, and
        plenty of memorable moments.
      </p>
      <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3">
        <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
          <img className="relative" alt="blog" src={BlogImg}></img>
          <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-2xl text-slate-200 font-bold p-2">
            The quick brown fox jumped over the lazy dog.
          </div>
        </div>
        <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
          <img className="relative" alt="blog" src={BlogImg2}></img>
          <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
            The quick brown fox jumped over the lazy dog.
          </div>
        </div>
        <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
          <img className="relative" alt="blog" src={BlogImg3}></img>
          <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
            The quick brown fox jumped over the lazy dog.
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlog
