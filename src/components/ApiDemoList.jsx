import { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";

const API_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 8;

function ApiDemoList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Filter and paginate posts
  const filtered = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const pagePosts = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleSearch(e) {
    setSearch(e.target.value);
    setPage(1);
  }

  return (
    <Card>
      <div className="mb-4 flex flex-col md:flex-row md:items-center gap-4">
        <input
          className="border rounded px-3 py-2 flex-1"
          placeholder="Search posts…"
          value={search}
          onChange={handleSearch}
        />
        <div className="flex-0">
          <span className="text-sm text-gray-500">
            {filtered.length} results
          </span>
        </div>
      </div>
      {loading && <div>Loading…</div>}
      {error && <div className="text-red-600">Error: {error}</div>}
      <div className="grid md:grid-cols-2 gap-4">
        {pagePosts.map((post) => (
          <Card key={post.id} className="mb-0">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="text-gray-700 dark:text-gray-200">{post.body}</p>
          </Card>
        ))}
      </div>
      <div className="flex gap-2 mt-4 justify-center">
        <Button
          variant="secondary"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </Button>
        <span className="self-center">
          Page {page} of {totalPages || 1}
        </span>
        <Button
          variant="secondary"
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </Card>
  );
}

export default ApiDemoList;
