import AllPosts from "@/components/posts/all-posts"

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

function AllPostsPage() {
    return (
        <>
            <AllPosts posts={DUMMY_POSTS} />
        </>
    )
}

export default AllPostsPage