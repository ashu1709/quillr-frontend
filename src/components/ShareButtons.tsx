export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex gap-2">
      <a href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded-full text-sm">Twitter</a>
      <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded-full text-sm">LinkedIn</a>
      <button onClick={() => navigator.clipboard.writeText(url)} className="px-3 py-1 border rounded-full text-sm">Copy link</button>
    </div>
  );
}
