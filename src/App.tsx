import { useState } from "react";
import Nav from "./components/Nav";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicsList from "./components/TopicsList";
import TrendsList from "./components/TrendsList";
import type { Blog } from "./types";
import Modal from "./components/Modal";
import BlogForm from "./components/BlogForm";
import { BlogProvider } from "./shared/BlogContext";
import ArticleList from "./components/ArticleList";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setModalOpen(true);
  };
  const openModalForEditBlog = (blog: Blog) => {
    setEditingBlog(blog);
    setModalOpen(true);
  };
  return (
    <div>
      <Nav />
      <div className="flex flex-wrap lg:flex-nowrap justify-center p-2 gap-5">
        <BlogProvider>
          <section className="w-full mx-auto p-4 sm:p-6">
            <div className="">
              <button
                onClick={openModalForNewBlog}
                className="ml-[7rem] bg-black justify-center flex items center text-white px-4 py-2 rounded"
              >
                Add new Blogs
              </button>
              {/* Article List */}
              <ArticleList onEdit={openModalForEditBlog}/>

              {isModalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                  <BlogForm
                    existingBlog={editingBlog}
                    onClose={() => setModalOpen(false)}
                  />
                </Modal>
              )}
            </div>
          </section>
        </BlogProvider>
        <div className="lg:w-3/10 pt-4">
          <PeopleToFollow />
          <TrendsList />
          <TopicsList />
        </div>
      </div>
    </div>
  );
}

export default App;
