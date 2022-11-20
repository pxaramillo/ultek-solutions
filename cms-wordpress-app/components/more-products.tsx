import PostPreview from './post-preview'

export default function MoreProducts({ products }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {products.map(({ node }) => (
          <PostPreview
            key={node.id}
            title={node.name}
            image={node.image}
            date={node.date}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
