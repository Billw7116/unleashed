import React from "react"
import { Fade } from "react-awesome-reveal"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <Fade bottom cascade>
        <div className="w-full flex flex-row justify-between mt-10 xxs:flex-col xs:flex-col sm:flex-row">
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">90M+</h1>
            <h3 className="text-white">dogs in the USA</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">$367</h1>
            <h3 className="text-white">annual vet care</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">8%</h1>
            <h3 className="text-white">obediience class</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">$103B</h1>
            <h3 className="text-white">pet products sales</h3>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 px-8">
          <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-2xl sm:text-3xl lg:text-5xl xl:text-7xl">
            Where Every Tail Tells a Story – <br />
            <br />
            For Dog Lovers, By Dog Lovers!
          </h1>
          <h2 className="text-white text-sm mt-5 opacity-50">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
            <br></br>
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </h2>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <h1 className="text-white text-4xl">Facts</h1>
            <div className="mt-5">
              <div>
                <h2 className="text-white opacity-50 text-xl">
                  their sense of smell?
                </h2>
                <h1 className="text-white text-sm">
                  100,000 x stronger than ours
                </h1>
              </div>
              <div className="mt-5">
                <h2 className="text-white opacity-50 text-xl">
                  understanding?
                </h2>
                <h1 className="text-white text-sm">165 words</h1>
              </div>
              <div className="mt-5">
                <h2 className="text-white opacity-50 text-xl">unique</h2>
                <h1 className="text-white text-sm">
                  a nose print / like our fingerprints
                </h1>
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h1 className="text-white text-4xl">man's best friend</h1>
            <p className="mt-10 text-white opacity-50">
              Dogs are remarkable creatures with extraordinary abilities and a
              deep bond with humans. Their sense of smell is unparalleled,
              capable of detecting scents miles away and even sensing medical
              conditions. Beyond their keen instincts, dogs are incredibly
              intelligent, understanding hundreds of words, gestures, and
              emotions. Whether they're serving as loyal companions, working as
              service animals, or simply bringing joy with their playful energy,
              dogs have a special way of connecting with people. Their unique
              personalities, unwavering loyalty, and boundless affection make
              them truly one of a kind in the animal kingdom.
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 px-8">
          <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-7xl">
            dog breeds
          </h1>
          <h2 className="text-white text-sm mt-5 opacity-50">
            Discover a wide variety of dog breeds, from loyal Labradors to
            energetic Terriers. Find the perfect breed for you!
            <br></br>
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </h2>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-white text-2xl">dog care tips</h1>
            <p className="mt-10 text-white opacity-50 text-sm">
              Learn essential tips for keeping your dog healthy and happy. From
              grooming to diet, we’ve got you covered.
            </p>
          </div>

          <div className="w-1/3 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-white text-2xl">Fun Dog Facts</h1>
            <p className="mt-10 text-white opacity-50 text-sm">
              Did you know dogs have an amazing sense of smell? Check out more
              fascinating facts about your furry friends!
            </p>
          </div>
          <div className="w-1/3 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h1 className="text-white text-2xl">Chat and volunteer</h1>
            <p className="mt-10 text-white opacity-50 text-sm">
              find a local shelter with this national database -{" "}
              <a href="https://www.shelteranimalscount.org/">
                shelter animals count
              </a>
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default FeatureSection
