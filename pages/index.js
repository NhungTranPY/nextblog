import FeaturedPosts from "@/components/home-page/featured-posts"
import Hero from "@/components/home-page/hero"

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started With Nextjs', 
    image: 'getting-started-nextjs.jpg', 
    excerpt: 'The React Framework for the Web', 
    date: '2023-07-11', 
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started With Nextjs', 
    image: 'getting-started-nextjs.jpg', 
    excerpt: 'The React Framework for the Web', 
    date: '2023-07-11', 
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started With Nextjs', 
    image: 'getting-started-nextjs.jpg', 
    excerpt: 'The React Framework for the Web', 
    date: '2023-07-11', 
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started With Nextjs', 
    image: 'getting-started-nextjs.jpg', 
    excerpt: 'The React Framework for the Web', 
    date: '2023-07-11', 
  }
]

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  )
}

export default HomePage

// 1) hHero => present ourself
// 2) featured posts
