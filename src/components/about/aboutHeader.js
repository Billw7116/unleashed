import React from "react"
import Fade from "react-reveal/Fade"

const AboutHeader = () => {
  return (
    <Fade bottom cascade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl">
          <img src="https://res.cloudinary.com/codelikeagirl29/image/upload/v1726471362/bzhowszwe6tefdaaldq5.png"></img>
        </div>
        <div className="mt-5">
          <span className="text-white text-sm opacity-50">About</span>
          <h1 className="text-white text-7xl font-poppins font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-7xl">
            Paws, Play, and All Things Dog... find out more here.
          </h1>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader
