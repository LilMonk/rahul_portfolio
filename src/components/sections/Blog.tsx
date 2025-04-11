import { useState } from 'react';
import medallionArchImg from '../../assets/images/blog/medallion-architecture.gif';
import oauthAppDilemmaImg from '../../assets/images/blog/oauth-app-dilemma.webp';
import sparkDeduplicationImg from '../../assets/images/blog/spark-deduplication.gif';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  url: string;
  pinned?: boolean;
}

// Blog data from lilmonk.medium.com
const blogPosts: BlogPost[] = [
  {
    id: 'medallion-architecture',
    title: 'Medallion Architecture On BigQuery',
    description: 'A Journey From Raw Data to Actionable Insights',
    date: 'Oct 31, 2024',
    url: 'https://medium.com/@lilmonk/a-journey-from-raw-data-to-actionable-insights-edb03a8f9c36',
    pinned: true,
    imageUrl: medallionArchImg // Using imported image
  },
  {
    id: 'oauth-app-dilemma',
    title: 'How I Solved My App\'s Access Dilemma with OAuth 2.0',
    description: 'Have you ever wondered how apps like Slack or Zoom connect seamlessly with Google Drive without ever asking for your password? I faced this challenge and solved it with OAuth 2.0.',
    date: 'Mar 5, 2025',
    url: 'https://medium.com/@lilmonk/how-i-solved-my-apps-access-dilemma-with-oauth-2-0',
    pinned: true,
    imageUrl: oauthAppDilemmaImg
  },
  {
    id: 'spark-deduplication',
    title: 'Spark Stateful Stream Deduplication',
    description: 'Stateful Deduplication: Ensuring Clean and Reliable IoT Data Streams with Spark Streaming',
    date: 'Jan 19, 2025',
    url: 'https://medium.com/@lilmonk/spark-stateful-stream-deduplication',
    pinned: true,
    imageUrl: sparkDeduplicationImg
  }
];

export default function Blog() {
  const [filter, setFilter] = useState<'all' | 'pinned'>('all');
  
  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.pinned);

  return (
    <section id="blog" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Blog & Articles</h2>
          <div className="w-20 h-1 mx-auto bg-indigo-500 rounded"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing insights and experiences from my journey in software development and data engineering.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-5 py-2 text-sm font-medium ${
                filter === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              } border border-gray-200 dark:border-gray-700 focus:z-10 focus:outline-none first:rounded-l-lg last:rounded-r-lg`}
              onClick={() => setFilter('all')}
            >
              All Articles
            </button>
            <button
              type="button"
              className={`px-5 py-2 text-sm font-medium ${
                filter === 'pinned'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              } border border-gray-200 dark:border-gray-700 focus:z-10 focus:outline-none first:rounded-l-lg last:rounded-r-lg`}
              onClick={() => setFilter('pinned')}
            >
              Pinned
            </button>
          </div>
        </div>
        
        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <a 
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-600 relative">
                  {post.imageUrl ? (
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 p-4">
                      <span className="text-xl font-semibold text-indigo-600 dark:text-indigo-300 text-center">
                        {post.title}
                      </span>
                    </div>
                  )}
                  {post.pinned && (
                    <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                      Pinned
                    </div>
                  )}
                </div>
              
                <div className="p-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {post.date}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                    Read More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
        
        {/* Link to full Medium profile */}
        <div className="text-center mt-12">
          <a 
            href="https://lilmonk.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View All Articles on Medium
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}