import FeaturedPosts from "@/components/home-page/featured-posts"
import Hero from "@/components/home-page/hero"
import { getFeaturedPosts } from "@/lib/posts-util"
import Head from "next/head"



function HomePage(props) {
  return (
    <>
      <Head>
        <title>Nina's Blog</title>
        <meta name="description" content="I post about programming and web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage

// 1) hHero => present ourself
// 2) featured posts
