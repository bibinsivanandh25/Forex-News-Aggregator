import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import newsImg from '../assets/newsImg.jpg';

const NewsItem = ({ article }) => {
  const { author, title, url, publishedAt, description, urlToImage } = article;
  return (
    <Link
      to={url}
      target="_blank"
      rel="noreferrer noopener"
      className="news-item group bg-[#F9FAFA] border border-[#E7E9EB] p-6 rounded-2xl w-[380px] max-h-[504px] transition-transform duration-500 hover:shadow-lg"
    >
      <div className="rounded-lg overflow-hidden mb-4">
        <img
          src={urlToImage || newsImg}
          alt={title}
          className="w-full h-[142px] object-cover transform transition-transform duration-500  group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-between gap-2 mb-4">
        <h3 className="font-medium text-lg leading-6 tracking-[-0.36px] transition duration-500  group-hover:underline">
          {title}
        </h3>
        <p className="flex-shrink-0 text-[#6E7D89] font-normal text-xs mt-1">
          <span>{author || 'Author'}</span> |{' '}
          {new Date(publishedAt).toDateString()}
        </p>
      </div>
      <p
        className="mb-4 text-[#566875] text-sm leading-5
      "
      >
        {description?.substring(0, 120)}...
      </p>
      <Link
        to={url}
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center"
      >
        <span className="font-medium text-base transition duration-500  group-hover:underline">
          Read More{' '}
        </span>
        <MdOutlineKeyboardArrowRight className="w-6 h-6" />
      </Link>
    </Link>
  );
};

export default NewsItem;
