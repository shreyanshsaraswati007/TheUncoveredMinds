import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data } = matter(markdownWithMeta);
    return { ...data, slug: filename.replace('.md', '') };
  });
  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <div className="min-h-screen py-20 px-8 bg-white">
      <h2 className="text-3xl text-center font-bold text-primary mb-10">Our Blog</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {posts.map((post) => (
          <div key={post.slug} className="border rounded-xl p-6 shadow hover:shadow-lg">
            <h3 className="text-2xl font-semibold text-accent mb-2">{post.title}</h3>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link href={`/posts/${post.slug}`} className="text-primary font-semibold">Read More →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}