import React from "react"
import { Fade } from "react-awesome-reveal"

const BlogHeader = () => {
  return (
    <Fade bottom>
      <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
        <div className="h-full object-fill overflow-hidden rounded-xl m-5">
          <img src="https://res.cloudinary.com/codelikeagirl29/image/upload/v1702391354/blog-heading_g9k0i8.png"></img>
        </div>
        <div className="m-5">
          <h2 className="text-sm opacity-50">companionship</h2>
          <h1 className="text-5xl font-bold font-poppins xxs:text-lg sm:text-5xl">
            ...for the love of our dogs 🐾
          </h1>
          <p className="text-lg mt-4 opacity-50 xxs:text-sm sm:text-lg">
            Keeping your dog mentally & physically stimulated is key to a
            contented pup. Engaging in enrichment activities not only wards off
            boredom but also promotes better behavior & a healthier lifestyle
            for your furry companion. From interactive puzzle toys that
            challenge their problem-solving skills to outdoor adventures that
            stimulate their senses, there's an array of activities to cater to
            every dog's personality & energy levels.
          </p>
          <div className="flex items-center mt-5">
            <div className="h-16 w-16">
              <img
                className="w-32 rounded-full shadow-lg"
                src="https://res.cloudinary.com/codelikeagirl29/image/upload/v1677383158/avatar-img.png"
              ></img>
            </div>
            <div className="ml-2">
              <h2>Sasha Wren</h2>
              <h4 className="text-xs opacity-50">Jan 19, 2022</h4>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default BlogHeader
