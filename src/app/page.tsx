import About from "@/component/section/About";
import Blog from "@/component/section/Blog";
import CTA from "@/component/section/CTA";
import Hero from "@/component/section/Hero";
import Product from "@/component/section/Product";
import Solutions from "@/component/section/Solution";
import Voices from "@/component/section/Voices";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Product />
      <Solutions />
      <Blog />
      <Voices />
      <CTA />
    </main>
  )

}