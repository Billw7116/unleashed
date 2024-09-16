import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import { Fade } from "react-awesome-reveal"

const BlogsContainer = () => {
  const blogData = [
    {
      img:
        "https://res.cloudinary.com/codelikeagirl29/image/upload/v1702390722/blog-4_zw8zn5.png",
      heading: "10 Ways to Bond with Your Pup",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://res.cloudinary.com/codelikeagirl29/image/upload/v1702390722/blog-7_dzre4q.png",
      heading: "Unraveling the Mysteries of Dog Body Language",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://res.cloudinary.com/codelikeagirl29/image/upload/v1702390722/blog-6_grlu9t.png",
      heading: "The Ultimate Guide to Dog Nutrition",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://res.cloudinary.com/codelikeagirl29/image/upload/v1702390722/blog-8_xs0nvu.png",
      heading: "Dog-Friendly Travel Destinations",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://res.cloudinary.com/codelikeagirl29/image/upload/v1702390722/blog-5_huxdps.png",
      heading: "Understanding Breed-Specific Traits",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://res.cloudinary.com/codelikeagirl29/image/upload/v1702391022/blog-13_ruq5pp.png",
      heading: "Health Check: Essential Tips",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://res.cloudinary.com/codelikeagirl29/image/upload/v1702391023/blog-9_q9eeut.png",
      heading: "Grooming Guide 101",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://res.cloudinary.com/codelikeagirl29/image/upload/v1702391022/blog-14_ssxuac.png",
      heading: "Canine Sports and Activities",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://res.cloudinary.com/codelikeagirl29/image/upload/v1702391023/blog-11_nczuo8.png",
      heading: "Doggie Etiquette",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ]
  return (
    <div className="max-w-7xl mx-auto mt-10 text-white">
      <Fade bottom cascade>
        <div className="grid grid-cols-3 gap-4 xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.map(blog => (
            <div>
              <div className="w-96 h-72 overflow-hidden rounded-xl xxs:w-full sm:w-96">
                <img
                  className="h-full w-full object-cover shadow"
                  src={blog.img}
                ></img>
              </div>
              <h1 className="text-xl mt-2 font-poppins font-bold">
                {blog.heading}
              </h1>
              <p className="text-sm opacity-50 mt-2">{blog.para}</p>
            </div>
          ))}
        </div>
      </Fade>
      <div className="w-full h-72 mt-10 bg-gradient-to-r from-pink to-purple rounded-xl flex flex-col items-center justify-center">
        <h1 className="font-poppins font-bold text-3xl">Stay in the loop</h1>
        <h2 className="text-lg mt-2 opacity-50">
          Join our newsletter to get top news before anyone else
        </h2>
        <div className="flex-row mt-10">
          <Input placeholder="email."></Input>
          <Button
            colorClass="bg-white"
            title="Subscribe"
            textColor="text-black"
            marginClass="ml-5"
          ></Button>
        </div>
      </div>
    </div>
  )
}

export default BlogsContainer
