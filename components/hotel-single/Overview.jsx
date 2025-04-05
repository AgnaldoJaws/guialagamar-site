import { marked } from 'marked';
import DOMPurify from 'dompurify';

const Overview = ({ data }) => {
    const parseMarkdown = (markdown) => {
        if (!markdown) return '';
        const rawHtml = marked.parse(markdown);
        return DOMPurify.sanitize(rawHtml);
    };

    return (
        <div className="prose max-w-none text-dark-1 prose-headings:text-inherit prose-p:text-inherit prose-li:text-inherit prose-strong:text-inherit prose-em:text-inherit prose-a:text-inherit text-15 mt-20">
            {data?.post?.content && (
                <div
                    dangerouslySetInnerHTML={{ __html: parseMarkdown(data.post.content) }}
                />
            )}

            {data?.post?.references && (
                <div
                    dangerouslySetInnerHTML={{ __html: parseMarkdown(data.post.references) }}
                />
            )}
        </div>
    );


};

export default Overview;
